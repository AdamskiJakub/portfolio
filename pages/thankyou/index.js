import { motion } from "framer-motion";
import { useEffect } from "react";

import { fadeIn } from "./../../variants";
import Circles from "../../components/Circles";

const ThankYou = () => {
  useEffect(() => {
    // Dodaj dodatkowe efekty, jeśli są potrzebne
  }, []);

  return (
    <div className="h-full flex items-center justify-center bg-primary/30">
      {/* Dodaj animacje i style według potrzeb */}
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
          className="max-w-[500px] mx-auto mb-6 px-2 text-white"
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          I appreciate your time and consideration. This form was only an
          template. If you want to contact me please send me an{" "}
          <span className="text-accent">email</span> or via{" "}
          <span className="text-accent">phone.</span>
        </motion.p>
        {/* Dodaj dowolne inne elementy, animacje lub style */}
      </motion.div>
      <Circles />
    </div>
  );
};

export default ThankYou;
