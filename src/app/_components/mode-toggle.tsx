"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { flushSync } from "react-dom";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type ViewTransitionDocument = Document & {
  startViewTransition?: (callback: () => void) => {
    ready: Promise<void>;
    finished: Promise<void>;
  };
};

export function ModeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  const changeTheme = React.useCallback(
    (nextTheme: "light" | "dark" | "system") => {
      const doc = document as ViewTransitionDocument;

      const resolvedNext =
        nextTheme === "system"
          ? window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light"
          : nextTheme;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (
        !doc.startViewTransition ||
        prefersReducedMotion ||
        resolvedNext === resolvedTheme
      ) {
        setTheme(nextTheme);
        return;
      }

      const trigger = buttonRef.current;
      const rect = trigger?.getBoundingClientRect();
      const x = rect ? rect.left + rect.width / 2 : window.innerWidth / 2;
      const y = rect ? rect.top + rect.height / 2 : window.innerHeight / 2;
      const endRadius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      );

      const root = document.documentElement;
      root.style.setProperty("--theme-x", `${x}px`);
      root.style.setProperty("--theme-y", `${y}px`);
      root.style.setProperty("--theme-r", `${endRadius}px`);
      root.dataset.themeAnimating = "true";

      const transition = doc.startViewTransition(() => {
        flushSync(() => {
          setTheme(nextTheme);
        });
      });

      transition.finished.finally(() => {
        delete root.dataset.themeAnimating;
      });
    },
    [resolvedTheme, setTheme]
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          ref={buttonRef}
          variant="ghost"
          size="icon"
          className="relative h-8 w-8 hover:bg-white/5"
        >
          <Sun
            className={`h-[1.1rem] w-[1.1rem] rotate-0 scale-100 text-muted-foreground transition-all dark:-rotate-90 dark:scale-0`}
          />
          <Moon
            className={`absolute h-[1.1rem] w-[1.1rem] rotate-90 scale-0 text-muted-foreground transition-all dark:rotate-0 dark:scale-100`}
          />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-white/10 backdrop-blur-xl">
        <DropdownMenuItem
          onClick={() => changeTheme("light")}
          className="hover:bg-white/10"
        >
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => changeTheme("dark")}
          className="hover:bg-white/10"
        >
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => changeTheme("system")}
          className="hover:bg-white/10"
        >
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
