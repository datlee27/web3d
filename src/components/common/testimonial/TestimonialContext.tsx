import React, { createContext, useContext, useRef } from "react";

interface TestimonialContextType {
  blobPos: React.MutableRefObject<{ x: number; y: number }>;
  containerRef: React.RefObject<HTMLDivElement | null>;
}

const TestimonialContext = createContext<TestimonialContextType | null>(null);

export const TestimonialProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const blobPos = useRef({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <TestimonialContext.Provider value={{ blobPos, containerRef }}>
      {children}
    </TestimonialContext.Provider>
  );
};

export const useTestimonial = () => {
  const context = useContext(TestimonialContext);
  if (!context) {
    throw new Error("useTestimonial must be used within a TestimonialProvider");
  }
  return context;
};
