import { Flex, Heading, Text, Container } from "@chakra-ui/react";

interface FeatureCardProps {
  title: string;
  description: string;
}

const FeatureCard = ({ title, description }: FeatureCardProps) => (
  <Flex
    direction="column"
    align="flex-start"
    gap="10px"
    flex="1"
    minW={{ base: "100%", md: "300px" }}
  >
    {/* Title row */}
    <Flex direction="row" align="center" py="10px" w="100%">
      <Text
        fontFamily="'Be Vietnam Pro', sans-serif"
        fontWeight={700}
        fontSize="24px"
        lineHeight="30px"
        color="#000000"
      >
        {title}
      </Text>
    </Flex>

    {/* Description row */}
    <Flex direction="row" align="flex-start" w="100%">
      <Text
        fontFamily="'Be Vietnam Pro', sans-serif"
        fontWeight={400}
        fontSize="20px"
        lineHeight="1.4"
        color="#686868"
      >
        {description}
      </Text>
    </Flex>
  </Flex>
);

const FEATURES: FeatureCardProps[] = [
  {
    title: "High-End Visual Quality",
    description:
      "We deliver high-quality, photorealistic renderings that balance visual realism with clarity and accuracy. Every visual is designed to communicate ideas effectively, supporting decision-making, presentations, and marketing needs.",
  },
  {
    title: "Focused Project Management",
    description:
      "Work with a dedicated project manager who oversees scope, timelines, and feedback throughout the process. This ensures clear communication, structured revisions, and consistent alignment with your design vision from start to finish.",
  },
  {
    title: "Fast and Reliable Turnaround",
    description:
      "Our team of 35+ experienced artists delivers high-quality renderings on dependable timelines, keeping your projects on track and decisions moving forward.",
  },
];

const WhyWorkWithUsMain = () => {
  return (
    <Container maxW="container.xl" py={{ base: 10, md: 20 }}>
      {/* Section heading */}
      <Flex direction="row" align="center" py="10px" w="100%" mb={10}>
        <Heading
          fontFamily="'Be Vietnam Pro', sans-serif"
          fontWeight={700}
          fontSize={{ base: "32px", md: "48px", lg: "56px" }}
          lineHeight="1.2"
          bgGradient="linear(90deg, #FF682A 0%, #FDE5CB 100%)"
          bgClip="text"
        >
          Why Work With Us for 3D Rendering Services
        </Heading>
      </Flex>

      {/* Feature grid */}
      <Flex
        direction={{ base: "column", md: "row" }}
        align="flex-start"
        gap={{ base: 10, lg: "89px" }}
        w="100%"
      >
        {FEATURES.map((feature, idx) => (
          <FeatureCard
            key={idx}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </Flex>
    </Container>
  );
};

export default WhyWorkWithUsMain;
