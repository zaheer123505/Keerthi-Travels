// app/components/ImageGallery.tsx
"use client";

import { useState } from 'react';
import Image from 'next/image';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// Define the type for a single gallery image
type GalleryImage = {
  id: number;
  src: string;
};

export default function ImageGallery({ images }: { images: GalleryImage[] }) {
  const [index, setIndex] = useState(-1);

  return (
    <div>
      <h2 className="text-2xl font-bold text-blue-800 mb-4">Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, idx) => (
          <div
            key={image.id}
            className="relative h-48 w-full rounded-lg overflow-hidden shadow-md cursor-pointer group"
            onClick={() => setIndex(idx)}
          >
            <Image
              src={image.src}
              alt={`Gallery image ${image.id}`}
              layout="fill"
              objectFit="cover"
              className="group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={images}
      />
    </div>
  );
}