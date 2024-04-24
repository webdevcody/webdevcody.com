import { GithubIcon, XIcon, YoutubeIcon } from "@/components/icons";
import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { MessageCircleHeart } from "lucide-react";
import FeedbackButton from "./feedback-button";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="bg-yellow-100 text-black drop-shadow-md">
      <div className="container mx-auto flex justify-between py-2">
        <Link
          href="/"
          className="flex items-center gap-4 hover:underline hover:text-red-400"
        >
          <Image
            src="/wdc.jpeg"
            width="40"
            height="40"
            alt="web dev cody logo"
            className="rounded"
          />
          WebDevCody.com
        </Link>

        <div className="flex gap-8 items-center">
          <Link href="/courses" className="hover:underline text-sm">
            COURSES
          </Link>
          <Link href="/contact" className="hover:underline text-sm">
            CONTACT
          </Link>
        </div>

        <div className="flex gap-8 items-center">
          <FeedbackButton
            triggerContent={
              <button title="Leave Suggestion">
                <MessageCircleHeart
                  size={20}
                  className={
                    "stroke-neutral-500 hover:stroke-neutral-700 duration-200"
                  }
                />
              </button>
            }
          />

          <Link
            href="https://youtube.com/@webdevcody"
            target="_blank"
            rel="noopener noreferrer"
          >
            <YoutubeIcon className="w-6 h-6 stroke-white hover:stroke-blue-400" />
          </Link>

          <Link
            className=""
            href="https://x.com/@webdevcody"
            target="_blank"
            rel="noopener noreferrer"
          >
            <XIcon className="w-4 h-4 stroke-white hover:stroke-blue-400" />
          </Link>

          <Link
            className=""
            href="https://github.com/webdevcody"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon className="w-6 h-6 stroke-black hover:stroke-blue-400" />
          </Link>

          {/* <ModeToggle /> */}
        </div>
      </div>
    </header>
  );
}
