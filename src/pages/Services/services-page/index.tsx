import { Box } from "@chakra-ui/react";
import ServicesHero from "../components/ServiceHero";
import WhyWorkWithUsMain from "../components/WhyWorkWithUsMain";
import ScheduleCallButton from "@components/schedule-call-button";
import OurServiceSection from "../components/OurService";
import { type PortfolioItem } from "../../home-page/components/portfolio-grid";
import ServicePortfolio from "../components/ServicePortfolio";
import TrustedBy from "@components/work-page/TrustedBy";
import ServicesOfInterest from "../components/ServicesOfInterest";
import AutoGallery from "../../../components/common/auto-gallery";
import ProfessionalServicesText from "../../../components/common/professional-services-text";
import ServiceDetailsText from "../../../components/common/service-details-text";
import FaqSection, {
  type FaqItem,
} from "../../../components/common/faq-section";
import { TestimonialProvider } from "../../../components/common/testimonial/TestimonialContext";
import GooeyCursorWrapper from "../../../components/common/testimonial/GooeyCursorWrapper";
import TestimonialWatermark from "../../../components/common/testimonial/TestimonialWatermark";
import TestimonialGrid from "../../../components/common/testimonial/TestimonialGrid";
import { testimonialsData } from "../../../components/common/testimonial/testimonialsData";
import {
  anh1Gallery,
  anh2Gallery,
  anh3Gallery,
  anh4Gallery,
  city,
  city2,
  company,
  dragonBridge,
  game2,
} from "@assets/images";

const serviceFaqItems: FaqItem[] = [
  {
    id: 0,
    question: "How much does 3D architectural rendering cost?",
    answer:
      "We offer a full range of 3D architectural visualization services including photorealistic rendering, walkthroughs, AR/VR experiences, and interactive 3D models tailored for architects, developers, and real estate professionals.",
  },
  {
    id: 1,
    question: "What do I need to provide to start a 3D rendering project?",
    answer:
      "Project timelines vary depending on complexity. A standard exterior rendering takes 3–5 business days, while full animation or interactive experiences may take 2–4 weeks. We always discuss timelines upfront.",
  },
  {
    id: 2,
    question:
      "How long does it take to deliver architectural rendering services?",
    answer:
      "We deliver files in formats best suited to your needs — high-resolution JPG/PNG for stills, MP4 for animations, and web-ready formats for interactive 3D or AR/VR experiences.",
  },
  {
    id: 3,
    question:
      "What’s the difference between 3D visualization services and standard?",
    answer:
      "Yes. We include revision rounds at key milestones so you can review and give feedback before final delivery. Our goal is to ensure the result matches your vision exactly.",
  },
  {
    id: 4,
    question: "Why should I choose 3DARCHTECH for 3D rendering services?",
    answer:
      "Simply schedule a call with our team. We will discuss your project requirements, scope, and timeline, then provide a tailored proposal within 24 hours.",
  },
];

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "City Simulation",
    image: city,
    tags: ["Visualize", "Render"],
  },
  {
    id: 2,
    title: "T House",
    image: anh1Gallery,
    tags: ["Visualize", "Render"],
  },
  {
    id: 3,
    title: "New Zealand",
    image: city2,
    tags: ["Visualize", "Render"],
  },
  {
    id: 4,
    title: "New York",
    image: anh2Gallery,
    tags: ["Visualize", "Render"],
  },
  {
    id: 5,
    title: "Wonderspace",
    image: game2,
    tags: ["AR/VR", "Render"],
  },
  {
    id: 6,
    title: "Lively Grotesque",
    image: anh3Gallery,
    tags: ["AR/VR", "Render"],
  },
  {
    id: 7,
    title: "The Era of Gen F",
    image: anh4Gallery,
    tags: ["AR/VR", "Render"],
  },
  {
    id: 8,
    title: "Dragon Bridge",
    image: dragonBridge,
    tags: ["Visualize", "Render"],
  },
  {
    id: 9,
    title: "Education Web",
    image: company,
    tags: ["Website"],
  },
];

const ServicePage = () => {
  return (
    <Box position="relative" width="100%" bg="transparent" overflow="hidden">
      <ServicesHero
        imageLink={dragonBridge}
        imageTitle={
          <>
            3D Rendering <br /> Services
          </>
        }
        description="Creating a new reality based on your personal vision through 3D rendering. We provide 3D visualization services to designers, architects, and real estate manager."
      />
      <WhyWorkWithUsMain />
      <OurServiceSection />
      <ServicePortfolio
        title={
          <>
            3D Rendering <br /> Portfolio
          </>
        }
        items={portfolioItems}
      />
      <TrustedBy />
      <Box width="100%">
        <TestimonialProvider>
          <GooeyCursorWrapper>
            <TestimonialWatermark text={"what people\nthink about us"} />
            <TestimonialGrid testimonials={testimonialsData} />
          </GooeyCursorWrapper>
        </TestimonialProvider>
      </Box>
      <ServicesOfInterest />
      <ScheduleCallButton />
      <AutoGallery />
      <ProfessionalServicesText />
      <ServiceDetailsText />
      <FaqSection items={serviceFaqItems} />
    </Box>
  );
};

export default ServicePage;
