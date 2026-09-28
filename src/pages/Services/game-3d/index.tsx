import { Box } from "@chakra-ui/react";
import ServicesHero from "../components/ServiceHero";
import WhyWorkWithUsSub from "../components/WhyWorkWithUsSub";
import ServiceImageSection from "../components/ServiceImageSection";
import { type PortfolioItem } from "../../home-page/components/portfolio-grid";
import { game2, anh3Gallery } from "@assets/images";
import {
  anh1Gallery,
  anh2Gallery,
  anh4Gallery,
  city,
  city2,
  company,
  dragonBridge,
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

const game3dPipelineSteps: PipelineStep[] = [
  {
    number: "/1",
    title: "Plan",
    description:
      "Once we receive all the necessary project information, we review the scope, define the goals, align expectations, and assign a dedicated team. A clear timeline is also established at this stage.",
    image: planImg,
  },
  {
    number: "/2",
    title: "Design",
    description:
      "We start by defining the design direction based on your input, then develop initial drafts and concept art that reflects the overall vision for characters or environments.",
    image: designImg,
  },
  {
    number: "/3",
    title: "Create",
    description:
      "We transform approved concepts into high-quality 3D models, focusing on polycount optimization, topology, and visual fidelity.",
    image: developImg,
  },
  {
    number: "/4",
    title: "Test",
    description:
      "We apply realistic textures and materials, and create skeletal structures for characters to prepare them for animation.",
    image: testImg,
  },
  {
    number: "/5",
    title: "Deploy",
    description:
      "We set up cinematic lighting and render the final assets or scenes to achieve photorealistic or stylized results as requested.",
    image: deployImg,
  },
  {
    number: "/6",
    title: "Review",
    description:
      "We perform a final quality check to ensure all assets meet technical requirements and visual standards before delivery.",
    image: reviewImg,
  },
];

const game3dServiceDetailsSections: ServiceDetailSection[] = [
  {
    title: "Why High-Quality Game 2D & 3D Matters Today?",
    paragraphs: 3,
  },
  {
    title: "What You Get with Professional Game Design Services?",
    paragraphs: 3,
  },
  {
    title: "Game Development for Different Platforms",
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

const game3dFeatures = [
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

const Game3DPage = () => {
  return (
    <Box width="100%" bg="white">
      <ServicesHero
        imageLink={game2}
        imageTitle={
          <>
            Game <br /> 2D & 3D
          </>
        }
        description="We create a wide variety of game genres, ranging from 2D to 3D, delivering seamless, immersive, and realistic experiences that engage players across platforms. Our focus is on combining strong gameplay mechanics with refined visuals to create worlds that feel alive and memorable."
      />

      <WhyWorkWithUsSub
        title={
          <>
            Why Work With Us for <br /> Game 2D & 3D
          </>
        }
        features={game3dFeatures}
      />

      <ServiceImageSection imageSrc={anh3Gallery} />
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
            steps={game3dPipelineSteps}
            title="Game development pipeline"
          />
          <OutstandingServices
            title={
              <>
                Outstanding <br /> Game <br /> 2D & 3D
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
      <DigitalConceptsText title="Game 2D & 3D Services" />
      <ServiceDetailsText sections={game3dServiceDetailsSections} />
      <FaqSection items={serviceFaqItems} />
    </Box>
  );
};

export default Game3DPage;
