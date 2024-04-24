import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="container p-6 mx-auto">
        <div className="lg:flex">
          <div className="w-full -mx-6 lg:w-2/5">
            <div className="px-6">
              <p className="max-w-sm mt-2 text-gray-500 ">
                Have a good day, and happy coding!
              </p>
            </div>
          </div>

          <div className="mt-6 lg:mt-0 lg:flex-1">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div>
                <h3 className="text-gray-700 uppercase">About</h3>

                <Link
                  href="/terms-of-service"
                  className="block mt-2 text-sm text-gray-600 hover:underline"
                >
                  Terms of Service
                </Link>

                <Link
                  href="/privacy-policy"
                  className="block mt-2 text-sm text-gray-600 hover:underline"
                >
                  Privacy Policy
                </Link>

                <Link
                  href="/fulfillment-policy"
                  className="block mt-2 text-sm text-gray-600 hover:underline"
                >
                  Fulfillment Policy
                </Link>

                <Link
                  href="/contact"
                  className="block mt-2 text-sm text-gray-600 hover:underline"
                >
                  Contact
                </Link>
              </div>

              <div>
                <h3 className="text-gray-700 uppercase">Products</h3>
                <a
                  href="https://icongeneratorai.com/"
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="block mt-2 text-sm text-gray-600 hover:underline"
                >
                  Icon Generator AI
                </a>
              </div>

              <div>
                <h3 className="text-gray-700 uppercase">Courses</h3>
                <a
                  href="https://webdevcody.gumroad.com/l/jipjfm"
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="block mt-2 text-sm text-gray-600 hover:underline"
                >
                  T3 Stack Tutorial
                </a>
              </div>

              <div>
                <h3 className="text-gray-700 uppercase ">Contact</h3>
                <span className="block mt-2 text-sm text-gray-600 hover:underline">
                  webdevcody@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>

        <hr className="h-px my-6 bg-gray-200 border-none" />

        <div>
          <p className="text-center text-gray-500">
            © Seibert Software Solutions, LLC 2024 - All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
