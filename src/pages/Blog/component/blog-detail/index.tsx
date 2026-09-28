import { Box } from "@chakra-ui/react";
import ScheduleCallButton from "@components/schedule-call-button";
import BlogHeroBanner from "./components/BlogHeroBanner";
import ArticleBody from "./components/ArticleBody";
import FaqSection from "../../../../components/common/faq-section";
import OtherArticles from "./components/OtherArticles";

const BlogDetail = () => (
  <Box width="100%" bg="transparent">
    <BlogHeroBanner />
    <Box px={{ base: "20px", md: "40px", lg: "120px" }} py={{ base: "0px", md: "80px" }} pt={{ base: "40px", md: "40px" }}>
      <ArticleBody />
    </Box>
    <FaqSection />
    <Box px={{ base: "20px", md: "40px", lg: "120px" }} pb="80px">
      <OtherArticles />
    </Box>
    <ScheduleCallButton />
  </Box>
);

export default BlogDetail;
