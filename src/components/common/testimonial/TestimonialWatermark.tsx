import { Box, Text } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { useTestimonial } from "./TestimonialContext";

interface TestimonialWatermarkProps {
  text: string;
}

const TestimonialWatermark = ({ text }: TestimonialWatermarkProps) => {
  const { blobPos, containerRef } = useTestimonial();
  const textRef = useRef<HTMLDivElement>(null);
  const rafId = useRef<number>(0);

  useEffect(() => {
    const updateMask = () => {
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
      rafId.current = requestAnimationFrame(updateMask);
    };

    rafId.current = requestAnimationFrame(updateMask);
    return () => cancelAnimationFrame(rafId.current);
  }, [blobPos, containerRef]);

  return (
    <Box
      ref={textRef}
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
      {/* Desktop/Tablet version: original line breaks */}
      <Text
        display={{ base: "none", md: "block" }}
        fontFamily="'Be Vietnam Pro'"
        fontSize={{ base: "60px", md: "100px", lg: "140px" }}
        fontWeight="800"
        lineHeight="1.1"
        color="rgba(200, 180, 160, 0.7)"
        userSelect="none"
        whiteSpace="pre-line"
      >
        {text}
      </Text>

      {/* Mobile version: one word per line */}
      <Text
        display={{ base: "block", md: "none" }}
        fontFamily="'Be Vietnam Pro'"
        fontSize={{ base: "60px", md: "100px", lg: "140px" }}
        fontWeight="800"
        lineHeight="1.1"
        color="rgba(200, 180, 160, 0.7)"
        userSelect="none"
        whiteSpace="pre-line"
      >
        {text.replace(/ /g, "\n")}
      </Text>
    </Box>
  );
};

export default TestimonialWatermark;
