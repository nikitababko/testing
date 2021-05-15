import React, { useRef } from 'react';
import useHover from '../hooks/useHover';

const Hover = ({ firstColor, secondColor }) => {
  const ref = useRef();
  const isHovering = useHover(ref);

  return (
    <div
      ref={ref}
      style={{
        width: 300,
        height: 300,
        background: isHovering ? secondColor : firstColor,
      }}
    ></div>
  );
};

export default Hover;
