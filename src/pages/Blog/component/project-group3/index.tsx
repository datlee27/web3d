import { Box, Flex, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
const prjImg2 = '/images/blog/prj_img2.png';
const prjImg3 = '/images/blog/prj_img3.png';
import ScrollAnimationWrapper from '@components/animation/scroll-animation-wrapper';
import HoverImage from '../hover-image';

const gradientTitle = {
  background: 'linear-gradient(90deg, #FF682A 0%, #FDE5CB 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
};



const ProjectGroup3 = () => {
  return (
    <ScrollAnimationWrapper style={{ width: '100%' }}>
      <Flex
        direction={{ base: 'column', lg: 'row' }}
        justifyContent="center"
        alignItems="stretch"
        gap={{ base: "30px", lg: "40px" }}
        width="100%"
        mb={{ base: "40px", md: "60px", lg: "80px" }}
      >
        {/* Left Card */}
        <Box flex={1}>
          <Link to="" style={{ textDecoration: 'none', display: 'block' }}>
            <Flex flexDirection="column" alignItems="flex-start" width="100%">
              <Box mb="15px" width="100%">
                <HoverImage src={prjImg2} alt="Project 6" />
              </Box>
              <Flex flexDirection="column" alignItems="flex-start" width="100%">
                <Text
                  fontSize={{ base: "20px", md: "26px", lg: "32px" }}
                  lineHeight="1.2"
                  fontWeight="bold"
                  style={gradientTitle}
                  mb="10px"
                >
                  Interactive Learning Solutions for the Digital Age
                </Text>
                <Text
                  fontSize={{ base: "14px", md: "18px", lg: "22px" }}
                  lineHeight="1.2"
                  textTransform="capitalize"
                  color="#000000"
                >
                  January 2026
                </Text>
              </Flex>
            </Flex>
          </Link>
        </Box>

        {/* Right Card */}
        <Box flex={1.4}>
          <Link to="" style={{ textDecoration: 'none', display: 'block' }}>
            <Flex flexDirection="column" alignItems="flex-start" width="100%">
              <Box mb="15px" width="100%">
                <HoverImage src={prjImg3} alt="Project 7" />
              </Box>
              <Flex flexDirection="column" alignItems="flex-start" width="100%">
                <Text
                  fontSize={{ base: "20px", md: "26px", lg: "32px" }}
                  lineHeight="1.2"
                  fontWeight="bold"
                  style={gradientTitle}
                  mb="10px"
                >
                  From Concept to Reality: AR and VR in Business Applications
                </Text>
                <Text
                  fontSize={{ base: "14px", md: "18px", lg: "22px" }}
                  lineHeight="1.2"
                  textTransform="capitalize"
                  color="#000000"
                >
                  January 2026
                </Text>
              </Flex>
            </Flex>
          </Link>
        </Box>
      </Flex>
    </ScrollAnimationWrapper>
  );
};

export default ProjectGroup3;
