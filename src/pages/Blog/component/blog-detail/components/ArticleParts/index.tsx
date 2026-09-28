import { Box, Text } from '@chakra-ui/react';
import { PARA_TEXT } from '../../../../../../assets/icon/styles';

// ── Heading dòng tiêu đề trong bài viết 
export const ArticleHeading = ({ text, order }: { text: string; order: number }) => (
    <Box width="100%" order={order} py="10px">
        <Text
            fontSize={{ base: "16px", md: "26px" }}
            lineHeight="1.3"
            fontWeight="bold"
            color="#FF682A"
        >
            {text}
        </Text>
    </Box>
);

// ── Khối 3 đoạn văn trong bài viết
export const ArticleParagraphBlock = ({ order }: { order: number }) => (
    <Box width="100%" order={order} mb="30px">
        {[0, 1, 2].map((i) => (
            <Text
                key={i}
                fontSize={{ base: "14px", md: "16px" }}
                lineHeight="1.5"
                fontWeight="normal"
                color="#000000"
                mb="10px"
            >
                {PARA_TEXT}
            </Text>
        ))}
    </Box>
);
