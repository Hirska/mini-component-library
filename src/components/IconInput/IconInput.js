import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const fontSize = size === "large" ? 18 : 14;
  const iconSize = size === "large" ? 24 : 16;
  const paddingLeft = size === "large" ? 36 : 24;
  return (
    <Wrapper>
      <InputIcon id={icon} size={iconSize}></InputIcon>
      <VisuallyHidden>{label}</VisuallyHidden>
      <InputWrapper
        placeholder={placeholder}
        style={{
          "--width": width + "px",
          "--font-size": fontSize / 16 + "rem",
          "--padding-left": paddingLeft + "px",
        }}
      ></InputWrapper>
    </Wrapper>
  );
};

const InputWrapper = styled.input`
  padding-left: var(--padding-left);
  width: var(--width);
  border: none;
  border-bottom: 1px solid ${COLORS.black};
  font-size: var(--font-size);
  color: inherit;
  &:focus {
    outline-offset: 2px;
  }
  &::placeholder {
    color: ${COLORS.gray500};
  }
`;

const InputIcon = styled(Icon)`
  display: inline-block;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
`;

const Wrapper = styled.label`
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

export default IconInput;
