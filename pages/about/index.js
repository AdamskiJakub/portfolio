import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { aboutData } from "../../components/about-constants/AboutConstants";
import CountUp from "react-countup";

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
    <div className="h-full bg-primary/30 py-32 text-center md:text-left mt-0">
      <Circles />
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden md:flex absolute bottom-0 -left-[250px]"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center md:flex-row gap-x-6">
        <div className="flex-1 flex flex-col justify-center">
          {/* Tekst */}
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
            className="max-w-[500px] mx-auto md:mx-0 mb-4 md:mb-6 xl:mb-12 px-2 md:px-0 text-sm md:text-base"
          >
            My journey in the world of IT started long ago. With a strong
            foundation of various technologies. Over the years, I have gained
            hands-on experience as a programmer, project manager, and Production
            Leader.
          </motion.p>
          {/* Liczniki */}
          <motion.div
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto md:mx-0 mb-8"
          >
            <div className="flex flex-1 md:gap-x-6">
              {/* Doświadczenie */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-lg md:text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  {counting && <CountUp start={0} end={5} duration={7} />} +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.2] max-w-[100px]">
                  Years of experience
                </div>
              </div>
              {/* Projekty */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-lg md:text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  {counting && <CountUp start={0} end={10} duration={5} />} +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.2] max-w-[100px]">
                  Finished Projects
                </div>
              </div>
              {/* Klienci */}
              <div className="relative flex-1">
                <div className="text-lg md:text-2xl xl:text-4xl font-extrabold text-accent mb-2">
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
          className="flex flex-col w-full md:max-w-[48%] h-[480px] md:max-h-[400px] lg:max-h-[480px] overflow-y-auto"
        >
          <div className="flex gap-x-4 md:gap-x-8 mx-auto md:mx-0 mb-4">
            {aboutData &&
              aboutData.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-full after:bg-accent after:transition-all after:duration-300"
                  } cursor-pointer capitalize md:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              ))}
          </div>
          <div className="py-2 md:py-6 flex flex-col gap-y-2 md:gap-y-4">
            {aboutData &&
              aboutData[index].info.map((item) => (
                <div
                  key={item.id}
                  className="grid grid-cols-1 md:grid-cols-[auto,1fr] gap-x-4 items-start text-white/60 text-sm md:text-base w-full"
                >
                  {/* Tytuł */}
                  <div className="font-light mb-2 md:mb-0 text-md md:text-lg text-left">
                    {item.title}
                  </div>
                  {/* Treść */}
                  <div className="text-left">
                    {/* Etap */}
                    {item.stage && (
                      <div className="text-sm md:text-base mb-2">
                        {item.stage}
                      </div>
                    )}
                    {/* Informacje dodatkowe */}
                    {item.about &&
                      item.about.map((nestedAbout) => (
                        <div
                          key={nestedAbout.id}
                          className="text-sm md:text-base text-white mb-2"
                        >
                          {nestedAbout.title}
                        </div>
                      ))}
                    {/* Ikony */}
                    {item.icons && (
                      <div className="flex gap-x-4">
                        {item.icons.map((icon, iconIndex) => (
                          <div
                            key={iconIndex}
                            className="text-lg md:text-2xl text-white"
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
