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
  background-color: #00252e;
  color: ${props => props.theme.colors.paleBlue};
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

const InputEmail = styled(Box).attrs({ as: "input", type: "text" })`
  width: 100%;
  display: block;
  border: none;
  border-radius: 3px;
  height: 35px;
`;

const SocialMediaIcon = styled(Box).attrs({ as: "i" })`
  cursor: pointer;
`;

const ContactItem = ({ icon, text }) => {
  return (
    <Flex alignItems="center">
      <Box mr="12px">
        <img width="12" src={icon} alt="" />
      </Box>
      <Box>
        <Text color="paleBlue" fontSize="10px">
          {text}
        </Text>
      </Box>
    </Flex>
  );
};

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
        py={"40px"}
        px="85px"
      >
        <Box order={[1, null, 0]} flex={["1 0 100%", null, "1"]}>
          <Box width="250px">
            <Box mb="20px">
              <Logo forFooter />
            </Box>
            <Text color="paleBlue" fontSize="12px" mb="15px">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
              molestias aliquid tenetur ipsum exercitationem officiis laudantium
              a consequatur libero dolores.
            </Text>
            <Box mb="20px">
              <ContactItem icon={PhoneIcon} text="Phone: +1-543-123-4567" />
              <ContactItem icon={MailIcon} text="example@huddle.com" />
            </Box>
            <Flex>
              <SocialMediaIcon mr="10px" className="fab fa-facebook-square" />
              <SocialMediaIcon mr="10px" className="fab fa-instagram" />
              <SocialMediaIcon className="fab fa-twitter-square" />
            </Flex>
          </Box>
        </Box>
        <Box flex={["1 0 100%", null, "1"]} mb={["90px", null, 0]}>
          <Box width={["250px", null, "100%"]}>
            <Text color="paleBlue" fontWeight="600" mb="18px">
              NEWSLETTER
            </Text>
            <Text
              color="paleBlue"
              fontSize="12px"
              mb="20px"
              width={["100%", null, "240px"]}
            >
              To receive tips on how to grow your community, sign up to our
              weekly newsletter, We'll never send you spam or pass on your email
              address
            </Text>
            <Flex flexWrap="wrap">
              <Box
                mr={[0, null, "30px"]}
                height="100%"
                width={[1, null, "auto"]}
                mb={["12px", null, 0]}
              >
                <InputEmail />{" "}
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
