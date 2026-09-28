
import {
    Box,
    Flex,
    Heading,
    Text,
    Input,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    IconButton,
    Image,
} from '@chakra-ui/react';
import { motion, type HTMLMotionProps, type Variants } from 'framer-motion';
import type { CSSProperties, ReactNode } from 'react';
import { IoCloseOutline } from "react-icons/io5";
import THouse from "@assets/imagesWork-page/THouse.webp";

interface ScrollAnimationWrapperProps extends HTMLMotionProps<"div"> {
    children: ReactNode;
    className?: string;
    style?: CSSProperties;
    delay?: number;
}

const ScrollAnimationWrapper = ({
    children,
    className,
    style,
    delay = 0,
    ...props
}: ScrollAnimationWrapperProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut", delay }}
            className={className}
            style={style}
            {...props}
        >
            {children}
        </motion.div>
    );
};

const lineVariants: Variants = {
    hidden: { scaleX: 0 },
    visible: {
        scaleX: 1,
        transition: {
            duration: 0.8,
            ease: "easeOut"
        }
    }
};

const LineAnimation = () => (
    <Box
        as={motion.div}
        h="1px"
        bg="black"
        w="100%"
        transformOrigin="left"
        position="absolute"
        bottom={0}
        left={0}
        variants={lineVariants}
        initial="hidden"
        animate="visible"
    />
);

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
        }
    }
};

const wordVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.35,
            ease: "easeOut"
        }
    }
};

interface GetEstimateProps {
    isOpen: boolean;
    onClose: () => void;
}

