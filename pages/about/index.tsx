import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import Avatar from "@/components/Avatar";
import Circles from "@/components/Circles";
import { fadeIn } from "@/utils/animations";
import { aboutData } from "@/constants/data";

const About = () => {
  const [counting, setCounting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCounting(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="mt-0 h-full bg-primary/30 py-32 text-center md:text-left">
      <Circles />
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="absolute bottom-0 -left-[250px] hidden md:flex"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto flex h-full flex-col items-center gap-x-6 md:flex-row">
        <div className="flex flex-1 flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.1)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-lg md:text-2xl"
          >
            From personal trainer to a
            <span className="text-accent"> Programmer</span>
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mx-auto mb-4 max-w-[500px] px-2 text-sm md:mx-0 md:mb-6 md:px-0 md:text-base xl:mb-12"
          >
            My journey in the world of IT started long ago. With a strong
            foundation of various technologies. Over the years, I have gained
            hands-on experience as a programmer, project manager, and Production
            Leader.
          </motion.p>
          <motion.div
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mx-auto mb-8 hidden md:mx-0 md:flex md:max-w-xl xl:max-w-none"
          >
            <div className="flex flex-1 md:gap-x-6">
              <div className="relative flex-1 after:absolute after:right-0 after:top-0 after:h-full after:w-[1px] after:bg-white/10">
                <div className="mb-2 text-lg font-extrabold text-accent md:text-2xl xl:text-4xl">
                  {counting && <CountUp start={0} end={5} duration={7} />} +
                </div>
                <div className="max-w-[100px] text-xs uppercase leading-[1.2] tracking-[1px]">
                  Years of experience
                </div>
              </div>
              <div className="relative flex-1 after:absolute after:right-0 after:top-0 after:h-full after:w-[1px] after:bg-white/10">
                <div className="mb-2 text-lg font-extrabold text-accent md:text-2xl xl:text-4xl">
                  {counting && <CountUp start={0} end={10} duration={5} />} +
                </div>
                <div className="max-w-[100px] text-xs uppercase leading-[1.2] tracking-[1px]">
                  Finished Projects
                </div>
              </div>
              <div className="relative flex-1">
                <div className="mb-2 text-lg font-extrabold text-accent md:text-2xl xl:text-4xl">
                  {counting && <CountUp start={0} end={10} duration={5} />} +
                </div>
                <div className="max-w-[100px] text-xs uppercase leading-[1.2] tracking-[1px]">
                  Satisfied Clients
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex h-[480px] w-full flex-col overflow-y-auto md:max-h-[400px] md:max-w-[48%] lg:max-h-[480px]"
        >
          <div className="mx-auto mb-4 flex gap-x-4 md:mx-0 md:gap-x-8">
            {aboutData.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className={`${
                  index === itemIndex &&
                  "text-accent after:w-full after:bg-accent after:transition-all after:duration-300"
                } relative cursor-pointer capitalize after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-8 after:bg-white md:text-lg`}
                onClick={() => setIndex(itemIndex)}
              >
                {item.title}
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-y-2 overflow-x-auto py-2 md:gap-y-4 md:py-6">
            {aboutData[index].info.map((item) => (
              <div
                key={item.id}
                className="flex w-full min-w-max items-center gap-x-4 text-sm text-white/60 md:text-base"
              >
                <div className="text-md whitespace-nowrap text-left font-light md:text-lg">
                  {item.title}
                  {item.stage && (
                    <span className="ml-3 text-xs text-accent md:text-sm">
                      {item.stage}
                    </span>
                  )}
                </div>
                <div className="text-left">
                  {item.about &&
                    item.about.map((nestedAbout) => (
                      <div
                        key={nestedAbout.id}
                        className="mb-2 text-sm text-white md:text-base"
                      >
                        {nestedAbout.title}
                      </div>
                    ))}
                  {item.icons && (
                    <div className="flex gap-x-4">
                      {item.icons.map((icon, iconIndex) => (
                        <div
                          key={iconIndex}
                          className="text-lg text-white md:text-2xl"
                        >
                          {icon}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
