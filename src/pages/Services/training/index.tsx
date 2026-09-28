import { Box } from "@chakra-ui/react";
import ServicesHero from "../components/ServiceHero";
import WhyWorkWithUsSub from "../components/WhyWorkWithUsSub";
import ServiceImageSection from "../components/ServiceImageSection";
import { type PortfolioItem } from "../../home-page/components/portfolio-grid";
import { anh1Gallery, anh2Gallery } from "@assets/images";
import {
  anh3Gallery,
  anh4Gallery,
  city,
  city2,
  company,
  dragonBridge,
  game2,
} from "@assets/images";
import ServicePortfolio from "../components/ServicePortfolio";
import TrustedBy from "../../../components/work-page/TrustedBy";
import Pipeline, {
  type PipelineStep,
} from "../../../components/common/pipeline";
// No imports here as they are unused
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

import {
  foundationImg,
  practiceImg,
  developmentImg,
  reviewImg as trainingReviewImg,
  finalAssessmentImg,
  certificationImg,
  careSupportImg,
} from "@assets/training-pipeline";

const trainingPipelineSteps: PipelineStep[] = [
  {
    number: "/1",
    title: "Foundation",
    description:
      "We begin by establishing the core principles and fundamental knowledge required for the training course, ensuring a solid starting point for all learners.",
    image: foundationImg,
  },
  {
    number: "/2",
    title: "Practice",
    description:
      "Learners engage in hands-on exercises and practical applications to reinforce concepts and develop essential skills in a controlled environment.",
    image: practiceImg,
  },
  {
    number: "/3",
    title: "Development",
    description:
      "This stage focuses on building more complex projects and deepening expertise through iterative design and problem-solving activities.",
    image: developmentImg,
  },
  {
    number: "/4",
    title: "Review",
    description:
      "Constructive feedback and detailed evaluations help students refine their work and identify areas for further improvement or clarification.",
    image: trainingReviewImg,
  },
  {
    number: "/5",
    title: "Final Assessment",
    description:
      "A comprehensive evaluation of the learner's skills and knowledge, ensuring they have met the course objectives and are ready for certification.",
    image: finalAssessmentImg,
  },
  {
    number: "/6",
    title: "Certification",
    description:
      "Upon successful completion, students receive a formal recognition of their achievements, validating their professional development and expertise.",
    image: certificationImg,
  },
  {
    number: "/7",
    title: "Care Support",
    description:
      "Ongoing assistance and resources are provided to graduates, ensuring they remain confident and supported as they apply their new skills in the real world.",
    image: careSupportImg,
  },
];

const trainingServiceDetailsSections: ServiceDetailSection[] = [
  {
    title: "Why High-Quality Training Materials Matter Today?",
    paragraphs: 3,
  },
  {
    title: "What You Get with Professional Training Content?",
    paragraphs: 3,
  },
  {
    title: "Training Solutions for Modern Enterprises",
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

const trainingFeatures = [
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

const TrainingPage = () => {
  return (
    <Box width="100%" bg="white">
      <ServicesHero
        imageLink={anh1Gallery}
        imageTitle={
          <>
            Training <br /> Course{" "}
          </>
        }
        description="We optimize virtual reality solutions across architecture, culture, and entertainment by integrating advanced technologies and user-centered design to deliver seamless, immersive experiences and elevate user experience."
      />

      <WhyWorkWithUsSub
        title={
          <>
            Why Work With Us for <br /> Training Services
          </>
        }
        features={trainingFeatures}
      />

      <ServiceImageSection imageSrc={anh2Gallery} />
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
            steps={trainingPipelineSteps}
            title="Training course pipeline"
          />
          <OutstandingServices
            title={
              <>
                Outstanding <br /> Training <br /> Services
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
      <DigitalConceptsText title="Training Services" />
      <ServiceDetailsText sections={trainingServiceDetailsSections} />
      <FaqSection items={serviceFaqItems} />
    </Box>
  );
};

export default TrainingPage;
