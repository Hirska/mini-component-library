import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <PresentationalSelect tabIndex="-1">
        <VisuallyHidden>Select {label}</VisuallyHidden>
        {displayedValue}
        <SelectIcon id="chevron-down" size={24} strokeWidth={2}></SelectIcon>
      </PresentationalSelect>
    </Wrapper>
  );
};

const NativeSelect = styled.select`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const PresentationalSelect = styled.div`
  color: ${COLORS.gray700};
  border-radius: 8px;
  height: 43px;
  border: none;
  background-color: ${COLORS.transparentGray15};
  padding: 12px 52px 12px 16px;
  appearance: none;
  ${NativeSelect}:focus + & {
    outline: ${COLORS.primary} solid 2px;
  }

  ${NativeSelect}:hover + & {
    color: revert;
  }
`;

const SelectIcon = styled(Icon)`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  margin-right: 4px;
`;

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

export default Select;
