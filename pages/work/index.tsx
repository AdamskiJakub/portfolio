import { motion } from "framer-motion";
import WorkSlider from "@/components/WorkSlider";
import Circles from "@/components/Circles";
import Bulb from "@/components/Bulb";
import { fadeIn } from "@/utils/animations";

const Work = () => {
  return (
    <div className="flex h-full items-center bg-primary/30 py-16 md:py-24 xl:py-36 xsm:mt-[0]">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col gap-x-8 xl:flex-row">
          <div className="mb-4 flex flex-col text-center xl:mb-0 xl:w-[30vw] xl:text-left">
            <motion.h2
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 text-lg md:mt-16 md:text-xl xl:mt-12"
            >
              My projects<span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mx-auto mb-4 max-w-[400px] text-sm md:max-w-[500px] lg:mx-0 lg:mx-auto lg:text-base"
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
            className="w-full md:-mt-8 md:pt-4 xl:max-w-[65%]"
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;
