import React from "react";
import styled from "styled-components";
import { backgroundImage, space } from "styled-system";
import { Box, Flex } from "@rebass/grid";
import { Text } from "./Typo";
import PhoneIcon from "./icons/icon-phone.svg";
import MailIcon from "./icons/icon-email.svg";
import FooterImgDesktopTop from "./images/bg-footer-top-desktop.svg";
import FooterImgMobileTop from "./images/bg-footer-top-mobile.svg";
import { Logo } from "./icons";
import Button from "./Button";

const StyledSectionContent = styled(Flex)`
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
`;

const StyledSection = styled(Box)`
  background-color: #002932;
  color: #fff;
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

const InputEmail = styled(Box)`
  border: none;
  border-radius: 3px;
  height: 35px;
`;
const getPaddingTop = (width, height) => {
  return `${(height / width) * 100}%`;
};

export default () => {
  return (
    <StyledSection as="section">
      <SectionImgTopBottom
        backgroundImage={[
          `url(${FooterImgMobileTop})`,
          `url(${FooterImgDesktopTop})`
        ]}
        pt={[getPaddingTop(375, 53), getPaddingTop(1440, 158)]}
      />
      <StyledSectionContent
        flexDirection={["column", null, "row"]}
        alignItems="center"
        flexWrap="wrap"
        py={["80px", "30px"]}
        px="85px"
      >
        <Box order={[1, null, 0]} flex={["1 0 100%", null, "1"]}>
          <Box width="220px">
            <Box mb="20px">
              <Logo forFooter />
            </Box>
            <Text fontSize="10px" mb="15px">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
              molestias aliquid tenetur ipsum exercitationem officiis laudantium
              a consequatur libero dolores.
            </Text>
            <Flex alignItems="center">
              <Box mr="12px">
                <img width="12" src={PhoneIcon} alt="" />
              </Box>
              <Box>
                <Text fontSize="10px">Phone: +1-543-123-4567</Text>
              </Box>
            </Flex>
            <Flex alignItems="center" mb="20px">
              <Box mr="12px">
                <img width="12" src={MailIcon} alt="" />
              </Box>
              <Box>
                <Text fontSize="10px">example@huddle.com</Text>
              </Box>
            </Flex>
            <Flex>
              <Box as="i" mr="10px" className="fab fa-facebook-square" />
              <Box as="i" mr="10px" className="fab fa-instagram" />
              <Box as="i" className="fab fa-twitter-square" />
            </Flex>
          </Box>
        </Box>
        <Box flex={["1 0 100%", null, "1"]} mb={["90px", null, 0]}>
          <Box width={["200px", null, "100%"]}>
            <Text fontWeight="600" mb="18px">
              NEWSLETTER
            </Text>
            <Text fontSize="10px" mb="20px" width={["100%", null, "240px"]}>
              To receive tips on how to grow your community, sign up to our
              weekly newsletter, We'll never send you spam or pass on your email
              address
            </Text>
            <Flex flexWrap="wrap">
              <Box
                mr="30px"
                height="100%"
                width={[1, null, "auto"]}
                mb={["20px", null, 0]}
              >
                <InputEmail
                  as="input"
                  type="text"
                  width={["200px", null, "auto"]}
                />{" "}
              </Box>
              <Box width={[1, null, "auto"]} css={{ textAlign: "right" }}>
                <Button size="medium" borderRadius="square">
                  Subscribe
                </Button>
              </Box>
            </Flex>
          </Box>
        </Box>
      </StyledSectionContent>
    </StyledSection>
  );
};
