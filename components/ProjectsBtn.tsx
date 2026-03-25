import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0">
      <Link
        href="/work"
        className="group relative flex h-[140px] w-[140px] items-center justify-center bg-circleStar bg-cover bg-center bg-no-repeat sm:h-[160px] sm:w-[160px] xl:h-[185px] xl:w-[185px]"
      >
        <Image
          src="/rounded-text.png"
          width={141}
          height={148}
          alt="Projects"
          className="h-full w-full max-h-[110px] max-w-[105px] animate-spin-slow sm:max-h-[130px] sm:max-w-[125px] xl:max-h-[148px] xl:max-w-[141px]"
        />
        <HiArrowRight className="absolute text-2xl transition-all duration-300 group-hover:translate-x-2 sm:text-3xl xl:text-4xl" />
      </Link>
    </div>
  );
};

export default ProjectsBtn;
