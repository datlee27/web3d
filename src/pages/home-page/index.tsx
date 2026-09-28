import { Box, Flex, Text, Image } from "@chakra-ui/react";
import HomeHero from "./components/hero";
import ExpertiseGallery from "./components/expertise-gallery";
import GradientText from "@components/gradient-text";
import PortfolioGrid from "./components/portfolio-grid";
import type { PortfolioItem } from "./components/portfolio-grid";
import TrustedBy from "@components/work-page/TrustedBy";
import AutoGallery from "../../components/common/auto-gallery";
import Faq from "./components/faq";
import Pipeline from "../../components/common/pipeline";
import Approach from "./components/approach";
import AiHuman from "./components/ai-human";
import {
  anh1Gallery,
  anh2Gallery,
  anh3Gallery,
  anh4Gallery,
  city,
  city2,
  company,
  dragonBridge,
  game2,
  logoWhite,
} from "@assets/images";
import { TestimonialProvider } from "../../components/common/testimonial/TestimonialContext";
import GooeyCursorWrapper from "../../components/common/testimonial/GooeyCursorWrapper";
import TestimonialWatermark from "../../components/common/testimonial/TestimonialWatermark";
import TestimonialGrid from "../../components/common/testimonial/TestimonialGrid";
import { testimonialsData } from "../../components/common/testimonial/testimonialsData";

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "City Simulation",
    image: city,
    tags: ["Visualize", "Render"],
  },
  {
    id: 2,
    title: "T House",
    image: anh1Gallery,
    tags: ["Visualize", "Render"],
  },
  {
    id: 3,
    title: "New Zealand",
    image: city2,
    tags: ["Visualize", "Render"],
  },
  {
    id: 4,
    title: "New York",
    image: anh2Gallery,
    tags: ["Visualize", "Render"],
  },
  {
    id: 5,
    title: "Wonderspace",
    image: game2,
    tags: ["AR/VR", "Render"],
  },
  {
    id: 6,
    title: "Lively Grotesque",
    image: anh3Gallery,
    tags: ["AR/VR", "Render"],
  },
  {
    id: 7,
    title: "The Era of Gen F",
    image: anh4Gallery,
    tags: ["AR/VR", "Render"],
  },
  {
    id: 8,
    title: "Dragon Bridge",
    image: dragonBridge,
    tags: ["Visualize", "Render"],
  },
  {
    id: 9,
    title: "Education Web",
    image: company,
    tags: ["Website"],
  },
];

const HomePage = () => {
  return (
    <Box position="relative" w="full" minH="100vh">
      <HomeHero />

      <Flex
        h={{ base: "120px", md: "180px" }}
        align="center"
        justify="center"
        w="full"
        bg="white"
      >
        <GradientText fontSize={{ base: "24px", md: "30px" }} lineHeight="38px">
          Our Expertise
        </GradientText>
      </Flex>

      <ExpertiseGallery />
      <Flex
        w="full"
        minH={{ base: "auto", md: "450px" }}
        bg="white"
        direction="column"
        justify="center"
        align="center"
        px={{ base: "20px", md: "40px", lg: "80px" }} // Khoảng cách an toàn 2 bên
        py={{ base: "60px", md: "0" }}
      >
        <Flex
          w="full"
          maxW="1440px"
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align={{ base: "flex-start", md: "flex-end" }}
          gap={{ base: "30px", md: "20px" }}
        >
          {/* Heading + Logo Container for Mobile */}
          <Flex 
            direction={{ base: "row", md: "column" }} 
            w="full" 
            justify="space-between" 
            align={{ base: "center", md: "flex-start" }}
            flex={{ md: "2" }}
          >
            {/* Khối bên trái: "We visualize..." */}
            <Box maxW={{ base: "70%", md: "800px", lg: "1100px" }}>
              <GradientText
                fontSize={{ base: "30px", md: "55px", lg: "75px" }}
                lineHeight="1.1"
                fontWeight="bold"
                letterSpacing="-0.02em"
              >
                We visualize architectural <br /> with intention.
              </GradientText>
            </Box>

            {/* Logo Container - Only visible next to text on Base, above description on MD */}
            <Box 
              w={{ base: "40px", md: "60px" }} 
              h={{ base: "40px", md: "60px" }} 
              mb={{ md: "25px" }} 
              display={{ base: "block", md: "none" }}
              overflow="hidden"
            >
              <Image
                src={logoWhite}
                w="full"
                h="full"
                objectFit="contain"
              />
            </Box>
          </Flex>

          {/* Khối bên phải/dưới: Description (and Logo for Desktop) */}
          <Flex
            direction="column"
            align={{ base: "flex-start", md: "flex-end" }}
            textAlign={{ base: "left", md: "right" }}
            flex={{ md: "1" }}
            minW={{ md: "350px" }}
          >
            {/* Desktop Logo: Hidden on base, shown on md */}
            <Box 
              w="60px" 
              h="60px" 
              mb="25px" 
              display={{ base: "none", md: "block" }}
              overflow="hidden"
            >
              <Image
                src={logoWhite}
                w="full"
                h="full"
                objectFit="contain"
              />
            </Box>

            {/* Description Text */}
            <Text
              fontFamily="'Be Vietnam Pro'"
              fontSize={{ base: "13px", md: "15px", lg: "16px" }}
              lineHeight="1.6"
              color="black"
              maxW={{ base: "100%", md: "400px" }}
            >
              From 3D renders and animations to branding and web development –
              we help architects and developers tell stories that move projects
              forward.
            </Text>
          </Flex>
        </Flex>
      </Flex>

      <PortfolioGrid bg="white" items={portfolioItems}></PortfolioGrid>

      <Box 
        bg="white" 
        paddingTop={"70px"} 
        h={{ base: "auto", md: "800px" }} 
        w={"full"}
        px={{ base: "20px", md: "40px", lg: "80px" }}
      >
        <Box textAlign="left">
          <GradientText fontSize={{ base: "18px", md: "38px" }}>
            Our Case Studies
          </GradientText>
        </Box>
        <AutoGallery />
      </Box>

      <TrustedBy />
      <AiHuman />


      <TestimonialProvider>
        <GooeyCursorWrapper>
          <Faq />
          <TestimonialWatermark text={"what people\nthink about us"} />
          <TestimonialGrid testimonials={testimonialsData} />
          <Pipeline />
        </GooeyCursorWrapper>
      </TestimonialProvider>

      <Approach />
    </Box>
  );
};

export default HomePage;
