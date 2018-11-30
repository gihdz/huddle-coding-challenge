import React from "react";
import styled from "styled-components";
import { backgroundImage, space } from "styled-system";
import { Box, Flex } from "@rebass/grid";
import { Text } from "./Typo";
import GrowTogetherImg from "./images/illustration-grow-together.svg";
import GrowTogetherImgDesktopTop from "./images/bg-section-top-desktop-1.svg";
import GrowTogetherImgMobileTop from "./images/bg-section-top-mobile-1.svg";
import GrowTogetherImgDesktopBottom from "./images/bg-section-bottom-desktop-1.svg";
import GrowTogetherImgMobileBottom from "./images/bg-section-bottom-mobile-1.svg";

const StyledGrowSectionContent = styled(Flex)`
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
`;

const StyledGrowSection = styled(Box)`
  background-color: #f5fbff;
`;

const SectionImgTopBottom = styled.div`
  ${space}
  ${backgroundImage}
  background-size: contain;
  background-repeat: no-repeat;
  background-color: #fff;
  height: 0;
  width: 100%;
`;

const getPaddingTop = (width, height) => {
  return `${(height / width) * 100}%`;
};

export default () => {
  return (
    <StyledGrowSection as="section">
      <SectionImgTopBottom
        backgroundImage={[
          `url(${GrowTogetherImgMobileTop})`,
          `url(${GrowTogetherImgDesktopTop})`
        ]}
        pt={[getPaddingTop(375, 112), getPaddingTop(1440, 165)]}
      />
      <StyledGrowSectionContent
        alignItems="center"
        flexWrap="wrap"
        py={["80px", "30px"]}
      >
        <Box order={[1, 0]} flex={["1 0 100%", "1"]}>
          <Box mx="auto" css={{ maxWidth: "350px" }}>
            <Text textAlign={["center", "left"]} px={[0, "20px"]}>
              <Text fontSize="26px" mb="15px" fontWeight="700">
                Grow Together
              </Text>
              <Text fontSize="14px">
                Generate meaningful discussions with your audience and build
                strong, loyal community. Think of the insightful conversations
                you miss out on with a feedback form.
              </Text>
            </Text>
          </Box>
        </Box>
        <Box
          flex={["1 0 100%", "1"]}
          mb={["90px", 0]}
          css={{ textAlign: "center" }}
        >
          <img alt="" src={GrowTogetherImg} style={{ width: "300px" }} />
        </Box>
      </StyledGrowSectionContent>
      <SectionImgTopBottom
        backgroundImage={[
          `url(${GrowTogetherImgMobileBottom})`,
          `url(${GrowTogetherImgDesktopBottom})`
        ]}
        pt={[getPaddingTop(375, 52), getPaddingTop(1440, 139)]}
      />
    </StyledGrowSection>
  );
};
