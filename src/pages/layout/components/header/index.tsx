import {
  Box, Button, Flex, HStack, Link, Image, IconButton,
  Drawer, DrawerBody, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, VStack
} from "@chakra-ui/react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import logo3dBlack from "@assets/images/logo-3d-architechture-black.webp";
import logo3dWhite from "@assets/imagesWork-page/logo.webp";
import GetEstimate from "../get-estimate";

// Navigation items configuration
const NAV_ITEMS = [
  { label: "Works", to: "/work" },
  { label: "Services", to: "/services" },
  { label: "Studio", to: "/about-us" },
  { label: "Contact", to: "/contacts" },
  { label: "Blog", to: "/blog" },
];

// Reusable NavLink component with common styling
const NavLink = ({ label, to, onClick }: { label: string; to: string; onClick?: () => void }) => (
  <Link
    as={RouterLink}
    to={to}
    onClick={onClick}
    fontWeight={400}
    fontSize="15px"
    lineHeight="100%"
    letterSpacing="0"
    textAlign="center"
    position="relative"
    _after={{
      content: '""',
      position: "absolute",
      width: "100%",
      transform: "scaleX(0)",
      height: "1.5px",
      bottom: "-4px",
      left: "0",
      bg: "currentColor",
      transformOrigin: "center",
      transition: "transform 0.3s ease-in-out",
    }}
    _hover={{
      textDecoration: "none",
      opacity: 0.8,
      _after: { transform: "scaleX(1)" },
    }}
  >
    {label}
  </Link>
);

const HomeHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const whiteTextPages = ["/", "/services"];
  const isWhitePage =
    location.pathname === "/" ||
    location.pathname.startsWith("/work/") ||
    location.pathname.startsWith("/blog/") ||
    whiteTextPages.includes(location.pathname);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { 
    isOpen: isEstimateOpen, 
    onOpen: onOpenEstimate, 
    onClose: onCloseEstimate 
  } = useDisclosure();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine current text color
  const textColor = isScrolled ? "black" : (isWhitePage ? "white" : "black");

  return (
    <Box
      as="header"
      position="fixed"
      top={0}
      left={0}
      w="full"
      zIndex={100}
      pointerEvents="none" // Pass through clicks when container is full size but header is small
    >
      <Flex
        justify="space-between"
        align="center"
        transition="all 0.3s ease-in-out"
        // Chiều rộng: căn chỉnh linh hoạt cho mọi màn hình
        w={isScrolled ? { base: "90%", xl: "1200px" } : "auto"}
        h={isScrolled ? { base: "70px", md: "80px" } : "auto"}
        mx={isScrolled ? "auto" : { base: "20px", md: "40px", xl: "120px" }}
        maxW={isScrolled ? "1200px" : "full"}
        bg={{
          base: isScrolled ? "linear-gradient(90deg, rgba(253, 229, 203, 0.5) 0%, rgba(255, 244, 232, 0.5) 100%)" : "transparent",
          md: isScrolled ? "whiteAlpha.800" : "transparent",
        }}
        backdropFilter={isScrolled ? "blur(12px)" : "none"}
        borderRadius={isScrolled ? "24px" : "0"}
        border={isScrolled ? "1px solid" : "none"}
        borderColor={isScrolled ? "whiteAlpha.200" : "transparent"}
        mt={isScrolled ? { base: "10px", md: "20px" } : { base: "20px", md: "40px" }}
        px={isScrolled ? { base: "20px", md: "40px" } : "0"}
        py={isScrolled ? { base: "0px", md: "0px" } : "0"}
        pointerEvents="auto" // Re-enable clicks
        color={textColor} // Header text color is dynamic based on page
        boxShadow={isScrolled ? "lg" : "none"}
        fontFamily="body"
      >
        <Link as={RouterLink} to="/">
          <Box w={{ base: "100px", md: "118px" }} h={{ base: "30px", md: "36px" }} overflow="hidden" display="flex" alignItems="center">
            <Image
              src={isScrolled ? logo3dBlack : (isWhitePage ? logo3dWhite : logo3dBlack)}
              w="118px"
              maxW="none"
              ml={"-27px"}
              mt={1}
              objectFit="contain"
            />
          </Box>
        </Link>

        {/* Group Links and Button to the right */}
        <HStack spacing={{ base: "0", md: "30px", lg: "50px" }}>
          {/* Desktop Navigation */}
          <HStack spacing={{ md: "30px", lg: "50px" }} display={{ base: "none", md: "flex" }}>
            {NAV_ITEMS.map((item) => (
              <NavLink key={item.label} label={item.label} to={item.to} />
            ))}
          </HStack>

          <Button
            w={{ base: "100px", md: "125px" }}
            h={{ base: "36px", md: "30px" }}
            bg="#FF682A"
            color="white"
            borderRadius="20px"
            border="none"
            fontSize={{ base: "13px", md: "15px" }}
            fontWeight="600"
            lineHeight="100%"
            fontFamily="body"
            justifyContent="center"
            alignItems="center"
            _hover={{ bg: "#e55a2b" }}
            flexShrink={0}
            display={{ base: "none", md: "flex" }}
            onClick={onOpenEstimate}
          >
            Get Estimate
          </Button>

          {/* Mobile Hamburger Icon */}
          <IconButton
            display={{ base: "flex", md: "none" }}
            aria-label="Open menu"
            icon={
              <Box
                display="flex"
                flexDirection="column"
                alignItems="flex-start"
                justifyContent="center"
                w="24px"
                h="24px"
                px="3px"
                py="7px"
                gap="5px"
              >
                <Box w="18px" borderTop="1.5px solid" borderColor={textColor} />
                <Box w="18px" borderTop="1.5px solid" borderColor={textColor} />
                <Box w="18px" borderTop="1.5px solid" borderColor={textColor} />
              </Box>
            }
            variant="unstyled"
            color={textColor}
            onClick={onOpen}
            minW="24px"
            w="24px"
            h="24px"
            p={0}
            _hover={{ opacity: 0.8 }}
          />
        </HStack>
      </Flex>

      {/* Mobile Drawer (40% Width Menu) */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="#FFE8DE" color="black" maxW={{ base: "80%", md: "40%" }}>
          <DrawerCloseButton size="lg" mt="50px" left="50%" transform="translateX(-50%)" display="flex" alignItems="center" w="40px" h="40px" fontSize="14px" />
          <DrawerBody display="flex" flexDirection="column" justifyContent="center" alignItems="center">
            <VStack spacing="40px">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  as={RouterLink}
                  to={item.to}
                  onClick={onClose}
                  fontSize="24px"
                  fontWeight="500"
                  fontFamily="body"
                  _hover={{ color: "#FF682A", textDecoration: "none" }}
                >
                  {item.label}
                </Link>
              ))}
            </VStack>
            <Button
              position="absolute"
              bottom="40px"
              left="50%"
              transform="translateX(-50%)"
              w={{ base: "min(350px, 90%)", md: "408px" }}
              h="32px"
              bg="#FF6222"
              color="#FFFFFF"
              border="none"
              boxShadow="0px 2px 4px rgba(0, 0, 0, 0.25)"
              borderRadius="20px"
              fontSize="12px"
              fontWeight="600"
              fontFamily="'Be Vietnam Pro', sans-serif"
              display="flex"
              alignItems="center"
              justifyContent="center"
              _hover={{ bg: "#e55a2b" }}
            >
              Get Estimate
            </Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <GetEstimate isOpen={isEstimateOpen} onClose={onCloseEstimate} />
    </Box>
  );
};

export default HomeHeader;
