import WorkSlider from "../../components/WorkSlider";
import Circles from "../../components/Circles";
import Bulb from "../../components/Bulb";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Work = () => {
  return (
    <div className="h-full bg-primary/30 py-16 md:py-24 xl:py-36 flex items-center">
      <Circles />
      <div className="container mx-auto">
        {/* text */}
        <div className="flex flex-col xl:flex-row gap-x-8">
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 text-lg md:text-xl xl:mt-12 md:mt-16 xl:mt-12"
            >
              My projects <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0 text-sm md:text-base"
            >
              I offer a diverse set of services, ranging from creating frontend
              projects to taking on managerial roles. With a broad skill set, I
              can contribute to various aspects of project development, ensuring
              a comprehensive and effective approach.
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%] md:pt-4 md:-mt-8"
          >
            {/* slider */}
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;
