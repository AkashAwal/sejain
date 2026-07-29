export type Artwork = {
  slug: string;
  name: string;
  price: string;
  categories: string[];
  medium: string;
  dimensions: string | null;
  description: string;
  gradient: string;
  tall: boolean;
  image?: string;
};

export const SHIPPING_AND_RETURN =
  "All paintings will be shipped as canvas roll with a protective covering. For return and refunds please refer to our Returns and Refunds policy.";

export const ADVISORY =
  "The images in product listings serve as visual aids to showcase the intricate detailing of the paintings. They are the actual artworks and provide an accurate representation of colors and design. Each art piece is unique and a single statement piece. There is only one available, and once sold, the original piece is no longer available. Please note that the size mentioned in the title refers to the size of the canvas painting only; frame and border size are not included. If you wish to purchase, please contact us to reserve your statement piece promptly. If you want to have a better look of every painting before purchasing please come visit us at our art gallery in Delhi.";

export const artworks: Artwork[] = [
  {
    slug: "stream",
    image: "/artworks/stream.webp",
    name: "Stream",
    price: "₹60,000.00",
    categories: ["Oil Paintings", "Paintings"],
    medium: "Oil on Canvas",
    dimensions: "40 in. x 20 in.",
    description:
      "A picturesque landscape painting capturing the beauty of a gently flowing stream winding through green hills. Feel the soothing embrace of nature as the clear waters meander gracefully amidst lush greenery, reflecting the tranquility of the surrounding landscape.",
    gradient: "from-emerald-700 via-teal-500 to-lime-200",
    tall: false,
  },
  {
    slug: "the-gateway",
    image: "/artworks/the-gateway.webp",
    name: "The Gateway",
    price: "₹35,000.00",
    categories: ["Heritage in Clay", "Relief"],
    medium: "Clay on Canvas",
    dimensions: "19 in. x 13 in.",
    description:
      "The Gateway – This is the final piece in my 'Heritage in Clay' series, titled The Gateway. Inspired by the gates of Qutub Minar, it reflects the timeless beauty of historic architecture. The depiction captures the elegance of the stone arches, adorned with detailed patterns, leading to a scenic view beyond.",
    gradient: "from-amber-800 via-orange-600 to-yellow-200",
    tall: true,
  },
  {
    slug: "the-whispers-of-the-woods",
    image: "/artworks/the-whispers-of-the-woods.webp",
    name: "The Whispers of the Woods",
    price: "₹35,000.00",
    categories: ["Oil Paintings", "Paintings"],
    medium: "Oil on Canvas",
    dimensions: "24 in. x 18 in.",
    description:
      "A quiet forest path winds through towering, intertwined trees, where soft light and mist create an ethereal atmosphere. The painting evokes mystery, solitude, and nature's gentle whispers, inviting peaceful reflection and wonder.",
    gradient: "from-slate-700 via-emerald-800 to-neutral-900",
    tall: false,
  },
  {
    slug: "tyndall",
    image: "/artworks/tyndall.webp",
    name: "Tyndall",
    price: "₹60,000.00",
    categories: ["Oil Paintings", "Paintings"],
    medium: "Oil on Canvas",
    dimensions: "36 in. x 24 in.",
    description:
      "A captivating painting that captures the mesmerizing play of sunlight filtering through a dense forest canopy. Feel the warmth as the rays illuminate the greenery, creating a magical atmosphere of light and shadow.",
    gradient: "from-yellow-400 via-emerald-600 to-green-900",
    tall: true,
  },
  {
    slug: "vegetation",
    image: "/artworks/vegetation.webp",
    name: "Vegetation",
    price: "₹60,000.00",
    categories: ["Oil Paintings", "Paintings"],
    medium: "Oil on Canvas",
    dimensions: "36 in. x 24 in.",
    description:
      "Immerse yourself in the lush beauty of a serene landscape painting capturing the tranquility of a green forest. Sunlight filters through the dense canopy, casting dappled shadows and illuminating patches of the forest floor.",
    gradient: "from-green-800 via-emerald-600 to-lime-300",
    tall: false,
  },
  {
    slug: "chishtis-tomb",
    image: "/artworks/chishtis-tomb.webp",
    name: "Chishti's Tomb",
    price: "₹35,000.00",
    categories: ["Heritage in Clay", "Relief"],
    medium: "Clay on Canvas",
    dimensions: "19 in. x 13 in.",
    description:
      "Heritage in Clay continues with this 3D clay model inspired by Sheikh Salim Chishti's Tomb in Fatehpur Sikri. The piece reflects the unique style and craftsmanship of Mughal architecture.",
    gradient: "from-amber-700 via-yellow-600 to-orange-900",
    tall: true,
  },
  {
    slug: "ganges",
    image: "/artworks/ganges.webp",
    name: "Ganges",
    price: "₹25,000.00",
    categories: ["Acrylic Paintings", "Paintings"],
    medium: "Acrylic on Canvas",
    dimensions: "17 in. x 13 in.",
    description:
      "Serene riverbank scene inspired by the Ganges—capturing its gentle flow and sacred tranquility.",
    gradient: "from-sky-400 via-blue-600 to-indigo-800",
    tall: false,
  },
  {
    slug: "gate-of-serenity",
    image: "/artworks/gate-of-serenity.webp",
    name: "Gate of Serenity",
    price: "₹35,000.00",
    categories: ["Heritage in Clay", "Relief"],
    medium: "Clay on Canvas",
    dimensions: "19 in. x 13 in.",
    description:
      "Gate of Serenity – This artwork is inspired by the Dargah of Sufi Sheikh Wahiduddin, located in Rajasthan. The piece captures the spiritual and architectural beauty of this sacred site, highlighting its intricate doorway and serene atmosphere. It's part of my Heritage in Clay series, where I bring historic monuments to life through clay modeling and oil painting.",
    gradient: "from-orange-700 via-amber-600 to-stone-900",
    tall: true,
  },
  {
    slug: "gateways-of-glory",
    image: "/artworks/gateways-of-glory.webp",
    name: "Gateways of Glory",
    price: "₹35,000.00",
    categories: ["Heritage in Clay", "Relief"],
    medium: "Clay on Canvas",
    dimensions: "19 in. x 13 in.",
    description:
      "Gateways of Glory – A detailed clay and oil creation, celebrating the grandeur of Mughal architecture, inspired by the Tomb of Akbar the Great. This is the second piece in my Heritage in Clay series.",
    gradient: "from-yellow-600 via-amber-700 to-red-900",
    tall: true,
  },
  {
    slug: "golden-horizon",
    image: "/artworks/golden-horizon.webp",
    name: "Golden Horizon",
    price: "₹20,000.00",
    categories: ["Acrylic Paintings", "Paintings"],
    medium: "Oil on Canvas",
    dimensions: "17 in. x 13 in.",
    description:
      "Experience the beauty of nature with Golden Sunset, a stunning painting of a sunset by the seashore. Watch as the sun sets, painting the sky in shades of gold and orange, reflecting on the unsettled waters below. Let this peaceful scene bring warmth and tranquility to your space.",
    gradient: "from-orange-400 via-amber-500 to-rose-600",
    tall: false,
  },
  {
    slug: "golden-jharokha",
    image: "/artworks/golden-jharokha.webp",
    name: "Golden Jharokha",
    price: "₹35,000.00",
    categories: ["Heritage in Clay", "Relief"],
    medium: "Clay on Canvas",
    dimensions: "19 in. x 13 in.",
    description:
      "\"Golden Jharokha\" – A blend of clay and oil, capturing the timeless beauty of architectural heritage. This is the first piece in my \"Heritage in Clay\" series.",
    gradient: "from-amber-600 via-yellow-500 to-orange-800",
    tall: true,
  },
  {
    slug: "petals-of-tranquility-part-1",
    image: "/artworks/petals-of-tranquility-part-1.webp",
    name: "Petals of Tranquility – Part 1",
    price: "₹10,000.00",
    categories: ["Acrylic Paintings", "Paintings"],
    medium: "Acrylic on Canvas",
    dimensions: "11.7 in. x 16.5 in.",
    description: "Petals of tranquility – Part 1",
    gradient: "from-pink-300 via-rose-400 to-fuchsia-600",
    tall: false,
  },
  {
    slug: "petals-of-tranquility-part-2",
    image: "/artworks/petals-of-tranquility-part-2.webp",
    name: "Petals of Tranquility – Part 2",
    price: "₹10,000.00",
    categories: ["Acrylic Paintings", "Paintings"],
    medium: "Acrylic on Canvas",
    dimensions: "11.7 in. x 16.5 in.",
    description: "Petals of tranquility – Part 2",
    gradient: "from-fuchsia-300 via-pink-500 to-rose-700",
    tall: false,
  },
  {
    slug: "petals-of-tranquility-part-3",
    image: "/artworks/petals-of-tranquility-part-3.webp",
    name: "Petals of Tranquility – Part 3",
    price: "₹10,000.00",
    categories: ["Acrylic Paintings", "Paintings"],
    medium: "Acrylic on Canvas",
    dimensions: "16.5 in. x 11.7 in.",
    description: "Petals of tranquility – Part 3",
    gradient: "from-rose-300 via-pink-400 to-fuchsia-700",
    tall: true,
  },
  {
    slug: "puddle",
    image: "/artworks/puddle.webp",
    name: "Puddle",
    price: "₹55,000.00",
    categories: ["Oil Paintings", "Paintings"],
    medium: "Oil on Canvas",
    dimensions: null,
    description:
      "This artwork showcases a peaceful forest scene with lush trees, stones, vibrant grass, and delicate flowers surrounding a calm water puddle, reflecting the harmony of untouched wilderness.",
    gradient: "from-green-700 via-teal-600 to-slate-800",
    tall: false,
  },
  {
    slug: "stone-and-sky",
    image: "/artworks/stone-and-sky.webp",
    name: "Stone and Sky",
    price: "₹35,000.00",
    categories: ["Heritage in Clay", "Relief"],
    medium: "Clay on Canvas",
    dimensions: "19 in. x 13 in.",
    description:
      "Stone and Sky – the third piece in my 'Heritage in Clay' series. This 3D clay and oil painting draws inspiration from the majestic Chhatri of Maharaja Jaswant Singh II, famously known as Jaswant Thada in Jodhpur. With each detail carved meticulously, this piece stands as a tribute to the opulent Rajput architecture.",
    gradient: "from-blue-800 via-slate-600 to-amber-700",
    tall: true,
  },
  {
    slug: "stormy-silence",
    image: "/artworks/stormy-silence.webp",
    name: "Stormy Silence",
    price: "₹35,000.00",
    categories: ["Oil Paintings", "Paintings"],
    medium: "Oil on Canvas",
    dimensions: "23.5 in. x 18 in.",
    description:
      "Stormy Silence – A scenery of solitude, where the landscape hums with the quiet melancholy of fading light and naked trees.",
    gradient: "from-slate-800 via-zinc-700 to-neutral-900",
    tall: false,
  },
];
