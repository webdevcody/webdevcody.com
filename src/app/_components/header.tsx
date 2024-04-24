import { XIcon, YoutubeIcon } from "@/components/icons";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-900">
      <div className="container mx-auto flex justify-between py-2">
        <Link
          href="/"
          className="flex items-center gap-4 hover:underline hover:text-blue-200"
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
          <Link href="/courses" className="hover:underline">
            Courses
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </div>

        <div className="flex gap-8 items-center">
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
            <XIcon className="w-6 h-6 stroke-white hover:stroke-blue-400" />
          </Link>
        </div>
      </div>
    </header>
  );
}
