import React from "react";
import { Box } from "@rebass/grid";
import styled from "styled-components";
import { Text } from "./Typo";
import Button from "./Button";

const HeroDescription = styled(Text)`
  margin-left: auto;
  margin-right: auto;
  max-width: 450px;
`;

export default () => {
  return (
    <Box css={{ textAlign: "center" }}>
      <Text as="h1" color="darkCyan">
        Build The Community Your Fans Will Love
      </Text>
      <HeroDescription as="p" mb="35px">
        Huddle re-imagines the way we build communities. You have a voice, but
        so does your audience. Create connections with your users as you engage
        in genuine discussion.
      </HeroDescription>
      <Button type="button">Get Started For Free</Button>
    </Box>
  );
};
