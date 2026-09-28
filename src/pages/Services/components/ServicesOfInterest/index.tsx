import { Flex, Text, Container, Box } from "@chakra-ui/react";
import GradientText from "@components/gradient-text";

const ServicesOfInterest = () => {
  return (
    <Container maxW="container.xl" py={{ base: 10, md: 20 }}>
      <Flex
        width="100%"
        flexDirection={{ base: "column", lg: "row" }}
        alignItems={{ base: "flex-start", lg: "center" }}
        justifyContent="space-between"
        gap={{ base: "20px", lg: "40px" }}
        zIndex={10}
      >
        {/* Title */}
        <Box flex="1" maxW={{ base: "100%", lg: "876px" }}>
          <GradientText
            width="100%"
            fontFamily="Be Vietnam Pro"
            fontWeight="700"
            fontSize={{ base: "32px", md: "48px", lg: "62px" }}
            lineHeight="1.2"
          >
            3D Rendering Services <br /> That May Interest You
          </GradientText>
        </Box>

        {/* Description */}
        <Box flex="1" maxW={{ base: "100%", lg: "554px" }}>
          <Text
            fontFamily="Be Vietnam Pro"
            fontStyle="normal"
            fontWeight="400"
            fontSize="16px"
            lineHeight="1.5"
            textAlign={{ base: "left", lg: "right" }}
            color="#000000"
          >
            Dolor sit amet, consectetur adipiscing elit. In nibh justo, commodo
            eget sapien at, consectetur viverra ipsum. Vivamus faucibus orci sed
            purus tincidunt, vel dictum turpis sagittis. Vestibulum laoreet
            varius ante, et finibus metus porta eu. Curabitur ultrices venenatis
            leo eu.
          </Text>
        </Box>
      </Flex>
    </Container>
  );
};

export default ServicesOfInterest;
