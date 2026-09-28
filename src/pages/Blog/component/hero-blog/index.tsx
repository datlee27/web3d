import { Flex, Text, Heading } from '@chakra-ui/react';

const HeroBlog = () => {
    return (
        <Flex
            flexDirection="column"
            alignItems="flex-start"
            gap={{ base: "20px", md: "30px", lg: "50px" }}
            width="100%"
            mb={{ base: "40px", md: "60px", lg: "80px" }}
        >
            {/* BLOG title */}
            <Flex alignItems="center" py="10px">
                <Heading
                    as="h1"
                    fontSize={{ base: "48px", md: "64px", lg: "80px" }}
                    lineHeight="1.2"
                    fontWeight="bold"
                    style={{
                        background: 'linear-gradient(90deg, #FF682A 0%, #FDE5CB 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                    }}
                >
                    BLOG
                </Heading>
            </Flex>

            {/* Subtitle */}
            <Flex alignItems="center" py="10px" width="100%">
                <Text
                    fontSize={{ base: "20px", md: "24px", lg: "26px" }}
                    lineHeight="1.2"
                    fontWeight="bold"
                    color="#000000"
                >
                    Latest Stories
                </Text>
            </Flex>
        </Flex>
    );
};

export default HeroBlog;