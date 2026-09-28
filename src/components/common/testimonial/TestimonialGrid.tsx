import { Box, Container, Text, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface Testimonial {
  name: string;
  company: string;
  quote: string;
  date: string;
}

const TestimonialCard = ({
  testimonial,
  offsetY,
  align = "left",
}: {
  testimonial: Testimonial;
  offsetY: number;
  align?: "left" | "right";
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      position="relative"
      w={{ base: "100%", md: "280px" }}
      mt={`${offsetY}px`}
      cursor="pointer"
      zIndex={isHovered ? 9999 : 1}
      isolation="isolate"
    >
      <Box
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Text
          fontFamily="'Be Vietnam Pro'"
          fontWeight="700"
          fontSize={{ base: "14px", md: "18px" }}
          color="black"
        >
          {testimonial.name}
        </Text>
        <Text
          fontFamily="'Be Vietnam Pro'"
          fontWeight="400"
          fontSize={{ base: "12px", md: "14px" }}
          color="gray.500"
          mt={1}
        >
          {testimonial.company}
        </Text>
      </Box>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            style={{
              position: "absolute",
              top: "60px",
              left: align === "left" ? 0 : "auto",
              right: align === "right" ? 0 : "auto",
              zIndex: 9999,
              pointerEvents: "none",
            }}
          >
            <Flex
              direction="column"
              justify="center"
              align="flex-start"
              p={{ base: "10px", md: "20px" }}
              gap={{ base: "4px", md: "10px" }}
              w={{ base: "180px", sm: "220px", md: "390px" }}
              h={{ base: "auto", md: "250px" }}
              minH={{ base: "140px", md: "250px" }}
              bg="#FFF4E8"
              backdropFilter="blur(25px)"
              borderRadius="20px"
              boxShadow="xl"
            >
              <Text
                fontFamily="'Be Vietnam Pro'"
                fontWeight="700"
                fontSize={{ base: "13px", md: "18px" }}
                color="black"
              >
                {testimonial.name}
              </Text>
              <Text
                fontFamily="'Be Vietnam Pro'"
                fontWeight="400"
                fontSize={{ base: "10px", md: "14px" }}
                color="gray.500"
              >
                {testimonial.company}
              </Text>
              <Text
                fontFamily="'Be Vietnam Pro'"
                fontSize={{ base: "12px", md: "13px" }}
                color="gray.700"
                lineHeight="1.6"
                fontStyle="italic"
                noOfLines={{ base: 5, md: 6 }}
              >
                {testimonial.quote}
              </Text>
              <Text
                fontFamily="'Be Vietnam Pro'"
                fontSize={{ base: "11px", md: "13px" }}
                fontWeight="600"
                color="gray.600"
              >
                {testimonial.date}
              </Text>
            </Flex>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
};

interface TestimonialGridProps {
  testimonials: Testimonial[];
}

const TestimonialGrid = ({ testimonials }: TestimonialGridProps) => {
  return (
    <Container
      maxW="container.xl"
      position="relative"
      zIndex={1}
      pb={10}
      pt={5}
    >
      <Box
        display="grid"
        gridTemplateColumns={{ base: "repeat(2, 1fr)", md: "repeat(13, 1fr)" }}
        gridTemplateRows={{ base: "repeat(3, auto)", md: "repeat(3, auto)" }}
        columnGap={{ base: "20px", md: "0px" }}
        rowGap={{ base: "40px", md: "60px" }}
        py={0}
      >
        {/* Row 1 */}
        {testimonials[0] && (
          <Box gridColumn={{ base: "4 / 6", md: "5 / 7" }} gridRow="1">
            <TestimonialCard testimonial={testimonials[0]} offsetY={0} />
          </Box>
        )}
        {testimonials[1] && (
          <Box gridColumn={{ base: "8 / 11", md: "9 / 11" }} gridRow="1">
            <TestimonialCard
              testimonial={testimonials[1]}
              offsetY={0}
              align="right"
            />
          </Box>
        )}

        {/* Row 2 */}
        {testimonials[2] && (
          <Box gridColumn={{ base: "3 / 4", md: "3 / 5" }} gridRow="2">
            <TestimonialCard testimonial={testimonials[2]} offsetY={0} />
          </Box>
        )}
        {testimonials[3] && (
          <Box gridColumn={{ base: "7 / 9", md: "11 / 13" }} gridRow="2">
            <TestimonialCard
              testimonial={testimonials[3]}
              offsetY={0}
              align="right"
            />
          </Box>
        )}

        {/* Row 3 */}
        {testimonials[4] && (
          <Box gridColumn={{ base: "4 / 6", md: "5 / 7" }} gridRow="3">
            <TestimonialCard testimonial={testimonials[4]} offsetY={0} />
          </Box>
        )}
        {testimonials[5] && (
          <Box gridColumn={{ base: "8 / 10", md: "9 / 11" }} gridRow="3">
            <TestimonialCard
              testimonial={testimonials[5]}
              offsetY={0}
              align="right"
            />
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default TestimonialGrid;
