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
      <BarWrapper size={size}>
        <Bar value={value}></Bar>
      </BarWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};

  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  width: 370px;
  border-radius: var(--border-radius);
  height: var(--height);
  padding: var(--padding);
`;

const BarWrapper = styled.div`
  border-radius: 4px;
  overflow: hidden;
  height: 100%;
`;

const Bar = styled.div`
  width: ${(p) => `${p.value}%`};
  border-radius: 4px 0 0 4px;
  height: 100%;
  background-color: ${COLORS.primary};
`;

export default ProgressBar;
