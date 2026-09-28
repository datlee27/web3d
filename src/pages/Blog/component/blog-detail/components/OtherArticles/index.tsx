import { Flex, Text, Box } from '@chakra-ui/react';
import ScrollAnimationWrapper from '@components/animation/scroll-animation-wrapper';
import ArticleCard from '../ArticleCard';

const prjImg4 = '/images/blog/prj_img4.png';

const OtherArticles = () => (
    <Box width="100%" mt={{ base: "40px", md: "80px" }}>
        <Flex
            width="100%"
            justifyContent="flex-start"
            mb={{ base: "20px", md: "40px" }}
        >
            <Text
                fontSize={{ base: "32px", md: "48px", lg: "60px" }}
                lineHeight="1.2"
                fontWeight="bold"
                style={{
                    background: 'linear-gradient(90deg, #DC602D 0%, #FDE5CB 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                }}
            >
                Other Articles
            </Text>
        </Flex>

        <ScrollAnimationWrapper style={{ width: "100%" }}>
            <Flex
                direction={{ base: 'column', xl: 'row' }}
                justifyContent="center"
                alignItems="stretch"
                gap={{ base: "30px", lg: "40px" }}
                width="100%"
            >
                <ArticleCard
                    img={prjImg4}
                    title="Gamification as a Powerful Tool for Brand Engagement"
                    date="January 2026"
                    order={0}
                />
                <ArticleCard
                    img={prjImg4}
                    title="How AR & VR Are Transforming Digital Experiences"
                    date="January 2026"
                    order={1}
                />
            </Flex>
        </ScrollAnimationWrapper>
    </Box>
);

export default OtherArticles;
