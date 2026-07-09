export type Lesson = {
  id: string;
  order: number;
  instrument: "Guitar" | "Piano";
  title: string;
  subtitle: string;
  duration: string;
  youtubeId: string;
  intro: string;
  steps: {
    heading: string;
    body: string;
  }[];
  closer: string;
};

export const LESSONS: Lesson[] = [
  {
    id: "guitar-01",
    order: 1,
    instrument: "Guitar",
    title: "Lesson 01 — Hold It Like You Mean It",
    subtitle: "Posture, grip, and the first two chords",
    duration: "6 min",
    youtubeId: "dQw4w9WgXcQ",
    intro:
      "First thing anyone tells you when you pick up a guitar is 'relax your hand.' Nobody tells you what that actually feels like. This lesson gets your body sorted so the next one — actually playing — doesn't fight you.",
    steps: [
      {
        heading: "1. Sit like you're not apologising",
        body: "Feet flat, back roughly straight, guitar body resting on your right thigh (if you're right-handed). Don't tuck it under your armpit like a briefcase.",
      },
      {
        heading: "2. Thumb on the back of the neck",
        body: "Not wrapped over the top. Not floating in space. The pad of your thumb sits behind the neck, roughly opposite your middle finger.",
      },
      {
        heading: "3. Press one string. Just one.",
        body: "Second fret of the G string with your middle finger. Pluck it. That's a note. Congratulations — this is more than most people who own a guitar ever do.",
      },
      {
        heading: "4. Em chord — three fingers, one strum",
        body: "Middle finger on the 2nd fret of the A string, ring finger on the 2nd fret of the D string. Strum all six strings. That's E minor. That's a real chord. You can now play in every sad indie song ever written.",
      },
    ],
    closer:
      "That chord's ugly for the first week. Then it clicks 🎸 Do it 20 times before Lesson 02.",
  },
  {
    id: "piano-01",
    order: 2,
    instrument: "Piano",
    title: "Lesson 02 — Find Middle C, Then the Rest",
    subtitle: "Orienting on the keyboard and your first chord",
    duration: "7 min",
    youtubeId: "dQw4w9WgXcQ",
    intro:
      "88 keys looks like a lot. It's actually the same 12 notes over and over. Once you find Middle C, the entire keyboard makes sense — and by the end of this lesson you'll play a full C major chord.",
    steps: [
      {
        heading: "1. Spot the black-key pattern",
        body: "Look at the black keys. They come in groups of two and three, over and over. Middle C is the white key immediately to the LEFT of any group of two black keys — near the middle of the piano.",
      },
      {
        heading: "2. Thumb on C, no other fingers moving yet",
        body: "Just rest your right thumb on Middle C. Play it. That's C. Now count up white keys: C, D, E, F, G. Five notes, five fingers. This is the shape you'll use forever.",
      },
      {
        heading: "3. C major chord — three notes at once",
        body: "Thumb on C, middle finger on E (skip D), pinky on G (skip F). Press all three together. That's a C major chord — the most-used chord in music, no exaggeration.",
      },
      {
        heading: "4. Now do it with your eyes closed",
        body: "Feel the black keys with your fingers. Find that group of two. Slide left. You've found C without looking. This is the skill that separates people who play piano from people who own one.",
      },
    ],
    closer:
      "One chord down. That's the same chord as roughly half the pop songs written this century. Try it. Try it again. Then come back for what's next 🎹",
  },
];

export function getLesson(id: string): Lesson | undefined {
  return LESSONS.find((l) => l.id === id);
}