const GetEstimate = ({ isOpen, onClose }: GetEstimateProps) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered size="5xl">
            <ModalOverlay backdropFilter="blur(8px)" bg="blackAlpha.600" />
            <ModalContent
                maxW="1030px"
                h={{ base: "auto", md: "556px" }}
                borderRadius="0"
                overflow="hidden"
                bg="white"
                position="relative"
            >
                <IconButton
                    aria-label="Close"
                    icon={<IoCloseOutline size={24} />}
                    position="absolute"
                    right="20px"
                    top="20px"
                    variant="unstyled"
                    onClick={onClose}
                    zIndex={10}
                    _hover={{ opacity: 0.7 }}
                />

                <ModalBody p={0}>
                    <Flex direction={{ base: "column", md: "row" }} h="100%">
                        {/* LEFT SIDE: Image + Text Overlay */}
                        <Box
                            w={{ base: "100%", md: "530px" }}
                            h={{ base: "300px", md: "100%" }}
                            position="relative"
                            overflow="hidden"
                            bg="white"
                        >
                            <Image
                                src={THouse}
                                alt="Background"
                                w="100%"
                                h="100%"
                                objectFit="cover"
                                filter="brightness(0.95)"
                            />
                            {/* White fade overlay - Trắng ở đáy và rõ nét dần lên trên */}
                            <Box
                                position="absolute"
                                inset={0}
                                bgGradient="linear(to-t, white 0%, white 10%, rgba(255,255,255,0.9) 20%, transparent 60%)"
                                pointerEvents="none"
                            />
                            {/* Overlay Title - Sử dụng SVG để đảm bảo text luôn fit hoàn hảo và responsive */}
                            <Box
                                position="absolute"
                                bottom="0"
                                left="0"
                                w="100%"
                                h={{ base: "40px", md: "70px" }}
                                pl="5px"
                                pr="5px"
                                opacity={0.2}
                                display="flex"
                                alignItems="flex-end"
                            >
                                <svg
                                    viewBox="0 0 530 65"
                                    width="100%"
                                    height="auto"
                                    preserveAspectRatio="xMidYEnd meet"
                                    style={{ display: 'block' }}
                                >
                                    <defs>
                                        <linearGradient id="textGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                            <stop offset="0%" stopColor="#FDE5CB" />
                                            <stop offset="100%" stopColor="#FF682A" />
                                        </linearGradient>
                                    </defs>
                                    <text
                                        x="50%"
                                        y="55"
                                        textAnchor="middle"
                                        fontFamily="'Be Vietnam Pro', sans-serif"
                                        fontSize="72"
                                        fontWeight="900"
                                        fill="url(#textGradient)"
                                        letterSpacing="-2"
                                    >
                                        3DARCHTECH
                                    </text>
                                </svg>
                            </Box>
                        </Box>

                        {/* RIGHT SIDE: Contact Form */}
                        <Box
                            flex={1}
                            p={{ base: "30px", md: "40px 50px" }}
                            display="flex"
                            flexDirection="column"
                            justifyContent="center"
                            position="relative"
                        >
                            <Heading
                                as={motion.h2}
                                fontFamily="'Be Vietnam Pro', sans-serif"
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                                mb="30px"
                                bgGradient="linear(to-b, #FDE5CB 0%, #FF682A 100%)"
                                bgClip="text"
                                color="transparent"
                                fontSize={{ base: "32px", md: "40px" }}
                                lineHeight="1.1"
                                fontWeight={600}
                            >
                                <Box as={motion.span} variants={wordVariants} display="inline-block">Let's</Box>{" "}
                                <Box as={motion.span} variants={wordVariants} display="inline-block">create</Box>{" "}
                                <Box as={motion.span} variants={wordVariants} display="inline-block">your</Box>{" "}
                                <Box as={motion.span} variants={wordVariants} display="inline-block">new</Box>{" "}
                                <Box as={motion.span} variants={wordVariants} display="inline-block">project</Box>{" "}
                                <Box as={motion.span} variants={wordVariants} display="inline-block">together!</Box>
                            </Heading>

                            <Box display="flex" flexDirection="column" gap="30px">
                                {/* Name Field */}
                                <ScrollAnimationWrapper delay={0.1}>
                                    <Box position="relative" pb="5px">
                                        <Text
                                            fontFamily="'Be Vietnam Pro', sans-serif"
                                            color="#444444"
                                            fontSize="15px"
                                            fontWeight={400}
                                            mb="5px"
                                        >
                                            Name
                                        </Text>
                                        <Input variant="unstyled" fontSize="18px" fontWeight={500} />
                                        <LineAnimation />
                                    </Box>
                                </ScrollAnimationWrapper>

                                {/* Email Field */}
                                <ScrollAnimationWrapper delay={0.2}>
                                    <Box position="relative" pb="5px">
                                        <Text
                                            fontFamily="'Be Vietnam Pro', sans-serif"
                                            color="#444444"
                                            fontSize="15px"
                                            fontWeight={400}
                                            mb="5px"
                                        >
                                            Email
                                        </Text>
                                        <Input type="email" variant="unstyled" fontSize="18px" fontWeight={500} />
                                        <LineAnimation />
                                    </Box>
                                </ScrollAnimationWrapper>

                                {/* Message Field */}
                                <ScrollAnimationWrapper delay={0.3}>
                                    <Box position="relative" pb="5px">
                                        <Text
                                            fontFamily="'Be Vietnam Pro', sans-serif"
                                            color="#444444"
                                            fontSize="15px"
                                            fontWeight={400}
                                            mb="5px"
                                        >
                                            Your Message
                                        </Text>
                                        <Input variant="unstyled" fontSize="18px" fontWeight={500} />
                                        <LineAnimation />
                                    </Box>
                                </ScrollAnimationWrapper>

                                {/* Send Button */}
                                <Box mt="10px">
                                    <Button
                                        variant="unstyled"
                                        fontFamily="'Be Vietnam Pro', sans-serif"
                                        fontSize="24px"
                                        fontWeight={500}
                                        borderBottom="2px solid black"
                                        borderRadius="0"
                                        h="auto"
                                        pb="2px"
                                        _hover={{ opacity: 0.7 }}
                                    >
                                        Send
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                    </Flex>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default GetEstimate;
