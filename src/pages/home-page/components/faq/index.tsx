import { Box } from "@chakra-ui/react";
import FaqSection, {
  type FaqItem,
} from "../../../../components/common/faq-section";

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

const Faq = () => {
  return (
    <Box
      position="relative"
      width="100%"
      py={{ base: 10, md: 20 }}
      overflowX="hidden"
    >
      <Box
        px={{ base: "20px", lg: "80px" }}
        position="relative"
        zIndex={2}
      >
        <FaqSection items={faqData} />
      </Box>
    </Box>
  );
};

export default Faq;
