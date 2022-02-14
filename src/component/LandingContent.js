import React, { useContext } from "react";
import {
  Heading,
  Stack,
  Box,
  Text,
  Container,
  Flex,
  useMediaQuery,
} from "@chakra-ui/react";
import Clock from "../component/Clock";
import NFTTracker from "./NFTIcons/NFTTracker";
import { UserContext } from "../contexts/UserContext";

const LandingContent = () => {
  const { state } = useContext(UserContext);
  const votePower = state.nftCount * 5;
  const voteRemaining = votePower - state.userVoteCount;
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

  return (
    <>
      <Container
        maxW="container.lg"
        color="white"

        // pl={{ sm: "12px" }}
      >
        <Stack>
          <Flex
            direction={isNotSmallerScreen ? "row" : "column"}
            p={isNotSmallerScreen ? "1px" : "40px"}
            pb={isNotSmallerScreen ? "1px" : "20px"}

            // spacing="200px"
            alignSelf="flex-start"
            justify="space-between"
            wrap="wrap"
          >
            <Box display={{ md: "flex" }} 
           
             
             >
              <Box flexShrink={0}
               
              >
                <Heading
                  bgGradient="linear-gradient(160deg, #CB5EEE 0%, #4BE1EC 90%);
                color: #9D8EEE;"
                  bgClip="text"
                  fontWeight="extrabold"
                  fontSize={isNotSmallerScreen ? "28px" : "26px"}
                  p="1"
                  align={isNotSmallerScreen ? "left" : "center"}
                  justify={isNotSmallerScreen ? "left" : "center"}
                >
                  Decide the future
                </Heading>
              </Box>

              <Box flexShrink={0}>
                <Heading
                  fontWeight="extrabold"
                  color="#0A152C"
                  fontSize={isNotSmallerScreen ? "28px" : "25px"}
                  p="1"
                  align={isNotSmallerScreen ? "left" : "center"}
                  justify={isNotSmallerScreen ? "left" : "center"}
                >
                  of this community
                </Heading>
              </Box>
            </Box>

            <Box
              display={isNotSmallerScreen ? "block" : "none"}
              w="200px"
            ></Box>

            <Box
              align={isNotSmallerScreen ? "right" : "center"}
              w="240px"
              flex="1"
              pt={isNotSmallerScreen ? "" : "18px"}
            >
              <NFTTracker />
            </Box>
          </Flex>
        </Stack>

        <Stack>
          <Flex
            direction={isNotSmallerScreen ? "row" : "column"}
            p={isNotSmallerScreen ? "1px" : "0px"}
            alignSelf="flex-start"
            justify="space-between"
            wrap="wrap"
          >
            <Box display={{ md: "flex" }} align="left" justify="left">
              <Box flexShrink={0}>
                <Heading
                  fontWeight="light"
                  color="#4C5467"
                  fontSize="14px"
                  pt={isNotSmallerScreen ? "1" : "3px"}
                  pl={isNotSmallerScreen ? "1" : "35px"}
                  pr={isNotSmallerScreen ? "1" : "35px"}
                  overflow="hidden"
                  width={isNotSmallerScreen ? "364px" : "100%"}
                  // textAlign= 'justify'
                  // textJustify='inter-word'
                >
                  This is the place to vote on your favorite proposals, get
                  funded, and reach world domination. The more NFTs you have,
                  the more influence you got here (1 NFT = 5 points). When the
                  countdown ends, we launch the most hype idea and replenish
                  your voting power for the next cycle.
                </Heading>
              </Box>
            </Box>
            <Box
              // display={isNotSmallerScreen ? "block" : "none"}
              w="100px"
            ></Box>
            <Box
              paddingTop="20px"
              verticalAlign="middle"
              alignSelf={isNotSmallerScreen ? "right" : "center"}

              // ml="90px"
              // w='380px'
              // ml={{ base: "390px", md: "390px", sm: "10%" }}
            >
              <Clock />
            </Box>
            {state.nftCount > 0 && (
              <Box>
                <Text
                  color="#6699FF"
                  paddingLeft="5px"
                  fontWeight="bold"
                  fontSize="12px"
                  paddingTop="5px"
                  width="200px"
                >
                  {voteRemaining} / {votePower} votes remaining
                </Text>
              </Box>
            )}
          </Flex>
        </Stack>
      </Container>
    </>
  );
};

export default LandingContent;
