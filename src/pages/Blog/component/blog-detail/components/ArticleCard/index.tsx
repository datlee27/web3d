import { Flex, Text, Box } from '@chakra-ui/react';
import HoverImage from '../../../hover-image';

interface ArticleCardProps {
    img: string;
    title: string;
    date: string;
    order: number;
}

const ArticleCard = ({ img, title, date, order }: ArticleCardProps) => (
    <Flex
        flexDirection="column"
        alignItems="flex-start"
        width="100%"
        flex={1}
        order={order}
    >
        <Box width="100%" position="relative" mb="15px">
            <HoverImage src={img} alt={title} width="100%" />
            <Flex
                position="absolute"
                bottom="20px"
                right="20px"
                alignItems="center"
                gap="10px"
                pointerEvents="none"
                zIndex={2}
            >
                <Text
                    fontSize={{ base: "14px", md: "20px" }}
                    lineHeight="1.2"
                    fontWeight="medium"
                    color="#FFFFFF"
                >
                    Read more
                </Text>
                <svg
                    width="20" height="20" viewBox="0 0 20 20"
                    fill="none" xmlns="http://www.w3.org/2000/svg"
                    style={{ transform: 'rotate(180deg)' }}
                >
                    <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </Flex>
        </Box>

        <Flex
            flexDirection="column"
            alignItems="flex-start"
            width="100%"
        >
            <Text
                fontSize={{ base: "20px", md: "26px", lg: "32px" }}
                lineHeight="1.2"
                fontWeight="bold"
                mb="10px"
                style={{
                    background: 'linear-gradient(90deg, #FF682A 0%, #FDE5CB 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                }}
            >
                {title}
            </Text>

            <Text
                fontSize={{ base: "14px", md: "18px", lg: "22px" }}
                lineHeight="1.2"
                textTransform="capitalize"
                color="#000000"
            >
                {date}
            </Text>
        </Flex>
    </Flex>
);

export default ArticleCard;
