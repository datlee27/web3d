import { Box, Flex, Heading, Text, Input, Button, FormControl, FormErrorMessage } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import type { HTMLMotionProps, Variants } from 'framer-motion';
import type { CSSProperties, ReactNode } from 'react';
import { useState } from 'react';


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
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.2, ease: "easeOut", delay }}
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
        h="2px"
        bg="black"
        w="100%"
        transformOrigin="left"
        position="absolute"
        bottom={0}
        left={0}
        variants={lineVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
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
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.35,
            ease: "easeOut"
        }
    }
};

const ContactForm = ({ style }: { style?: React.CSSProperties }) => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({ email: '' });
    const [touched, setTouched] = useState({ email: false });

    const validateEmail = (email: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        if (name === 'email') {
            if (value && !validateEmail(value)) {
                setErrors(prev => ({ ...prev, email: 'Vui lòng nhập đúng định dạng email' }));
            } else {
                setErrors(prev => ({ ...prev, email: '' }));
            }
        }
    };

    const handleBlur = (field: string) => {
        setTouched(prev => ({ ...prev, [field]: true }));
    };

    const isEmailInvalid = touched.email && !!errors.email;

    return (
        <Flex
            position="relative"
            w={{ base: "90%", md: "85%", lg: "72.70833%" }}
            maxW="1396px"
            mx="auto"
            alignItems={{ base: "flex-start", md: "flex-end" }}
            flexDirection={{ base: "column", md: "row" }}
            gap={{ base: "40px", md: "20px", lg: "10px" }}
            pb={{ base: "40px", md: "30px" }}
            style={style}
        >
            <Heading
                as={motion.h2}
                className="font-be-vietnam-pro"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                w={{ base: "100%", md: "45%", lg: "49.28%" }}
                h={{ base: "auto", md: "380px", lg: "484px" }}
                display="flex"
                alignItems="center"
                flexWrap="wrap"
                alignContent="center"
                bgGradient="linear(to-b, #FDE5CB 0%, #FF682A 100%)"
                bgClip="text"
                color="transparent"
                fontSize={{ base: "48px", md: "clamp(32px, 5.5vw, 64px)", lg: "clamp(48px, 6.6vw, 96px)" }}
                lineHeight="120%"
                fontWeight={500}
                gap={{ base: "10px 15px", md: "0 10px", lg: "0" }}
            >
                <Box as={motion.span} variants={wordVariants} display="inline-block">Let's</Box>
                <Box flexBasis="100%" h={0} display={{ base: "none", md: "block" }} />
                <Box as={motion.span} variants={wordVariants} display="inline-block" mr={{ base: 0, md: "0.25em" }}>create</Box>
                <Box as={motion.span} variants={wordVariants} display="inline-block">your</Box>
                <Box flexBasis="100%" h={0} display={{ base: "none", md: "block" }} />
                <Box as={motion.span} variants={wordVariants} display="inline-block" mr={{ base: 0, md: "0.25em" }}>new</Box>
                <Box as={motion.span} variants={wordVariants} display="inline-block">project</Box>
                <Box flexBasis="100%" h={0} display={{ base: "none", md: "block" }} />
                <Box as={motion.span} variants={wordVariants} display="inline-block">together!</Box>
            </Heading>

            {/* Form */}
            <Box w={{ base: "100%", md: "55%", lg: "50%" }} h={{ base: "auto", md: "287px" }} position="relative" left={{ base: "0", lg: "0.79%" }} mt={{ base: "20px", md: "0" }} display="flex" flexDirection="column" justifyContent="flex-end">
                <Box w={{ base: "100%", lg: "98.42%" }} h="auto" position="relative" display="flex" flexDirection="column" gap={{ base: "25px", md: "30px", lg: "45px" }} mb={{ base: "40px", md: "80px" }}>
                    {/* Name Field */}
                    <ScrollAnimationWrapper delay={0.1} style={{ position: 'relative', width: '100%', height: 'auto' }}>
                        <Flex alignItems="center" gap={{ base: "5px", md: "8px" }} h="auto" position="relative" pb="5px" flexDirection={{ base: "column", sm: "row" }} align={{ base: "flex-start", sm: "center" }}>
                            <Text className="font-be-vietnam-pro" color="#444444" fontSize={{ base: "16px", md: "20px" }} lineHeight="20px" w={{ base: "100%", sm: "60px", md: "65px" }} fontWeight={400}>Name</Text>
                            <Input
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                variant="unstyled"
                                className="font-be-vietnam-pro"
                                color="black"
                                fontSize={{ base: "16px", md: "20px" }}
                                lineHeight="20px"
                                flex={1}
                                w={{ base: "100%", sm: "auto" }}
                                placeholder=""
                                _placeholder={{ color: '#A0A0A0' }}
                            />
                            <LineAnimation />
                        </Flex>
                    </ScrollAnimationWrapper>
                    {/* Email Field */}
                    <ScrollAnimationWrapper delay={0.2} style={{ position: 'relative', width: '100%', height: 'auto' }}>
                        <FormControl isInvalid={isEmailInvalid}>
                            <Flex alignItems="center" gap={{ base: "5px", md: "8px" }} h="auto" position="relative" pb="5px" flexDirection={{ base: "column", sm: "row" }} align={{ base: "flex-start", sm: "center" }}>
                                <Text className="font-inter" color="#444444" fontSize={{ base: "16px", md: "20px" }} lineHeight="20px" w={{ base: "100%", sm: "60px", md: "65px" }} fontWeight={400}>Email</Text>
                                <Input
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    onBlur={() => handleBlur('email')}
                                    variant="unstyled"
                                    className="font-inter"
                                    color="black"
                                    fontSize={{ base: "16px", md: "20px" }}
                                    lineHeight="20px"
                                    flex={1}
                                    w={{ base: "100%", sm: "auto" }}
                                    placeholder=""
                                    _placeholder={{ color: '#A0A0A0' }}
                                />
                                <LineAnimation />
                            </Flex>
                            {isEmailInvalid && (
                                <FormErrorMessage position="absolute" bottom="-20px" fontSize="12px">
                                    {errors.email}
                                </FormErrorMessage>
                            )}
                        </FormControl>
                    </ScrollAnimationWrapper>
                    {/* Message Field */}
                    <ScrollAnimationWrapper delay={0.3} style={{ position: 'relative', width: '100%', height: 'auto', minHeight: "82px" }}>
                        <Flex flexDirection="column" position="relative" h="100%" pb="5px">
                            <Text className="font-be-vietnam-pro" color="#444444" fontSize={{ base: "16px", md: "20px" }} lineHeight="20px" h="auto" mb="10px" display="flex" alignItems="center" fontWeight={400}>Your Message</Text>
                            <Input
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                variant="unstyled"
                                className="font-be-vietnam-pro"
                                color="black"
                                fontSize={{ base: "16px", md: "20px" }}
                                lineHeight="20px"
                                w="full"
                                flex={1}
                                display="flex"
                                alignItems="flex-end"
                                placeholder=""
                                _placeholder={{ color: '#A0A0A0' }}
                            />
                            <LineAnimation />
                        </Flex>
                    </ScrollAnimationWrapper>
                </Box>
                {/* Send Button */}
                <Box position={{ base: "relative", md: "absolute" }} left="0" bottom="0" borderBottom="2px solid black" pb="8px" alignSelf="flex-start" mt={{ base: "10px", md: "0" }}>
                    <Button variant="unstyled" className="font-be-vietnam-pro text-black" fontSize={{ base: "24px", md: "32px" }} fontWeight={400} lineHeight="20px" h="auto" p={0} minW="auto">Send</Button>
                </Box>
            </Box>
        </Flex>
    );
};

export default ContactForm;
