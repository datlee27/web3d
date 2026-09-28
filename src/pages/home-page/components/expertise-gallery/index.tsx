import { Flex, useBreakpointValue } from "@chakra-ui/react";
import { useState } from "react";
import GalleryItem from "./gallery-item";
import MobileStackedCarousel from "./MobileStackedCarousel";
import galleryImage1 from "@assets/images/anh1-gallery.webp";
import galleryImage2 from "@assets/images/anh2-gallery.webp";
import galleryImage3 from "@assets/images/anh3galllery.webp";
import galleryImage4 from "@assets/images/anh4gallery.webp";
import galleryImage5 from "@assets/images/anh5gallery.webp";


// Placeholder images - using Unsplash for variety
const ITEMS = [
  {
    title: "Interior Rendering",
    image:
      galleryImage1,
    description:
      "Photorealistic interior visualizations that capture light, texture, and atmosphere.",
  },
  {
    title: "Exterior Rendering",
    image:
      galleryImage2,
    description:
      "Stunning exterior views showing architecture in its context with realistic lighting.",
  },
  {
    title: "Architectural Animation",
    image:
      galleryImage3,
    description:
      "Cinematic fly-throughs and walkthroughs that tell the story of your project.",
  },
  {
    title: "Virtual Reality",
    image:
      galleryImage4,
    description:
      "Immersive VR experiences allowing clients to walk through spaces before they are built.",
  },
  {
    title: "3D Floor Plans",
    image:
      galleryImage5,
    description:
      "Clear and detailed 3D layouts helping to visualize space planning and flow.",
  },
];

const ExpertiseGallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const isMobile = useBreakpointValue({ base: true, md: false });

  if (isMobile) {
    return <MobileStackedCarousel items={ITEMS} />;
  }

  return (
    <Flex
      w="full"
      h={{ base: "auto", md: "636px" }}
      direction={{ base: "column", md: "row" }}
      overflow="hidden"
    >
      {ITEMS.map((item, index) => (
        <GalleryItem
          key={index}
          index={index}
          title={item.title}
          image={item.image}
          description={item.description}
          hoveredIndex={hoveredIndex}
          setHoveredIndex={setHoveredIndex}
        />
      ))}
    </Flex>
  );
};

export default ExpertiseGallery;
