"use client";

import { useEffect, useState } from "react";

type SliderProps = {
  slides: React.ReactNode[];
  indicatorColors?: string;
  indicatorBottomPosition?: string;
};

export default function Slider({ slides, indicatorColors, indicatorBottomPosition }: SliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = slides.length - 1;

  useEffect(() => {
    if (slides.length == 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev == maxIndex ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [maxIndex, slides]);

  return (
    <div className="w-full relative overflow-x-hidden">
      <div
        style={{
          width: `${slides.length * 100}%`,
          transform: `translateX(${(100 / slides.length) * currentIndex}%)`,
          transition: "transform 0.7s ease-in-out",
        }}
        className="flex gap-2"
      >
        {slides.map((slide, index) => (
          <div key={index} style={{ width: `${100 / slides.length}%` }}>
            {slide}
          </div>
        ))}
      </div>
      <div
        className={`absolute left-0 ${indicatorBottomPosition ? indicatorBottomPosition : "bottom-1"}  w-full flex items-center justify-center gap-2`}
      >
        {slides.map((item, index) => (
          <span
            key={index}
            className={`${index == currentIndex ? "w-6" : "w-1"} ${indicatorColors ? indicatorColors : "bg-secondary-500"} h-1 transition-all duration-200 rounded-full`}
          ></span>
        ))}
      </div>
    </div>
  );
}
