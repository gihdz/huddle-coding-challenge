import React from "react";
import { Flex, Box } from "@rebass/grid";
import styled from "styled-components";

import { Logo } from "./icons";

const PinkButton = styled.div`
  border: 1px solid ${props => props.theme.colors.pink};
  border-radius: 20px;
  color: ${props => props.theme.colors.pink};
  cursor: pointer;
  display: inline-block;
  padding: 5px 20px;
`;

export default () => {
  return (
    <Flex
      css={{ height: "100px" }}
      as="header"
      px="30px"
      alignItems="center"
      flexWrap="wrap"
      mb="90px"
    >
      <Box flex="auto">
        <Logo />
      </Box>
      <Box flex="auto" css={{ textAlign: "right" }}>
        <PinkButton>Try It Free</PinkButton>
      </Box>
    </Flex>
  );
};
