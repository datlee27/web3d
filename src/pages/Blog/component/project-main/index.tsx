import { Flex, Text, Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
const prjImg1 = '/images/blog/prj_img1.png';
import ScrollAnimationWrapper from '@components/animation/scroll-animation-wrapper';
import HoverImage from '../hover-image';

const gradientTitle = {
  background: 'linear-gradient(90deg, #FF682A 0%, #FDE5CB 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
};

const ProjectMain = () => {
  return (
    <Link to="/blog/why-3d-visuals-matter" style={{ textDecoration: 'none', display: 'block' }}>
      <ScrollAnimationWrapper style={{ width: '100%' }}>
        <Flex
          direction={{ base: 'column-reverse', '2xl': 'row' }}
          alignItems="flex-start"
          gap={{ base: '30px', md: '40px', '2xl': '60px' }}
          width="100%"
          mb={{ base: '40px', md: '60px', '2xl': '100px' }}
        >
          <Box width={{ base: '100%', '2xl': '60%' }}>
            <HoverImage src={prjImg1} alt="Project" width="100%" height="auto" />
          </Box>

          <Flex
            flexDirection="column"
            alignItems="flex-start"
            width={{ base: '100%', '2xl': '40%' }}
            gap={{ base: "15px", md: "20px" }}
          >
            {/* Date */}
            <Text
              fontSize={{ base: "18px", md: "24px", lg: "30px" }}
              lineHeight="1.2"
              textTransform="capitalize"
              color="#000000"
            >
              January 2026
            </Text>

            {/* Title */}
            <Text
              fontSize={{ base: "32px", md: "48px", lg: "56px", xl: "62px" }}
              lineHeight="1.2"
              fontWeight="bold"
              style={gradientTitle}
            >
              Why 3D Visuals Matter in Today's Digital Experiences
            </Text>

            {/* Author */}
            <Text
              fontSize={{ base: "18px", md: "24px", lg: "30px" }}
              lineHeight="1.2"
              fontWeight="bold"
              textTransform="capitalize"
              color="#000000"
            >
              Author: XXX
            </Text>
          </Flex>
        </Flex>
      </ScrollAnimationWrapper>
    </Link>
  );
};

export default ProjectMain;
