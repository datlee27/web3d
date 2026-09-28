import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  HStack,
  Input,
  Link,
  Text,
  Textarea,
  VStack,
  Icon,
} from "@chakra-ui/react";
import { FaFacebookF, FaTiktok } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  useScrollReveal,
  fadeInLeft,
  fadeInUp,
  staggerContainer,
} from "../../../../components/common/animations/index";

import HeroHouse from "@assets/images/upscale_image.webp";

const ContactFooter = () => {
  const { ref: formRef, isVisible: formVisible } = useScrollReveal({
    threshold: 0.2,
    triggerOnce: false,
  });

  return (
    <Box bg="white" color="black" fontFamily="sans-serif">
      {/* ================= CONTACT FORM SECTION ================= */}
      <Container maxW="container.xl" pb={16} pt={8} ref={formRef}>
        <Flex direction="row" alignItems="flex-end" gap={2} w="full">
          {/* LEFT - Title */}
          <motion.div
            initial="hidden"
            animate={formVisible ? "visible" : "hidden"}
            variants={fadeInLeft}
            style={{ flex: 1 }}
          >
            <Heading
              fontSize={{ base: "7xl", md: "9xl", lg: "96px" }}
              fontWeight="500"
              fontStyle="Medium"
              lineHeight="1.2"
              bgGradient="linear(to-b, #FF6B35, #FFB59A)"
              bgClip="text"
            >
              Let's
              <br />
              create your
              <br />
              new project
              <br />
              together!
            </Heading>
          </motion.div>

          {/* RIGHT - Form */}
          <motion.div
            initial="hidden"
            animate={formVisible ? "visible" : "hidden"}
            variants={staggerContainer}
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
            }}
          >
            <VStack spacing={6} align="stretch">
              <motion.div variants={fadeInUp}>
                <Input
                  placeholder="Name"
                  variant="flushed"
                  borderColor="gray.400"
                  _placeholder={{ color: "gray.600", fontWeight: "500" }}
                  py={6}
                  fontSize="2xl"
                  fontWeight="500"
                />
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Input
                  placeholder="Email"
                  variant="flushed"
                  borderColor="gray.400"
                  _placeholder={{ color: "gray.600", fontWeight: "500" }}
                  py={6}
                  fontSize="2xl"
                  fontWeight="500"
                />
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Textarea
                  placeholder="Your Message"
                  variant="flushed"
                  borderColor="gray.400"
                  _placeholder={{ color: "gray.600", fontWeight: "500" }}
                  rows={3}
                  resize="none"
                  fontSize="2xl"
                  fontWeight="500"
                />
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Text
                  fontWeight="700"
                  fontSize="3xl"
                  cursor="pointer"
                  color="#000000"
                  pt={0}
                  textDecoration="underline"
                  textDecorationThickness="2px"
                  textUnderlineOffset="8px"
                >
                  Send
                </Text>
              </motion.div>
            </VStack>
          </motion.div>
        </Flex>
      </Container>

      {/* ================= HERO IMAGE ================= */}
      <Box
        w="100%"
        h={{ base: "300px", md: "500px", lg: "600px" }}
        overflow="hidden"
      >
        <Box
          w="100%"
          h="100%"
          bgImage={`url(${HeroHouse})`}
          bgSize="cover"
          bgPosition="center"
        />
      </Box>

      {/* Top Footer Section - Menu, Services, Contact, Social */}
      <Box bg="white" pt={12} pb={8}>
        <Container maxW="container.xl">
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={12}>
            {/* LEFT SIDE - 4 cột dọc */}
            <HStack spacing={20} alignItems="start" pl={12}>
              {/* Cột 1: Menu */}
              <VStack align="flex-start" spacing={4}>
                <Text fontSize="16px" color="black" fontWeight="500">
                  Menu
                </Text>
              </VStack>

              {/* Cột 2: Works, Studio, Blog */}
              <VStack align="flex-start" spacing={4} ml={-4}>
                <Link fontSize="16px" color="black">
                  Works
                </Link>
                <Link fontSize="16px" color="black">
                  Studio
                </Link>
                <Link fontSize="16px" color="black">
                  Blog
                </Link>
              </VStack>

              {/* Cột 3: Services */}
              <VStack align="flex-start" spacing={4}>
                <Text fontSize="16px" color="black" fontWeight="500">
                  Services
                </Text>
              </VStack>

              {/* Cột 4: AR/VR Services, ... */}
              <VStack align="flex-start" spacing={4} ml={-4}>
                <Link fontSize="16px" color="black">
                  AR/VR Services
                </Link>
                <Link fontSize="16px" color="black">
                  Game 2D & 3D
                </Link>
                <Link fontSize="16px" color="black">
                  Training course
                </Link>
                <Link fontSize="16px" color="black">
                  Web & App
                </Link>
                <Link fontSize="md" color="black">
                  Visualization
                </Link>
                <Link fontSize="16px" color="black">
                  Marketing
                </Link>
              </VStack>
            </HStack>

            {/* RIGHT SIDE - Contact, Location, Social */}
            <VStack align="flex-start" spacing={6}>
              {/* Contact Row */}
              <HStack spacing={12} align="flex-start">
                <Text
                  fontSize="16px"
                  color="black"
                  minW="80px"
                  fontWeight="500"
                >
                  Contact
                </Text>
                <VStack align="flex-start" spacing={1}>
                  <Text fontSize="42px" fontWeight="600" color="black">
                    (+84) 82 458 3486
                  </Text>
                  <Link
                    fontSize="32px"
                    color="black"
                    href="mailto:brendontran@3darchtech.com"
                  >
                    brendontran@3darchtech.com
                  </Link>
                </VStack>
              </HStack>

              {/* Location Row */}
              <HStack spacing={12} align="flex-start">
                <Text
                  fontSize="16px"
                  color="black"
                  minW="80px"
                  fontWeight="500"
                >
                  Location
                </Text>
                <Text fontSize="24px" color="black">
                  48-50 Nguyen Phuoc Lan, Hoa Xuan, Cam Le,
                  <br />
                  Da Nang, Viet Nam
                </Text>
              </HStack>

              {/* Social Row */}
              <HStack spacing={12} align="flex-start">
                <Text
                  fontSize="16px"
                  color="black"
                  minW="80px"
                  fontWeight="500"
                >
                  Social
                </Text>
                <HStack spacing={4}>
                  <Link href="#" color="black">
                    <Icon as={FaFacebookF} boxSize={"50px"} />
                  </Link>
                  <Link href="#" color="black">
                    <Icon as={FaTiktok} boxSize={"50px"} />
                  </Link>
                </HStack>
              </HStack>
            </VStack>
          </Grid>
        </Container>
      </Box>
      {/* Bottom Footer Section - with 3DARCHTECH background */}
      <Box
        bg="white"
        pt={4}
        pb={4}
        position="relative"
        overflow="hidden"
        minH={{ base: "100px", md: "140px", lg: "180px" }}
        display="flex"
        flexDirection="column"
      >
        {/* Background Text */}
        <Text
          position="absolute"
          bottom="0"
          left="50%"
          transform="translateX(-50%)"
          fontSize={{ base: "60px", md: "120px", lg: "160px" }}
          fontWeight="900"
          letterSpacing="0.05em"
          whiteSpace="nowrap"
          bgGradient="linear(to-b, #FFD4C2, #FFF5F0)"
          bgClip="text"
          userSelect="none"
          pointerEvents="none"
          zIndex={0}
          lineHeight="1"
        >
          3DARCHTECH
        </Text>

        {/* Bottom Bar - positioned above background text */}
        <Container maxW="container.xl" position="relative" zIndex={2} mt="auto">
          <Flex
            justify="space-between"
            align="center"
            py={4}
            flexWrap="wrap"
            gap={4}
          >
            <Link fontSize="16px" color="black" fontWeight="600">
              Privacy Policy
            </Link>
            <Link fontSize="16px" color="gray.600" fontWeight="600">
              Terms of Use
            </Link>
            <Text fontSize="16px" color="gray.600" fontWeight="600">
              ©2026 3DARCHTECH. All rights reserved
            </Text>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default ContactFooter;
