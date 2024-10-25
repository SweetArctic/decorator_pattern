import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const MoreDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  text-align: center;
`;

const StyledButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #ffccbc;
  color: #5d4037;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ffab91;
  }
`;

const MoreDetails = () => {
  const codeString = `
const DecoratedBox = () => (
  <motion.div
    className="animated-box"
    animate={{ x: [0, 50, -50, 100, -100, 0], y: [0, -30, 30, -10, 10, 0], transition: { duration: 3, repeat: Infinity, ease: "easeInOut" } }}
  >
    <p className="box-label">Animated + bounce animation</p>
  </motion.div>
);
`;

  return (
    <MoreDetailsContainer>
      <h2>How I Applied the Decorator Pattern</h2>
      <p>
        The Decorator pattern extends the functionality of a component dynamically 
        without modifying its core logic.
      </p>
      <p>
        In this project, I used the decorator to add a bounce effect to the animated 
        box, creating a fluid wave-like movement.
      </p>
      <h3>Example Code:</h3>
      <SyntaxHighlighter language="javascript" style={atomDark}>
        {codeString}
      </SyntaxHighlighter>  <br />
      <p>
        The Framer Motion framework has a list of animations that can be used so that web pages do not look so static, however, the bounce effect is not part of this list of functionalities, so to apply it, you should not start creating the animation, nor should you resort to another library loading the page with weight,   what I did was modify the component of the Slide animation to add the Bounce effect, that is, decorate the animation using the Decorator pattern.
      </p>
      <Link to="/">
        <StyledButton>Back to Home</StyledButton>
      </Link>
    </MoreDetailsContainer>
  );
};

export default MoreDetails;