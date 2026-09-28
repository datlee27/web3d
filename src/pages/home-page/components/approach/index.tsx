import { Box, Text, Flex, Image } from "@chakra-ui/react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GradientText from "@components/gradient-text";
import { cityLookdown } from "@assets/images";

const Approach = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <Box bg="white" w="full" py={{ base: 16, md: 20 }} overflow="hidden">
      <Box maxW="1540px" mx="auto" px={{ base: 6, md: 12, lg: "100px" }}>
        {/* ===== HEADING WITH EMBEDDED IMAGE ===== */}
        <Box mb={16} textAlign="left">
          {/* Dòng 1: OUR APPROACH */}
          <GradientText
            fontSize={{
              base: "11.2vw", // Tự động co giãn theo chiều rộng màn hình mobile
              md: "8.5vw", // Co giãn mượt ở tablet
              lg: "8vw", // Cố định ở màn hình lớn
              xl: "170px",
            }}
            lineHeight="1"
            letterSpacing="-0.05em"
            whiteSpace="nowrap" // Giữ trên 1 dòng
            display="block"
          >
            OUR APPROACH
          </GradientText>

          {/* Dòng 2: TO 3D + BOX ẢNH */}
          <Flex
            align="center"
            gap={{ base: 2, md: 4, lg: 8 }}
            mt={{ base: 1, md: 0 }}
            maxW="100%" // Đảm bảo hàng này không rộng quá cha
          >
            <GradientText
              fontSize={{
                base: "11.2vw",
                md: "8.5vw",
                lg: "8vw",
                xl: "170px",
              }}
              lineHeight="1"
              letterSpacing="-0.05em"
              whiteSpace="nowrap"
            >
              TO 3D
            </GradientText>

            {/* BOX ẢNH: Chìa khóa là dùng % thay vì px ở mobile */}
            <Box
              display={{ base: "none", md: "block" }}
              flex="1"
              minW="0" // Quan trọng: cho phép Box co lại nhỏ hơn nội dung của nó
              maxW={{ base: "30%", md: "40%", lg: "70%" }}
              h={{ md: "92px", lg: "92px" }} // Cố định chiều cao 92px
              overflow="hidden"
              boxShadow="2xl"
            >
              <Image src={cityLookdown} w="100%" h="100%" objectFit="cover" />
            </Box>
          </Flex>

          {/* Dòng 3: RENDERING SERVICES */}
          <GradientText
            fontSize={{
              base: "11.2vw",
              md: "8.5vw",
              lg: "8vw",
              xl: "170px",
            }}
            lineHeight="1"
            letterSpacing="-0.05em"
            display="block"
            mt={{ base: 1, md: 0 }}
          >
            RENDERING <br /> SERVICES
          </GradientText>

          {/* BOX ẢNH CHO MOBILE: Hiện ra dưới text SERVICES */}
          <Box
            display={{ base: "block", md: "none" }}
            mt={4}
            w="100%"
            h="92px"
            overflow="hidden"
            boxShadow="2xl"
          >
            <Image src={cityLookdown} w="100%" h="100%" objectFit="cover" />
          </Box>
        </Box>

        {/* ===== TWO COLUMN DESCRIPTIONS ===== */}
        <Flex
          direction={{ base: "column", md: "row" }}
          gap={{ base: 6, md: 10 }}
          mb={{ base: 10, md: 20 }}
        >
          {/* Left column - 3DARCHTECH */}
          <Box flex={1}>
            <Text
              fontFamily="'Be Vietnam Pro'"
              fontWeight="400"
              fontSize="16px"
              lineHeight="20px"
              color="#000000"
              textAlign={{ base: "left", md: "justify" }}
            >
              <Text
                as="span"
                fontWeight="700"
                color="black"
                fontSize="16px"
                fontStyle="bold"
              >
                3DARCHTECH
              </Text>{" "}
              is a specialized 3D visualization studio focused on bringing
              architectural concepts to life with stunning realism and artistic
              intention. Our team of experienced artists and designers works
              closely with architects and developers to tell compelling visual
              stories that drive project success.
            </Text>
          </Box>

          {/* Right column - OUR GOAL */}
          <Box flex={1}>
            <Text
              fontFamily="'Be Vietnam Pro'"
              fontWeight="400"
              fontSize="16px"
              lineHeight="20px"
              color="#000000"
              textAlign={{ base: "left", md: "justify" }}
            >
              <Text
                as="span"
                fontWeight="700"
                color="black"
                fontSize="16px"
                fontStyle="bold"
              >
                OUR GOAL
              </Text>{" "}
              is to provide high-quality 3D rendering services that help our
              clients communicate their vision effectively. We strive for
              excellence in every pixel, ensuring that each render captures the
              unique atmosphere and emotional essence of the architectural
              design.
            </Text>
          </Box>
        </Flex>

        {/* ===== BOTTOM SECTION: GRADIENT TEXT + PARAGRAPHS ===== */}
        <Flex
          gap={10}
          direction={{ base: "column", lg: "row" }}
          align="flex-start"
        >
          {/* Left: Gradient statement */}
          <Box flex={1}>
            <GradientText fontSize="32px" fontWeight="700" lineHeight="1.3">
              3D Rendering Company
              <br />
              that bring architectural
              <br />
              concepts to life.
            </GradientText>
          </Box>

          {/* Right: Paragraphs with show more/less */}
          <Box flex={1}>
            <Flex direction="column" gap={20}>
              <Text
                fontFamily="'Be Vietnam Pro'"
                fontWeight="400"
                fontSize="16px"
                lineHeight="20px"
                color="#000000"
                textAlign="justify"
              >
                Dolor sit amet, consectetur adipiscing elit. In nibh justo,
                commodo eget sapien at, consectetur viverra ipsum. Vivamus
                faucibus orci sed purus tincidunt, vel dictum turpis sagittis.
                Vestibulum laoreet varius ante, et finibus metus portu eu.
                Curabitur ultrices venenatis leo eu tristique.
              </Text>

              <Text
                fontFamily="'Be Vietnam Pro'"
                fontWeight="400"
                fontSize="16px"
                lineHeight="20px"
                color="#000000"
                textAlign="justify"
              >
                Dolor sit amet, consectetur adipiscing elit. In nibh justo,
                commodo eget sapien at, consectetur viverra ipsum. Vivamus
                faucibus orci sed purus tincidunt, vel dictum turpis sagittis.
                Vestibulum laoreet varius ante, et finibus metus portu eu.
                Curabitur ultrices venenatis leo eu tristique.
              </Text>

              <AnimatePresence>
                {showMore && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    style={{ overflow: "hidden" }}
                  >
                    <Flex direction="column" gap={20}>
                      <Text
                        fontFamily="'Be Vietnam Pro'"
                        fontWeight="400"
                        fontSize="16px"
                        lineHeight="20px"
                        color="#000000"
                        textAlign="justify"
                      >
                        Dolor sit amet, consectetur adipiscing elit. In nibh
                        justo, commodo eget sapien at, consectetur viverra
                        ipsum. Vivamus faucibus orci sed purus tincidunt, vel
                        dictum turpis sagittis. Vestibulum laoreet varius ante,
                        et finibus metus portu eu. Curabitur ultrices venenatis
                        leo eu tristique.
                      </Text>

                      <Text
                        fontFamily="'Be Vietnam Pro'"
                        fontWeight="400"
                        fontSize="16px"
                        lineHeight="20px"
                        color="#000000"
                        textAlign="justify"
                      >
                        Dolor sit amet, consectetur adipiscing elit. In nibh
                        justo, commodo eget sapien at, consectetur viverra
                        ipsum. Vivamus faucibus orci sed purus tincidunt, vel
                        dictum turpis sagittis. Vestibulum laoreet varius ante,
                        et finibus metus portu eu. Curabitur ultrices venenatis
                        leo eu tristique.
                      </Text>
                    </Flex>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Show more / Show less toggle */}
              <Flex
                align="center"
                gap={2}
                cursor="pointer"
                onClick={() => setShowMore(!showMore)}
                _hover={{ opacity: 0.7 }}
                transition="opacity 0.2s"
              >
                <Text
                  fontFamily="'Be Vietnam Pro'"
                  fontWeight="500"
                  fontSize="13px"
                  color="black"
                >
                  {showMore ? "Show less" : "Show more"}
                </Text>
                <motion.div
                  animate={{ rotate: showMore ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Text fontSize="14px" color="black">
                    ⌄
                  </Text>
                </motion.div>
              </Flex>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Approach;
