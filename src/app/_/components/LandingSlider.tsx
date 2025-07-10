"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronSvg } from "@/ui/icon";

const slides = ["/images/banner-2.jpg", "/images/banner-1.jpg"];

export default function LandingSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full relative overflow-x-clip mb-10">
      {/* Slides container */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          width: `${slides.length * 100}%`,
          transform: `translateX(${currentIndex * (100 / slides.length)}%)`,
        }}
      >
        {slides.map((src, index) => (
          <div
            key={index}
            className="relative aspect-[3/2]"
            style={{ width: `${100 / slides.length}%` }}
          >
            <Image
              src={src}
              fill
              alt={`slide-${index}`}
              className="object-cover object-center rounded-primary-1"
            />
          </div>
        ))}
      </div>

      {/* Pagination indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`w-4 h-[2px] transition-all ${
              currentIndex === index ? "bg-neutral-0" : "bg-neutral-400"
            }`}
          ></span>
        ))}
      </div>

      {/* Left arrow */}
      <button
        onClick={prevSlide}
        className="absolute w-10 h-10 bg-neutral-0 shadow-md flex items-center justify-center rounded-primary-1 bottom-4 left-4"
      >
        <ChevronSvg className="w-6 h-6 rotate-180" />
      </button>

      {/* Right arrow */}
      <button
        onClick={nextSlide}
        className="absolute w-10 h-10 bg-neutral-0 shadow-md flex items-center justify-center rounded-primary-1 bottom-4 right-4"
      >
        <ChevronSvg className="w-6 h-6" />
      </button>
      {/* CTA button */}
      <div className="absolute bottom-0 translate-y-1/2  bg-neutral-0 rounded-t-primary-3 left-1/2 p-[2px] transform -translate-x-1/2 w-36 h-12">
        <Link
          href="/login"
          className="w-full h-full text-neutral-100 rounded-primary-3 shadow-primary-2 bg-primary-500 flex items-center justify-center text-sm font-medium"
        >
          درخواست پرستار
        </Link>
      </div>
    </div>
  );
}
