import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";

const CarouselSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  const nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < minSwipeDistance;
    if (isLeftSwipe) nextSlide();
    if (isRightSwipe) previousSlide();
  };

  if (isMobile) {
    setTimeout(() => {
      nextSlide();
    }, 5000);
  }

  return (
    <div
      className="relative flex h-[48%] w-[48%] justify-center overflow-hidden rounded-md border-[1.2px] border-gray-500"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div
        className="duration-400 flex transition ease-out"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((image, index) => (
          <img key={index} src={image} alt="project" className="object-cover" />
        ))}
      </div>

      {isMobile ? null : (
        <div className="absolute top-0 flex h-full w-full items-center justify-between px-5 text-white">
          <button
            onClick={previousSlide}
            className="font rounded-full p-2 hover:bg-gray-500"
          >
            <ArrowBack />
          </button>

          <button
            onClick={nextSlide}
            className="rounded-full p-2 hover:bg-gray-500"
          >
            <ArrowForward />
          </button>
        </div>
      )}

      {/* PAGINATION */}
      <div className="absolute bottom-0 flex gap-5 py-4">
        {slides.map((image, index) => (
          <div
            onClick={() => setCurrent(index)}
            className={`cursor-pointer rounded-full sm:h-2 sm:w-2 md:h-4 md:w-4 ${
              index === current ? "bg-white" : "bg-gray-400"
            }`}
            key={index}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default CarouselSlider;
