import { Box, Flex, Heading, Text, VStack, Image } from "@chakra-ui/react";
import dragonBridge from "@assets/images/dragon-bridge.webp";
import logo3d from "@assets/images/logo-3d-architechture.webp";

const HomeHero = () => {
  return (
    <Box
      w="full"
      h="100vh"
      bgImage={`url(${dragonBridge})`}
      bgSize="cover"
      bgPosition="center"
      position="relative"
    >
      {/* Dark overlay for text readability */}
      <Box
        position="absolute"
        top={0}
        left={0}
        w="full"
        h="full"
        bg="blackAlpha.300"
      />

      <Flex
        h="full"
        direction="column"
        justify={{ base: "space-between", md: "space-between" }}
        px={{ base: 6, md: 10, lg: 20 }}
        py={{ base: 12, md: 24 }}
        position="relative"
        zIndex={1}
        color="white"
      >
        {/* Main large text layout */}
        <Box
          mt={{ base: "15vh", md: "10vh" }}
          w="full"
        >
          {/* Row 1: (2) our vision we visualize */}
          <Flex align="baseline" mb={4} ml={{ base: 0, md: "10%", lg: "310px" }}>
            <Text
              fontSize={{ base: "10px", md: "14px" }}
              fontWeight="bold"
              mr={2}
              position="relative"
              top={{ base: "-10px", md: "-30px" }}
            >
              /2
            </Text>
            <Heading fontSize={{ base: "40px", md: "72px" }} lineHeight="0.9" letterSpacing="tight">
              our vision
            </Heading>
            <Text fontSize={{ base: "sm", md: "xl" }} ml={4} fontWeight="normal" display={{ base: "none", sm: "block" }}>
              we visualize
            </Text>
          </Flex>

          {/* Row 2: (1) your imagination you image */}
          <Flex align="baseline">
            <Text
              fontSize={{ base: "10px", md: "14px" }}
              fontWeight="bold"
              mr={2}
              position="relative"
              top={{ base: "-10px", md: "-30px" }}
            >
              /1
            </Text>
            <Heading fontSize={{ base: "40px", md: "72px" }} lineHeight="0.9" letterSpacing="tight">
              your imagination
            </Heading>
            <Text fontSize={{ base: "sm", md: "xl" }} ml={4} fontWeight="normal" display={{ base: "none", sm: "block" }}>
              you image
            </Text>
          </Flex>
        </Box>

        {/* Bottom right text with Logo */}
        <Box
          alignSelf={{ base: "flex-start", md: "flex-end" }}
          maxW={{ base: "full", md: "700px" }}
          mb={{ base: 4, md: 0 }}
        >
          <VStack align="flex-start" spacing={6}>
            <Heading fontSize={{ base: "24px", md: "40px", lg: "48px" }}>
              Award-Winning <br />
              3d Rendering and Architectural <br />
              Visualization Studio
            </Heading>

            <Box position="relative" pl={{ base: 0, md: "0px" }}>
              {/* Logo icon - hidden on mobile to save space or adjust position */}
              <Box
                position="absolute"
                left="-50px"
                top="-1"
                w="60px"
                h="60px"
                overflow="hidden"
                display={{ base: "none", lg: "block" }}
              >
                <Box w="61px" h="60px" overflow="hidden">
                  <Image
                    src={logo3d}
                    w="70%"
                    h="70%"
                    objectFit="cover"
                    objectPosition="left center"
                  />
                </Box>
              </Box>

              <Text fontSize={{ base: "xs", sm: "sm", md: "lg" }}>
                Creating a new reality based on your personal vision through 3D
                rendering.
                <br />
                We provide 3D visualization services for designers, architects,
                and real estate managers.
              </Text>
            </Box>
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
};

export default HomeHero;
