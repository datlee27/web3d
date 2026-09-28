import { Box } from "@chakra-ui/react";
import ServicesHero from "../components/ServiceHero";
import WhyWorkWithUsSub from "../components/WhyWorkWithUsSub";
import ServiceImageSection from "../components/ServiceImageSection";
import { type PortfolioItem } from "../../home-page/components/portfolio-grid";
import { city, city2 } from "@assets/images";
import {
  anh1Gallery,
  anh2Gallery,
  anh3Gallery,
  anh4Gallery,
  company,
  dragonBridge,
  game2,
} from "@assets/images";
import ServicePortfolio from "../components/ServicePortfolio";
import TrustedBy from "../../../components/work-page/TrustedBy";
import Pipeline, {
  type PipelineStep,
} from "../../../components/common/pipeline";
import {
  planImg,
  designImg,
  developImg,
  testImg,
  deployImg,
  reviewImg,
} from "@assets/images";
import OutstandingServices from "../../../components/common/outstanding-services";
import { TestimonialProvider } from "../../../components/common/testimonial/TestimonialContext";
import GooeyCursorWrapper from "../../../components/common/testimonial/GooeyCursorWrapper";
import TestimonialWatermark from "../../../components/common/testimonial/TestimonialWatermark";
import TestimonialGrid from "../../../components/common/testimonial/TestimonialGrid";
import { testimonialsData } from "../../../components/common/testimonial/testimonialsData";
import ServicesOfInterest from "../components/ServicesOfInterest";
import AutoGallery from "../../../components/common/auto-gallery";
import DigitalConceptsText from "../../../components/common/digital-concepts-text";
import ServiceDetailsText, {
  type ServiceDetailSection,
} from "../../../components/common/service-details-text";
import FaqSection, {
  type FaqItem,
} from "../../../components/common/faq-section";

const visualizationPipelineSteps: PipelineStep[] = [
  {
    number: "/1",
    title: "Plan",
    description:
      "We review your architectural plans, CAD files, or sketches to understand the project scale, lighting requirements, and desired mood.",
    image: planImg,
  },
  {
    number: "/2",
    title: "Design",
    description:
      "We provide low-resolution drafts to help you select the best camera angles and compositions for the final high-quality renders.",
    image: designImg,
  },
  {
    number: "/3",
    title: "Create",
    description:
      "Our artists model the environment, set up lighting, and apply realistic materials to achieve stunning photorealistic visuals.",
    image: developImg,
  },
  {
    number: "/4",
    title: "Test",
    description:
      "We iterate based on your feedback regarding colors, textures, or lighting to ensure the final result matches your vision.",
    image: testImg,
  },
  {
    number: "/5",
    title: "Deploy",
    description:
      "We render the final images or animations in ultra-high resolution, ensuring every detail is sharp and visually captivating.",
    image: deployImg,
  },
  {
    number: "/6",
    title: "Review",
    description:
      "We deliver high-resolution assets in various formats suitable for marketing, stakeholders, and construction planning.",
    image: reviewImg,
  },
];

const visualizationServiceDetailsSections: ServiceDetailSection[] = [
  {
    title: "Why High-Quality Architectural Visualization Matters?",
    paragraphs: 3,
  },
  {
    title: "What You Get with Professional Visualization Services?",
    paragraphs: 3,
  },
  {
    title: "Visualization for Real Estate & Architecture",
    paragraphs: 3,
  },
  {
    title: "Question?",
    paragraphs: 2,
  },
  {
    title: "Question?",
    paragraphs: 3,
  },
  {
    title: "Question?",
    paragraphs: 4,
  },
];

const visualizationFeatures = [
  {
    title: "High-End Visual Quality",
    description:
      "We deliver high-quality, photorealistic renderings that balance visual realism with clarity and accuracy. Every visual is designed to communicate ideas effectively, supporting decision-making, presentations, and marketing needs.",
  },
  {
    title: "Focused Project Management",
    description:
      "Work with a dedicated project manager who oversees scope, timelines, and feedback throughout the process. This ensures clear communication, structured revisions, and consistent alignment with your design vision from start to finish.",
  },
  {
    title: "Fast and Reliable Turnaround",
    description:
      "Our team of 35+ experienced artists delivers high-quality renderings on dependable timelines, keeping your projects on track and decisions moving forward.",
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

const VisualizationPage = () => {
  return (
    <Box width="100%" bg="white">
      <ServicesHero
        imageLink={city}
        imageTitle="3D Visualization"
        description="We provide intuitive and realistic 3D visualization services, supporting architectural visualization, detailed simulation and complex data interpretation. Our visuals help clients explore ideas with greater clarity, reduce decision-making risks, and communicate concepts more effectively across teams and stakeholders."
      />

      <WhyWorkWithUsSub
        title={
          <>
            Why Work With Us for <br /> Visualization Services
          </>
        }
        features={visualizationFeatures}
      />

      <ServiceImageSection imageSrc={city2} />
      <ServicePortfolio
        title={
          <>
            3D Rendering <br /> Portfolio
          </>
        }
        items={portfolioItems}
      />
      <TestimonialProvider>
        <GooeyCursorWrapper>
          <TrustedBy />
          <Pipeline
            steps={visualizationPipelineSteps}
            title="3D Visualization pipeline"
          />
          <OutstandingServices
            title={
              <>
                Outstanding <br /> Visualization <br /> Services
              </>
            }
            columns={[
              [
                "Dolor sit amet, consectetur adipiscing elit. In nibh justo, commodo eget sapien at, consectetur viverra ipsum. Vivamus faucibus orci sed purus tincidunt, vel dictum turpis sagittis. Vestibulum laoreet varius ante, et finibus metus porta eu. Curabitur ultrices venenatis leo eu.",
                "Dolor sit amet, consectetur adipiscing elit. In nibh justo, commodo eget sapien at, consectetur viverra ipsum. Vivamus faucibus orci sed purus tincidunt, vel dictum turpis sagittis. Vestibulum laoreet varius ante, et finibus metus porta eu. Curabitur ultrices venenatis leo eu.",
              ],
              [
                "Dolor sit amet, consectetur adipiscing elit. In nibh justo, commodo eget sapien at, consectetur viverra ipsum. Vivamus faucibus orci sed purus tincidunt, vel dictum turpis sagittis. Vestibulum laoreet varius ante, et finibus metus porta eu. Curabitur ultrices venenatis leo eu.",
                "Dolor sit amet, consectetur adipiscing elit. In nibh justo, commodo eget sapien at, consectetur viverra ipsum. Vivamus faucibus orci sed purus tincidunt, vel dictum turpis sagittis. Vestibulum laoreet varius ante, et finibus metus porta eu. Curabitur ultrices venenatis leo eu.",
                "Dolor sit amet, consectetur adipiscing elit. In nibh justo, commodo eget sapien at, consectetur viverra ipsum. Vivamus faucibus orci sed purus tincidunt, vel dictum turpis sagittis. Vestibulum laoreet varius ante, et finibus metus porta eu. Curabitur ultrices venenatis leo eu.",
              ],
            ]}
          />
          <TestimonialWatermark text={"what people\nthink about us"} />
          <TestimonialGrid testimonials={testimonialsData} />
        </GooeyCursorWrapper>
      </TestimonialProvider>
      <ServicesOfInterest />
      <AutoGallery />
      <DigitalConceptsText title="Visualization Services" />
      <ServiceDetailsText sections={visualizationServiceDetailsSections} />
      <FaqSection items={serviceFaqItems} />
    </Box>
  );
};

export default VisualizationPage;
