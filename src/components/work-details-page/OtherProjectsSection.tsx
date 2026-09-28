import React from "react";
import {
  Box,
  Container,
  Flex,
  Heading,
  IconButton,
  Image,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { motion, type Variants } from "framer-motion";
import { useScrollDirection } from "../../hooks/useScrollDirection";

interface Project {
  id: number;
  title: string;
  image: string;
  tags: string[];
}

interface OtherProjectsSectionProps {
  projects: Project[];
}

const MotionBox = motion.create(Box as React.ElementType);

const cardVariantDown: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const cardVariantUp: Variants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const ProjectCard = ({
  project,
  isVisible,
  isAbove,
  scrollDirection,
  index,
}: {
  project: Project;
  isVisible: boolean;
  isAbove: boolean;
  scrollDirection: "down" | "up";
  index: number;
}) => {
  const animationVariant =
    scrollDirection === "down" ? cardVariantDown : cardVariantUp;
  const shouldShow = isVisible || isAbove;

  return (
    // [FIX] Wrapper Box tách biệt scroll-snap khỏi MotionBox animation.
    // minW="100vw" trên mobile = đúng bằng chiều rộng màn hình,
    // không bị ảnh hưởng bởi px của container cha.
    <Box
      minW={{ base: "100vw", md: "260px", lg: "320px", xl: "400px" }}
      h={{ base: "280px", md: "260px", lg: "320px", xl: "400px" }}
      flexShrink={0}
      // [FIX] scrollSnapAlign đặt tại đây để browser snap chính xác vào giữa wrapper
      sx={{ scrollSnapAlign: { base: "center", md: "none" } }}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <MotionBox
        initial="hidden"
        animate={shouldShow ? "visible" : "hidden"}
        variants={animationVariant}
        transition={{ delay: isVisible ? index * 0.1 : 0 }}
        // Card bên trong hơi nhỏ hơn wrapper để có khoảng thở nhỏ 2 bên
        w={{ base: "calc(100% - 8px)", md: "100%" }}
        h="100%"
        flexShrink={0}
        position="relative"
        cursor="pointer"
        role="group"
        overflow="hidden"
        whileHover={{ scale: 0.98 }}
      >
        <Image
          src={project.image}
          alt={project.title}
          w="100%"
          h="100%"
          objectFit="cover"
          transition="transform 0.5s ease"
          _groupHover={{ transform: "scale(1.1)" }}
        />

        <Box
          position="absolute"
          inset={0}
          bgGradient="linear(to-t, blackAlpha.800 0%, transparent 50%)"
        />

        <VStack
          position="absolute"
          bottom={{ base: "12px", md: "14px", lg: "18px", xl: "24px" }}
          left={{ base: "12px", md: "14px", lg: "18px", xl: "24px" }}
          align="flex-start"
          spacing={{ base: "6px", md: "6px", lg: "8px", xl: "8px" }}
        >
          <Heading
            fontFamily="'Be Vietnam Pro', sans-serif"
            fontSize={{ base: "15px", md: "16px", lg: "20px", xl: "26px" }}
            fontWeight="700"
            lineHeight="100%"
            color="white"
          >
            {project.title}
          </Heading>
          <HStack spacing={{ base: "6px", md: "6px", lg: "8px", xl: "10px" }}>
            {project.tags.map((tag, idx) => (
              <Box
                key={idx}
                w={{ base: "60px", md: "68px", lg: "80px", xl: "98px" }}
                h={{ base: "22px", md: "24px", lg: "28px", xl: "36px" }}
                display="flex"
                alignItems="center"
                justifyContent="center"
                borderRadius="40px"
                border="1px solid white"
                color="white"
                fontFamily="'Be Vietnam Pro', sans-serif"
                fontSize={{ base: "11px", md: "12px", lg: "13px", xl: "16px" }}
                fontWeight="500"
                lineHeight="100%"
                textAlign="center"
                p="10px"
              >
                {tag}
              </Box>
            ))}
          </HStack>
        </VStack>
      </MotionBox>
    </Box>
  );
};

const OtherProjectsSection = ({ projects }: OtherProjectsSectionProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  // [FIX] Track index hiện tại để clamp chính xác, không scroll quá đầu/cuối
  const currentIndexRef = useRef(0);
  const { ref, isVisible, isAbove, scrollDirection } = useScrollDirection(0.1);

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    const { current } = scrollContainerRef;
    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      const totalCards = current.children.length;
      const cardWidth = (current.children[0] as HTMLElement).clientWidth;

      // Clamp index: không cho vượt quá 0 hoặc totalCards - 1
      const nextIndex = direction === "left"
        ? Math.max(0, currentIndexRef.current - 1)
        : Math.min(totalCards - 1, currentIndexRef.current + 1);

      // Chỉ scroll nếu index thực sự thay đổi
      if (nextIndex !== currentIndexRef.current) {
        currentIndexRef.current = nextIndex;
        // scrollTo tuyệt đối thay vì scrollBy tương đối → không bao giờ bị drift
        current.scrollTo({ left: nextIndex * cardWidth, behavior: "smooth" });
      }
    } else {
      const scrollAmount = 420;
      current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box
      ref={ref}
      bg="transparent"
      py={{ base: "32px", md: "48px", lg: "60px", xl: "80px" }}
    >
      <Container maxW="container.xl" position="relative">
        {/* Header */}
        <Box
          pt="10px"
          pb="10px"
          mb="10px"
          px={{ base: "4px", md: "6px", lg: "8px", xl: "8px" }}
          maxW={{ base: "220px", md: "260px", lg: "320px", xl: "405px" }}
        >
          <Heading
            fontFamily="'Be Vietnam Pro', sans-serif"
            fontSize={{ base: "32px", md: "38px", lg: "48px", xl: "60px" }}
            fontWeight="700"
            lineHeight="100%"
            letterSpacing="0%"
          >
            <Box
              as="span"
              display="block"
              bgGradient="linear(to-r, #FF682A, #FDE5CB)"
              bgClip="text"
              color="transparent"
            >
              Other
            </Box>
            <Box
              as="span"
              display="block"
              bgGradient="linear(to-r, #FF682A, #FDE5CB)"
              bgClip="text"
              color="transparent"
            >
              Projects
            </Box>
          </Heading>
        </Box>

        {/* Carousel */}
        {/*
          [FIX] px="0px" trên mobile — loại bỏ padding cạnh giúp card
          dùng 100vw thực sự khớp với toàn màn hình.
          Desktop giữ nguyên px như cũ.
        */}
        <Box
          position="relative"
          px={{ base: "0px", md: "6px", lg: "8px", xl: "8px" }}
        >
          {/* Left nav button */}
          <IconButton
            aria-label="Previous Project"
            icon={<ChevronLeftIcon fontSize={{ base: "16px", md: "32px", lg: "36px", xl: "40px" }} />}
            onClick={() => scroll("left")}
            variant="ghost"
            color={{ base: "white", md: "blackAlpha.600" }}
            _hover={{ bg: "transparent", color: { base: "white", md: "black" } }}
            _active={{ bg: "transparent" }}
            position="absolute"
            left={{ base: "16px", md: "-30px", lg: "-40px", xl: "-50px" }}
            top="50%"
            transform="translateY(-50%)"
            zIndex={2}
            display="flex"
            h={{ base: "24px", md: "80px", lg: "90px", xl: "100px" }}
            w={{ base: "24px", md: "auto" }}
            minW={{ base: "24px", md: "40px" }}
            borderRadius={{ base: "full", md: "md" }}
            border={{ base: "1px solid white", md: "none" }}
            bg="transparent"
          />

          <Flex
            ref={scrollContainerRef}
            overflowX="auto"
            // [FIX] gap="0px" trên mobile — nếu có gap thì (card + gap) > 100vw,
            // mỗi lần scroll bị drift dần. Desktop giữ gap như cũ.
            gap={{ base: "0px", md: "12px", lg: "16px", xl: "24px" }}
            pb={4}
            sx={{
              "&::-webkit-scrollbar": { display: "none" },
              scrollbarWidth: "none",
              scrollSnapType: { base: "x mandatory", md: "none" },
            }}
          >
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                isVisible={isVisible}
                isAbove={isAbove}
                scrollDirection={scrollDirection}
                index={index}
              />
            ))}
          </Flex>

          {/* Right nav button */}
          <IconButton
            aria-label="Next Project"
            icon={<ChevronRightIcon fontSize={{ base: "16px", md: "32px", lg: "36px", xl: "40px" }} />}
            onClick={() => scroll("right")}
            variant="ghost"
            color={{ base: "white", md: "blackAlpha.600" }}
            _hover={{ bg: "transparent", color: { base: "white", md: "black" } }}
            _active={{ bg: "transparent" }}
            position="absolute"
            right={{ base: "16px", md: "-30px", lg: "-40px", xl: "-50px" }}
            top="50%"
            transform="translateY(-50%)"
            zIndex={2}
            display="flex"
            h={{ base: "24px", md: "80px", lg: "90px", xl: "100px" }}
            w={{ base: "24px", md: "auto" }}
            minW={{ base: "24px", md: "40px" }}
            borderRadius={{ base: "full", md: "md" }}
            border={{ base: "1px solid white", md: "none" }}
            bg="transparent"
          />
        </Box>
      </Container>
    </Box>
  );
};

export default OtherProjectsSection;