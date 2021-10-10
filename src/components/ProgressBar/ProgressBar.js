/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    "--height": 8 + "px",
    "--border-radius": 4 + "px",
  },
  medium: {
    "--height": 12 + "px",
    "--border-radius": 4 + "px",
  },
  large: {
    "--height": 24 + "px",
    "--padding": 4 + "px",
    "--border-radius": 8 + "px",
  },
};
const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];
  return (
    <Wrapper
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      style={styles}
    >
      <Bar value={value} size={size}></Bar>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  border-radius: var(--border-radius);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  width: 370px;
  height: var(--height);
  padding: var(--padding);
`;

const Bar = styled.div`
  width: ${(p) => `${p.value}%`};
  height: 100%;
  border-radius: ${(props) => (props.size === "large" ? `4px` : "inherit")};
  border-top-right-radius: ${(props) => props.value !== 100 && "0px"};
  border-bottom-right-radius: ${(props) => props.value !== 100 && "0px"};
  background-color: ${COLORS.primary};
`;

export default ProgressBar;
