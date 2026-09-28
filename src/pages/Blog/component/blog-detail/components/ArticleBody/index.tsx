import { Flex, Text, Box } from '@chakra-ui/react';
import { ArticleHeading, ArticleParagraphBlock } from '../ArticleParts';

const ArticleBody = () => (
    <Box width="100%">
        <Flex
            width="100%"
            justifyContent="center"
            mb={{ base: "30px", md: "50px" }}
            textAlign="center"
        >
            <Text
                fontSize={{ base: "20px", md: "40px", lg: "52px" }}
                lineHeight="1.2"
                fontWeight="semibold"
                maxWidth="950px"
                style={{
                    background: 'linear-gradient(90deg, #DC602D 0%, #FDE5CB 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                }}
            >
                Why 3D Visuals Matter in Today's Digital Experiences
            </Text>
        </Flex>

        <Flex
            direction="column"
            alignItems="center"
            width="100%"
        >
            <Flex
                direction="column"
                alignItems="flex-start"
                width="100%"
                maxWidth="820px"
            >
                <ArticleHeading order={0} text="Why High-Quality AR/VR Matters Today?" />
                <ArticleParagraphBlock order={1} />
                <ArticleHeading order={2} text="What You Get with Professional AR/VR Services?" />
                <ArticleParagraphBlock order={3} />
                <ArticleHeading order={4} text="AR/VR Services for Different Industries & Use Cases" />
                <ArticleParagraphBlock order={5} />
                <ArticleHeading order={6} text="Question?" />
                <ArticleParagraphBlock order={7} />
                <ArticleParagraphBlock order={8} />
            </Flex>
        </Flex>
    </Box>
);

export default ArticleBody;
