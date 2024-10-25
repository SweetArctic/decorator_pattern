import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import "./Main.css";

const Main = () => {
  const [useDecorator, setUseDecorator] = useState(false);
  const controls = useAnimation();

  const waveMotion = {
    x: [0, 50, -50, 100, -100, 0],
    y: [0, -20, 20, -10, 10, 0],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
  };

  const horizontalMotion = {
    x: [0, 100, 0],
    transition: { duration: 2, repeat: Infinity, ease: "linear" },
  };

  const AnimatedBox = ({ label }) => (
    <motion.div className="animated-box" animate={horizontalMotion}>
      <p className="box-label">{label}</p>
    </motion.div>
  );

  const DecoratedBox = () => (
    <motion.div className="animated-box" animate={waveMotion}>
      <p className="box-label">Animated + bounce animation</p>
    </motion.div>
  );

  const ActiveBox = useDecorator ? <DecoratedBox /> : <AnimatedBox label="Animated!" />;

  return (
    <div className="main-container">
      <h2>Main Page - Framer Motion in Action</h2>
      <div className="animation-container">{ActiveBox}</div>
      <button
        className="toggle-button"
        onClick={() => setUseDecorator((prev) => !prev)}
      >
        {useDecorator ? "Without Decoration" : "With Decoration"}
      </button>
      <Link to="/more-details">
        <button className="details-button">More Details</button>
      </Link>
    </div>
  );
};

export default Main;