import {
    Box,
    Button,
    Flex,
    HStack,
    Text,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useHeaderColor } from "@contexts/HeaderColorContext";
import CitySimulation from "@assets/imagesWork-page/CitySimulation.webp";
import THouse from "@assets/imagesWork-page/THouse.webp";
import Dragon from "@assets/imagesWork-page/Dragon.webp";
import EducationWeb from "@assets/imagesWork-page/EducationWeb.webp";
import FishTank from "@assets/imagesWork-page/FishTank.webp";
import GenF from "@assets/imagesWork-page/GenF.webp";
import Lively from "@assets/imagesWork-page/lively.webp";
import NewYork from "@assets/imagesWork-page/newyork.webp";
import NewZealand from "@assets/imagesWork-page/newzealand.webp";
import Wonderspace from "@assets/imagesWork-page/wonderspace.webp";
import Logo from "@assets/imagesWork-page/logo.webp";
import type { PortfolioItem } from "../../components/work-page/PortfolioGrid";
import PortfolioGrid from "../../components/work-page/PortfolioGrid";
import TrustedBy from "../../components/work-page/TrustedBy";
import Slogan from "../AboutUs/components/our-service/components/slogan";

const ALL_FILTERS = ["All", "AR/VR", "Render", "Game", "Website", "App", "Visualize"];

const portfolioItems: PortfolioItem[] = [
    { id: 1, title: "City Simulation", category: "Visualize", image: CitySimulation, tags: ["Visualize", "Render"], path: "city-simulation" },
    { id: 2, title: "T House", category: "Visualize", image: THouse, tags: ["Visualize", "Render"], path: "t-house" },
    { id: 3, title: "New Zealand", category: "Visualize", image: NewZealand, tags: ["Visualize", "Render"], path: "new-zealand" },
    { id: 4, title: "New York", category: "Visualize", image: NewYork, tags: ["Visualize", "Render"], path: "new-york" },
    { id: 5, title: "Wonderspace", category: "AR/VR", image: Wonderspace, tags: ["AR/VR", "Render"], path: "wonderspace" },
    { id: 6, title: "Lively Grotesque", category: "AR/VR", image: Lively, tags: ["AR/VR", "Render"], path: "lively-grotesque" },
    { id: 7, title: "The Era of Gen F", category: "AR/VR", image: GenF, tags: ["AR/VR", "Render"], path: "the-era-of-gen-f" },
    { id: 8, title: "Dragon Bridge", category: "Visualize", image: Dragon, tags: ["Visualize", "Render"], path: "dragon-bridge" },
    { id: 9, title: "Education Web", category: "Web", image: EducationWeb, tags: ["Website"], path: "education-web" },
    { id: 10, title: "New Zealand", category: "Visualize", image: NewZealand, tags: ["Visualize", "Render"], path: "new-zealand" },
    { id: 11, title: "New York", category: "Visualize", image: NewYork, tags: ["Visualize", "Render"], path: "new-york" },
    { id: 12, title: "Fish Tank", category: "AR/VR", image: FishTank, tags: ["Game", "Render"], path: "fish-tank" },
    { id: 13, title: "Lively Grotesque", category: "AR/VR", image: Lively, tags: ["AR/VR", "Render"], path: "lively-grotesque" },
    { id: 14, title: "The Era of Gen F", category: "AR/VR", image: GenF, tags: ["AR/VR", "Render"], path: "the-era-of-gen-f" },
];

