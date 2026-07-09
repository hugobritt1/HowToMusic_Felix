const STORAGE_KEY = "htm.progress.v1";

export type Progress = {
  completed: string[];
};

export function loadProgress(): Progress {
  if (typeof window === "undefined") return { completed: [] };
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return { completed: [] };
    const parsed = JSON.parse(raw) as Progress;
    return { completed: Array.isArray(parsed.completed) ? parsed.completed : [] };
  } catch {
    return { completed: [] };
  }
}

export function saveProgress(p: Progress) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
  } catch {
    // ignore
  }
}

export function markComplete(lessonId: string) {
  const p = loadProgress();
  if (!p.completed.includes(lessonId)) {
    p.completed.push(lessonId);
    saveProgress(p);
  }
  return p;
}

export function resetProgress() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(STORAGE_KEY);
}
