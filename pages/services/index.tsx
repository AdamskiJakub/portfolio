import ServiceSlider from "@/components/ServiceSlider";
import Circles from "@/components/Circles";
import Bulb from "@/components/Bulb";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/animations";

const Services = () => {
  const headingVariants = fadeIn("up", 0.3);
  const paragraphVariants = fadeIn("up", 0.4);
  const sliderVariants = fadeIn("down", 0.5);

  return (
    <div className="flex h-full items-center overflow-y-auto bg-primary/30 pb-52 mt-32 sm:pb-64 md:mt-0 md:pb-0">
      <Circles />
      <div className="container z-10 mx-auto mt-10 md:mt-64 md:pb-24 sm:mt-0">
        <div className="flex flex-col gap-x-8 xl:flex-row">
          {/* Text Section */}
          <div className="mb-4 flex flex-col text-center xl:mb-0 xl:w-[30vw] lg:text-left">
            <motion.h2
              variants={headingVariants}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 mt-80 md:mt-10 lg:mt-0"
            >
              My services<span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={paragraphVariants}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mx-auto max-w-[580px] lg:mx-0"
            >
              I offer a diverse set of services, ranging from creating frontend
              projects to taking on managerial roles. With a broad skill set, I
              can contribute to various aspects of project development, ensuring
              a comprehensive and effective approach. Let's discuss how I can
              support and enhance your initiatives.
            </motion.p>
          </div>

          {/* Slider Section */}
          <motion.div
            variants={sliderVariants}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mt-8 w-full xl:mt-0 xl:max-w-[65%]"
          >
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Services;
