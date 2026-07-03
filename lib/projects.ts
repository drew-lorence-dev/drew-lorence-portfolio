export interface Screenshot {
  src: string;
  label: string;
}

export interface Feature {
  title: string;
  text: string;
}

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  story: string[];
  features: Feature[];
  tags: string[];
  stack: string[];
  live?: string;
  accent: string;
  hero: Screenshot;
  gallery: Screenshot[];
}

export const projects: Project[] = [
  {
    slug: "bagel-championship-wrestling",
    name: "Bagel Championship Wrestling",
    tagline: "Run a wrestling promotion from a folding-chair venue to a TV deal.",
    description:
      "A wrestling promotion tycoon game that runs in your browser — inside a fully working Windows 95 desktop. Book shows, build rivalries, and grow the gate from backyard indie to regional TV deal.",
    story: [
      "Bagel Championship Wrestling started with a simple question: what would a wrestling booking sim feel like if it leaned all the way into the era it's nostalgic for? The answer is WrestleNet95 — a fully working Windows 95 desktop that lives in your browser, complete with draggable windows, a taskbar, and CRT glow. You're not just playing a management game; you're a 90s promoter hunched over a beige laptop, building an empire one card at a time.",
      "The core loop is the Booker: you start with a folding-chair venue and a handful of hungry talent, then book matches, run shows, and watch the gate. Win the crowd and the money follows — grow from backyard indie through the promotion tiers toward a regional TV deal. A pure-function match engine drives outcomes and rivalries under the hood, so every show has consequences.",
      "After every show, an AI announcer powered by Claude writes a narrative recap of what went down — your feuds, your finishes, your flops — turning raw sim results into wrestling storytelling. Saves live in the cloud, the roster has trading-card and star-map views, and the whole thing is invite-only while it grows.",
    ],
    features: [
      {
        title: "WrestleNet95 desktop",
        text: "The game runs inside a working Windows 95 shell — draggable windows, taskbar, BBS board, and CRT effects, all built from scratch in React.",
      },
      {
        title: "Booking sim engine",
        text: "A pure-function game engine simulates matches, rivalries, attendance, and money, driving your climb through promotion tiers.",
      },
      {
        title: "AI show recaps",
        text: "Claude writes a narrative recap of every show you run, turning sim output into wrestling storytelling.",
      },
      {
        title: "Roster visualizations",
        text: "Manage talent through a trading-card binder and a constellation star-map, with stables, divisions, and entrance music.",
      },
      {
        title: "Cloud saves",
        text: "Game state auto-saves to Supabase with debounced upserts — pick up your promotion from any machine.",
      },
      {
        title: "Invite-only access",
        text: "Google and magic-link sign-in with a waitlist and approval flow, plus an admin panel to manage it.",
      },
    ],
    tags: ["Game", "Simulation", "Claude API", "Retro UI"],
    stack: [
      "TanStack Start",
      "React 19",
      "TypeScript",
      "Supabase",
      "Tailwind CSS",
      "Framer Motion",
      "Anthropic Claude",
      "Playwright",
    ],
    live: "https://bagel-championship-wrestling.vercel.app",
    accent: "accent-3",
    hero: { src: "/bcw-landing.jpg", label: "Landing" },
    gallery: [
      { src: "/bcw-landing.jpg", label: "Landing" },
    ],
  },
  {
    slug: "lorence-family-hub",
    name: "Lorence Family Hub",
    tagline: "The private app that runs our household.",
    description:
      "A shared calendar with two-way Google sync, chores that pay out XP for the kids, and grocery lists that scan barcodes and use AI to sort items by aisle — the one screen everyone actually checks.",
    story: [
      "Every family runs on a pile of systems that don't talk to each other: a calendar here, a chore chart there, a grocery list on the fridge. The Lorence Family Hub replaces the pile with one private, invite-only app that every family phone has installed.",
      "The calendar syncs both ways with Google Calendar, so events land in the hub no matter where they're created. Chores are quests: kids complete them and earn XP, which turns nagging into a game the kids actually want to win. And the grocery list is the sleeper hit — scan a barcode or type an item, and Claude sorts everything into store aisles automatically. It's built offline-first with a sync queue, so the list keeps working in the middle of a store with no signal.",
      "A realtime bulletin board handles family chatter, a kanban board handles bigger projects, and the whole thing is gated behind Google sign-in with an allowlist. It's the app I most enjoy maintaining, because the users live in my house and the feature requests come at dinner.",
    ],
    features: [
      {
        title: "Two-way Google Calendar sync",
        text: "Events flow both directions between the hub and Google Calendar, merged with local events and tasks into one family view.",
      },
      {
        title: "Quests with XP",
        text: "Chores pay out XP per kid, with gamified tracking that makes the chore chart something kids want to open.",
      },
      {
        title: "Smart grocery lists",
        text: "Barcode scanning plus Claude-powered categorization sorts every item into store aisles automatically.",
      },
      {
        title: "Offline-first sync",
        text: "A queue with retry and local-id rewriting keeps the grocery list fully usable with no signal, syncing when you're back online.",
      },
      {
        title: "Realtime bulletin board",
        text: "A family message board on Supabase realtime — posts show up on everyone's phone instantly.",
      },
      {
        title: "Private by design",
        text: "Google sign-in gated by an allowlist, admin-managed access, and row-level security on every table.",
      },
    ],
    tags: ["Family Ops", "Google Calendar", "AI", "Offline-First"],
    stack: [
      "React 18",
      "TypeScript",
      "Vite",
      "Supabase",
      "Tailwind CSS",
      "TanStack Query",
      "Anthropic Claude",
      "dnd-kit",
    ],
    accent: "accent-4",
    hero: { src: "/hub-dashboard.jpg", label: "Dashboard" },
    gallery: [
      { src: "/hub-dashboard.jpg", label: "Dashboard" },
      { src: "/hub-calendar.jpg", label: "Calendar" },
      { src: "/hub-grocery.jpg", label: "Groceries" },
    ],
  },
  {
    slug: "ninja-x-style",
    name: "Ninja x Style",
    tagline: "Level up your life with an AI sensei in your corner.",
    description:
      "A gamified wellness app for training, nutrition, fasting, and meditation — coached by Kai, an AI sensei built on Claude who remembers your goals, builds your meal plans, and calls you out when you slack.",
    story: [
      "Most fitness apps feel like spreadsheets. Ninja x Style feels like leveling up a character. Training, nutrition, intermittent fasting, and meditation all live in one daily grind tracker wrapped in an anime-ninja aesthetic — complete XP, levels, streaks, and achievements.",
      "The centerpiece is Kai, an AI sensei built on Claude. Kai has a real personality, a long-term memory of your goals, and an adjustable coaching style — five intensity levels and three tones, from gentle encouragement to blunt accountability. He chats with you, builds meal and nutrition plans, reacts to your actual activity data, and can log food or workouts for you straight from the conversation. He's also fasting-aware: ask him to log a snack mid-fast and he'll make you confirm you really want to break it.",
      "Underneath the personality is a full tracking suite: USDA food database search, photo nutrition-label extraction, Fitbit sync for activity and heart-rate data, a weekly training planner, and an exercise library. It installs as a PWA and works offline, so the grind doesn't stop when the connection does.",
    ],
    features: [
      {
        title: "Kai, the AI sensei",
        text: "A Claude-powered coach with a persistent memory, five intensity levels, and three tones — from gentle turtle master to iron sage.",
      },
      {
        title: "Conversational logging",
        text: "Kai can log meals and workouts for you via tool calls, straight from the chat.",
      },
      {
        title: "Full nutrition suite",
        text: "USDA food search, photo nutrition-label extraction, AI meal building, macros, and meal templates.",
      },
      {
        title: "Fasting-aware coaching",
        text: "Scheduled eating windows with streaks — and a sensei who refuses to log food mid-fast until you confirm breaking it.",
      },
      {
        title: "Fitbit integration",
        text: "OAuth-connected daily activity summaries plus daily and weekly heart-rate data feeding the dashboard.",
      },
      {
        title: "Gamified everything",
        text: "XP, levels and titles, streak multipliers, and achievements keep the daily grind feeling like a game.",
      },
    ],
    tags: ["AI Coach", "Health & Fitness", "Claude API", "Fitbit API", "PWA"],
    stack: [
      "React 18",
      "TypeScript",
      "Vite",
      "Supabase",
      "Tailwind CSS",
      "TanStack Query",
      "Anthropic Claude",
      "Fitbit API",
      "Workbox PWA",
    ],
    accent: "accent",
    hero: { src: "/ninja2-home.jpg", label: "Home" },
    gallery: [
      { src: "/ninja2-home.jpg", label: "Home" },
      { src: "/ninja2-sensei.jpg", label: "Kai the Sensei" },
      { src: "/ninja2-nutrition.jpg", label: "Nutrition" },
    ],
  },
];

export const accentColors: Record<
  string,
  { border: string; text: string; bg: string }
> = {
  accent: {
    border: "hover:border-accent/40",
    text: "text-accent",
    bg: "bg-accent/10",
  },
  "accent-2": {
    border: "hover:border-accent-2/40",
    text: "text-accent-2",
    bg: "bg-accent-2/10",
  },
  "accent-3": {
    border: "hover:border-accent-3/40",
    text: "text-accent-3",
    bg: "bg-accent-3/10",
  },
  "accent-4": {
    border: "hover:border-accent-4/40",
    text: "text-accent-4",
    bg: "bg-accent-4/10",
  },
};

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
