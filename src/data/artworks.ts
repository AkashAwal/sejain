export type Artwork = {
  slug: string;
  name: string;
  price: string;
  gradient: string;
  tall: boolean;
  description: string;
};

export const artworks: Artwork[] = [
  {
    slug: "amber-horizon",
    name: "Amber Horizon",
    price: "₹4,500",
    gradient: "from-orange-600 via-rose-500 to-purple-800",
    tall: true,
    description:
      "A warm, layered study of a fading sky, built up in translucent glazes to capture the last light of day.",
  },
  {
    slug: "emerald-hollow",
    name: "Emerald Hollow",
    price: "₹6,200",
    gradient: "from-emerald-800 via-emerald-500 to-lime-200",
    tall: false,
    description:
      "Dense, textured foliage rendered in rich greens, exploring stillness and depth within a forest interior.",
  },
  {
    slug: "midnight-tide",
    name: "Midnight Tide",
    price: "₹5,800",
    gradient: "from-slate-900 via-blue-900 to-indigo-700",
    tall: false,
    description:
      "A moody nocturne of moving water, built from deep blues and a single sliver of reflected light.",
  },
  {
    slug: "rose-quartz",
    name: "Rose Quartz",
    price: "₹3,900",
    gradient: "from-rose-200 via-pink-400 to-fuchsia-600",
    tall: true,
    description:
      "A soft, gestural floral study in blush tones, finished with delicate metallic detailing.",
  },
  {
    slug: "terracotta-dusk",
    name: "Terracotta Dusk",
    price: "₹7,400",
    gradient: "from-amber-700 via-orange-600 to-neutral-900",
    tall: false,
    description:
      "Architectural forms dissolve into warm earth tones in this study of light against old stone.",
  },
  {
    slug: "silver-monsoon",
    name: "Silver Monsoon",
    price: "₹5,100",
    gradient: "from-slate-400 via-sky-300 to-white",
    tall: true,
    description:
      "A quiet, atmospheric rendering of rain-washed light, worked in soft greys and cool silver tones.",
  },
  {
    slug: "golden-thicket",
    name: "Golden Thicket",
    price: "₹6,900",
    gradient: "from-yellow-500 via-amber-600 to-neutral-800",
    tall: false,
    description:
      "Sunlight fractures through dense branches in this richly layered study of texture and warmth.",
  },
  {
    slug: "violet-current",
    name: "Violet Current",
    price: "₹4,200",
    gradient: "from-cyan-400 via-blue-500 to-fuchsia-600",
    tall: true,
    description:
      "A bold, fluid abstract piece exploring movement and colour transition across a single continuous form.",
  },
];
