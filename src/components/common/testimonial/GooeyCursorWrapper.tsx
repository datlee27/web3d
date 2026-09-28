import { Box } from "@chakra-ui/react";
import { useEffect, useRef, useCallback } from "react";
import { useTestimonial } from "./TestimonialContext";

const SPRING_STIFFNESS = 0.01;
const SPRING_DAMPING = 0.6;

const GooeyCursorWrapper = ({ children }: { children: React.ReactNode }) => {
  const { blobPos, containerRef } = useTestimonial();
  const blobRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const blobVel = useRef({ x: 0, y: 0 });
  const rafId = useRef<number>(0);

  useEffect(() => {
    const animate = () => {
      const dx = mousePos.current.x - blobPos.current.x;
      const dy = mousePos.current.y - blobPos.current.y;

      blobVel.current.x += dx * SPRING_STIFFNESS;
      blobVel.current.y += dy * SPRING_STIFFNESS;

      blobVel.current.x *= SPRING_DAMPING;
      blobVel.current.y *= SPRING_DAMPING;

      blobPos.current.x += blobVel.current.x;
      blobPos.current.y += blobVel.current.y;

      if (blobRef.current) {
        blobRef.current.style.transform = `translate3d(calc(${blobPos.current.x}px - 50%), calc(${blobPos.current.y}px - 50%), 0)`;
      }

      // Trigger a custom event or let children poll the ref
      // Watermark will use the ref from context and handle its own mask update in its own raf or effect
      // Actually, to keep it simple and consistent with original code, we can dispatch a custom event
      // Or better, since we're using refs, children can listen for mousemove on container or have their own raf.
      // Let's stick to the original logic where the container mousemove updates the target.

      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId.current);
  }, [blobPos]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      mousePos.current = { x, y };
    },
    [containerRef],
  );

  return (
    <Box
      ref={containerRef}
      position="relative"
      width="100%"
      bg="white"
      py={{ base: 16, md: 20 }}
      overflow="hidden"
      onMouseMove={handleMouseMove}
      sx={{
        maskImage:
          "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
      }}
    >
      {/* Cursor-following gradient blob */}
      <Box
        ref={blobRef}
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
        zIndex={0}
      />

      <Box position="relative" zIndex={1}>
        {children}
      </Box>
    </Box>
  );
};

export default GooeyCursorWrapper;
