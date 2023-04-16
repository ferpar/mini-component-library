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
        <ChevronIcon id="chevron-down" strokeWidth={1} size={24} />
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
  padding: 12px 16px;
`;

const OptionText = styled.span`
  color: ${COLORS.gray700};
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.2;
  vertical-align: super;
`;

const ChevronIcon = styled(Icon)`
  display: inline-block;
  color: ${COLORS.gray700};
`;

export default Select;
