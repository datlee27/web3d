import { Box } from '@chakra-ui/react';
import HeroBlog from './component/hero-blog';
import ProjectMain from './component/project-main';
import ProjectGroup1 from './component/project-group1';
import ProjectGroup2 from './component/project-group2';
import ProjectGroup3 from './component/project-group3';
import Button from './component/button-showmore';
import ScheduleCallButton from '@components/schedule-call-button';



const Blog = () => {
  return (
    <Box
      width="100%"
      bg="transparent"
      px={{ base: "20px", md: "40px", lg: "120px" }}
      py={{ base: "40px", md: "80px", lg: "160px" }}
    >
      <HeroBlog />
      <ProjectMain />
      <ProjectGroup1 />
      <ProjectGroup2 />
      <ProjectGroup3 />
      <Button />
      <ScheduleCallButton />
    </Box>
  );
};

export default Blog;