const WorkPage = () => {
    const [activeFilter, setActiveFilter] = useState("All");
    const { setHeaderColor } = useHeaderColor();

    useEffect(() => {
        setHeaderColor("black");
    }, [setHeaderColor]);

    const filteredItems =
        activeFilter === "All"
            ? portfolioItems
            : portfolioItems.filter(
                (item) => item.category === activeFilter || item.tags.includes(activeFilter)
            );

    return (
        <Box minH="100vh" bg="transparent" color="black" fontFamily="sans-serif">

            {/* ================= HERO SECTION ================= */}
            {/*
                Desktop (1920px): pt=268px, pb=121px, ml=260px, w=1400px, font=80px
                Laptop  (1024px): pt~180px, pb~80px,  ml~120px, font~56px
                iPad    (768px):  pt~140px, pb~48px,  ml~60px,  font~44px
                Tỉ lệ gốc: ml=13.54vw, w=72.92vw, font=4.17vw
            */}
            <Box
                w="100%"
                pt={{ base: "120px", md: "140px", lg: "180px", xl: "clamp(120px, 13.96vw, 268px)" }}
                pb={{ base: "40px", md: "48px", lg: "80px", xl: "76px" }}
            >
                {/* Hero content row */}
                <Flex
                    ml={{ base: "16px", md: "60px", lg: "120px", xl: "13.54vw" }}
                    w={{ base: "calc(100% - 32px)", md: "calc(100% - 120px)", lg: "calc(100% - 240px)", xl: "72.92vw" }}
                    maxW="1400px"
                    align="flex-end"
                    gap="10px"
                    flexDir={{ base: "column", md: "row" }}
                    position="relative"
                >
                    {/* LEFT: Title — flex ratio 852/1400 = 60.86% */}
                    <Box flex={{ base: "none", md: "852" }} w={{ base: "100%", md: "auto" }} minW="0" py="10px">
                        <Text
                            fontFamily="'Be Vietnam Pro', sans-serif"
                            fontSize={{ base: "36px", md: "44px", lg: "56px", xl: "clamp(40px, 4.17vw, 80px)" }}
                            fontWeight="700"
                            lineHeight="100%"
                            letterSpacing="0%"
                            color="#FF6B35"
                        >
                            Our 3D
                        </Text>
                        <Text
                            fontFamily="'Be Vietnam Pro', sans-serif"
                            fontSize={{ base: "36px", md: "44px", lg: "56px", xl: "clamp(40px, 4.17vw, 80px)" }}
                            fontWeight="700"
                            lineHeight="100%"
                            letterSpacing="0%"
                            color="#FF9F76"
                        >
                            Rending Portfolio
                        </Text>
                    </Box>

                    {/* RIGHT: Logo + description — flex ratio 538/1400 = 38.43% */}
                    <Flex
                        flex={{ base: "none", md: "538" }}
                        w={{ base: "100%", md: "auto" }}
                        minW="0"
                        flexDir="column"
                        justify={{ base: "flex-start", md: "flex-end" }}
                        align={{ base: "flex-start", md: "flex-end" }}
                        gap="10px"
                    >
                        {/* Logo icon — giữ cố định vì là icon */}
                        <Box
                            w={{ base: "28px", md: "44px", lg: "50px", xl: "56px" }}
                            h={{ base: "28px", md: "48px", lg: "54px", xl: "60px" }}
                            overflow="hidden"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            flexShrink={0}
                            position={{ base: "absolute", md: "static" }}
                            top={{ base: "15px", md: "auto" }}
                            right={{ base: "0", md: "auto" }}
                        >
                            <Box
                                as="img"
                                src={Logo}
                                alt="3DARCHTECH Logo"
                                w="200%"
                                h="100%"
                                objectFit="cover"
                                objectPosition="left center"
                            />
                        </Box>

                        {/* Description */}
                        <Text
                            fontFamily="'Be Vietnam Pro', sans-serif"
                            fontSize={{ base: "12px", md: "13px", lg: "14px", xl: "16px" }}
                            fontWeight="400"
                            lineHeight={{ base: "18px", md: "18px", lg: "20px", xl: "20px" }}
                            letterSpacing="0%"
                            textAlign={{ base: "left", md: "right" }}
                            color="gray.600"
                            mt={{ base: "8px", md: "0" }}
                            pr={{ base: "20px", md: "0" }}
                        >
                            Explore how our expertise allows us to design visuals that not only
                            capture attention, but also engage your audience, delivering
                            impactful results.
                        </Text>
                    </Flex>
                </Flex>

                {/* FILTER BAR */}
                {/* ml và w align với title block bên trái */}
                <Box
                    ml={{ base: "16px", md: "60px", lg: "120px", xl: "13.54vw" }}
                    mt={{ base: "16px", md: "20px", lg: "24px", xl: "30px" }}
                    w={{ base: "calc(100% - 32px)", md: "calc(100% - 120px)", lg: "calc(100% - 240px)", xl: "calc(72.92vw * 0.6086)" }}
                    maxW="688px"
                >
                    <HStack
                        spacing={{ base: "6px", md: "8px", lg: "10px", xl: "10px" }}
                        w="100%"
                        flexWrap={{ base: "wrap", md: "nowrap" }}
                    >
                        {ALL_FILTERS.map((filter) => (
                            <Button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                variant="outline"
                                bg={activeFilter === filter ? "#FF6B35" : "transparent"}
                                color={activeFilter === filter ? "white" : "black"}
                                borderColor={activeFilter === filter ? "transparent" : "#000000"}
                                borderWidth="1px"
                                borderRadius="40px"
                                px={{ base: "8px", md: "8px", lg: "10px", xl: "10px" }}
                                h={{ base: "30px", md: "32px", lg: "34px", xl: "36px" }}
                                flex="1"
                                minW="0"
                                fontFamily="'Be Vietnam Pro', sans-serif"
                                fontSize={{ base: "11px", md: "12px", lg: "14px", xl: "16px" }}
                                fontWeight="400"
                                lineHeight="1"
                                _hover={{
                                    bg: activeFilter === filter ? "#E85A2D" : "gray.100",
                                }}
                            >
                                {filter}
                            </Button>
                        ))}
                    </HStack>
                </Box>
            </Box>

            {/* ================= PORTFOLIO GRID ================= */}
            <PortfolioGrid items={filteredItems} />
            <TrustedBy />
            <Slogan enableCarousel={true} />
        </Box>
    );
};

export default WorkPage;