import { Box, Text, Flex, Image, useBreakpointValue } from "@chakra-ui/react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GradientText from "@components/gradient-text";
import {
  planImg,
  designImg,
  developImg,
  testImg,
  deployImg,
  reviewImg,
  launchImg,
} from "@assets/images";

export interface PipelineStep {
  number: string;
  title: string;
  description: string;
  image: string;
}

export const defaultPipelineSteps: PipelineStep[] = [
  {
    number: "/1",
    title: "Plan",
    description:
      "Once we receive all the necessary project information, we review the scope, define the goals, align expectations, and assign a dedicated team. A clear timeline is also established at this stage.",
    image: planImg,
  },
  {
    number: "/2",
    title: "Design",
    description:
      "We start by defining the design direction based on your input, then develop an initial draft that reflects the overall concept. After reviewing your feedback on the main elements, we refine the design and proceed to the next stage.",
    image: designImg,
  },
  {
    number: "/3",
    title: "Create",
    description:
      "We develop the approved design into a functional product, focusing on performance, usability, and visual accuracy before final delivery.",
    image: developImg,
  },
  {
    number: "/4",
    title: "Test",
    description:
      "We thoroughly review the product to ensure stability, performance, and overall quality. We identify and fix issues, refine interactions, and make final adjustments before moving toward launch or delivery.",
    image: testImg,
  },
  {
    number: "/5",
    title: "Deploy",
    description:
      "We prepare and launch the final product to the intended platform or environment. We ensure everything is properly set up, stable, and ready for use, providing a smooth transition from development to live release.",
    image: deployImg,
  },
  {
    number: "/6",
    title: "Review",
    description:
      "Once we receive all the necessary project information, we review the scope, define the goals, align expectations, and assign a dedicated team. A clear timeline is also established at this stage.",
    image: reviewImg,
  },
  {
    number: "/7",
    title: "Launch",
    description:
      "Once we receive all the necessary project information, we review the scope, define the goals, align expectations, and assign a dedicated team. A clear timeline is also established at this stage.",
    image: launchImg,
  },
];

// Each step has a unique x offset to create the staggered/scattered layout
const stepPositionsPattern = [
  { x: 120, align: "flex-start" as const, imageOffsetY: "40px" },
  { x: 280, align: "flex-start" as const, imageOffsetY: "20px" },
  { x: 40, align: "flex-start" as const, imageOffsetY: "0px" },
  { x: 270, align: "flex-start" as const, imageOffsetY: "0px" },
  { x: 120, align: "flex-start" as const, imageOffsetY: "0px" },
  { x: 300, align: "flex-start" as const, imageOffsetY: "40px" },
  { x: 40, align: "flex-start" as const, imageOffsetY: "40px" },
];

// Tablet (iPad) zigzag — smaller offsets that fit within 50% column
const stepPositionsTabletPattern = [
  { x: 0, align: "flex-start" as const, imageOffsetY: "0px" },
  { x: 180, align: "flex-start" as const, imageOffsetY: "0px" },
  { x: 8, align: "flex-start" as const, imageOffsetY: "0px" },
  { x: 180, align: "flex-start" as const, imageOffsetY: "0px" },
  { x: 0, align: "flex-start" as const, imageOffsetY: "0px" },
  { x: 180, align: "flex-start" as const, imageOffsetY: "0px" },
  { x: 8, align: "flex-start" as const, imageOffsetY: "0px" },
];

// Mobile staggered "cloud" pattern - using px for stability with varying title lengths
const stepPositionsMobilePattern = [
  { ml: "20px", mt: "0px" },     // Step 1
  { ml: "120px", mt: "10px" },   // Step 2
  { ml: "10px", mt: "20px" },    // Step 3
  { ml: "110px", mt: "15px" },   // Step 4
  { ml: "30px", mt: "25px" },    // Step 5
  { ml: "100px", mt: "20px" },   // Step 6
  { ml: "10px", mt: "25px" },    // Step 7
];

