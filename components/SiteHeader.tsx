import Link from "next/link";
import { BrandMark } from "./BrandMark";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container">
        <Link href="/" className="brand-lockup" aria-label="HowToMusic home">
          <BrandMark size={40} />
          <span>
            HowTo<span className="m">Music</span>
          </span>
        </Link>
        <nav className="nav" aria-label="Primary">
          <Link href="/lessons" className="nav-link">
            Try a lesson
          </Link>
          <Link href="/#about" className="nav-link">
            About
          </Link>
          <Link href="/#waitlist" className="btn btn-secondary">
            Join waitlist
          </Link>
        </nav>
      </div>
    </header>
  );
}
