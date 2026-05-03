import { createContext, useContext, useEffect, useRef, type ReactNode } from "react";

declare global {
  interface Window {
    grecaptcha?: {
      ready: (cb: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

const ReCaptchaContext = createContext<{ siteKey: string } | null>(null);

export function ReCaptchaProvider({
  reCaptchaKey,
  children,
}: {
  reCaptchaKey: string;
  children: ReactNode;
}) {
  const loaded = useRef(false);
  useEffect(() => {
    if (!reCaptchaKey || loaded.current) return;
    if (document.querySelector(`script[data-recaptcha]`)) {
      loaded.current = true;
      return;
    }
    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${reCaptchaKey}`;
    script.async = true;
    script.defer = true;
    script.dataset.recaptcha = "true";
    document.body.appendChild(script);
    loaded.current = true;
  }, [reCaptchaKey]);

  return (
    <ReCaptchaContext.Provider value={{ siteKey: reCaptchaKey }}>
      {children}
    </ReCaptchaContext.Provider>
  );
}

export function useReCaptcha() {
  const ctx = useContext(ReCaptchaContext);
  const executeRecaptcha = async (action: string): Promise<string> => {
    if (!ctx) throw new Error("ReCaptchaProvider missing");
    const { siteKey } = ctx;
    return new Promise((resolve, reject) => {
      const tryExec = (attempt = 0) => {
        if (typeof window === "undefined") return reject("no window");
        const grecaptcha = window.grecaptcha;
        if (!grecaptcha) {
          if (attempt > 50) return reject(new Error("recaptcha not loaded"));
          return setTimeout(() => tryExec(attempt + 1), 100);
        }
        grecaptcha.ready(() => {
          grecaptcha.execute(siteKey, { action }).then(resolve, reject);
        });
      };
      tryExec();
    });
  };
  return { executeRecaptcha };
}
