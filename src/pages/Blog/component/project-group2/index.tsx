import { Box, Flex, Text } from '@chakra-ui/react';
const prjImg4 = '/images/blog/prj_img4.png';
import ScrollAnimationWrapper from '@components/animation/scroll-animation-wrapper';
import HoverImage from '../hover-image';

const gradientTitle = {
    background: 'linear-gradient(90deg, #FF682A 0%, #FDE5CB 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
};


const ProjectGroup2 = () => {
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
                <Flex flexDirection="column" alignItems="flex-start" flex={1}>
                    <Box mb="15px" width="100%">
                        <HoverImage src={prjImg4} alt="Project 4" />
                    </Box>
                    <Flex flexDirection="column" alignItems="flex-start" width="100%">
                        <Text
                            fontSize={{ base: "20px", md: "26px", lg: "32px" }}
                            lineHeight="1.2"
                            fontWeight="bold"
                            style={gradientTitle}
                            mb="10px"
                        >
                            Gamification as a Powerful Tool for Brand Engagement
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

                {/* Right Card */}
                <Flex flexDirection="column" alignItems="flex-start" flex={1}>
                    <Box mb="15px" width="100%">
                        <HoverImage src={prjImg4} alt="Project 5" />
                    </Box>
                    <Flex flexDirection="column" alignItems="flex-start" width="100%">
                        <Text
                            fontSize={{ base: "20px", md: "26px", lg: "32px" }}
                            lineHeight="1.2"
                            fontWeight="bold"
                            style={gradientTitle}
                            mb="10px"
                        >
                            How AR &amp; VR Are Transforming Digital Experiences
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
            </Flex>
        </ScrollAnimationWrapper>
    );
};

export default ProjectGroup2;