// import React from "react";
import styled from "styled-components";
import { Box } from "@rebass/grid";

const size = {
  small: "5px 20px",
  medium: "10px 30px",
  large: "16px 60px"
};

const borderRadius = {
  square: "5px",
  round: "25px"
};

const Button = styled(Box)`
  border: none;
  border-radius: 20px;
  padding: ${props => size[props.size]};
  background-color: ${props => props.theme.colors.pink};
  color: #fff;
  border-radius: ${props => borderRadius[props.borderRadius]};
  cursor: pointer;
  font-weight: 600;
`;

Button.defaultProps = {
  size: "large",
  borderRadius: "round",
  as: "button"
};

export default Button;
