import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { useEffect, useState } from "react";

import { motion } from "framer-motion";
import { fadeIn } from "./../../variants";
import { aboutData } from "./../about-constants/AboutConstants";

import CountUp from "react-countup";
const About = () => {
  const [counting, setCounting] = useState(false);
  const [index, setIndex] = useState(0);
  console.log(index);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCounting(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[250px]"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <div className="flex-1 flex flex-col justify-center">
          {/* text */}
          <motion.h2
            variants={fadeIn("right", 0.1)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Whatever <span className="text-accent">whatever</span> giga whatever
            whatever.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            whatever lorem loremloremloremloremloremloremloremlorem
          </motion.p>
          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  {counting && <CountUp start={0} end={5} duration={7} />} +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.2] max-w-[100px]">
                  Years of experience
                </div>
              </div>
              {/* Projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  {counting && <CountUp start={0} end={10} duration={5} />} +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.2] max-w-[100px]">
                  Finished Projects
                </div>
              </div>
              {/* Clients */}
              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  {counting && <CountUp start={0} end={10} duration={5} />} +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.2] max-w-[100px]">
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
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData &&
              aboutData.map((item, itemIndex) => {
                return (
                  <div
                    key={itemIndex}
                    className={`${
                      index === itemIndex &&
                      "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                    } 
                  cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] 
                  after:bg-white after:absolute after:-bottom-1 after:left-0`}
                    onClick={() => setIndex(itemIndex)}
                  >
                    {item.title}
                  </div>
                );
              })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData &&
              aboutData[index].info.map((item, itemIndex) => {
                return (
                  <div
                    key={itemIndex}
                    className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                  >
                    <div className="font-light mb-2 md:mb-0">{item.title}</div>
                    <div className="hidden md:flex"></div>
                    <div>{item.stage}</div>
                    <div className="flex gap-x-4">
                      {item.icons &&
                        item.icons.map((icon, itemIndex) => {
                          return (
                            <div
                              key={itemIndex}
                              className="text-2xl text-white"
                            >
                              {icon}
                            </div>
                          );
                        })}
                    </div>
                    <div>
                      {(item.title === "Project Manager" ||
                        item.title === "Production Leader") &&
                        item.about && (
                          <div>
                            {item.about.map((nestedAbout, nestedAboutIndex) => {
                              return (
                                <div
                                  className="text-1xl text-white"
                                  key={nestedAboutIndex}
                                >
                                  {nestedAbout.title}
                                </div>
                              );
                            })}
                          </div>
                        )}
                    </div>
                  </div>
                );
              })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
