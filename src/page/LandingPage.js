import React from "react";
import { Container, VStack, useMediaQuery } from "@chakra-ui/react";
import LandingContent from "../component/LandingContent";
import ProposalList from "../component/ProposalList";

const LandingPage = () => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

  return (
    <Container maxW="container.lg" centerContent>
      <VStack pt="24px" spacing={4}>
        <LandingContent />
        <Container
          maxW="container.lg"
          paddingTop={isNotSmallerScreen ? "1px" : "30px"}
          centerContent
        >
          <ProposalList />
        </Container>
      </VStack>
    </Container>
  );
};

export default LandingPage;
