import { useState } from 'react';
import { Box, Flex, Image, Text } from '@chakra-ui/react';

interface HoverImageProps {
    src: string;
    alt: string;
    width?: string;
    height?: string;
}

const HoverImage = ({ src, alt, width = "100%", height = "auto" }: HoverImageProps) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Box
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            width={width}
            height={height}
            position="relative"
            cursor="pointer"
            overflow="hidden"
        >
            <Image
                src={src}
                alt={alt}
                width="100%"
                height="auto"
                display="block"
                objectFit="cover"
                transition="transform 0.5s ease"
                transform={isHovered ? 'scale(1.05)' : 'scale(1)'}
            />
            {/* Gray overlay */}
            <Flex
                position="absolute"
                top={0}
                left={0}
                right={0}
                bottom={0}
                alignItems="center"
                justifyContent="center"
                bg={isHovered ? 'rgba(0, 0, 0, 0.4)' : 'rgba(0, 0, 0, 0)'}
                transition="background-color 0.3s ease-out"
                zIndex={1}
            >
                <Text
                    color="white"
                    fontWeight="bold"
                    fontSize="24px"
                    fontFamily="'Be Vietnam Pro', sans-serif"
                    opacity={isHovered ? 1 : 0}
                    transform={isHovered ? 'translateY(0)' : 'translateY(10px)'}
                    transition="all 0.3s ease-out"
                >
                    read more
                </Text>
            </Flex>
        </Box>
    );
};

export default HoverImage;
