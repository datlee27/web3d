import { Box, Flex, Text, Image } from "@chakra-ui/react";
import logo3d from "@assets/images/logo-3d-architechture.webp";
import { citySkyview } from "@assets/images";

const AiHuman = () => {
  return (
    <Flex
      h={{ base: "100vh", md: "auto" }}
      w={"full"}
      minH={{ base: "100vh", md: "500px", xl: "800px" }}
      bgImage={`url(${citySkyview})`}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      position="relative"
    >
      {/* Single absolute overlay — heading + logo + description stacked */}
      <Box
        position="absolute"
        bottom={{ base: "4%", md: "6%", lg: "8%" }}
        left={{ base: "4%", md: "50%", lg: "55%" }}
        right={{ base: "4%", md: "2%" }}
      >
        {/*
          Heading has pl = logo width + gap (40+12=52px base, 50+12=62px md, 60+12=72px lg)
          so its left edge aligns with the description text beside the logo
        */}
        <Text
          lineHeight="1.1"
          fontFamily={"Be Vietnam Pro"}
          fontSize={{ base: "28px", md: "36px", lg: "44px" }}
          fontWeight="bold"
          mb={{ base: 2, md: 3, lg: 4 }}
          pl={{ base: "52px", md: "62px", lg: "72px" }}
        >
          AI <br />
          Human
          <br />
          Implementation
        </Text>

        {/* Logo (left) + description text (right), text aligns with heading above */}
        <Flex align="center" gap={3}>
          <Box
            flexShrink={0}
            w={{ base: "40px", md: "50px", lg: "60px" }}
            h={{ base: "40px", md: "50px", lg: "60px" }}
            overflow="hidden"
          >
            <Image
              src={logo3d}
              w="70%"
              h="70%"
              objectFit="cover"
              objectPosition="left center"
            />
          </Box>
          <Text
            fontSize={{ base: "12px", md: "14px", lg: "16px" }}
            maxW={{ base: "220px", md: "280px", lg: "340px" }}
          >
            AI human puts realistic digital people into 3D scenes for{" "}
            architectural renders, virtual tours and product showcases.
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
};

export default AiHuman;
