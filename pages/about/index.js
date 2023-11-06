import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { useState } from "react";

import { motion } from "framer-motion";
import { fadeIn } from "./../../variants";
import { aboutData } from "./../about-constants/AboutConstants";
const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <div className="flex-1 flex flex-col justify-center">text</div>
        <div className="flex flex-col w-full xl:max-w-[48%] h-[480px]">
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
          <div>
            {aboutData &&
              aboutData[index].info.map((item, itemIndex) => {
                return (
                  <div key={itemIndex}>
                    <div>{item.title}</div>
                    <div className="hidden md:flex"></div>
                    <div>{item.stage}</div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
