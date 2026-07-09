"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Lesson } from "@/data/lessons";
import { loadProgress, markComplete } from "@/lib/progress";
import styles from "./lesson.module.css";

export function LessonView({
  lesson,
  nextLesson,
  prevLesson,
}: {
  lesson: Lesson;
  nextLesson: Lesson | null;
  prevLesson: Lesson | null;
}) {
  const [completed, setCompleted] = useState(false);
  const [locked, setLocked] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const p = loadProgress();
    setCompleted(p.completed.includes(lesson.id));
    if (prevLesson) {
      setLocked(!p.completed.includes(prevLesson.id));
    }
    setMounted(true);
  }, [lesson.id, prevLesson]);

  function handleComplete() {
    markComplete(lesson.id);
    setCompleted(true);
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  }

  if (mounted && locked && prevLesson) {
    return (
      <main className={styles.wrap}>
        <div className={styles.header}>
          <div className="container-narrow">
            <div className="eyebrow eyebrow-yellow">Locked</div>
            <h1 className={styles.title}>
              Finish lesson {String(prevLesson.order).padStart(2, "0")} first.
            </h1>
            <p className={styles.lede}>
              These lessons build on each other. Head back and complete
              &quot;{prevLesson.title}&quot; — then this one opens up.
            </p>
            <div className={styles.headerCtas}>
              <Link href={`/lessons/${prevLesson.id}`} className="btn btn-primary">
                Go to lesson {String(prevLesson.order).padStart(2, "0")} →
              </Link>
              <Link href="/lessons" className="btn btn-light">
                Back to path
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className={styles.wrap}>
      <div className={styles.header}>
        <div className="container-narrow">
          <div className={styles.headerTop}>
            <Link href="/lessons" className={styles.crumb}>
              ← Path
            </Link>
            <div className={styles.chipRow}>
              <span className={styles.chip}>
                Lesson {String(lesson.order).padStart(2, "0")}
              </span>
              <span className={styles.chipMuted}>
                {lesson.instrument} · {lesson.duration}
              </span>
            </div>
          </div>
          <h1 className={styles.title}>{lesson.title}</h1>
          <p className={styles.subtitle}>{lesson.subtitle}</p>
        </div>
      </div>

      <div className={styles.body}>
        <div className="container-narrow">
          <div className={styles.videoWrap}>
            <iframe
              className={styles.video}
              src={`https://www.youtube-nocookie.com/embed/${lesson.youtubeId}?rel=0&modestbranding=1`}
              title={lesson.title}
              loading="lazy"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <div className={styles.videoNote}>
            Sample video — a real lesson clip goes here in the final build.
          </div>

          <div className={styles.intro}>{lesson.intro}</div>

          <ol className={styles.steps}>
            {lesson.steps.map((step, i) => (
              <li key={i} className={styles.step}>
                <div className={styles.stepNum}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className={styles.stepHeading}>{step.heading}</h3>
                  <p className={styles.stepBody}>{step.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className={styles.closer}>{lesson.closer}</div>

          <div className={styles.actions}>
            {completed ? (
              <div className={styles.doneCard}>
                <div className={styles.doneChip}>✓ Lesson complete</div>
                <p className={styles.doneCopy}>
                  {nextLesson
                    ? `Lesson ${String(nextLesson.order).padStart(2, "0")} just unlocked. Momentum matters — keep going.`
                    : "That's both demo lessons done. Jump on the waitlist so you're first in when the full course drops."}
                </p>
                <div className={styles.doneCtas}>
                  {nextLesson ? (
                    <Link href={`/lessons/${nextLesson.id}`} className="btn btn-primary">
                      Next lesson →
                    </Link>
                  ) : (
                    <Link href="/#waitlist" className="btn btn-primary">
                      Join the waitlist →
                    </Link>
                  )}
                  <Link href="/lessons" className="btn btn-secondary">
                    Back to path
                  </Link>
                </div>
              </div>
            ) : (
              <button
                type="button"
                className={`btn btn-primary ${styles.completeBtn}`}
                onClick={handleComplete}
              >
                Mark lesson complete ✓
              </button>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
