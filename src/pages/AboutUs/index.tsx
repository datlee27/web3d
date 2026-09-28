import { Box } from "@chakra-ui/react";
import { Hero } from "./components/about-section";
import TeamSection from "./components/about-section/components/team-section";
import { ServicesSection } from "./components/our-service";
import ServiceAreas from "./components/our-service/components/service-areas";
import TrustedBy from "@components/work-page/TrustedBy";
import { TestimonialProvider } from "../../components/common/testimonial/TestimonialContext";
import GooeyCursorWrapper from "../../components/common/testimonial/GooeyCursorWrapper";
import TestimonialWatermark from "../../components/common/testimonial/TestimonialWatermark";
import TestimonialGrid from "../../components/common/testimonial/TestimonialGrid";
import { testimonialsData } from "../../components/common/testimonial/testimonialsData";
import ScheduleCallButton from "@components/schedule-call-button";

const AboutUs = () => {
  return (
    <Box
      position="relative"
      width="100%"
      overflow="hidden"
      bg="transparent"
    >
      <Hero />
      <TeamSection enableCarousel={true} />
      <ServicesSection />
      <ServiceAreas />
      <TrustedBy />
      <TestimonialProvider>
        <GooeyCursorWrapper>
          <TestimonialWatermark text={"what people\nthink about us"} />
          <TestimonialGrid testimonials={testimonialsData} />
        </GooeyCursorWrapper>
      </TestimonialProvider>
      <ScheduleCallButton />
    </Box>
  );
};

export default AboutUs;
