import { Box, Flex, Text, HStack, Image, Link, SimpleGrid } from '@chakra-ui/react';
import ScrollAnimationWrapper from '@components/animation/scroll-animation-wrapper';
import { Link as RouterLink } from "react-router-dom";

const FooterBg = '/images/footer/footer_bg.png';
const IcFb = '/images/footer/ic_facebook.png';
const IcTiktok = '/images/footer/ic_tiktok.png';

const FONT = "'Be Vietnam Pro', sans-serif";

const SectionLabel = ({ children }: { children: string }) => (
    <Box w={{ base: "auto", md: "100px", lg: "112px" }} h="auto" display="flex" alignItems="center" py="5px">
        <Text fontFamily={FONT} fontWeight={500} fontSize="clamp(12px, 1.25vw, 16px)" lineHeight="clamp(16px, 1.56vw, 20px)" color="#444444" whiteSpace="nowrap">
            {children}
        </Text>
    </Box>
);

const NavItem = ({ children }: { children: string }) => (
    <Box h="auto" display="flex" alignItems="center" py="5px" w="100%">
        <Text
            as={Link}
            fontFamily={FONT}
            fontWeight={400}
            fontSize="clamp(12px, 1.25vw, 16px)"
            lineHeight="clamp(16px, 1.56vw, 20px)"
            color="black"
            whiteSpace="nowrap"
            _hover={{ textDecoration: 'underline' }}
            cursor="pointer"
        >
            {children}
        </Text>
    </Box>
);

