// src/components/work-details-page/index.tsx
import React from "react";
import {
  Box,
  Container,
  Heading,
  HStack,
  Button,
  Text,
  Grid,
  VStack,
} from "@chakra-ui/react";
import { motion, type Variants } from "framer-motion";
import { useScrollDirection } from "../../hooks/useScrollDirection";

const MotionBox = motion.create(Box as React.ElementType);
const MotionHeading = motion.create(Heading as React.ElementType);
const MotionHStack = motion.create(HStack as React.ElementType);
const MotionVStack = motion.create(VStack as React.ElementType);

interface WorkDetailHeroProps {
  image: string;
  title: string;
  tags: string[];
  logo?: string;
}

const heroVariants: Variants = {
  hidden: { opacity: 0, scale: 1.1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.2, ease: "easeOut" },
  },
};

const contentVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 },
  },
};

export const WorkDetailHero = ({
  image,
  title,
  tags,
  logo,
}: WorkDetailHeroProps) => {
  return (
    <Box position="relative" w="100%" h="100vh" overflow="hidden">
      {/* Background Image */}
      <MotionBox
        position="absolute"
        inset={0}
        bgImage={`url(${image})`}
        bgSize="cover"
        bgPosition="center"
        initial="hidden"
        animate="visible"
        variants={heroVariants}
        _after={{
          content: '""',
          position: "absolute",
          inset: 0,
          bg: "blackAlpha.400",
        }}
      />

      {/* Content */}
      {/*
        pb gốc: 16 units = 64px (desktop)
        laptop ~48px | ipad ~36px
      */}
      <Container
        maxW="container.xl"
        position="relative"
        zIndex={2}
        h="100%"
        display="flex"
        flexDirection="column"
        justifyContent="flex-end"
        pb={{ base: "32px", md: "36px", lg: "48px", xl: "64px" }}
      >
        <MotionBox
          initial="hidden"
          animate="visible"
          variants={contentVariants}
          maxW={{ base: "100%", md: "85%", lg: "90%", xl: "971px" }}
          mx="auto"
          w="100%"
        >

          {/* Logo / Icon */}
          {logo ? (
            <MotionBox
              variants={contentVariants}
              // w/h gốc: 80px → laptop 64px → ipad 52px
              w={{ base: "44px", md: "52px", lg: "64px", xl: "80px" }}
              h={{ base: "44px", md: "52px", lg: "64px", xl: "80px" }}
              mb={{ base: "16px", md: "18px", lg: "20px", xl: "24px" }}
              overflow="hidden"
            >
              <Box as="img" src={logo} alt="Logo" w="100%" h="100%" objectFit="contain" />
            </MotionBox>
          ) : (
            <MotionBox
              variants={contentVariants}
              // w/h gốc: 60px → laptop 48px → ipad 40px
              w={{ base: "36px", md: "40px", lg: "48px", xl: "60px" }}
              h={{ base: "36px", md: "40px", lg: "48px", xl: "60px" }}
              bg="orange.500"
              borderRadius={{ base: "8px", md: "10px", lg: "12px", xl: "12px" }}
              display="flex"
              alignItems="center"
              justifyContent="center"
              mb={{ base: "16px", md: "18px", lg: "20px", xl: "24px" }}
            >
              <Box
                w={{ base: "18px", md: "22px", lg: "26px", xl: "30px" }}
                h={{ base: "18px", md: "22px", lg: "26px", xl: "30px" }}
                border="2px solid white"
                transform="rotate(45deg)"
              />
            </MotionBox>
          )}

          {/* Title */}
          {/*
            fontSize gốc: 48px (desktop)
            laptop ~38px | ipad ~30px | mobile ~26px
          */}
          <MotionHeading
            variants={contentVariants}
            fontFamily="'Be Vietnam Pro', sans-serif"
            fontSize={{ base: "26px", md: "30px", lg: "38px", xl: "48px" }}
            fontWeight="700"
            lineHeight="100%"
            letterSpacing="0%"
            color="white"
            mb={{ base: "12px", md: "14px", lg: "16px", xl: "16px" }}
          >
            {title}
          </MotionHeading>

          {/* Tags */}
          {/*
            button gốc: h=36px, w=98px, fontSize=16px (desktop)
            laptop h=30px w=84px fs=14px | ipad h=28px w=76px fs=13px
          */}
          <MotionHStack variants={contentVariants} spacing="10px" flexWrap="wrap">
            {tags.map((tag, index) => (
              <Button
                key={index}
                variant="outline"
                borderColor="white"
                borderWidth="1px"
                color="white"
                borderRadius="40px"
                p="10px"
                h={{ base: "26px", md: "28px", lg: "30px", xl: "36px" }}
                w={{ base: "72px", md: "76px", lg: "84px", xl: "98px" }}
                fontFamily="'Be Vietnam Pro', sans-serif"
                fontSize={{ base: "12px", md: "13px", lg: "14px", xl: "16px" }}
                fontWeight="500"
                lineHeight="100%"
                bg="transparent"
                _hover={{ bg: "whiteAlpha.200" }}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                {tag}
              </Button>
            ))}
          </MotionHStack>
        </MotionBox>
      </Container>
    </Box>
  );
};

