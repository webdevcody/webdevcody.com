import Link from "next/link";
import Image from "next/image";
import { SocialStrip } from "@/components/social-strip";
import { products } from "@/data/products";
import { courses } from "@/data/courses";
import { profile } from "@/data/profile";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-border bg-background">
      <div className="container mx-auto px-6 pb-10 pt-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link href="/" className="flex items-center gap-3">
              <div className="overflow-hidden rounded-lg border border-border">
                <Image
                  src="/wdc.jpeg"
                  width="36"
                  height="36"
                  alt="Web Dev Cody logo"
                />
              </div>
              <span className="font-semibold text-foreground">
                {profile.siteTitle}
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {profile.tagline}
            </p>
            <SocialStrip className="mt-6" size="sm" />
          </div>

          <div className="grid grid-cols-2 gap-8 md:col-span-7 md:grid-cols-3">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground">
                Products
              </h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link
                    href="/products"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    All products
                  </Link>
                </li>
                {products.map((product) => (
                  <li key={product.slug}>
                    <Link
                      href={`/products/${product.slug}`}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {product.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground">
                Courses
              </h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link
                    href="/courses"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    All courses
                  </Link>
                </li>
                {courses.map((course) => (
                  <li key={course.slug}>
                    <Link
                      href={`/courses/${course.slug}`}
                      className="line-clamp-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {course.shortTitle}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground">
                Legal
              </h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link
                    href="/terms-of-service"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy-policy"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/fulfillment-policy"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Fulfillment Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-border pt-8 md:flex-row md:items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Seibert Software Solutions, LLC. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/contact"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Contact
            </Link>
            <a
              href={`mailto:${profile.email}`}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {profile.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
