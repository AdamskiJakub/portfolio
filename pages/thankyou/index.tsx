import { useEffect } from "react";
import { motion } from "framer-motion";
import Circles from "@/components/Circles";
import { fadeIn } from "@/utils/animations";

const ThankYou = () => {
  useEffect(() => {
    // Additional effects if needed
  }, []);

  return (
    <div className="flex h-full items-center justify-center bg-primary/30 se:mt-[-130px] sm:mt-[0px] xsm:mt-[0px] xse:mt-[-130px]">
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="text-center"
      >
        <motion.h2
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2 mb-6 text-center text-white"
        >
          Thank You for Checking My{" "}
          <span className="text-accent">Portfolio.</span>
        </motion.h2>
        <motion.p
          className="mx-auto mb-6 max-w-[500px] px-2 text-white"
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          I appreciate your time and consideration. Your email has been sent. If
          you want more direct contact - You can do it via{" "}
          <span className="text-accent">phone.</span>
        </motion.p>
      </motion.div>
      <Circles />
    </div>
  );
};

export default ThankYou;
