/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const ProgressBar = ({ value, size }) => {
  return (
    <Wrapper>
      <VisuallyHidden>{value}%</VisuallyHidden>
      <ValueSpan size={size} id="loadinglabel">
        {value}%
      </ValueSpan>
      <ProgressBarSpan
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <ProgressBarSvg size={size}>
          <Rail size={size} />
          <Fill value={value} size={size} />
        </ProgressBarSvg>
      </ProgressBarSpan>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const ValueSpan = styled.span`
  position: relative;
  display: inline-block;
  width: 10%;
  top: ${({ size }) => (size === "large" ? "5px" : "0")}};
`;

const ProgressBarSpan = styled.span`
  display: inline-block;
  position: absolute;
  top: 0;
  left: 10%;
  display: inline-block;
  // width: ${({ width }) => width}px;
  width: 90%;
`;

const ProgressBarSvg = styled.svg`
  // width: ${({ width }) => width}px;
  display: inline-block;
  width: 100%;
  height: ${({ size }) =>
    size === "large" ? "24px" : size === "small" ? "8px" : "12px"};
`;

const Rail = styled.rect`
  display: inline-block;
  width: 100%;
  height: 100%;
  fill: ${COLORS.transparentGray15};
  rx: 4px;
  ry: 4px;
  height: ${({ size }) =>
    size === "large" ? "24px" : size === "small" ? "8px" : "12px"};
`;

const Fill = styled.rect`
  fill: ${COLORS.primary};
  clip-path: ${(props) => `inset( 0 ${100 - props.value}% 0 0)`};
  rx: 4px;
  ry: 4px;
  transform: ${({ size }) => size === "large" && `translate(4px, 4px)`};
  height: ${({ size }) =>
    size === "large" ? "16px" : size === "small" ? "8px" : "12px"};
  width: 100%;
`;

export default ProgressBar;
