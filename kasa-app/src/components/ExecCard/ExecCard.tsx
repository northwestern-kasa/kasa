"use client";
import { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import NameTag from "./NameTag";

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

  return (
    <div className="relative flex flex-col items-center w-full max-w-sm">
      <h2 className="font-bold text-2xl mb-2">{role}</h2>
      <div id="carousel" className="relative w-full overflow-hidden rounded-lg">
        {/* <NameTag name={images[slide].alt} /> */}
        <MdKeyboardArrowLeft
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 hover:cursor-pointer"
        />
        {images.map((item, index) => (
          <img
            src={item.src}
            alt={item.alt}
            key={index}
            className={
              slide === index
                ? " object-cover"
                : "hidden"
            }
          />
        ))}
        <MdKeyboardArrowRight
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 hover:cursor-pointer"
        />
        <span className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full ${
                slide === index ? "bg-black" : "bg-gray-400"
              }`}
              onClick={() => setSlide(index)}
            />
          ))}
        </span>
      </div>
    </div>
  );
}