// ─── OurApproachSection ──────────────────────────────────────────────────────
interface OurApproachSectionProps {
  logo?: string;
}

export const OurApproachSection = ({ logo }: OurApproachSectionProps) => {
  const { ref, isVisible, isAbove } = useScrollDirection(0.1);
  const shouldShow = isVisible || isAbove;

  const approaches = [
    {
      title: "Target Audience",
      description:
        "Dolor sit amet, consectetur adipiscing elit. In nibh justo, commodo eget sapien at, consectetur viverra ipsum. Vivamus faucibus orci sed purus tincidunt, vel dictum turpis sagittis. Vestibulum laoreet varius ante, et finibus metus porta eu. Curabitur ultrices venenatis leo eu.",
    },
    {
      title: "The Renderings",
      description:
        "Dolor sit amet, consectetur adipiscing elit. In nibh justo, commodo eget sapien at, consectetur viverra ipsum. Vivamus faucibus orci sed purus tincidunt, vel dictum turpis sagittis. Vestibulum laoreet varius ante, et finibus metus porta eu. Curabitur ultrices venenatis leo eu.",
    },
    {
      title: "The Visual language",
      description:
        "Dolor sit amet, consectetur adipiscing elit. In nibh justo, commodo eget sapien at, consectetur viverra ipsum. Vivamus faucibus orci sed purus tincidunt, vel dictum turpis sagittis. Vestibulum laoreet varius ante, et finibus metus porta eu. Curabitur ultrices venenatis leo eu.",
    },
  ];

  const revealVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <Box
      ref={ref}
      bg="transparent"
      /*
        py gốc: 32 units = 128px (desktop)
        laptop ~96px | ipad ~64px | mobile ~48px
      */
      py={{ base: "48px", md: "64px", lg: "96px", xl: "128px" }}
    >
      <Container maxW="1396px">
        <MotionHStack
          initial="hidden"
          animate={shouldShow ? "visible" : "hidden"}
          variants={revealVariants}
          justify="space-between"
          align="center"
          mb={{ base: "24px", md: "32px", lg: "40px", xl: "48px" }}
          w="100%"
          maxW={{ base: "100%", md: "85%", lg: "90%", xl: "971px" }}
          mx="auto"
        >
          {/*
            heading gốc: 60px (desktop)
            laptop ~48px | ipad ~38px | mobile ~32px
          */}
          <Heading
            fontFamily="'Be Vietnam Pro', sans-serif"
            fontSize={{ base: "32px", md: "38px", lg: "48px", xl: "60px" }}
            fontWeight="700"
            lineHeight="100%"
            bgGradient="linear(to-r, #FF8A5B 0%, #FF8A5B 100%)"
            bgClip="text"
            color="transparent"
          >
            Our Approach
          </Heading>

          {logo && (
            <Box
              // logo gốc: 60px → laptop 48px → ipad 40px
              w={{ base: "36px", md: "40px", lg: "48px", xl: "60px" }}
              h={{ base: "36px", md: "40px", lg: "48px", xl: "60px" }}
              overflow="hidden"
            >
              <Box as="img" src={logo} alt="Logo" w="100%" h="100%" objectFit="contain" />
            </Box>
          )}
        </MotionHStack>

        {/*
          Grid gap gốc: 89px (desktop)
          laptop ~60px | ipad ~40px | mobile stack 1 col
        */}
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
          gap={{ base: "32px", md: "40px", lg: "60px", xl: "89px" }}
          maxW={{ base: "100%", md: "85%", lg: "90%", xl: "971px" }}
          mx="auto"
        >
          {approaches.map((item, index) => (
            <MotionVStack
              key={index}
              align="flex-start"
              spacing={{ base: "12px", md: "14px", lg: "16px", xl: "16px" }}
              initial="hidden"
              animate={shouldShow ? "visible" : "hidden"}
              variants={revealVariants}
              transition={{ delay: isVisible ? index * 0.2 : 0 }}
            >
              {/*
                approach title gốc: 26px → laptop 20px → ipad 18px
              */}
              <Heading
                fontFamily="'Be Vietnam Pro', sans-serif"
                fontSize={{ base: "18px", md: "18px", lg: "20px", xl: "26px" }}
                fontWeight="700"
                lineHeight="100%"
                letterSpacing="0%"
                color="black"
                mb={{ base: "8px", md: "10px", lg: "12px", xl: "16px" }}
              >
                {item.title}
              </Heading>
              {/*
                text gốc: 20px lineHeight 28px → laptop 16px/24px → ipad 14px/22px
              */}
              <Text
                fontFamily="'Be Vietnam Pro', sans-serif"
                fontSize={{ base: "14px", md: "14px", lg: "16px", xl: "20px" }}
                fontWeight="400"
                color="black"
                lineHeight={{ base: "22px", md: "22px", lg: "24px", xl: "28px" }}
                maxW="480px"
              >
                {item.description}
              </Text>
            </MotionVStack>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export { default as FinalRendersSection } from "./FinalRendersSection";
export { default as OtherProjectsSection } from "./OtherProjectsSection";

// ─── ProjectOverviewSection ──────────────────────────────────────────────────
interface ProjectOverviewSectionProps {
  image: string;
  text1: string;
  text2: string;
}

export const ProjectOverviewSection = ({
  image,
  text1,
  text2,
}: ProjectOverviewSectionProps) => {
  const { ref } = useScrollDirection(0.1);

  const revealVariant: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <Box
      ref={ref}
      bg="transparent"
      pb={{ base: "40px", md: "48px", lg: "64px", xl: "80px" }}
    >
      {/*
        Image gốc: h=1080px (desktop) → dùng aspectRatio 16/9 thay vì h cứng
        1920 * 9/16 ≈ 1080px → đúng tỉ lệ gốc, tự scale theo màn hình
      */}
      <MotionBox
        w="100%"
        maxW="1920px"
        mx="auto"
        px={0}
        mb={{ base: "32px", md: "40px", lg: "48px", xl: "64px" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={revealVariant}
        overflow="hidden"
      >
        <MotionBox
          w="100%"
          aspectRatio="16/9"
          bgImage={`url(${image})`}
          bgSize="cover"
          bgPosition="center"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6 }}
        />
      </MotionBox>

      <Container maxW="container.xl">
        <MotionVStack
          spacing={{ base: "24px", md: "32px", lg: "40px", xl: "50px" }}
          align="flex-start"
          w="100%"
          maxW={{ base: "100%", md: "85%", lg: "90%", xl: "971px" }}
          mx="auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={revealVariant}
        >
          {/*
            text gốc: 20px lineHeight 20px → laptop 16px → ipad 14px
          */}
          <Text
            fontFamily="'Be Vietnam Pro', sans-serif"
            fontSize={{ base: "14px", md: "16px", lg: "18px", xl: "20px" }}
            fontWeight="400"
            color="black"
            lineHeight="100%"
            letterSpacing="0%"
            textAlign="left"
          >
            {text1}
          </Text>
          <Text
            fontFamily="'Be Vietnam Pro', sans-serif"
            fontSize={{ base: "14px", md: "16px", lg: "18px", xl: "20px" }}
            fontWeight="400"
            color="black"
            lineHeight="100%"
            letterSpacing="0%"
            textAlign="left"
          >
            {text2}
          </Text>
        </MotionVStack>
      </Container>
    </Box>
  );
};