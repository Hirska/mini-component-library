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
      <VisuallyHidden>{label}</VisuallyHidden>
      <SelectIcon id="chevron-down"></SelectIcon>
      <SelectWrapper value={value} onChange={onChange}>
        {children}
      </SelectWrapper>
    </Wrapper>
  );
};

const SelectWrapper = styled.select`
  color: ${COLORS.gray700};
  border-radius: 8px;
  height: 43px;
  border: none;
  background-color: ${COLORS.transparentGray15};
  padding: 12px 16px;
  appearance: none;
  &:hover {
    color: revert;
  }
`;

const SelectIcon = styled(Icon)`
  position: absolute;
  margin: auto;
`;

const Wrapper = styled.div`
  position: relative;
`;

export default Select;
