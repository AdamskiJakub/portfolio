import Image from "next/image";
import ProjectsBtn from "../components/ProjectsBtn";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Avatar from "./../components/Avatar";
import ParticlesContainer from "../components/ParticlesContainer";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full overflow-y-auto">
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto se:mt-[-130px] sm:mt-[0px] xsm:mt-[-50px] xse:mt-[-40px]">
          {/*  TEXT  */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-[25px] leading-tight md:text-[54px] se:mt-[0] sm:mt-[5px] xsm:mt-[30px] xse:mt-[-100px] md:leading-[1.3] mb-8 font-semibold text-center xl:text-left sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
          >
            Welcome to My Portfolio <br /> I'm{" "}
            <span className="text-accent">Jakub Adamski,</span>
            <br /> a Frontend Developer.
          </motion.h1>
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-md xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 text-center xl:text-left text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"
          >
            Passionate about creating engaging and interactive web experiences.
            I specialize in front-end development, transforming ideas into
            visually stunning and user-friendly websites.
          </motion.p>

          <div className="flex justify-center xl:hidden relative ">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex "
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* Image*/}
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        {/* Background Image */}
        <motion.div
          variants={fadeIn("left", 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat 
        w-full h-full absolute mix-blend-color-dodge translate-z-0"
        ></motion.div>
        {/* particles */}
        <ParticlesContainer />
        {/* avatar */}
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-[600px] max-h-[600px] absolute -bottom-32 lg:bottom-0 lg:right-[12%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
