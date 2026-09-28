import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";
import logo3d from "@assets/aboutus/service-logo-studio.png";

interface Feature {
  title: string;
  description: string;
}

interface WhyWorkWithUsSubProps {
  title: React.ReactNode;
  features: Feature[];
}

const WhyWorkWithUsSub = ({ title, features }: WhyWorkWithUsSubProps) => {
  return (
    <Flex
      ml={{ base: "40px", md: "80px", xl: "262px" }}
      mr={{ base: "40px", md: "40px", xl: "120px" }}
      py={{ base: "80px", md: "120px" }}
      maxW="1396px"
      direction="column"
      align="flex-start"
      gap="50px"
    >
      {/* Title Box */}
      <Flex
        width="full"
        direction={{ base: "column", md: "row" }}
        align={{ base: "flex-start", md: "center" }}
        justify="space-between"
        gap="20px"
      >
        <Heading
          fontFamily="'Be Vietnam Pro', sans-serif"
          fontWeight={700}
          fontSize={{ base: "36px", md: "56px" }}
          lineHeight="1.2"
          bgGradient="linear(90deg, #DC602D 0%, #FDE5CB 100%)"
          bgClip="text"
          flexShrink={0}
        >
          {title}
        </Heading>

        {/* Logo — Right side */}
        <Box w="56px" h="60px" flexShrink={0}>
          <Image src={logo3d} w="100%" h="100%" objectFit="contain" />
        </Box>
      </Flex>

      {/* Features Row */}
      <Flex
        direction={{ base: "column", md: "row" }}
        align="flex-start"
        gap={{ base: "40px", md: "40px", lg: "89px" }}
        w="full"
      >
        {features.slice(0, 3).map((feature, idx) => (
          <Flex
            key={idx}
            direction="column"
            align="flex-start"
            gap="10px"
            flex="1"
            minW="0"
          >
            {/* Feature Title Row */}
            <Flex direction="row" align="center" py="10px" w="full" minH="64px">
              <Text
                fontFamily="'Be Vietnam Pro', sans-serif"
                fontWeight={700}
                fontSize="24px"
                lineHeight="30px"
                color="#000000"
              >
                {feature.title}
              </Text>
            </Flex>

            {/* Feature Description Row */}
            <Flex direction="row" align="flex-start" w="full">
              <Text
                fontFamily="'Be Vietnam Pro', sans-serif"
                fontWeight={400}
                fontSize="20px"
                lineHeight="25px"
                color="#686868"
              >
                {feature.description}
              </Text>
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default WhyWorkWithUsSub;
