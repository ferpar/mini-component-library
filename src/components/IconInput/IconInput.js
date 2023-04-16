import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
  ...delegated
}) => {
  const styles = React.useMemo(
    () => ({
      small: {
        "--font-size": 14 / 16 + "rem",
        "--line-height": 16 / 14 + "",
        "--icon-size": "16px",
        "--padding": "4px 0 4px 24px",
      },
      large: {
        "--font-size": 18 / 16 + "rem",
        "--line-height": 24 / 18,
        "--icon-size": "24px",
        "--padding": "8px 0 8px 36px",
      },
    }),
    []
  );

  const style = styles[size];

  return (
    <Wrapper style={style}>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper>
        <Icon id={icon} size={style["--icon-size"]} />
      </IconWrapper>
      <TextInput
        type="text"
        placeholder={placeholder}
        width={width}
        {...delegated}
      />
      <VisuallyHidden>{label}</VisuallyHidden>
    </Wrapper>
  );
};

const Wrapper = styled.label`
  position: relative;
  display: block;
  color: ${COLORS.gray700};
  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  height: var(--icon-size);
  width: var(--icon-size);
`;

const TextInput = styled.input`
  border: none;
  border-bottom: 1px solid ${COLORS.black};
  color: inherit;
  font-weight: 700;
  font-size: var(--font-size);
  line-height: var(--line-height);
  padding: var(--padding);
  width: ${(props) => props.width}px;
  outline-offset: 2px;
  &:hover {
    border-bottom: 2px solid ${COLORS.black};
  }
  &:focus {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }
  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`;

export default IconInput;
