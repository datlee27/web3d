import { Box, Container, Text, Flex } from "@chakra-ui/react";
import { useState, useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FaqSection, { type FaqItem } from "@components/common/faq-section";

const faqData: FaqItem[] = [
  {
    id: 1,
    question: "What is the 3D rendering process in 3DARCHTECH?",
    answer:
      "Our 3D rendering process includes concept development, 3D modeling, texturing, lighting setup, rendering, and post-production. We work closely with clients at every stage to ensure the final visualization perfectly matches their vision.",
  },
  {
    id: 2,
    question: "How much does 3D architectural rendering cost?",
    answer:
      "The cost varies depending on the project scope, complexity, and deliverables required. We offer competitive pricing tailored to each project. Contact us for a detailed quote based on your specific needs.",
  },
  {
    id: 3,
    question: "How long does a 3D rendering take?",
    answer:
      "Typical turnaround time ranges from 3 to 10 business days depending on the complexity of the project. Rush delivery options are available for time-sensitive projects.",
  },
  {
    id: 4,
    question: "What is architectural 3D rendering?",
    answer:
      "Architectural 3D rendering is the process of creating photorealistic images or animations of a building or space based on architectural plans. It helps clients visualize the final result before construction begins.",
  },
  {
    id: 5,
    question: "What does a 3D rendering artist do?",
    answer:
      "A 3D rendering artist transforms architectural blueprints and design concepts into stunning, photorealistic visual representations. They handle modeling, texturing, lighting, and post-processing to create lifelike images.",
  },
];


// ========================================
// TESTIMONIALS
// ========================================
interface Testimonial {
  name: string;
  company: string;
  quote: string;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Trung Nguyen",
    company: "Fpt Education",
    quote:
      "3DARCHTECH delivered exceptional quality renders for our campus expansion project. Their attention to detail and ability to capture our design intent was remarkable.",
    date: "June 2025",
  },
  {
    name: "Trung Nguyen",
    company: "VTC",
    quote:
      "VTC has collaborated with 3DARCHTECH on many projects so far—and we're looking forward to many more. Their architectural imagery has consistently elevated our presentation work and helped communicate our ideas with clarity.",
    date: "June 2025",
  },
  {
    name: "Trung Nguyen",
    company: "VTC",
    quote:
      "Working with 3DARCHTECH has been a game-changer for our marketing materials. The photorealistic quality of their renders helps our clients visualize projects before construction begins.",
    date: "May 2025",
  },
  {
    name: "Trung Nguyen",
    company: "Fpt Education",
    quote:
      "The team at 3DARCHTECH consistently delivers on time and exceeds our expectations. Their 3D visualization capabilities have significantly improved our project presentations.",
    date: "April 2025",
  },
  {
    name: "Trung Nguyen",
    company: "Fpt Education",
    quote:
      "We've been impressed by the level of realism in every render. 3DARCHTECH understands architectural design and translates concepts into stunning visuals.",
    date: "March 2025",
  },
  {
    name: "Trung Nguyen",
    company: "Fpt Education",
    quote:
      "Outstanding collaboration and professional delivery. 3DARCHTECH's renders have helped us win multiple project bids with their compelling visualizations.",
    date: "February 2025",
  },
];

const TestimonialCard = ({
  testimonial,
  offsetY,
}: {
  testimonial: Testimonial;
  offsetY: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      position="relative"
      w={{ base: "100%", md: "280px" }}
      mt={`${offsetY}px`}
      cursor="pointer"
    >
      {/* Name & Company */}
      <Box
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Text
          fontFamily="'Be Vietnam Pro'"
          fontWeight="700"
          fontSize="18px"
          color="black"
        >
          {testimonial.name}
        </Text>
        <Text
          fontFamily="'Be Vietnam Pro'"
          fontWeight="400"
          fontSize="14px"
          color="gray.500"
          mt={1}
        >
          {testimonial.company}
        </Text>
      </Box>

      {/* Hover overlay card */}
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
              left: 0,
              zIndex: 10,
              pointerEvents: "none",
            }}
          >
            <Flex
              direction="column"
              justify="center"
              align="flex-start"
              p="20px"
              gap="10px"
              w={{ base: "calc(100vw - 40px)", md: "390px" }}
              h={{ base: "auto", md: "250px" }}
              minH="200px"
              bg="#FFF4E8"
              backdropFilter="blur(25px)"
              borderRadius="20px"
              boxShadow="xl"
            >
              <Text
                fontFamily="'Be Vietnam Pro'"
                fontWeight="700"
                fontSize="18px"
                color="black"
              >
                {testimonial.name}
              </Text>
              <Text
                fontFamily="'Be Vietnam Pro'"
                fontWeight="400"
                fontSize="14px"
                color="gray.500"
              >
                {testimonial.company}
              </Text>
              <Text
                fontFamily="'Be Vietnam Pro'"
                fontSize="13px"
                color="gray.700"
                lineHeight="1.6"
                fontStyle="italic"
                noOfLines={6}
              >
                {testimonial.quote}
              </Text>
              <Text
                fontFamily="'Be Vietnam Pro'"
                fontSize="13px"
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

// Spring-based blob animation config
const SPRING_STIFFNESS = 0.01; // Lower = more sluggish/gooey (0.01-0.1)
const SPRING_DAMPING = 0.6; // Higher = less oscillation (0.7-0.95)

