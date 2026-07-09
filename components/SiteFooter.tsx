import Link from "next/link";
import { BrandMark } from "./BrandMark";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div>
          <div className="foot-brand">
            <BrandMark size={40} />
            <span>
              HowTo<span className="m">Music</span>
            </span>
          </div>
          <div className="foot-tagline">Learn it. Practice. Play it.</div>
        </div>
        <div className="footer-col">
          <h4>Explore</h4>
          <ul>
            <li>
              <Link href="/lessons">Sample lessons</Link>
            </li>
            <li>
              <Link href="/#about">About</Link>
            </li>
            <li>
              <Link href="/#waitlist">Join waitlist</Link>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Instruments</h4>
          <ul>
            <li>Guitar</li>
            <li>Piano</li>
            <li>More coming</li>
          </ul>
        </div>
        <div className="bottom">HowToMusic · Learn it. Practice. Play it. · Pre-launch v1</div>
      </div>
    </footer>
  );
}
