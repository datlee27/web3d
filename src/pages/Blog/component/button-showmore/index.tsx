import { Text, Flex } from '@chakra-ui/react';
import { useState } from 'react';
import ScrollAnimationWrapper from '@components/animation/scroll-animation-wrapper';

const Button = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Flex width="100%" justifyContent="center" mt={{ base: "20px", md: "40px", lg: "60px" }} mb="40px">
            <ScrollAnimationWrapper
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{
                    boxSizing: 'border-box',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '10px 25px',
                    gap: '10px',
                    border: isHovered ? '1px solid #FF682A' : '1px solid #000000',
                    borderRadius: '40px',
                    cursor: 'pointer',
                    backgroundColor: isHovered ? '#FF682A' : 'transparent',
                    transition: 'all 0.3s ease',
                    minWidth: '140px'
                }}
            >
                <Text
                    fontSize="16px"
                    lineHeight="20px"
                    fontWeight="medium"
                    textAlign="center"
                    color={isHovered ? '#FFFFFF' : '#000000'}
                    transition="color 0.3s ease"
                >
                    Show more
                </Text>
            </ScrollAnimationWrapper>
        </Flex>
    );
};

export default Button;