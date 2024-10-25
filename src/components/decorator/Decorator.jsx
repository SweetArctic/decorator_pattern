import React from "react";
import { motion } from "framer-motion";

// Decorador que añade un efecto de rebote
const withBounceEffect = (WrappedComponent) => {
  return (props) => (
    <motion.div
      whileTap={{ scale: 0.8 }}
      animate={{ y: [0, -20, 0] }}
      transition={{ duration: 0.5, repeat: Infinity }}
      style={{ display: "inline-block" }}
    >
      <WrappedComponent {...props} />
    </motion.div>
  );
};

export default withBounceEffect;