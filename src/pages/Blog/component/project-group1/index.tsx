import { Flex, Text, Box } from '@chakra-ui/react';
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

const ProjectGroup1 = () => {
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
                    <Box width="100%" mb="15px">
                        <HoverImage src={prjImg2} alt="Project 2" width="100%" height="auto" />
                    </Box>

                    <Flex flexDirection="column" alignItems="flex-start" width="100%">
                        {/* Title */}
                        <Text
                            fontSize={{ base: "20px", md: "26px", lg: "32px" }}
                            lineHeight="1.2"
                            fontWeight="bold"
                            style={gradientTitle}
                            mb="10px"
                        >
                            How AR/VR is Changing Way We Learn
                        </Text>
                        {/* Date */}
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
                <Flex flexDirection="column" alignItems="flex-start" flex={1.4}>
                    <Box width="100%" mb="15px">
                        <HoverImage src={prjImg3} alt="Project 3" width="100%" height="auto" />
                    </Box>

                    <Flex flexDirection="column" alignItems="flex-start" width="100%">
                        {/* Title */}
                        <Text
                            fontSize={{ base: "20px", md: "26px", lg: "32px" }}
                            lineHeight="1.2"
                            fontWeight="bold"
                            style={gradientTitle}
                            mb="10px"
                        >
                            How Smart Web &amp; App Solutions Drive Business Growth
                        </Text>
                        {/* Date */}
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

export default ProjectGroup1;