import React from "react";
import { Box, Flex } from "@rebass/grid";
import styled from "styled-components";
import { Text } from "./Typo";
import Button from "./Button";
import Screenmockup from "./images/screen-mockups.svg";
import IconCommunities from "./images/icon-communities.svg";
import IconMessages from "./images/icon-messages.svg";

const HeroDescription = styled(Text)`
  margin-left: auto;
  margin-right: auto;
  max-width: 450px;
`;

const ScreenMockupsContainer = styled(Box)`
  max-width: 650px;
  padding: 0 25px;
  margin-left: auto;
  margin-right: auto;
`;

const IconContainer = styled.div`
  text-align: left;
  margin-left: 50px;
`;

const IconImg = styled.img`
  width: 35px;
`;
const StatisticItem = styled(Box)`
  width: 250px;
`;
const StatisticsContainer = styled(Flex)`
  max-width: 760px;
`;

export default () => {
  return (
    <Box css={{ textAlign: "center" }} mb="70px">
      <Box px="15px">
        <Text as="h1" color="darkCy.an">
          Build The Community Your Fans Will Love
        </Text>
        <HeroDescription as="p" mb={["50px", "35px"]}>
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.
        </HeroDescription>
      </Box>
      <Button mb={["100px", "60px"]} type="button">
        Get Started For Free
      </Button>
      <ScreenMockupsContainer mb={["120px", null, "75px"]}>
        <img
          style={{ width: "100%" }}
          src={Screenmockup}
          alt="screen mockups"
        />
      </ScreenMockupsContainer>
      <StatisticsContainer
        mx="auto"
        alignItems="center"
        justifyContent="spaceBetween"
        flexWrap="wrap"
      >
        <Box width={[1, null, 1 / 2]} mb={["100px", null, 0]}>
          <StatisticItem mx="auto">
            <IconContainer>
              <IconImg src={IconCommunities} />
            </IconContainer>
            <Text mb="12px" fontWeight="700" fontSize="60px">
              1.4k+
            </Text>
            <Text fontSize="16px">Communities Formed</Text>
          </StatisticItem>
        </Box>
        <Box width={[1, null, 1 / 2]}>
          <StatisticItem mx="auto">
            <IconContainer>
              <IconImg src={IconMessages} />
            </IconContainer>
            <Text mb="12px" fontWeight="700" fontSize="60px">
              2.7m+
            </Text>
            <Text fontSize="16px">Messages Sent</Text>
          </StatisticItem>
        </Box>
      </StatisticsContainer>
    </Box>
  );
};
