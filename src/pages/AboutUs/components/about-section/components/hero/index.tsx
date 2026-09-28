import { Box, Flex, Heading, Text } from '@chakra-ui/react';

const gradientText = {
    background: 'linear-gradient(90.48deg, #FF682A 26.14%, #FDE5CB 99.59%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
};

const Hero = () => {
    return (
        <Box
            position="relative"
            width="100%"
            height={{
                base: "auto",
                md: "clamp(500px, 50vw, 850px)",
            }}
            minH={{ base: "auto", md: "unset" }}
            py={{ base: "clamp(60px, 12vw, 100px)", md: "0" }}
            overflow="hidden"
        >
            {/* 3DARCHTECH is a Creative Studio - Right side */}
            <Flex
                position={{ base: "relative", md: "absolute" }}
                width={{ base: "85%", md: "43.17%" }}
                ml={{ base: "auto", md: "unset" }}
                mr={{ base: "7.5%", md: "unset" }}
                left={{ base: "unset", md: "43.125%" }}
                top={{ base: "unset", md: "clamp(60px, 10vw, 140px)" }}
                flexDirection="column"
                alignItems="flex-end"
                gap={0}
            >
                {(['3DARCHTECH', 'is a', 'Creative', 'Studio'] as const).map((word, i) => (
                    <Flex
                        key={i}
                        width={i === 0 ? '100%' : i === 1 ? '35.1%' : '48.73%'}
                        height={{ base: "auto", md: "clamp(40px, 7.5vw, 108px)" }}
                        justifyContent="flex-end"
                        alignItems="center"
                        py={{ base: "2px", md: "0" }}
                    >
                        <Heading
                            as="h1"
                            fontSize={{ base: "clamp(24px, 10vw, 48px)", md: "clamp(30px, 5.6vw, 80px)" }}
                            lineHeight="100%"
                            fontWeight="bold"
                            textAlign="right"
                            style={gradientText}
                        >
                            {word}
                        </Heading>
                    </Flex>
                ))}
            </Flex>

            {/* About Us - Left side */}
            <Flex
                position={{ base: "relative", md: "absolute" }}
                width={{ base: "85%", md: "35.83%" }}
                left={{ base: "7.5%", md: "13.64%" }}
                top={{ base: "unset", md: "clamp(180px, 24vw, 360px)" }}
                mt={{ base: "clamp(30px, 10vw, 60px)", md: "0" }}
                flexDirection="column"
                alignItems="flex-start"
                gap="10px"
            >
                <Flex width={{ base: "100%", md: "58.14%" }} alignItems="center">
                    <Heading
                        as="h2"
                        fontSize="clamp(28px, 4.9vw, 70px)"
                        lineHeight="1.2"
                        fontWeight="bold"
                        style={gradientText}
                    >
                        About Us
                    </Heading>
                </Flex>
                <Box width="100%" maxW={{ md: "550px", lg: "650px", xl: "800px" }}>
                    <Text
                        fontSize="clamp(11px, 1.4vw, 20px)"
                        lineHeight="1.5"
                        fontWeight="400"
                        color="black"
                    >
                        We are a team of architects, designers, and visualizers. We apply our many years of design and construction administration experience to bring our partner's ideas to life.
                    </Text>
                </Box>
            </Flex>
        </Box>
    );
};

export default Hero;
