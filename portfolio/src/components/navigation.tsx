"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Experience", href: "/experience" },
  { name: "Coursework", href: "/coursework" },
  { name: "Blog", href: "/blog" },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="w-full flex items-center justify-between py-4 px-6 border-b border-border bg-background/80 backdrop-blur sticky top-0 z-50">
      {/* Left: Favicon and Name */}
      <div className="flex items-center gap-3">
        <Image
          src="/favicon.ico"
          alt="favicon"
          width={32}
          height={32}
          className="rounded invert"
        />
        <span className="font-bold text-lg tracking-tight">
          Benjamin Kleyner
        </span>
      </div>
      {/* Right: Navigation Tabs */}
      <div className="flex items-center gap-6">
        {NAV_LINKS.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-1 rounded transition-colors font-medium text-base ${
                isActive
                  ? "bg-primary text-primary-foreground shadow"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
              aria-current={isActive ? "page" : undefined}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
