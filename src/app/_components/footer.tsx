import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-zinc-900 transition-colors duration-200">
      <div className="container p-6 mx-auto">
        <div className="lg:flex">
          <div className="w-full -mx-6 lg:w-2/5">
            <div className="px-6">
              <p className="max-w-sm mt-2 text-gray-500 dark:text-gray-400">
                Have a good day, and happy coding!
              </p>
            </div>
          </div>

          <div className="mt-6 lg:mt-0 lg:flex-1">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div>
                <h3 className="text-gray-700 dark:text-gray-300 uppercase font-medium">
                  About
                </h3>

                <Link
                  href="/terms-of-service"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:text-red-400 dark:hover:text-red-400 transition-colors duration-200"
                >
                  Terms of Service
                </Link>

                <Link
                  href="/privacy-policy"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:text-red-400 dark:hover:text-red-400 transition-colors duration-200"
                >
                  Privacy Policy
                </Link>

                <Link
                  href="/fulfillment-policy"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:text-red-400 dark:hover:text-red-400 transition-colors duration-200"
                >
                  Fulfillment Policy
                </Link>

                <Link
                  href="/contact"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:text-red-400 dark:hover:text-red-400 transition-colors duration-200"
                >
                  Contact
                </Link>
              </div>

              <div>
                <h3 className="text-gray-700 dark:text-gray-300 uppercase font-medium">
                  Products
                </h3>
                <a
                  href="https://projectplannerai.com/"
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:text-red-400 dark:hover:text-red-400 transition-colors duration-200"
                >
                  Project Planner AI
                </a>
                <a
                  href="https://icongeneratorai.com/"
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:text-red-400 dark:hover:text-red-400 transition-colors duration-200"
                >
                  Icon Generator AI
                </a>
              </div>

              <div>
                <h3 className="text-gray-700 dark:text-gray-300 uppercase font-medium">
                  Courses
                </h3>
                <Link
                  href="/courses"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:text-red-400 dark:hover:text-red-400 transition-colors duration-200"
                >
                  Courses
                </Link>
                <a
                  href="https://webdevcody.gumroad.com/l/beginner-react-challenges-collection"
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:text-red-400 dark:hover:text-red-400 transition-colors duration-200"
                >
                  React Challenges
                </a>
                <a
                  href="https://webdevcody.gumroad.com/l/jipjfm"
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:text-red-400 dark:hover:text-red-400 transition-colors duration-200"
                >
                  T3 Stack Tutorial
                </a>
              </div>

              <div>
                <h3 className="text-gray-700 dark:text-gray-300 uppercase font-medium">
                  Contact
                </h3>
                <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400">
                  webdevcody@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>

        <hr className="h-px my-6 bg-gray-200 dark:bg-gray-700 border-none" />

        <div>
          <p className="text-center text-gray-500 dark:text-gray-400">
            © Seibert Software Solutions, LLC 2025 - All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