const PipelineStepItem = ({
  step,
  index,
  isActive,
  onSelect,
  posX,
  mobilePos,
}: {
  step: PipelineStep;
  index: number;
  isActive: boolean;
  onSelect: () => void;
  posX: number;
  mobilePos: { ml: string; mt: string };
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: index * 0.08, duration: 0.5, ease: "easeOut" }}
    >
      <Box
        ml={{ base: mobilePos.ml, md: `${posX}px` }}
        mt={{ base: mobilePos.mt, md: "0px" }}
        mb={{ base: 2, md: 0 }}
        cursor="pointer"
        onClick={onSelect}
        position="relative"
        py={2}
        transition="all 0.3s ease"
      >
        <Box position="relative" display="inline-block">
          <Text
            fontFamily="'Be Vietnam Pro'"
            fontWeight="400"
            fontSize="10px"
            color={isActive ? "black" : "gray.400"}
            lineHeight="1"
            transition="color 0.3s ease"
            position="absolute"
            top="-12px"
            left="-14px"
          >
            {step.number}
          </Text>
          <Text
            className="step-title"
            fontFamily="'Be Vietnam Pro'"
            fontWeight="600"
            fontSize={{ base: "14px", md: "24px", lg: "20px" }}
            color={isActive ? "black" : "gray.400"}
            lineHeight="100%"
            transition="color 0.3s ease"
          >
            {step.title}
          </Text>
        </Box>
      </Box>
    </motion.div>
  );
};

// Mobile-only minimal step label
const MobileStepLabel = ({
  step,
  isActive,
  onSelect,
}: {
  step: PipelineStep;
  isActive: boolean;
  onSelect: () => void;
}) => (
  <Box
    cursor="pointer"
    onClick={onSelect}
    position="relative"
    display="inline-block"
  >
    <Text
      fontFamily="'Be Vietnam Pro'"
      fontWeight="400"
      fontSize="10px"
      color={isActive ? "black" : "gray.400"}
      position="absolute"
      top="-12px"
      left="-14px"
      lineHeight="1"
    >
      {step.number}
    </Text>
    <Text
      fontFamily="'Be Vietnam Pro'"
      fontWeight="600"
      fontSize="14px"
      color={isActive ? "black" : "gray.400"}
      lineHeight="100%"
    >
      {step.title}
    </Text>
  </Box>
);

interface PipelineProps {
  steps?: PipelineStep[];
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
}

