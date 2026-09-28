import { Box, Heading, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

interface SloganProps {
    style?: React.CSSProperties;
    className?: string;
    enableCarousel?: boolean;
    order?: any;
    py?: any;
    my?: any;
}

const SLOGAN_CONTENT = (
    <Heading
        as="h2"
        fontSize="clamp(22px, 7vw, 132px)"
        lineHeight="1.27"
        fontWeight="bold"
        textAlign="center"
        textTransform="uppercase"
        style={{ whiteSpace: 'nowrap' }}
    >
        <Text as="span" color="rgba(253, 229, 203, 1)">YOU IMAGINE</Text>
        <Text as="span" color="#FF682A"> - WE CREATE</Text>
    </Heading>
);

const ITEMS = [1, 2, 3];

const Slogan = ({ style, className, enableCarousel = false, order, py, my }: SloganProps) => {
    const [orderedItems, setOrderedItems] = useState(ITEMS);
    const [isAnimating, setIsAnimating] = useState(false);

    const SLIDE_DURATION = 10000;

    useEffect(() => {
        if (!enableCarousel) return;
        const timer = setTimeout(() => {
            setIsAnimating(true);
        }, 50);
        return () => clearTimeout(timer);
    }, [orderedItems, enableCarousel]);

    const handleTransitionEnd = () => {
        if (!enableCarousel) return;
        setIsAnimating(false);
        setOrderedItems(prev => {
            const [first, ...rest] = prev;
            return [...rest, first];
        });
    };

    if (enableCarousel) {
        return (
            <Box
                className={className}
                position="relative"
                width="100%"
                height="clamp(40px, 9.5vw, 188px)"
                overflow="hidden"
                style={style}
                order={order}
                py={py}
                my={my}
            >
                <div
                    style={{
                        display: 'flex',
                        flexShrink: 0,
                        height: '100%',
                        transform: isAnimating ? 'translateX(-100vw)' : 'translateX(0px)',
                        transition: isAnimating ? `transform ${SLIDE_DURATION}ms linear` : 'none',
                        willChange: 'transform',
                    }}
                    onTransitionEnd={handleTransitionEnd}
                >
                    {orderedItems.map((item) => (
                        <div
                            key={item}
                            style={{
                                minWidth: '100vw',
                                height: '100%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            {SLOGAN_CONTENT}
                        </div>
                    ))}
                </div>
            </Box>
        );
    }

    // Static version
    return (
        <Box
            className={className}
            position="relative"
            width="100%"
            height="clamp(40px, 9.5vw, 188px)"
            display="flex"
            justifyContent="center"
            alignItems="center"
            style={style}
            order={order}
            py={py}
            my={my}
        >
            {SLOGAN_CONTENT}
        </Box>
    );
};

export default Slogan;
