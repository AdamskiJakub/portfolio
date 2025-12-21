import { motion } from "framer-motion";
import ProjectsBtn from "@/components/ProjectsBtn";
import Avatar from "@/components/Avatar";
import ParticlesContainer from "@/components/ParticlesContainer";
import { fadeIn } from "@/utils/animations";

const Home = () => {
  return (
    <div className="h-full overflow-hidden bg-primary/60">
      <div className="h-full w-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="container mx-auto flex h-full flex-col justify-center text-center xl:pt-40 xl:text-left">
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mb-8 text-center text-[20px] font-semibold leading-tight sm:text-3xl md:mt-[30px] md:text-4xl md:leading-[1.3] lg:text-5xl xl:mt-0 xl:text-left"
          >
            Welcome to My Portfolio <br /> I'm{" "}
            <span className="text-accent">Jakub Adamski,</span>
            <br /> a Fullstack Developer.
          </motion.h1>
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mx-auto mb-10 max-w-md text-center text-sm sm:text-base lg:text-xl xl:mx-0 xl:mb-16 xl:max-w-xl xl:text-left"
          >
            Passionate about creating engaging and interactive web experiences.
            I specialize in front-end development, transforming ideas into
            visually stunning and user-friendly websites.
          </motion.p>

          <div className="relative z-10 flex justify-center xl:hidden">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 z-1 h-full w-[1200px]">
        <motion.div
          variants={fadeIn("left", 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute h-full w-full translate-z-0 bg-none mix-blend-color-dodge xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat"
        />
        <ParticlesContainer />
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute -bottom-32 h-full w-full max-h-[600px] max-w-[600px] lg:bottom-0 lg:right-[12%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
