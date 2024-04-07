"use client";

import { sendEvent } from "@/lib/analytics";
import { useEffect } from "react";

export function SendEventOnLoad({ eventKey }: { eventKey: string }) {
  useEffect(() => {
    sendEvent(eventKey);
  }, [eventKey]);

  return null;
}
