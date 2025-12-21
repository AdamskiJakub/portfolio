import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import { workSlides } from "@/constants/data";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const WorkSlider = () => {
  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[250px] md:h-[320px] md:w-[500px] sm:h-[250px] xl:h-[420px] xl:w-[700px]"
    >
      {workSlides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="flex cursor-pointer flex-col items-center justify-center">
            <h2 className="mb-4 text-xl font-semibold">{slide.title}</h2>
            <div className="flex-items-center group relative flex justify-center overflow-hidden rounded-lg">
              <div className="group relative flex items-center justify-center overflow-hidden">
                <Image
                  src={slide.image}
                  width={700}
                  height={300}
                  alt={slide.title}
                />
                <a
                  href={slide.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-[#3b2d71] to-[#4a22bd] opacity-0 transition-all duration-700 group-hover:opacity-80"
                  aria-label={`View ${slide.title} project`}
                />
                <div className="absolute bottom-0 translate-y-full transition-all duration-500 group-hover:-translate-y-10 group-hover:xl:-translate-y-20">
                  <div className="flex flex-center gap-x-2 text-[13px] tracking-[0.2em]">
                    <div className="delay-100">CHECK</div>
                    <div className="translate-y-[500%] transition-all duration-300 delay-150 group-hover:translate-y-0">
                      PROJECT
                    </div>
                    <div className="translate-y-[500%] text-xl transition-all duration-300 delay-200 group-hover:translate-y-0">
                      <BsArrowRight />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
