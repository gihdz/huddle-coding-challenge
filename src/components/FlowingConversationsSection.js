import React from "react";
import styled from "styled-components";
import { Box, Flex } from "@rebass/grid";
import { Text } from "./Typo";
import FlowingConversationImg from "./images/illustration-flowing-conversation.svg";

const StyledSectionContent = styled(Flex)`
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
`;

const StyledSection = styled(Box)`
  background-color: #fff;
`;

export default () => {
  return (
    <StyledSection as="section">
      <StyledSectionContent
        alignItems="center"
        flexWrap="wrap"
        py={["80px", "30px"]}
      >
        <Box
          flex={["1 0 100%", "1"]}
          mb={["90px", 0]}
          css={{
            textAlign: "center"
          }}
        >
          <img
            alt=""
            src={FlowingConversationImg}
            style={{
              width: "300px"
            }}
          />{" "}
        </Box>{" "}
        <Box flex={["1 0 100%", "1"]}>
          <Box
            mx="auto"
            css={{
              maxWidth: "350px"
            }}
          >
            <Text textAlign={["center", "left"]} px={[0, "20px"]}>
              <Text fontSize="26px" mb="15px" fontWeight="700">
                Flowing Conversations{" "}
              </Text>{" "}
              <Text fontSize="14px">
                You would'nt paginate a conversation in real life, so why do it
                online? Our threads have just-in-time loading for a more natural
                flow.
              </Text>{" "}
            </Text>{" "}
          </Box>{" "}
        </Box>{" "}
      </StyledSectionContent>{" "}
    </StyledSection>
  );
};
