import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export function SocialLinks() {
  return (
    <div className="flex gap-8">
      <Button variant="ghost" size="icon" className="rounded-full" asChild>
        <Link
          href="https://github.com/benkleyner"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub className="size-12" />
        </Link>
      </Button>
      <Button variant="ghost" size="icon" className="rounded-full" asChild>
        <Link
          href="https://linkedin.com/in/bykleyner"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="size-12" />
        </Link>
      </Button>
    </div>
  );
}
