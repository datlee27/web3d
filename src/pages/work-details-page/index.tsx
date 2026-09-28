import { Box } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useHeaderColor } from "@contexts/HeaderColorContext";
import { WorkDetailHero, OurApproachSection, ProjectOverviewSection, FinalRendersSection, OtherProjectsSection } from "../../components/work-details-page";

// Import ảnh - điều chỉnh đường dẫn theo project của bạn
import CitySimulation from "@assets/imagesWork-page/CitySimulation.webp";
import Hero2nd from "@assets/imagesWork-page/Hero2nd.webp";
import Car from "@assets/imagesWork-page/Car.webp";
import Wonderspace from "@assets/imagesWork-page/wonderspace.webp";
import Lively from "@assets/imagesWork-page/lively.webp";
import GenF from "@assets/imagesWork-page/GenF.webp";
import logo from "@assets/imagesWork-page/3D.webp";
import TrustedBy from "@components/work-page/TrustedBy";
import Slogan from "../AboutUs/components/our-service/components/slogan";

// Data cho 14 projects
const projectsData = [
    {
        id: 1,
        title: "City Simulation",
        image: CitySimulation,
        tags: ["Visualize", "Render"],
        path: "city-simulation",
    },
    //  13 projects còn lại ở đây
];

const otherProjects = [
    {
        id: 1,
        title: "Wonderspace",
        image: Wonderspace,
        tags: ["AR/VR", "Render"],
    },
    {
        id: 2,
        title: "Lively Catalogue",
        image: Lively,
        tags: ["AR/VR", "Render"],
    },
    {
        id: 3,
        title: "The Era of Gen F",
        image: GenF,
        tags: ["AR/VR", "Render"],
    },
];

const WorkDetailPage = () => {
    const { id } = useParams<{ id: string }>();
    const { setHeaderColor } = useHeaderColor();

    // Set header chữ trắng khi ở trang này (header nằm trên ảnh hero tối)
    useEffect(() => {
        setHeaderColor("white");
        return () => setHeaderColor("black"); // Reset khi rời trang
    }, [setHeaderColor]);

    // Tìm project theo ID từ URL
    const project = projectsData.find((p) => p.path === id);

    // Nếu không tìm thấy project
    if (!project) {
        return (
            <Box bg="transparent" minH="100vh" display="flex" alignItems="center" justifyContent="center">
                <Box textAlign="center">
                    <Box fontSize="6xl" fontWeight="bold" color="gray.400">404</Box>
                    <Box fontSize="2xl" color="gray.600">Project not found</Box>
                </Box>
            </Box>
        );
    }

    return (
        <Box bg="transparent">

            {/* Hero Section */}
            <WorkDetailHero
                image={project.image}
                title={project.title}
                tags={project.tags}
                logo={logo}
            />

            {/* Our Approach Section */}
            <OurApproachSection logo={logo} />

            {/* Project Overview Section */}
            <ProjectOverviewSection
                image={Hero2nd}
                text1="This project showcases a detailed city simulation built using the powerful Unreal Engine, offering an immersive experience of urban mobility. Players can step into the role of a driver and navigate a realistically rendered cityscape."
                text2="The simulation accurately models traffic patterns, pedestrian movement, and dynamic environmental conditions, providing a comprehensive feel for urban transportation."
            />

            {/* Final Renders Section */}
            <FinalRendersSection
                images={{
                    citySimulation: CitySimulation,
                    hero2nd: Hero2nd,
                    car: Car,
                }}
            />


            <TrustedBy />

            {/* Other Projects Section */}
            <OtherProjectsSection projects={otherProjects} />

            <Slogan enableCarousel={true} />

        </Box>
    );
};

export default WorkDetailPage;