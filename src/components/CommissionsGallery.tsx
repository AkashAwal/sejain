import Image from "next/image";

const images = [
  "IMG-20230301-WA0000-1-e1719205542506-600x600.jpg",
  "IMG-20230319-WA0010-1-e1719205592716-600x600.jpg",
  "IMG-20230319-WA0015-1-e1719205636433-600x600.jpg",
  "IMG_20230322_140758-min-600x600.jpg",
  "IMG_20230322_140814-min-1-1-600x600.jpg",
  "WhatsApp-Image-2024-06-24-at-10.22.49_9cb99593-e1719206484102-600x600.jpg",
  "WhatsApp-Image-2024-06-24-at-10.22.57_c01fb519-e1719205876627-600x600.jpg",
  "comissions_1.webp",
  "comissions_2.webp",
];

export default function CommissionsGallery() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-6">
      {images.map((file) => (
        <div key={file} className="relative aspect-square w-full overflow-hidden">
          <Image
            src={`/comissions/${file}`}
            alt="Past commissioned artwork from Sejain Art Studio & Academy"
            fill
            sizes="(min-width: 640px) 33vw, 50vw"
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}
