"use client";
import { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
// import NameTag from "./NameTag";

interface ExecImage {
  src: string;
  alt: string;
}

interface ExecCardProps {
  images: ExecImage[];
  role: string;
}

export default function ExecCard({ images, role }: ExecCardProps) {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === images.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? images.length - 1 : slide - 1);
  };

  const moreThan1 = images.length > 1;

  return (
    <div className="kasa-surface kasa-floating-card relative flex w-full max-w-sm flex-col items-center p-4">
      <h2 className="mb-3 text-2xl font-black text-blue">{role}</h2>
      <div
        id="carousel"
        className="relative w-full overflow-hidden rounded-xl border border-[#2b3467]/10 bg-white"
      >
        {/* <NameTag name={images[slide].alt} /> */}
        {moreThan1 && (
          <MdKeyboardArrowLeft
            onClick={prevSlide}
            className="absolute left-2 top-1/2 z-10 h-11 w-11 -translate-y-1/2 cursor-pointer rounded-full bg-white/85 p-1 text-blue shadow-md backdrop-blur-sm transition-colors hover:bg-white"
          />
        )}
        {images.map((item, index) => (
          <img
            src={item.src}
            alt={item.alt}
            key={index}
            style={{ width: "100%", height: "auto" }}
            loading="lazy"
            decoding="async"
            className={
              slide === index
                ? "aspect-[3/4] w-full object-cover transition-opacity duration-300"
                : "hidden"
            }
          />
        ))}
        {moreThan1 && (
          <MdKeyboardArrowRight
            onClick={nextSlide}
            className="absolute right-2 top-1/2 z-10 h-11 w-11 -translate-y-1/2 cursor-pointer rounded-full bg-white/85 p-1 text-blue shadow-md backdrop-blur-sm transition-colors hover:bg-white"
          />
        )}
        {/* Dots for each image */}

        {moreThan1 && (
          <span className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`View slide ${index + 1}`}
              className={`h-2 w-2 rounded-full ${
                slide === index ? "bg-blue" : "bg-blue/30"
              }`}
              onClick={() => setSlide(index)}
            />
          ))}
        </span>
        )}
        
      </div>
      <div className="py-3">
        <p className="text-xl font-bold text-gray-900">{images[slide].alt}</p>
      </div>
    </div>
  );
}
