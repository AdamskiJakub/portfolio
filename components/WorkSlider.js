import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { workSlides } from "./about-constants/AboutConstants";
import { Pagination } from "swiper";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";

const WorkSlider = () => {
  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[250px] sm:h-[250px] xl:h-[420px] xl:w-[700px] md:h-[320px] md:w-[500px]"
    >
      {workSlides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center justify-center cursor-pointer">
              <h1>{slide.title}</h1>
              <div className="relative rounded-lg overflow-hidden flex-items-center justify-center group">
                <div className="flex items-center justify-center relative overflow-hidden group">
                  <Image src={slide.image} width={700} height={300} alt="" />
                  <a
                    href={slide.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-[#3b2d71] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"
                  ></a>
                  <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 duration-500 transition-all">
                    <div className="flex flex-center gap-x-2 text-[13px] tracking-[0.2em]">
                      <div className="delay-100">CHECK</div>
                      <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                        PROJECT
                      </div>
                      <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                        <BsArrowRight />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