const Footer = () => {
    return (
        <Box
            as="footer"
            position="relative"
            width="100%"
            overflow="hidden"
            bg="transparent"
            /* Đủ chiều cao để watermark & bottom-bar hiển thị ở cuối */
            pb={{ base: "35px", md: "40px", lg: "100px", "2xl": "204px" }}
        >
            {/* ── Hero background image ── */}
            <ScrollAnimationWrapper
                initial={{ opacity: 0, scale: 1.2 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                style={{ width: '100%' }}
            >
                <Image src={FooterBg} alt="Footer Background" w="100%" h={{ base: "300px", md: "450px", lg: "666px" }} objectFit="cover" display="block" />
            </ScrollAnimationWrapper>

            {/* ── Links & Info row ── */}
            <ScrollAnimationWrapper viewport={{ once: true, amount: 0.1 }}>
                <SimpleGrid
                    columns={{ base: 1, lg: 2 }}
                    spacing={{ base: "20px", md: "30px", lg: "40px" }}
                    w="100%"
                    mx="auto"
                    mt={{ base: "10px", md: "40px", lg: "60px" }}
                    mb={{ base: "40px", md: "60px", lg: "60px" }}
                    px={{ base: "20px", md: "40px", lg: "40px" }}
                >
                    {/* Left column: Menu + Services */}
                    <SimpleGrid columns={2} spacing={{ base: "20px", md: "30px", lg: "40px" }} w={{ base: "100%", lg: "60%" }}>
                        {/* Menu */}
                        <Flex direction="row" align="flex-start" gap={{ base: "5px", sm: "15px", lg: "15px" }}>
                            <SectionLabel>Menu</SectionLabel>
                            <Flex direction="column">
                                <Link as={RouterLink} to="/work">
                                    <NavItem>Works</NavItem>
                                </Link>
                                <Link as={RouterLink} to="/about-us">
                                    <NavItem>Studio</NavItem>
                                </Link>
                                <Link as={RouterLink} to="/blog">
                                    <NavItem>Blog</NavItem>
                                </Link>
                            </Flex>
                        </Flex>

                        {/* Services */}
                        <Flex direction="row" align="flex-start" gap={{ base: "5px", sm: "15px", lg: "15px" }}>
                            <Link as={RouterLink} to="services">
                                <SectionLabel>Services</SectionLabel>
                            </Link>
                            <Flex direction="column">
                                <Link as={RouterLink} to="services/ar-vr">
                                    <NavItem>AR/VR Services </NavItem>
                                </Link>
                                <Link as={RouterLink} to="services/game-3d">
                                    <NavItem>Game 2D &amp; 3D</NavItem>
                                </Link>
                                <Link as={RouterLink} to="services/training">
                                    <NavItem>Training course</NavItem>
                                </Link>
                                <Link as={RouterLink} to="services/web-app">
                                    <NavItem>Web &amp; App</NavItem>
                                </Link>
                                <Link as={RouterLink} to="services/visualization">
                                    <NavItem>Visualization</NavItem>
                                </Link>
                                <Link as={RouterLink} to="services/marketing">
                                    <NavItem>Marketing</NavItem>
                                </Link>
                            </Flex>
                        </Flex>
                    </SimpleGrid>

                    {/* Right column: Contact + Location + Social */}
                    <Flex direction="column" align="flex-start" gap={{ base: "30px", md: "30px" }} w="100%">
                        {/* Contact */}
                        <Flex direction="row" align="flex-start" gap="15px" w="100%">
                            <SectionLabel>Contact</SectionLabel>
                            <Flex direction="column" gap="5px" flex="1">
                                <Text fontFamily={FONT} fontWeight={400} fontSize="clamp(16px, 1.4vw, 24px)" lineHeight="1.3" color="black">
                                    (+84) 83 846 2620
                                </Text>
                                <Text fontFamily={FONT} fontWeight={400} fontSize="clamp(16px, 1.4vw, 24px)" lineHeight="1.3" color="black" textTransform="lowercase">
                                    brendontran@3darchtech.com
                                </Text>
                            </Flex>
                        </Flex>

                        {/* Location */}
                        <Flex direction="row" align="flex-start" gap="15px" w="100%">
                            <SectionLabel>Location</SectionLabel>
                            <Text fontFamily={FONT} fontWeight={400} fontSize="clamp(14px, 1.1vw, 18px)" lineHeight="1.4" color="black" flex="1">
                                48-50 Nguyen Phuoc Lan, Hoa Xuan, Cam Le, Da Nang, Viet nam
                            </Text>
                        </Flex>

                        {/* Social */}
                        <Flex direction="row" align="flex-start" gap="15px" w="100%">
                            <SectionLabel>Social</SectionLabel>
                            <HStack spacing={{ base: "15px", md: "20px" }} px={{ base: "0px", sm: "5px" }}>
                                <Box
                                    w={{ base: "18px", md: "22px", lg: "24px" }}
                                    h={{ base: "18px", md: "22px", lg: "24px" }}
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                    cursor="pointer"
                                    filter="grayscale(1)"
                                    _hover={{ filter: "none" }}
                                    transition="0.3s"
                                >
                                    <Image src={IcFb} alt="Facebook" maxW="100%" maxH="100%" objectFit="contain" />
                                </Box>
                                <Box
                                    w={{ base: "18px", md: "22px", lg: "24px" }}
                                    h={{ base: "18px", md: "22px", lg: "24px" }}
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                    cursor="pointer"
                                    filter="grayscale(1)"
                                    _hover={{ filter: "none" }}
                                    transition="0.3s"
                                >
                                    <Image src={IcTiktok} alt="TikTok" maxW="100%" maxH="100%" objectFit="contain" />
                                </Box>
                            </HStack>
                        </Flex>
                    </Flex>
                </SimpleGrid>
            </ScrollAnimationWrapper>

            {/* ── Watermark "3DARCHTECH" ── */}
            <Flex
                position="absolute"
                w="100%"
                h={{ base: "10.6vw", "2xl": "204px" }}
                bottom="0"
                justifyContent="space-between"
                alignItems="flex-end"
                pointerEvents="none"
                overflow="hidden"
            >
                {['3', 'D', 'A', 'R', 'C', 'H', 'T', 'E', 'C', 'H'].map((char, i) => (
                    <Text
                        key={i}
                        bgGradient="linear(180deg, #FDE5CB 0%, #FF682A 100%)"
                        bgClip="text"
                        fontFamily={FONT}
                        fontWeight={700}
                        fontSize={{ base: "13vw", "2xl": "250px" }}
                        lineHeight={{ base: "10.6vw", "2xl": "204px" }}
                        textAlign="center"
                        opacity={0.2}
                        zIndex={0}
                        userSelect="none"
                    >
                        {char}
                    </Text>
                ))}
            </Flex>

            {/* ── Bottom bar: Privacy | Terms | Copyright ── */}
            <Flex
                position="absolute"
                bottom={{ base: "15px", md: "30px" }}
                left="0"
                w="100%"
                px={{ base: "20px", lg: "40px", "2xl": "calc(50% - 1397px/2 + 20px)" }}
                h="auto"
                display={{ base: "flex", md: "grid" }}
                direction={{ base: "column", md: "row" }}
                gridTemplateColumns={{ md: "1fr auto 1fr" }}
                justifyContent={{ base: "center", md: "unset" }}
                alignItems="center"
                gap={{ base: "10px", md: "0" }}
                zIndex={10}
            >
                {/* Privacy Policy */}
                <Box h="auto" display={{ base: "none", md: "flex" }} alignItems="center" justifySelf={{ md: "start" }}>
                    <Text
                        as={Link}
                        fontFamily={FONT}
                        fontWeight={500}
                        fontSize="clamp(10px, 0.83vw, 16px)"
                        lineHeight="clamp(11px, 1.04vw, 20px)"
                        color="black"
                        whiteSpace="nowrap"
                        cursor="pointer"
                        _hover={{ textDecoration: 'underline' }}
                    >
                        Privacy Policy
                    </Text>
                </Box>

                {/* Terms of Use */}
                <Box h="auto" display={{ base: "none", md: "flex" }} alignItems="center" justifyContent="center" justifySelf={{ md: "center" }}>
                    <Text
                        as={Link}
                        fontFamily={FONT}
                        fontWeight={500}
                        fontSize="clamp(10px, 0.83vw, 16px)"
                        lineHeight="clamp(11px, 1.04vw, 20px)"
                        color="black"
                        whiteSpace="nowrap"
                        cursor="pointer"
                        _hover={{ textDecoration: 'underline' }}
                    >
                        Terms of Use
                    </Text>
                </Box>


                {/* Copyright */}
                <Box h="auto" display="flex" justifyContent={{ base: "center", md: "flex-end" }} alignItems="center" justifySelf={{ md: "end" }}>
                    <Text
                        fontFamily={FONT}
                        fontWeight={500}
                        fontSize="clamp(10px, 0.83vw, 16px)"
                        lineHeight="clamp(11px, 1.04vw, 20px)"
                        color="black"
                        whiteSpace="wrap"
                        textAlign={{ base: "center", md: "right" }}
                    >
                        ©2026 3DARCHTECH. All rights reserved
                    </Text>
                </Box>
            </Flex>
        </Box>
    );
};

export default Footer;