const Faq = ({ top, hideFaq }: { top?: string; hideFaq?: boolean }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const blobRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  // Spring physics state for gooey blob
  const mousePos = useRef({ x: 0, y: 0 });
  const blobPos = useRef({ x: 0, y: 0 });
  const blobVel = useRef({ x: 0, y: 0 });
  const rafId = useRef<number>(0);

  // Animation loop: blob chases cursor with spring physics
  useEffect(() => {
    const animate = () => {
      const dx = mousePos.current.x - blobPos.current.x;
      const dy = mousePos.current.y - blobPos.current.y;

      // Spring force
      blobVel.current.x += dx * SPRING_STIFFNESS;
      blobVel.current.y += dy * SPRING_STIFFNESS;

      // Damping
      blobVel.current.x *= SPRING_DAMPING;
      blobVel.current.y *= SPRING_DAMPING;

      // Update position
      blobPos.current.x += blobVel.current.x;
      blobPos.current.y += blobVel.current.y;

      if (blobRef.current) {
        blobRef.current.style.transform = `translate3d(calc(${blobPos.current.x}px - 50%), calc(${blobPos.current.y}px - 50%), 0)`;
      }

      // Update flashlight mask on watermark text (follows blob, not cursor)
      if (textRef.current && containerRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const textRect = textRef.current.getBoundingClientRect();
        // Convert blob position (relative to container) to be relative to textRef
        const tx = blobPos.current.x - (textRect.left - containerRect.left);
        const ty = blobPos.current.y - (textRect.top - containerRect.top);
        const maskGradient = `radial-gradient(circle 550px at ${tx}px ${ty}px, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 40%, transparent 100%)`;
        textRef.current.style.maskImage = maskGradient;
        textRef.current.style.webkitMaskImage = maskGradient;
      }

      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId.current);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Update target position (blob will chase this with spring physics)
    mousePos.current = { x, y };
  }, []);

  return (
    <Box
      ref={containerRef}
      position={top ? "absolute" : "relative"}
      top={top}
      width="100%"
      bg="white"
      py={{ base: 16, md: 20 }}
      overflow="hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Cursor-following gradient blob (spring physics) */}
      <Box
        ref={blobRef as React.RefObject<HTMLDivElement>}
        position="absolute"
        left="0"
        top="0"
        w="90vw"
        h="90vw"
        borderRadius="full"
        pointerEvents="none"
        bg="radial-gradient(circle, rgba(255, 200, 160, 0.85) 0%, rgba(253, 210, 170, 0.55) 35%, rgba(255, 230, 200, 0.3) 60%, transparent 100%)"
        filter="blur(80px)"
        willChange="transform"
      />

      {!hideFaq && (
        <Box pt={{ base: 10, md: 20 }} pb={{ base: 10, md: 20 }} position="relative" zIndex={2}>
          <FaqSection top="" items={faqData} />
        </Box>
      )}

      {/* Watermark text revealed by blob */}
      <Box
        ref={textRef as React.RefObject<HTMLDivElement>}
        position="relative"
        textAlign="center"
        mt={-4}
        pb={16}
        zIndex={0}
        sx={{
          maskImage:
            "radial-gradient(circle 250px at -500px -500px, rgba(0,0,0,1) 0%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(circle 250px at -500px -500px, rgba(0,0,0,1) 0%, transparent 100%)",
        }}
      >
        <Text
          fontFamily="'Be Vietnam Pro'"
          fontSize={{ base: "60px", md: "100px", lg: "140px" }}
          fontWeight="800"
          lineHeight="1.1"
          color="rgba(200, 180, 160, 0.7)"
          userSelect="none"
        >
          what people
          <br />
          think about us
        </Text>
      </Box>

      {/* Testimonials Grid */}
      <Container
        maxW="container.xl"
        position="relative"
        zIndex={1}
        pb={{ base: 10, md: 20 }}
        minH={{ base: "auto", md: "550px" }}
      >
        <Box
          display="grid"
          gridTemplateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)", xl: "repeat(12, 1fr)" }}
          gridTemplateRows="auto"
          gap={{ base: "40px", md: "60px" }}
          py={{ base: 10, md: 20 }}
          px={{ base: 4, md: 0 }}
        >
          {/* Mobile/Tablet/Lg: Sequential rendering | XL: Grid positioning */}
          <Box gridColumn={{ xl: "4 / 6" }}>
            <TestimonialCard testimonial={testimonials[0]} offsetY={0} />
          </Box>
          <Box gridColumn={{ xl: "9 / 11" }}>
            <TestimonialCard testimonial={testimonials[1]} offsetY={0} />
          </Box>
          <Box gridColumn={{ xl: "2 / 4" }}>
            <TestimonialCard testimonial={testimonials[2]} offsetY={0} />
          </Box>
          <Box gridColumn={{ xl: "7 / 9" }}>
            <TestimonialCard testimonial={testimonials[3]} offsetY={0} />
          </Box>
          <Box gridColumn={{ xl: "4 / 6" }}>
            <TestimonialCard testimonial={testimonials[4]} offsetY={0} />
          </Box>
          <Box gridColumn={{ xl: "8 / 10" }}>
            <TestimonialCard testimonial={testimonials[5]} offsetY={0} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Faq;
