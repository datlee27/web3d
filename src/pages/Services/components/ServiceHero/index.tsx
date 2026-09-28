import { Box, Flex, Heading, Text, Image, Button } from "@chakra-ui/react";
import logo3d from "@assets/aboutus/service-logo-studio.png";

interface ServiceHeroProps {
  imageLink: string;
  imageTitle: React.ReactNode;
  description: string;
}

const ServiceHero: React.FC<ServiceHeroProps> = ({
  imageLink,
  imageTitle,
  description,
}) => {
  return (
    <Box
      w="full"
      h="100vh"
      bgImage={`url(${imageLink})`}
      bgSize="cover"
      bgPosition="center"
      position="relative"
      display="flex"
      alignItems={{ base: "flex-start", md: "center" }}
    >
      {/* Dark overlay */}
      <Box
        position="absolute"
        top={0}
        left={0}
        w="full"
        h="full"
        bg="blackAlpha.300"
      />

      {/* Frame 154 — positioned content block */}
      <Flex
        direction="column"
        align="flex-start"
        gap={0}
        zIndex={1}
        ml={{ base: "20px", md: "80px", xl: "262px" }}
        mt={{ base: "100%", md: 0 }}
        maxW="688px"
      >
        {/* Logo — 56×60px */}
        <Box
          w={{ base: "26px", md: "56px" }}
          h={{ base: "28px", md: "60px" }}
          overflow="hidden"
          flexShrink={0}
          mb={0}
        >
          <Image
            src={logo3d}
            w="100%"
            h="100%"
            objectFit="contain"
            objectPosition="left center"
          />
        </Box>

        {/* Frame 8 — Heading row */}
        <Flex direction="row" align="center" py="10px" w="full" minH="10px">
          <Heading
            fontFamily="'Be Vietnam Pro', sans-serif"
            fontWeight={700}
            fontSize={{ base: "14px", md: "40px", lg: "56px" }}
            lineHeight="1.2"
            color="#FFFFFF"
          >
            {imageTitle}
          </Heading>
        </Flex>

        {/* Frame 9 — Description row */}
        <Flex direction="row" align="flex-start" w="full" minH="100px">
          <Text
            fontFamily="'Be Vietnam Pro', sans-serif"
            fontWeight={400}
            fontSize={{ base: "13px", md: "16px" }}
            lineHeight={{ base: "18px", md: "20px" }}
            color="#FFFFFF"
            maxW="526px"
          >
            {description}
          </Text>
        </Flex>
      </Flex>
      {/* Get Estimate Button — mobile only, bottom of hero */}
      <Box
        display={{ base: "block", md: "none" }}
        position="absolute"
        bottom="0px"
        left={0}
        w="full"
        px="34px"
        zIndex={2}
      >
        <Button
          as="a"
          href="/contacts"
          w="full"
          h="40px"
          py="10px"
          gap="10px"
          bg="#FF6B35"
          color="white"
          fontFamily="'Be Vietnam Pro', sans-serif"
          fontWeight={600}
          fontSize="16px"
          borderRadius="20px"
          _hover={{ bg: "#E85A2D" }}
          _active={{ bg: "#cc4f28" }}
          transition="all 0.2s ease"
          boxShadow="md"
        >
          Get Estimate
        </Button>
      </Box>
    </Box>
  );
};

export default ServiceHero;
