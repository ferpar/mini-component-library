/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const ProgressBar = ({ value, size, width = 372 }) => {
  return (
    <Wrapper>
      <VisuallyHidden>{value}%</VisuallyHidden>
      <span id="loadinglabel">{value}%</span>
      <ProgressBarSpan
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin="0"
        aria-valuemax="100"
        width={width}
      >
        <ProgressBarSvg width={width} size={size}>
          <Rail />
          <Fill width={width} value={value} size={size} />
        </ProgressBarSvg>
      </ProgressBarSpan>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;

const ProgressBarSvg = styled.svg`
  width: ${({ width }) => width}px;
  // height: 24px;
  height: ${({ size }) =>
    size === "large" ? "24px" : size === "small" ? "8px" : "12px"};
`;

const ProgressBarSpan = styled.span`
  display: inline-block;
  width: ${({ width }) => width}px;
`;

const Rail = styled.rect`
  width: inherit;
  height: 100%;
  fill: ${COLORS.transparentGray15};
  rx: 4px;
  ry: 4px;
`;

const Fill = styled.rect`
  fill: ${COLORS.primary};
  clip-path: ${(props) =>
    `inset( 0 ${((100 - props.value) * props.width) / 100}px 0 0)`};
  rx: 4px;
  ry: 4px;
  transform: ${({ size }) => size === "large" && `translate(4px, 4px)`};
  height: ${({ size }) =>
    size === "large" ? "16px" : size === "small" ? "8px" : "12px"};
  width: ${({ width }) => width - 8}px;
`;

export default ProgressBar;
