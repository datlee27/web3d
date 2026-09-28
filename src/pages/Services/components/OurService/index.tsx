import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Flex, Heading, Text, Image, Container } from "@chakra-ui/react";
import ScrollAnimationWrapper from "@components/animation/scroll-animation-wrapper";
const ServicePic = "/images/service-page/ourservice-img.jpg";
interface ServiceItemProps {
  number: number;
  title: string;
  path: string;
  isActive?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onClick?: () => void;
}

const gradientHeading = {
  background: "linear-gradient(90deg, #FF682A 0%, #FDE5CB 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  color: "transparent",
};

const ServiceItem = ({
  number,
  title,
  isActive = false,
  onMouseEnter,
  onMouseLeave,
  onClick,
}: ServiceItemProps) => {
  const color = isActive ? "#000000" : "#AAA9A9";

  return (
    /* Group — 72px tall */
    <Box
      position="relative"
      width={{ base: "100%", lg: "546px" }}
      minHeight={{ base: "auto", lg: "72px" }}
      cursor="pointer"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      transition="color 0.25s ease"
      role="group"
    >
      {/* Number: /1, /2 … */}
      <Flex
        position="absolute"
        top="0px"
        left="0px"
        width="24px"
        height="28px"
        justifyContent="center"
        alignItems="center"
        padding="10px"
      >
        <Text
          fontFamily="'Be Vietnam Pro', sans-serif"
          fontWeight="500"
          fontSize={{ base: "14px", md: "18px", lg: "20px" }}
          lineHeight={{ base: "20px", md: "25px" }}
          color={color}
          transition="color 0.25s ease"
        >
          /{number}
        </Text>
      </Flex>

      {/* Title + underline */}
      <Flex
        position={{ base: "relative", lg: "absolute" }}
        top="0px"
        left={{ base: "0px", lg: "35px" }}
        width={{ base: "100%", lg: "510px" }}
        minHeight={{ base: "auto", lg: "72px" }}
        alignItems={{ base: "flex-start", lg: "flex-start" }}
        padding={{ base: "10px 0px 10px 30px", lg: "0px" }}
        direction="column"
        justify="center"
      >
        <Heading
          as="h3"
          fontFamily="'Inter', sans-serif"
          fontWeight="600"
          fontSize={{ base: "18px", sm: "22px", md: "36px", lg: "60px" }}
          lineHeight={{ base: "1.2", lg: "73px" }}
          color={color}
          margin={0}
          transition="color 0.25s ease"
        >
          {title}
        </Heading>
        {/* Hover underline */}
        <Box
          h="2px"
          w={isActive ? "100%" : "0%"}
          bg="linear-gradient(90deg, #FF682A 0%, #FDE5CB 100%)"
          transition="width 0.35s ease"
          mt="2px"
        />
      </Flex>
    </Box>
  );
};

const OurServiceSection = () => {
  const [activeItem, setActiveItem] = useState<number>(1);
  const navigate = useNavigate();

  const services = [
    { number: 1, title: "AR/VR Services", path: "/services/ar-vr" },
    { number: 2, title: "Game 2D & 3D", path: "/services/game-3d" },
    { number: 3, title: "Training course", path: "/services/training" },
    { number: 4, title: "Web & App", path: "/services/web-app" },
    { number: 5, title: "Visualization", path: "/services/visualization" },
    { number: 6, title: "Marketing", path: "/services/marketing" },
  ];

  return (
    <Container maxW="container.xl" py={{ base: 10, md: 20 }}>
      {/* ── Heading block ───────────────────────────────────────── */}
      <ScrollAnimationWrapper
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "10px",
          zIndex: 30,
          marginBottom: "50px",
        }}
      >
        {/* Frame 118 — title row */}
        <Flex width="100%" alignItems="center" padding="10px 0px">
          <Heading
            as="h2"
            fontFamily="'Be Vietnam Pro', sans-serif"
            fontWeight="700"
            fontSize={{ base: "32px", sm: "40px", md: "56px", lg: "68px" }}
            lineHeight="1.2"
            style={gradientHeading}
            margin={0}
          >
            Our 3D Rendering Services
          </Heading>
        </Flex>

        {/* Frame 9 — description row */}
        <Flex width="100%" alignItems="flex-start" padding="0px">
          <Text
            fontFamily="'Be Vietnam Pro', sans-serif"
            fontWeight="400"
            fontSize={{ base: "14px", md: "16px" }}
            lineHeight={{ base: "18px", md: "20px" }}
            color="#000000"
            width="100%"
            maxW="513px"
          >
            We take pride in our collaborative approach, working closely with
            you and your marketing and architecture teams to clarify the project
            vision and define the target audience.
          </Text>
        </Flex>
      </ScrollAnimationWrapper>


      <Flex
        width="100%"
        flexDirection={{ base: "column", lg: "row" }}
        alignItems="flex-start"
        gap={{ base: "40px", lg: "142px" }}
      >
        {/* left list column */}
        <Box
          display={{ base: "grid", lg: "flex" }}
          gridTemplateColumns={{ base: "repeat(1, 1fr)", sm: "repeat(2, 1fr)", lg: "none" }}
          flexDirection="column"
          width={{ base: "100%", lg: "546px" }}
          gap="40px"
          alignItems="flex-start"
        >
          {services.map((s, i) => (
            <ScrollAnimationWrapper
              key={s.number}
              delay={i * 0.08}
              style={{ width: "100%" }}
            >
              <ServiceItem
                {...s}
                isActive={activeItem === s.number}
                onMouseEnter={() => setActiveItem(s.number)}
                onClick={() => navigate(s.path)}
              />
            </ScrollAnimationWrapper>
          ))}
        </Box>

        {/* Rectangle 14 — right image */}
        <ScrollAnimationWrapper
          delay={0.2}
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          style={{ width: "100%", maxWidth: "970px" }}
        >
          <Image
            src={ServicePic}
            alt="3D Rendering Services"
            width="100%"
            height={{ base: "auto", md: "600px", lg: "798px" }}
            objectFit="cover"
            borderRadius="xl"
          />
        </ScrollAnimationWrapper>
      </Flex>
    </Container>
  );
};

export default OurServiceSection;
