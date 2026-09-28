import {
  Box,
  Container,
  Flex,
  Image,
  Text,
  Grid,
} from "@chakra-ui/react";
import { motion, type Variants } from "framer-motion";
import { useScrollDirection } from "../../hooks/useScrollDirection";
import { useRef, useState, useEffect } from "react";

import MinTra from "@assets/imagesWork-page/MinTra.webp";
import FPT from "@assets/imagesWork-page/FPT.webp";
import BDM3d from "@assets/imagesWork-page/BDM3d.webp";
import VTC from "@assets/imagesWork-page/VTC.webp";
import Logo3D from "@assets/imagesWork-page/3D.webp";

const LogoItem = ({
  src,
  cropWidth,
  cropHeight,
}: {
  src: string;
  cropWidth?: string;
  cropHeight?: string;
}) => {
  if (cropWidth || cropHeight) {
    return (
      <Box
        overflow="hidden"
        w={cropWidth}
        h={cropHeight}
        display="flex"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Image
          src={src}
          maxH="60px"
          minW="240px"
          objectFit="contain"
          objectPosition="top left"
          filter="grayscale(100%) brightness(0)"
          opacity={0.85}
        />
      </Box>
    );
  }
  return (
    <Image
      src={src}
      maxH={{ base: "14vw", sm: "12vw", md: "4vw", lg: "4.5vw", xl: "50px" }}
      objectFit="contain"
      filter="grayscale(100%) brightness(0)"
      opacity={0.85}
    />
  );
};
const titleVariant: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const logoRowVariantDown: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.0, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const logoRowVariantUp: Variants = {
  hidden: { opacity: 0, y: -40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.0, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const containerScrollDown: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const containerScrollUp: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
      staggerDirection: -1,
    },
  },
};

const TrustedBy = () => {
  // Tăng threshold lên 0.2 để animation không trigger quá sớm
  const {
    ref: scrollRef,
    isVisible,
    scrollDirection,
  } = useScrollDirection(0.2);
  const containerRef = useRef<HTMLDivElement>(null);

  // Lưu trữ hướng scroll lúc bắt đầu xuất hiện để tránh bị giật khi đổi hướng giữa chừng
  const [lockedDirection, setLockedDirection] = useState<"down" | "up" | null>(
    null,
  );

  useEffect(() => {
    if (isVisible && !lockedDirection) {
      setLockedDirection(scrollDirection);
    } else if (!isVisible) {
      setLockedDirection(null);
    }
  }, [isVisible, scrollDirection, lockedDirection]);

  const activeDirection = lockedDirection || scrollDirection;
  const logoRowVariant =
    activeDirection === "down" ? logoRowVariantDown : logoRowVariantUp;
  const containerVariant =
    activeDirection === "down" ? containerScrollDown : containerScrollUp;

  return (
    <Box
      ref={(el) => {
        (scrollRef as React.MutableRefObject<HTMLDivElement | null>).current =
          el;
        (
          containerRef as React.MutableRefObject<HTMLDivElement | null>
        ).current = el;
      }}
      position="relative"
      bg="transparent"
      py={{ base: 16, md: 32, lg: 64 }}
      cursor="default"
      overflow="hidden"
    >
      {/* ===== BACKGROUND LOGO ===== */}
      <Box
        position="absolute"
        right={{ base: "auto", md: "-200px", lg: "-250px" }}
        left={{ base: "50%", md: "auto" }}
        top={{ base: "auto", md: "50%" }}
        bottom={{ base: "0", md: "auto" }}
        transform={{ base: "translateX(-50%)", md: "translateY(-50%)" }}
        w={{ base: "300px", md: "400px", lg: "400px" }}
        h={{ base: "400px", md: "600px", lg: "700px" }}
        bgImage={`url(${Logo3D})`}
        bgRepeat="no-repeat"
        bgSize="contain"
        bgPosition={{ base: "center", md: "left center" }}
        opacity={0.12}
        filter="sepia(1) saturate(6) hue-rotate(350deg)"
        pointerEvents="none"
        zIndex={1}
      />

      <Container maxW="container.xl" position="relative" zIndex={2}>
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariant}
        >
          {/* ===== TITLE "Trusted by" ===== */}
          <motion.div variants={titleVariant}>
            <Box textAlign="center" mb={16}>
              <Text
                as="span"
                fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
                fontWeight="800"
                color="#FF6B35"
              >
                Trust
              </Text>
              <Text
                as="span"
                fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
                fontWeight="800"
                color="#FF6B35"
                opacity={0.85}
              >
                e
              </Text>
              <Text
                as="span"
                fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
                fontWeight="800"
                color="#FF6B35"
                opacity={0.65}
              >
                d
              </Text>
              <Text
                as="span"
                fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
                fontWeight="800"
                color="#FF6B35"
                opacity={0.5}
              >
                {" "}
              </Text>
              <Text
                as="span"
                fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
                fontWeight="800"
                color="#FF6B35"
                opacity={0.35}
              >
                b
              </Text>
              <Text
                as="span"
                fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
                fontWeight="800"
                color="#FF6B35"
                opacity={0.25}
              >
                y
              </Text>
            </Box>
          </motion.div>

          {/* ===== DESKTOP LOGOS ===== */}
          <Box display={{ base: "none", md: "block" }}>
            {/* ===== ROW 1 ===== */}
            <motion.div variants={logoRowVariant}>
              <Flex
                justify="center"
                gap={{ md: 8, lg: 12, xl: 16 }}
                mb={{ md: 6, lg: 8, xl: 10 }}
                flexWrap="wrap"
              >
                <LogoItem src={VTC} />
                <LogoItem src={BDM3d} />
                <LogoItem src={BDM3d} />
              </Flex>
            </motion.div>

            {/* ===== ROW 2 ===== */}
            <motion.div variants={logoRowVariant}>
              <Flex
                justify="center"
                gap={{ md: 8, lg: 12, xl: 16 }}
                mb={{ md: 6, lg: 8, xl: 10 }}
                flexWrap="wrap"
              >
                <LogoItem src={FPT} />
                <LogoItem src={FPT} />
                <LogoItem src={MinTra} />
                <LogoItem src={MinTra} />
              </Flex>
            </motion.div>

            {/* ===== ROW 3 ===== */}
            <motion.div variants={logoRowVariant}>
              <Flex
                justify="center"
                gap={{ md: 8, lg: 12, xl: 16 }}
                flexWrap="wrap"
              >
                <LogoItem src={FPT} />
                <LogoItem src={FPT} />
                <LogoItem src={MinTra} />
                <LogoItem src={MinTra} />
              </Flex>
            </motion.div>
          </Box>

          {/* ===== MOBILE LOGOS ===== */}
          <Box display={{ base: "block", md: "none" }} w="100%">
            <motion.div variants={logoRowVariant}>
              <Grid
                templateColumns="repeat(2, 1fr)"
                gap={8}
                rowGap={10}
                justifyItems="center"
                alignItems="center"
              >
                {/* Row 1: VTC | BDM3d */}
                <LogoItem src={VTC} />
                <LogoItem src={BDM3d} />

                {/* Row 2: FPT | BDM3d */}
                <LogoItem src={FPT} />
                <LogoItem src={BDM3d} />

                {/* Row 3: VTC | FPT */}
                <LogoItem src={VTC} />
                <LogoItem src={FPT} />

                {/* Row 4: VTC | FPT */}
                <LogoItem src={VTC} />
                <LogoItem src={FPT} />

                {/* Row 5: FPT | FPT */}
                <LogoItem src={FPT} />
                <LogoItem src={FPT} />
              </Grid>
            </motion.div>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};
export default TrustedBy;