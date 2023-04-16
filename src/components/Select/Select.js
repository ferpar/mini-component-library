import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <PresentationalBit>
        <OptionText>{displayedValue}</OptionText>
        <ChevronIcon id="chevron-down" strokeWidth={2} size={24} />
      </PresentationalBit>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const PresentationalBit = styled.div`
  background-color: ${COLORS.transparentGray15};
  border-radius: 4px;
  color: ${COLORS.gray700};
  font-family: "Roboto", sans-serif;
  height: 43px;
  padding-top: 8px;
  ${NativeSelect}:focus + & {
    outline: 1px solid ${COLORS.primary};
  }
  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }
`;

const OptionText = styled.span`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.2;
  vertical-align: super;
  margin-left: 16px;
  margin-right: 24px;
`;

const ChevronIcon = styled(Icon)`
  display: inline-block;
  margin-right: 18px;
`;

export default Select;
