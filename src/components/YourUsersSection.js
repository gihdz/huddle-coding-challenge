import React from "react";
import styled from "styled-components";
import { backgroundImage, space } from "styled-system";
import { Box, Flex } from "@rebass/grid";
import { Text } from "./Typo";
import YourUsersImg from "./images/illustration-your-users.svg";
import YourUsersImgDesktopTop from "./images/bg-section-top-desktop-2.svg";
import YourUsersImgMobileTop from "./images/bg-section-top-mobile-2.svg";
import YourUsersImgDesktopBottom from "./images/bg-section-bottom-desktop-2.svg";
import YourUsersImgMobileBottom from "./images/bg-section-bottom-mobile-2.svg";

const StyledSectionContent = styled(Flex)`
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
`;

const StyledSection = styled(Box)`
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
    <StyledSection as="section">
      <SectionImgTopBottom
        backgroundImage={[
          `url(${YourUsersImgMobileTop})`,
          `url(${YourUsersImgDesktopTop})`
        ]}
        pt={[getPaddingTop(375, 103), getPaddingTop(1440, 156)]}
      />
      <StyledSectionContent
        alignItems="center"
        flexWrap="wrap"
        py={["80px", "30px"]}
      >
        <Box order={[1, 0]} flex={["1 0 100%", "1"]}>
          <Box mx="auto" css={{ maxWidth: "350px" }}>
            <Text textAlign={["center", "left"]} px={[0, "20px"]}>
              <Text as="h2" fontSize="26px" mb="15px" fontWeight="700">
                Your Users
              </Text>
              <Text fontSize="14px">
                It takes no time at all to integrate Huddle with your app's
                authentication solution. This means, once signed in to your app,
                your users can start chatting inmediately.
              </Text>
            </Text>
          </Box>
        </Box>
        <Box
          flex={["1 0 100%", "1"]}
          mb={["90px", 0]}
          css={{ textAlign: "center" }}
        >
          <img alt="" src={YourUsersImg} style={{ width: "300px" }} />
        </Box>
      </StyledSectionContent>
      <SectionImgTopBottom
        backgroundImage={[
          `url(${YourUsersImgMobileBottom})`,
          `url(${YourUsersImgDesktopBottom})`
        ]}
        pt={[getPaddingTop(375, 101), getPaddingTop(1440, 139)]}
      />
    </StyledSection>
  );
};
