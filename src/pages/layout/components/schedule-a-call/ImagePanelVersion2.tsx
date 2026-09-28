import { Box, Image, VStack, Heading, HStack, Text } from '@chakra-ui/react';
import { LuClock3, LuVideo } from "react-icons/lu";
import THouse from "@assets/imagesWork-page/THouse.webp";
import logoIcon from "@assets/images/logo-3d-architechture.webp";

interface ImagePanelProps {
    w?: string | object;
    h?: string | object;
    minW?: string | object;
}

const ImagePanel = ({
    w = { base: "100%", md: "345px" },
    h = { base: "300px", md: "100%" },
    minW = { md: "345px" }
}: ImagePanelProps) => {
    return (
        <Box
            w={w}
            h={h}
            minW={minW}
            position="relative"
            bg="white"
            flexShrink={0}
            flexGrow={0}
        >
            <Image
                src={THouse}
                alt="Background"
                w="100%"
                h="100%"
                objectFit="cover"
                filter="brightness(0.95)"
            />
            <Box
                position="absolute"
                inset={0}
                bgGradient="linear(to-t, white 0%, white 30%, rgba(255,255,255,0.8) 50%, transparent 80%)"
                pointerEvents="none"
            />

            <VStack
                position="absolute"
                top="306px"
                left="27px"
                w="294px"
                h="212px"
                align="flex-start"
                spacing="clamp(5px, 1vw, 10px)"
                px="10px"
                zIndex={2}
            >
                <Box w="clamp(40px, 4vw, 56px)" h="clamp(45px, 4.5vw, 60px)">
                    <Image src={logoIcon} alt="Logo" w="100%" h="100%" objectFit="contain" />
                </Box>
                <Heading
                    fontFamily="'Be Vietnam Pro', sans-serif"
                    fontWeight={700}
                    fontSize="28px"
                    color="#FF682A"
                    lineHeight="1"
                >
                    30 Minute Meeting
                </Heading>
                <HStack spacing="8px" color="#1A1A1A">
                    <LuClock3 size={18} />
                    <Text
                        as="span"
                        fontFamily="'Be Vietnam Pro', sans-serif"
                        fontWeight={500}
                        fontSize="14px"
                        lineHeight="20px"
                        color="#1A1A1A"
                        letterSpacing="normal"
                    >
                        30 min
                    </Text>
                </HStack>
                <HStack spacing="8px" color="#1A1A1A" align="flex-start">
                    <LuVideo size={18} style={{ marginTop: '2px', flexShrink: 0 }} />
                    <Text
                        as="span"
                        fontFamily="'Be Vietnam Pro', sans-serif"
                        fontWeight={500}
                        fontSize="14px"
                        lineHeight="20px"
                        color="#1A1A1A"
                        letterSpacing="normal"
                    >
                        Web conferencing details provided upon confirmation.
                    </Text>
                </HStack>
            </VStack>

            <Box
                position="absolute"
                top="582.76px"
                left="0.69px"
                w="345.31px"
                h="36.49px"
                opacity={0.2}
                display="flex"
                alignItems="flex-end"
                pointerEvents="none"
                zIndex={1}
            >
                <svg viewBox="0 0 530 65" width="100%" height="auto" preserveAspectRatio="none">
                    <defs>
                        <linearGradient id="textGradientCallFlow" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#FDE5CB" />
                            <stop offset="100%" stopColor="#FF682A" />
                        </linearGradient>
                    </defs>
                    <text x="50%" y="55" textAnchor="middle" fontFamily="'Be Vietnam Pro', sans-serif" fontSize="72" fontWeight="900" fill="url(#textGradientCallFlow)" letterSpacing="-2">
                        3DARCHTECH
                    </text>
                </svg>
            </Box>
        </Box>
    );
};

export default ImagePanel;