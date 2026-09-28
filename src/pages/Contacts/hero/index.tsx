import { Box, Heading } from '@chakra-ui/react';

const Hero = () => {
    return (
        <Box
            width="100%"

            mx="auto"
            mt={{ base: '80px', md: '120px', lg: '180px' }}
            px={{ base: '20px', md: '40px', lg: '80px' }}
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            gap={{ base: '0px', md: '10px' }}
            zIndex={10}
        >
            {/* Let's talk. */}
            <Box
                width="100%"
                display="flex"
                alignItems="center"

            >
                <Heading
                    as="h1"
                    fontSize={{ base: '30px', md: '52px', lg: '62px' }}
                    lineHeight="1.2"
                    fontWeight="bold"
                    m={0}
                    style={{
                        background: 'linear-gradient(90deg, #FF682A 0%, #FDE5CB 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        color: 'transparent',
                    }}
                >
                    Let's talk.
                </Heading>
            </Box>


            <Box
                width="100%"
                ml={{ base: '0', md: '55px' }}
                display="flex"
                alignItems="center"
            >
                <Heading
                    as="h2"
                    fontSize={{ base: '30px', md: '52px', lg: '62px' }}
                    lineHeight="1.2"
                    fontWeight="bold"
                    m={0}
                    style={{
                        background: 'linear-gradient(90deg, #FDE5CB 0%, #FF682A 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        color: 'transparent',
                    }}
                >
                    We're just <Box as="br" display={{ base: "block", md: "none" }} /> a message away.
                </Heading>
            </Box>
        </Box>
    );
};

export default Hero;
