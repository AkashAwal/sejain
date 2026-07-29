export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  body: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "finding-your-first-style",
    title: "Finding Your First Style",
    excerpt:
      "Every artist starts by imitating someone else. Here's how our beginner students learn to let that go.",
    date: "March 12, 2026",
    category: "Art Academy",
    body: [
      "Most beginners arrive at the studio convinced they need to find their 'style' before they can call themselves an artist. In practice, style isn't something you find - it's a residue that builds up after hundreds of small, honest decisions made while copying, failing, and copying again.",
      "In our foundation course, we deliberately delay any conversation about personal style until a student has spent real time with the fundamentals: value, proportion, and mark-making. Style shows up on its own, usually around the point a student stops asking permission to make a mistake.",
    ],
  },
  {
    slug: "why-we-still-teach-charcoal-first",
    title: "Why We Still Teach Charcoal First",
    excerpt:
      "In a studio full of watercolor and digital tools, charcoal remains our non-negotiable starting point.",
    date: "February 2, 2026",
    category: "Technique",
    body: [
      "Charcoal is unforgiving, messy, and slow to control - which is exactly why it's the first material every new student picks up at Sejain. It punishes hesitation and rewards observation, teaching your eye to see value and form before your hand has learned any shortcuts.",
      "Students who start here tend to carry that same patience into every other medium they touch later, whether it's oil, watercolor, or digital painting.",
    ],
  },
  {
    slug: "behind-a-commissioned-portrait",
    title: "Behind a Commissioned Portrait",
    excerpt:
      "A look at the full process behind one recent commission, from first sketch to final varnish.",
    date: "January 18, 2026",
    category: "Commissions",
    body: [
      "Every commissioned portrait begins long before the first brushstroke, with a conversation about the person being painted, the light they're remembered in, and the mood the piece is meant to hold in a room.",
      "This particular piece went through three full sketch revisions before a single drop of paint touched canvas, and took just under six weeks from first meeting to final varnish.",
    ],
  },
];
