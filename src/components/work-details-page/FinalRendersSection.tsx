import React, { useState } from "react";
import { Box, Container, Flex, Heading, Image, VStack } from "@chakra-ui/react";
import { motion, type Variants } from "framer-motion";

interface FinalRendersSectionProps {
  images: {
    citySimulation: string;
    hero2nd: string;
    car: string;
  };
}

const MotionBox = motion.create(Box as React.ElementType);

const revealVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const smoothTransition = "flex 0.7s cubic-bezier(0.4, 0, 0.2, 1)";

interface RenderRowItem {
  src: string;
  alt: string;
  defaultFlex: number;
  hoverLeftFlex: number;
  hoverRightFlex: number;
  revealDelay?: number;
}

interface RenderRowProps {
  left: RenderRowItem;
  right: RenderRowItem;
}

const RenderRow = React.memo(({ left, right }: RenderRowProps) => {
  const [hovered, setHovered] = useState<"left" | "right" | null>(null);

  const leftFlex =
    hovered === "left"
      ? left.hoverLeftFlex
      : hovered === "right"
        ? left.hoverRightFlex
        : left.defaultFlex;

  const rightFlex =
    hovered === "left"
      ? right.hoverLeftFlex
      : hovered === "right"
        ? right.hoverRightFlex
        : right.defaultFlex;

  return (
    <Flex direction={{ base: "column", md: "row" }} gap={4} w="100%">
      {/* LEFT IMAGE */}
      {/*
        h gốc: md=400px (desktop area)
        laptop ~320px | ipad ~260px | mobile 220px
      */}
      <MotionBox
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={revealVariant}
        transition={{ delay: left.revealDelay ?? 0 }}
        flex={{ base: "none", md: leftFlex }}
        h={{ base: "220px", md: "260px", lg: "320px", xl: "400px" }}
        overflow="hidden"
        cursor="pointer"
        sx={{ transition: smoothTransition, backfaceVisibility: "hidden" }}
        onMouseEnter={() => setHovered("left")}
        onMouseLeave={() => setHovered(null)}
      >
        <Image
          src={left.src}
          alt={left.alt}
          w="100%"
          h="100%"
          objectFit="cover"
          transition="transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)"
          transform={hovered === "left" ? "scale(1.05)" : "scale(1)"}
          sx={{ willChange: "transform", backfaceVisibility: "hidden" }}
        />
      </MotionBox>

      {/* RIGHT IMAGE */}
      <MotionBox
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={revealVariant}
        transition={{ delay: right.revealDelay ?? 0.1 }}
        flex={{ base: "none", md: rightFlex }}
        h={{ base: "220px", md: "260px", lg: "320px", xl: "400px" }}
        overflow="hidden"
        cursor="pointer"
        sx={{ transition: smoothTransition, backfaceVisibility: "hidden" }}
        onMouseEnter={() => setHovered("right")}
        onMouseLeave={() => setHovered(null)}
      >
        <Image
          src={right.src}
          alt={right.alt}
          w="100%"
          h="100%"
          objectFit="cover"
          transition="transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)"
          transform={hovered === "right" ? "scale(1.05)" : "scale(1)"}
          sx={{ willChange: "transform", backfaceVisibility: "hidden" }}
        />
      </MotionBox>
    </Flex>
  );
});

RenderRow.displayName = "RenderRow";

// ─── FinalRendersSection ─────────────────────────────────────────────────────
const FinalRendersSection = ({ images }: FinalRendersSectionProps) => {
  const { citySimulation, hero2nd, car } = images;

  return (
    <Box
      bg="transparent"
      pb={{ base: "32px", md: "48px", lg: "64px", xl: "80px" }}
    >
      <Container maxW="container.xl">
        {/* Header */}
        {/*
          mb gốc: md=10 units=40px → laptop 32px → ipad 24px
          heading gốc: lg=6xl=48px → đã có responsive base=4xl/md=5xl/lg=6xl
          thêm xl để đảm bảo desktop đúng
        */}
        <Box
          mb={{ base: "24px", md: "32px", lg: "40px", xl: "50px" }}
          maxW={{ base: "100%", md: "85%", lg: "90%", xl: "971px" }}
          mx="auto"
          w="100%"
        >
          <Heading
            fontSize={{ base: "4xl", md: "5xl", lg: "6xl", xl: "6xl" }}
            fontWeight="700"
            bgGradient="linear(to-r, #FF8A5B 0%, #FF8A5B 60%, whiteAlpha.200 100%)"
            bgClip="text"
            color="transparent"
            w="fit-content"
          >
            Final Renders
          </Heading>
        </Box>

        {/*
          VStack spacing gốc: {4} = 16px → laptop 12px → ipad 10px
        */}
        <VStack
          spacing={{ base: "10px", md: "10px", lg: "12px", xl: "16px" }}
          w="100%"
        >
          {/* Row 1 — default 4:6 */}
          <RenderRow
            left={{
              src: citySimulation,
              alt: "City Simulation",
              defaultFlex: 4,
              hoverLeftFlex: 7,
              hoverRightFlex: 3,
            }}
            right={{
              src: car,
              alt: "Car Render",
              defaultFlex: 6,
              hoverLeftFlex: 5,
              hoverRightFlex: 9,
            }}
          />

          {/* Row 2 — default 5:5 */}
          <RenderRow
            left={{
              src: hero2nd,
              alt: "Hero 2nd",
              defaultFlex: 1,
              hoverLeftFlex: 7,
              hoverRightFlex: 3,
            }}
            right={{
              src: citySimulation,
              alt: "City Simulation Detail",
              defaultFlex: 1,
              hoverLeftFlex: 3,
              hoverRightFlex: 7,
            }}
          />

          {/* Row 3 — default 4:6 */}
          <RenderRow
            left={{
              src: citySimulation,
              alt: "City Simulation Detail",
              defaultFlex: 4,
              hoverLeftFlex: 7,
              hoverRightFlex: 3,
            }}
            right={{
              src: car,
              alt: "Car Detail",
              defaultFlex: 6,
              hoverLeftFlex: 5,
              hoverRightFlex: 9,
            }}
          />
        </VStack>
      </Container>
    </Box>
  );
};

export default FinalRendersSection;