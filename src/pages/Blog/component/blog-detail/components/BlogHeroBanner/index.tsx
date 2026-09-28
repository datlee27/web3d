import { Box, Flex, Heading, Text } from '@chakra-ui/react';

const heroBannerImg = '/images/blog/prj_img1.png';

const BlogHeroBanner = () => (
    <Box
        width="100%"
        height={{ base: "400px", md: "600px", lg: "800px" }}
        position="relative"
        backgroundImage={`url(${heroBannerImg})`}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
    >
        <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            bg="rgba(0,0,0,0.4)"
        />

        <Flex
            direction="column"
            justifyContent="flex-end"
            alignItems="flex-start"
            height="100%"
            position="relative"
            px={{ base: "20px", md: "40px", lg: "120px" }}
            pb={{ base: "40px", md: "60px", lg: "100px" }}
            zIndex={1}
        >
            <Flex direction="column" gap="20px" maxWidth="1000px">
                <Heading
                    as="h1"
                    fontSize={{ base: "32px", md: "48px", lg: "72px" }}
                    lineHeight="1.2"
                    color="#FFFFFF"
                    fontWeight="bold"
                >
                    Why 3D Visuals Matter in Today's Digital Experiences
                </Heading>

                <Flex
                    direction={{ base: "column", sm: "row" }}
                    justifyContent="space-between"
                    alignItems={{ base: "flex-start", sm: "center" }}
                    width="100%"
                    gap="20px"
                >
                    <Text
                        fontSize={{ base: "18px", md: "25px" }}
                        lineHeight="1.2"
                        textTransform="capitalize"
                        color="#FFFFFF"
                    >
                        Author: XXX
                    </Text>

                    <Text
                        fontSize={{ base: "18px", md: "30px" }}
                        lineHeight="1.2"
                        fontWeight="bold"
                        textTransform="capitalize"
                        color="#FFFFFF"
                    >
                        MM/DD/YYYY
                    </Text>
                </Flex>
            </Flex>
        </Flex>
    </Box>
);

export default BlogHeroBanner;