const Pipeline = ({
  steps = defaultPipelineSteps,
  title,
  subtitle,
}: PipelineProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // On iPad (md), collapse the scattered x offsets to 0 so steps align left
  const isTablet = useBreakpointValue({ base: false, md: true, lg: false });

  // Cycle through the pattern if there are more steps than the pattern defined
  const getStepPosition = (index: number) => {
    if (isTablet)
      return stepPositionsTabletPattern[
        index % stepPositionsTabletPattern.length
      ];
    return stepPositionsPattern[index % stepPositionsPattern.length];
  };

  const getMobilePosition = (index: number) => {
    return stepPositionsMobilePattern[
      index % stepPositionsMobilePattern.length
    ];
  };

  return (
    <Box
      position="relative"
      bg="transparent"
      w="full"
      py={{ base: 12, md: 24 }}
      overflow="hidden"
      minH={{ base: "auto", lg: "100px" }}
    >
      {/* Main content area */}
      <Flex
        maxW="1440px"
        mx="auto"
        px={{ base: 6, md: 8, lg: "100px" }}
        direction={{ base: "column", md: "row", lg: "row" }}
        align="flex-start"
        gap={{ base: 10, md: 6, lg: 0 }}
        position="relative"
      >
        {/* Left side - Title + Steps */}
        <Box flex="1" maxW={{ md: "50%", lg: "55%" }}>
          {/* Section Title */}
          <Box mb={6}>
            <GradientText
              fontWeight="800"
              fontSize={{ base: "40px", md: "36px", lg: "56px" }}
              lineHeight="1.1"
            >
              {title || (
                <>
                  Your 3D rendering
                  <br />
                  project pipeline
                </>
              )}
            </GradientText>
          </Box>

          {/* Subtitle */}
          <Box mb={4}>
            <Text
              fontFamily="'Be Vietnam Pro'"
              fontWeight="400"
              fontSize="16px"
              lineHeight="20px"
              color="#000000"
            >
              {subtitle || (
                <>
                  Keep track of your project's progress
                  <br />
                  through the following stages:
                </>
              )}
            </Text>
          </Box>

          {/* Active step description */}
          <Box h={{ base: "auto", md: "120px" }} minH={{ base: "80px", md: "120px" }} mb={{ base: 6, md: 0 }} overflow="hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <Text
                  fontFamily="'Be Vietnam Pro'"
                  fontWeight="400"
                  fontSize="12px"
                  lineHeight="20px"
                  color="#000000"
                  maxW="380px"
                >
                  {steps[activeIndex]?.description}
                </Text>
              </motion.div>
            </AnimatePresence>
          </Box>

          {/* Desktop/tablet steps list */}
          <Flex
            display={{ base: "none", md: "flex" }}
            direction={{ base: "row", md: "column" }}
            wrap={{ base: "wrap", md: "nowrap" }}
            gap={{ base: 4, md: 7, lg: 10 }}
          >
            {steps.map((step, index) => (
              <PipelineStepItem
                key={index}
                step={step}
                index={index}
                isActive={activeIndex === index}
                onSelect={() => setActiveIndex(index)}
                posX={getStepPosition(index).x}
                mobilePos={getMobilePosition(index)}
              />
            ))}
          </Flex>

          {/* Mobile steps — 3 rows, steps aligned within each row */}
          <Box display={{ base: "block", md: "none" }} pt={6}>
            {/* Row 1: steps 1, 2, 3 — spread across full width */}
            <Flex align="flex-start" mb={10} justify="space-between" pr={2}>
              <Box w="33%" pl={2}>
                {steps[0] && (
                  <MobileStepLabel
                    step={steps[0]}
                    isActive={activeIndex === 0}
                    onSelect={() => setActiveIndex(0)}
                  />
                )}
              </Box>
              <Box w="33%">
                {steps[1] && (
                  <MobileStepLabel
                    step={steps[1]}
                    isActive={activeIndex === 1}
                    onSelect={() => setActiveIndex(1)}
                  />
                )}
              </Box>
              <Box w="33%">
                {steps[2] && (
                  <MobileStepLabel
                    step={steps[2]}
                    isActive={activeIndex === 2}
                    onSelect={() => setActiveIndex(2)}
                  />
                )}
              </Box>
            </Flex>

            {/* Row 2: steps 4, 5 — offset from left */}
            <Flex align="flex-start" mb={10} pl="10%" gap={8}>
              <Box w="40%">
                {steps[3] && (
                  <MobileStepLabel
                    step={steps[3]}
                    isActive={activeIndex === 3}
                    onSelect={() => setActiveIndex(3)}
                  />
                )}
              </Box>
              <Box w="40%">
                {steps[4] && (
                  <MobileStepLabel
                    step={steps[4]}
                    isActive={activeIndex === 4}
                    onSelect={() => setActiveIndex(4)}
                  />
                )}
              </Box>
            </Flex>

            {/* Row 3: steps 6, 7 — offset from left */}
            <Flex align="flex-start" pl="8%" gap={8}>
              <Box w="42%">
                {steps[5] && (
                  <MobileStepLabel
                    step={steps[5]}
                    isActive={activeIndex === 5}
                    onSelect={() => setActiveIndex(5)}
                  />
                )}
              </Box>
              <Box w="42%">
                {steps[6] && (
                  <MobileStepLabel
                    step={steps[6]}
                    isActive={activeIndex === 6}
                    onSelect={() => setActiveIndex(6)}
                  />
                )}
              </Box>
            </Flex>
          </Box>
        </Box>

        {/* Right side - Image: on iPad, pt pushes it down to align with steps */}
        <Box
          flex="1"
          maxW={{ md: "50%", lg: "45%" }}
          position={{ md: "sticky", lg: "sticky" }}
          top={{ md: "80px", lg: "100px" }}
          display="flex"
          alignItems="center"
          justifyContent="center"
          alignSelf="flex-start"
          pt={{ base: 0, md: "260px", lg: 0 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                marginTop: isTablet
                  ? "0px"
                  : getStepPosition(activeIndex).imageOffsetY,
              }}
            >
              <Image
                src={steps[activeIndex]?.image}
                alt={steps[activeIndex]?.title}
                maxW={{ base: "350px", md: "400px", lg: "500px" }}
                maxH="600px"
                objectFit="contain"
              />
            </motion.div>
          </AnimatePresence>
        </Box>
      </Flex>
    </Box>
  );
};

export default Pipeline;
