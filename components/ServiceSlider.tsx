import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import { RxArrowTopRight } from "react-icons/rx";
import { serviceData } from "@/constants/data";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-auto"
    >
      {serviceData.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="group flex h-max cursor-pointer flex-col gap-x-6 rounded-lg bg-[rgba(65,47,123,0.15)] px-6 py-8 transition-all duration-300 hover:bg-[rgba(89,65,169,0.15)] sm:flex-col sm:gap-x-0">
            <div className="mb-4 text-4xl text-accent">{item.icon}</div>
            <div className="mb-8">
              <h3 className="mb-2 text-lg">{item.title}</h3>
              <p className="max-w-[350px] leading-normal">{item.description}</p>
            </div>
            <div className="text-3xl">
              <RxArrowTopRight className="transition-all duration-300 group-hover:rotate-45 group-hover:text-accent" />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;
