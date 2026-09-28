import { Box, Flex, Heading, Text, Image, SimpleGrid, useBreakpointValue } from '@chakra-ui/react';
const ServicePic = '/images/aboutus/service_pic.png';
import LogoStudioService from '@assets/aboutus/service-logo-studio.png';
import ScrollAnimationWrapper from '@components/animation/scroll-animation-wrapper';

interface ServiceItemProps {
    number: number;
    title: string;
    desc: string;
}

const gradientHeading = {
    background: 'linear-gradient(90.48deg, #FF682A 26.14%, #FDE5CB 99.59%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    color: 'transparent',
};

const ServiceItem = ({ number, title, desc }: ServiceItemProps) => (
    <Box width="100%" position="relative" pb={{ base: '16px', md: '0' }}>
        {/* Number */}
        <Flex alignItems="center" gap="10px" mb={{ base: '4px', md: '0' }} position={{ base: 'relative', md: 'absolute' }} top={{ md: 0 }} left={{ md: 0 }}>
            <Flex width="24px" height="24px" justifyContent="center" alignItems="center">
                <Text fontSize={{ base: '12px', md: '14px', lg: '20px' }} lineHeight="1.2" color="#000000">
                    /{number}
                </Text>
            </Flex>
        </Flex>

        {/* Title */}
        <Box pl={{ base: '0', md: '34px' }}>
            <Heading
                as="h3"
                fontSize={{ base: '18px', md: '24px', lg: '34px', xl: '44px' }}
                lineHeight={{ base: '1.2', xl: '68px' }}
                fontWeight="semibold"
                color="#000000"
            >
                {title}
            </Heading>
        </Box>

        {/* Description */}
        <Box pl={{ base: '0', md: '34px' }} mt={{ base: '4px', lg: '8px' }}>
            <Text
                fontSize={{ base: '12px', md: '14px', lg: '18px', xl: '20px' }}
                lineHeight={{ base: '1.4', xl: '1.5' }}
                color="#000000"
            >
                {desc}
            </Text>
        </Box>
    </Box>
);

