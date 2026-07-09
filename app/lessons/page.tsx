"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { LESSONS } from "@/data/lessons";
import { loadProgress, resetProgress } from "@/lib/progress";
import styles from "./lessons.module.css";

export default function LessonsPage() {
  const [completed, setCompleted] = useState<string[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const p = loadProgress();
    setCompleted(p.completed);
    setMounted(true);
  }, []);

  const progressPct = Math.round((completed.length / LESSONS.length) * 100);

  return (
    <main className={styles.wrap}>
      <div className={styles.header}>
        <div className="container">
          <div className={styles.slash} />
          <div className="eyebrow eyebrow-yellow">Demo path · Level 1</div>
          <h1 className={styles.title}>
            Two lessons.<br />
            <span className={styles.titleYellow}>Do them in order.</span>
          </h1>
          <p className={styles.lede}>
            A taste of how HowToMusic actually feels. Finish lesson one to unlock
            lesson two. Your progress lives in this browser — no account needed for the demo.
          </p>
          <div className={styles.progressWrap}>
            <div className={styles.progressBar}>
              <div className={styles.progressFill} style={{ width: `${progressPct}%` }} />
            </div>
            <div className={styles.progressLabel}>
              {completed.length} / {LESSONS.length} complete
            </div>
          </div>
        </div>
      </div>

      <div className={styles.pathSection}>
        <div className="container-narrow">
          <div className={styles.path}>
            {LESSONS.map((lesson, i) => {
              const isCompleted = completed.includes(lesson.id);
              const prev = i > 0 ? LESSONS[i - 1] : null;
              const isLocked = mounted && prev ? !completed.includes(prev.id) : false;
              const isCurrent = !isCompleted && !isLocked;
              const align = i % 2 === 0 ? styles.left : styles.right;

              return (
                <div key={lesson.id} className={`${styles.node} ${align}`}>
                  {i < LESSONS.length && i > 0 && <div className={styles.connector} />}
                  <div
                    className={`${styles.card} ${
                      isCompleted
                        ? styles.cardDone
                        : isLocked
                        ? styles.cardLocked
                        : styles.cardOpen
                    }`}
                  >
                    <div className={styles.cardHeader}>
                      <span className={styles.chip}>
                        Lesson {String(lesson.order).padStart(2, "0")}
                      </span>
                      <span className={styles.chipMuted}>
                        {lesson.instrument} · {lesson.duration}
                      </span>
                    </div>
                    <h2 className={styles.cardTitle}>{lesson.title}</h2>
                    <p className={styles.cardSubtitle}>{lesson.subtitle}</p>
                    <div className={styles.cardFoot}>
                      {isCompleted ? (
                        <>
                          <span className={styles.statusDone}>✓ Complete</span>
                          <Link href={`/lessons/${lesson.id}`} className={styles.replayBtn}>
                            Replay →
                          </Link>
                        </>
                      ) : isLocked ? (
                        <span className={styles.statusLocked}>🔒 Locked · finish previous lesson</span>
                      ) : (
                        <Link href={`/lessons/${lesson.id}`} className="btn btn-primary">
                          {isCurrent && completed.length === 0 ? "Start here" : "Continue"} →
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}

            <div className={`${styles.node} ${styles.right}`}>
              <div className={styles.connector} />
              <div className={`${styles.card} ${styles.cardTeaser}`}>
                <div className={styles.cardHeader}>
                  <span className={styles.chipTeaser}>Coming soon</span>
                </div>
                <h2 className={styles.cardTitle}>Full course drops when we launch.</h2>
                <p className={styles.cardSubtitle}>
                  Guitar, piano, and the levels beyond these two demos. Join the waitlist so
                  you don&apos;t miss the door opening.
                </p>
                <div className={styles.cardFoot}>
                  <Link href="/#waitlist" className="btn btn-secondary">
                    Join waitlist
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {mounted && completed.length > 0 && (
            <div className={styles.reset}>
              <button
                type="button"
                className={styles.resetBtn}
                onClick={() => {
                  if (
                    typeof window !== "undefined" &&
                    window.confirm("Reset your demo progress?")
                  ) {
                    resetProgress();
                    setCompleted([]);
                  }
                }}
              >
                Reset demo progress
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
