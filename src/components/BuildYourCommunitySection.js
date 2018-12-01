import React from "react";
import styled from "styled-components";
import { Box } from "@rebass/grid";
import { Text } from "./Typo";
import Button from "./Button";

const StyledSectionContent = styled(Box)`
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
`;

const StyledSection = styled(Box)`
  text-align: center;
`;

export default () => {
  return (
    <StyledSection as="section">
      <StyledSectionContent py={["120px", "110px"]}>
        <Text as="h2" fontWeight="700" fontSize="22px" mb="25px">
          Ready To Build Your Community?
        </Text>
        <Button>Get Started For Free</Button>
      </StyledSectionContent>{" "}
    </StyledSection>
  );
};