const ServicesSection = () => {
    const isMobile = useBreakpointValue({ base: true, sm: false }) ?? false;

    const services = [
        { number: 1, title: "AR/VR", mobileTitle: "AR/VR Services", desc: "Dolor sit amet, consectetur adipiscing" },
        { number: 2, title: "Game 2D & 3D", mobileTitle: "Game 2D & 3D", desc: "Dolor sit amet, consectetur adipiscing" },
        { number: 3, title: "Training course", mobileTitle: "Training course", desc: "Dolor sit amet, consectetur adipiscing" },
        { number: 4, title: "Web & App", mobileTitle: "Web & App", desc: "Dolor sit amet, consectetur adipiscing" },
        { number: 5, title: "Visualization", mobileTitle: "Visualization", desc: "Dolor sit amet, consectetur adipiscing" },
        { number: 6, title: "Marketing", mobileTitle: "Marketing", desc: "Dolor sit amet, consectetur adipiscing" },
    ];

    if (isMobile) {
        return (
            <Box position="relative" width="100%" py="60px" px="11px">
                <Flex direction="column" align="center" gap="20px" width="100%" maxW="408px" mx="auto">
                    <Flex direction="column" align="flex-start" gap="20px" width="100%">
                        <Flex direction="column" align="flex-start" width="100%">
                            <Flex direction="row" justify="space-between" align="center" width="100%" height="48px">
                                <Flex direction="row" align="center" py="10px" gap="10px" height="48px">
                                    <Heading
                                        as="h2"
                                        fontFamily="'Be Vietnam Pro', sans-serif"
                                        fontSize="30px"
                                        lineHeight="38px"
                                        fontWeight="700"
                                        style={gradientHeading}
                                    >
                                        Our Services
                                    </Heading>
                                </Flex>
                                <Box width="22px" height="24px" flexShrink={0}>
                                    <Image src={LogoStudioService} alt="3D Archtech" width="100%" height="100%" objectFit="contain" />
                                </Box>
                            </Flex>
                            <Flex direction="row" align="center" py="10px" width="194px" minH="44px">
                                <Text
                                    fontFamily="'Be Vietnam Pro', sans-serif"
                                    fontWeight="400"
                                    fontSize="8px"
                                    lineHeight="10px"
                                    color="#676767"
                                >
                                    We take pride in our collaborative approach, working closely with you, your marketing and architect teams, to determine the vision, target audience, and brand identity.
                                </Text>
                            </Flex>
                        </Flex>
                        <Box width="100%" height="264px" overflow="hidden">
                            <Image src={ServicePic} alt="Services" width="100%" height="100%" objectFit="cover" />
                        </Box>
                    </Flex>

                    <Flex direction="column" align="flex-start" gap="10px" width="156px" height="290px">
                        {services.map((service) => (
                            <Box key={service.number} position="relative" width="156px" height="40px">
                                <Flex
                                    position="absolute"
                                    left="0"
                                    top="0"
                                    width="23.91px"
                                    height="20px"
                                    justifyContent="center"
                                    alignItems="center"
                                    p="10px"
                                >
                                    <Text
                                        fontFamily="'Be Vietnam Pro', sans-serif"
                                        fontWeight="500"
                                        fontSize="14px"
                                        lineHeight="18px"
                                        color="#000000"
                                    >
                                        /{service.number}
                                    </Text>
                                </Flex>
                                <Flex
                                    position="absolute"
                                    left="24px"
                                    top="20px"
                                    width="132px"
                                    height="20px"
                                    alignItems="center"
                                    py="10px"
                                >
                                    <Text
                                        fontFamily="'Inter', sans-serif"
                                        fontWeight="600"
                                        fontSize="14px"
                                        lineHeight="17px"
                                        color="#000000"
                                        whiteSpace="nowrap"
                                    >
                                        {service.mobileTitle}
                                    </Text>
                                </Flex>
                            </Box>
                        ))}
                    </Flex>
                </Flex>
            </Box>
        );
    }

    return (
        <Box
            position="relative"
            width="100%"
            py={{ base: '60px', md: '80px', lg: '100px' }}
            px={{ base: '4%', md: '6%', lg: '13.64583%' }}
        >
            {/* Heading "Our Services" */}
            <ScrollAnimationWrapper style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: '40px' }}>
                <Box width={{ base: '100%', md: '79.36%' }}>
                    <Heading
                        as="h2"
                        fontSize={{ base: '32px', md: '44px', lg: '62px', xl: '70px' }}
                        lineHeight={{ base: '1.2', xl: '1.3' }}
                        fontWeight="bold"
                        style={gradientHeading}
                    >
                        Our Services
                    </Heading>
                </Box>
                <Box width={{ base: '100%', md: '85%' }} mt="12px">
                    <Text
                        fontSize={{ base: '12px', md: '14px', lg: '17px', xl: '20px' }}
                        lineHeight={{ base: '1.5', xl: '1.6' }}
                        color="#000000"
                    >
                        We take pride in our collaborative approach, working closely with you, your marketing and architect teams, to determine the vision, target audience, and brand identity.
                    </Text>
                </Box>
            </ScrollAnimationWrapper>

            {/* Services List + Sidebar Image — 2-col on desktop, 1-col on mobile */}
            <Flex
                direction={{ base: 'column', md: 'row' }}
                gap={{ base: '40px', md: '0' }}
                align="flex-start"
            >
                {/* Services List */}
                <SimpleGrid
                    columns={{ base: 1, sm: 2, md: 1 }}
                    spacingX={{ base: "20px", md: "40px" }}
                    spacingY={{ base: '5px', md: '30px' }}
                    width={{ base: '100%', md: '36%' }}
                    flexShrink={0}
                    mb={{ base: '20px', md: '0' }}
                >
                    {services.map((s, i) => (
                        <ScrollAnimationWrapper key={i} delay={i * 0.1} style={{ width: '100%' }}>
                            <ServiceItem {...s} />
                        </ScrollAnimationWrapper>
                    ))}
                </SimpleGrid>

                {/* Sidebar Image */}
                <Box flex={1} width={{ base: '100%', md: 'auto' }}>
                    <ScrollAnimationWrapper
                        delay={0.2}
                        initial={{ opacity: 0, scale: 1.2 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        style={{ width: '100%' }}
                    >
                        <Image
                            src={ServicePic}
                            alt="Services"
                            width="100%"
                            height={{ base: '300px', md: '100%' }}
                            objectFit="cover"
                        />
                    </ScrollAnimationWrapper>
                </Box>
            </Flex>
        </Box>
    );
};

export default ServicesSection;
