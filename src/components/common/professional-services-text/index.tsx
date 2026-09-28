import { Flex, Text, Container } from "@chakra-ui/react";

const ProfessionalServicesText = () => {
  return (
    <Container maxW="container.xl" py={{ base: 10, md: 20 }}>
      <Flex direction="column" align="flex-start" gap="10px" width="100%">
        {/* Line 1: Professional 3D Rendering Services */}
        <Flex width="100%" align="center" py="10px">
          <Text
            fontFamily="'Be Vietnam Pro', sans-serif"
            fontWeight={700}
            fontSize={{ base: "32px", md: "48px", lg: "62px" }}
            lineHeight="1.2"
            bgGradient="linear(to-r, #FF682A 0%, #FDE5CB 100%)"
            bgClip="text"
          >
            Professional 3D Rendering Services
          </Text>
        </Flex>

        {/* Line 2: That Turn Ideas Into Market-Ready Visuals. */}
        <Flex
          width="100%"
          justify="flex-end"
          align="center"
          py="10px"
          pl={{ base: 0, md: "70px" }}
        >
          <Text
            fontFamily="'Be Vietnam Pro', sans-serif"
            fontWeight={700}
            fontSize={{ base: "32px", md: "48px", lg: "62px" }}
            lineHeight="1.2"
            textAlign="right"
            bgGradient="linear(to-r, #FDE5CB 0%, #DC602D 100%)"
            bgClip="text"
          >
            That Turn Ideas Into Market-Ready Visuals.
          </Text>
        </Flex>
      </Flex>
    </Container>
  );
};

export default ProfessionalServicesText;
