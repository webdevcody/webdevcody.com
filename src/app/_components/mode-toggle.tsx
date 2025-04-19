"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
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
          onClick={() => setTheme("light")}
          className="hover:bg-white/10"
        >
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className="hover:bg-white/10"
        >
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className="hover:bg-white/10"
        >
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
