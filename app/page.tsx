import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import { WaitlistForm } from "@/components/WaitlistForm";

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroSlash1} />
        <div className={styles.heroSlash2} />
        <div className={styles.heroSlash3} />
        <div className="container">
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <div className={`eyebrow eyebrow-yellow`}>Pre-launch · v1</div>
              <h1 className={styles.heroTitle}>
                Learn guitar.<br />
                Learn piano.<br />
                <span className={styles.heroTitleYellow}>No fluff.</span>
              </h1>
              <p className={styles.heroLede}>
                HowToMusic teaches guitar, piano, and whatever&apos;s next — step by step, no filler,
                built for anyone who wants to actually learn, not just watch a tutorial and forget it.
              </p>
              <div className={styles.heroCtas}>
                <Link href="/lessons" className="btn btn-primary">
                  Try a free lesson →
                </Link>
                <Link href="#waitlist" className="btn btn-light">
                  Join the waitlist
                </Link>
              </div>
              <div className={styles.heroMeta}>
                <span className={styles.dot} />
                2 sample lessons live · guitar & piano
              </div>
            </div>
            <div className={styles.heroVisual}>
              <div className={styles.heroCard}>
                <div className={styles.heroCardHeader}>
                  <span className={styles.chip}>Lesson 01</span>
                  <span className={styles.chipMuted}>Guitar · 6 min</span>
                </div>
                <div className={styles.heroCardTitle}>Hold It Like You Mean It</div>
                <div className={styles.heroCardBody}>
                  Posture. Grip. Your first two chords. The stuff nobody actually
                  slows down to teach.
                </div>
                <div className={styles.heroCardFoot}>
                  <div className={styles.progressBar}>
                    <div className={styles.progressFill} style={{ width: "0%" }} />
                  </div>
                  <Link href="/lessons/guitar-01" className={styles.heroCardBtn}>
                    Start →
                  </Link>
                </div>
              </div>
              <div className={styles.heroCardStack} />
              <div className={styles.heroLogoWrap} aria-hidden>
                <Image
                  src="/brand/logo.svg"
                  alt=""
                  width={220}
                  height={248}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE STRIP */}
      <section className={styles.stripSection}>
        <div className="container">
          <div className={styles.strip}>
            <div className={styles.stripItem}>
              <div className={styles.stripNum}>01</div>
              <div className={styles.stripLabel}>Real lessons</div>
              <div className={styles.stripCopy}>Not motivational speeches. Not 40-minute intros. Real playing, minute one.</div>
            </div>
            <div className={styles.stripItem}>
              <div className={styles.stripNum}>02</div>
              <div className={styles.stripLabel}>Step by step</div>
              <div className={styles.stripCopy}>A path, not a playlist. Each lesson unlocks the next, at your pace.</div>
            </div>
            <div className={styles.stripItem}>
              <div className={styles.stripNum}>03</div>
              <div className={styles.stripLabel}>For anyone</div>
              <div className={styles.stripCopy}>Fourteen or forty-five, first day or fifth attempt — this isn&apos;t for kids, it&apos;s for anyone starting.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className={styles.aboutSection} id="about">
        <div className="container">
          <div className={styles.aboutGrid}>
            <div>
              <div className="eyebrow">What we&apos;re building</div>
              <h2>Closer to a record label<br />than a classroom.</h2>
            </div>
            <div>
              <p className={styles.aboutBody}>
                HowToMusic is a step-by-step way to actually learn an instrument.
                We&apos;re starting with guitar and piano — the two most people pick up
                first — and building outward. Every lesson is short, honest, and
                pointed at a specific thing you&apos;ll be able to do afterwards.
              </p>
              <p className={styles.aboutBody}>
                No mascots. No confetti. No &quot;great job, superstar.&quot; Just the
                lesson, the practice, and the payoff.
              </p>
              <div className={styles.toneList}>
                <span className={styles.toneChip}>Direct</span>
                <span className={styles.toneChip}>Confident</span>
                <span className={styles.toneChip}>No fluff</span>
                <span className={styles.toneChip}>Actually useful</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className={styles.howSection}>
        <div className="container">
          <div className="eyebrow">How it works</div>
          <h2 className={styles.howTitle}>
            Learn it. <span className={styles.howSlash}>/</span> Practice.{" "}
            <span className={styles.howSlash}>/</span> Play it.
          </h2>
          <div className={styles.howGrid}>
            <div className={styles.howCard}>
              <div className={styles.howNum}>01</div>
              <h3>Learn it</h3>
              <p>A short lesson — video plus text steps. Nothing you don&apos;t need to know yet, nothing dumbed down.</p>
            </div>
            <div className={styles.howCard}>
              <div className={styles.howNum}>02</div>
              <h3>Practice</h3>
              <p>Try what you just learned right there. Doesn&apos;t have to sound great — it has to feel doable.</p>
            </div>
            <div className={styles.howCard}>
              <div className={styles.howNum}>03</div>
              <h3>Play it</h3>
              <p>Mark the lesson complete. The next one opens up. That&apos;s the whole loop.</p>
            </div>
          </div>
          <div className={styles.howCta}>
            <Link href="/lessons" className="btn btn-primary">
              Start the demo path →
            </Link>
          </div>
        </div>
      </section>

      {/* WAITLIST */}
      <section className={styles.waitlistSection} id="waitlist">
        <div className={styles.waitlistSlash} />
        <div className="container">
          <div className={styles.waitlistGrid}>
            <div>
              <div className="eyebrow eyebrow-yellow">Waitlist</div>
              <h2 className={styles.waitlistTitle}>
                Get in early.<br />
                <span className={styles.waitlistTitleYellow}>Be first through the door.</span>
              </h2>
              <p className={styles.waitlistLede}>
                Full course drops soon. Join the waitlist and you&apos;ll be the first
                to know — plus early-access pricing for anyone who signs up before launch.
              </p>
              <ul className={styles.waitlistBullets}>
                <li>First access when guitar &amp; piano courses go live</li>
                <li>Founding-member pricing (only for waitlist)</li>
                <li>Occasional notes from us — never spam</li>
              </ul>
            </div>
            <div className={styles.waitlistCard}>
              <WaitlistForm variant="dark" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
