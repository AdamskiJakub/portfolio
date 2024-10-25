import ServiceSlider from "../../components/ServiceSlider";
import Circles from "../../components/Circles";
import Bulb from "../../components/Bulb";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Services = () => {
  return (
    <div className="h-full bg-primary/30 sm:pb-64  md:pb-0 mt-32 pb-52 md:mt-0 overflow-y-auto  flex items-center">
      <Circles />
      <div className="container mx-auto mt-10 sm:mt-0 md:mt-64 md:pb-24 z-10">
        {/* Tekst */}
        <div className="flex flex-col xl:flex-row gap-x-8">
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 md:mt-10 mt-80 lg:mt-0 "
            >
              My services <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="max-w-[580px] mx-auto lg:mx-0"
            >
              I offer a diverse set of services, ranging from creating frontend
              projects to taking on managerial roles. With a broad skill set, I
              can contribute to various aspects of project development, ensuring
              a comprehensive and effective approach. Let's discuss how I can
              support and enhance your initiatives.
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%] mt-8 xl:mt-0"
          >
            {/* Slider */}
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Services;
