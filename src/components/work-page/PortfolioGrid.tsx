import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  HStack,
  VStack,
  Image,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  tags: string[];
  path: string;
}

interface PortfolioGridProps {
  items: PortfolioItem[];
}

const PortfolioCard = ({
  item,
  aspectRatio,
  index = 0,
}: {
  item: PortfolioItem;
  aspectRatio: any;
  index?: number;
}) => {
  const navigate = useNavigate();

  return (
    <Box
      as={motion.div}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 } as any}
      position="relative"
      w="100%"
      aspectRatio={aspectRatio}
      borderRadius="0"
      overflow="hidden"
      cursor="pointer"
      role="group"
      onClick={() => navigate(item.path)}
    >
      {/* Image with scale on hover */}
      <Box
        as={motion.div}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] } as any}
        w="100%"
        h="100%"
        position="relative"
      >
        <Image
          src={item.image}
          alt={item.title}
          w="100%"
          h="100%"
          objectFit="cover"
        />
      </Box>

      {/* Bottom gradient */}
      <Box
        position="absolute"
        inset={0}
        bgGradient="linear(to-t, blackAlpha.700 0%, transparent 60%)"
        opacity={0.6}
        transition="opacity 0.4s ease"
        _groupHover={{ opacity: 0 }}
        zIndex={1}
      />

      {/* Blur overlay */}
      <Box
        position="absolute"
        inset={0}
        bg="rgba(160, 160, 160, 0.45)"
        backdropFilter="blur(6px)"
        opacity={0}
        transition="opacity 0.4s ease"
        _groupHover={{ opacity: 1 }}
        zIndex={2}
      />

      {/* "view project" */}
      {/* Desktop: 24px/1680px=1.43vw | iPad~768: ~11px | Laptop~1024: ~15px */}
      <Flex
        position="absolute"
        inset={0}
        align="center"
        justify="center"
        opacity={0}
        transition="opacity 0.4s ease"
        _groupHover={{ opacity: 1 }}
        zIndex={3}
        pointerEvents="none"
      >
        <Text
          color="white"
          fontSize={{ base: "12px", md: "13px", lg: "16px", xl: "clamp(13px, 1.43vw, 24px)" }}
          fontWeight="500"
          letterSpacing="0.04em"
          fontFamily="'Be Vietnam Pro', sans-serif"
        >
          view project
        </Text>
      </Flex>

      {/* Bottom content — title & tags */}
      {/* bottom/left: desktop 32px=1.9vw | laptop ~20px | ipad ~14px */}
      <VStack
        position="absolute"
        bottom={{ base: "12px", md: "14px", lg: "18px", xl: "clamp(12px, 1.9vw, 32px)" }}
        left={{ base: "12px", md: "14px", lg: "18px", xl: "clamp(12px, 1.9vw, 32px)" }}
        align="flex-start"
        spacing={{ base: "4px", md: "4px", lg: "6px", xl: "clamp(4px, 0.48vw, 8px)" }}
        color="white"
        pointerEvents="none"
        zIndex={4}
      >
        {/* title: desktop 26px | laptop ~18px | ipad ~14px */}
        <Heading
          fontFamily="'Be Vietnam Pro', sans-serif"
          fontSize={{ base: "13px", md: "14px", lg: "18px", xl: "clamp(13px, 1.55vw, 26px)" }}
          fontWeight="700"
          lineHeight="1"
          letterSpacing="0"
        >
          {item.title}
        </Heading>

        {/* tag buttons: desktop h32/px15/fs16 | laptop h24/px10/fs12 | ipad h20/px8/fs11 */}
        <HStack
          gap={{ base: "4px", md: "4px", lg: "6px", xl: "clamp(4px, 0.6vw, 10px)" }}
          flexWrap="nowrap"
        >
          {item.tags.map((tag, tagIndex) => (
            <Button
              key={tagIndex}
              variant="outline"
              borderColor="white"
              borderWidth="1px"
              color="white"
              borderRadius="40px"
              px={{ base: "8px", md: "8px", lg: "10px", xl: "clamp(8px, 0.89vw, 15px)" }}
              h={{ base: "18px", md: "20px", lg: "24px", xl: "clamp(18px, 1.9vw, 32px)" }}
              fontSize={{ base: "10px", md: "11px", lg: "12px", xl: "clamp(10px, 0.95vw, 16px)" }}
              fontWeight="500"
              lineHeight="1"
              fontFamily="'Be Vietnam Pro', sans-serif"
              bg="transparent"
              display="flex"
              alignItems="center"
              justifyContent="center"
              _hover={{ bg: "whiteAlpha.200" }}
            >
              {tag}
            </Button>
          ))}
        </HStack>
      </VStack>
    </Box>
  );
};

const PortfolioGrid = ({ items }: PortfolioGridProps) => {
  const row1Items = items.slice(0, 2);
  const row2Items = items.slice(2, 4);
  const row3Items = items.slice(4, 7);
  const row4Items = items.slice(7, 9);
  const row5Items = items.slice(9, 11);
  const row6Items = items.slice(11, 14);

  // Aspect ratios — content area 1680px, giữ nguyên tỉ lệ gốc
  const row1Ratios = ["687/588", "972/588"];
  const row2Ratio = "830/548";
  const row3Ratios = ["547/566", "546/566", "547/566"];
  const row4Ratios = ["688/588", "972/588"];
  const row5Ratio = "830/570";
  const row6Ratios = ["547/588", "548/588", "547/588"];

  // gap: desktop 20-21px | laptop 14px | ipad 10px
  const gap2col = { base: "8px", md: "10px", lg: "14px", xl: "21px" };
  const gap3col = { base: "8px", md: "10px", lg: "14px", xl: "20px" };
  const mb = { base: "8px", md: "10px", lg: "14px", xl: "20px" };

  return (
    <Container
      maxW="1920px"
      px={{ base: "16px", md: "32px", lg: "60px", xl: "120px" }}
      py={0}
    >
      {/* Row 1: 687fr / 972fr */}
      {row1Items.length > 0 && (
        <Grid templateColumns={{ base: "1fr", md: "687fr 972fr" }} gap={gap2col} mb={mb}>
          {row1Items.map((item, idx) => (
            <PortfolioCard key={item.id} item={item} aspectRatio={{ base: "4/3", md: row1Ratios[idx] }} index={idx} />
          ))}
        </Grid>
      )}

      {/* Row 2: equal 2 cols */}
      {row2Items.length > 0 && (
        <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={gap2col} mb={mb}>
          {row2Items.map((item, idx) => (
            <PortfolioCard key={item.id} item={item} aspectRatio={{ base: "4/3", md: row2Ratio }} index={idx + 2} />
          ))}
        </Grid>
      )}

      {/* Row 3: 547fr / 546fr / 547fr */}
      {row3Items.length > 0 && (
        <Grid templateColumns={{ base: "1fr", md: "547fr 546fr 547fr" }} gap={gap3col} mb={mb}>
          {row3Items.map((item, idx) => (
            <PortfolioCard key={item.id} item={item} aspectRatio={{ base: "4/3", md: row3Ratios[idx] }} index={idx + 4} />
          ))}
        </Grid>
      )}

      {/* Row 4: 688fr / 972fr */}
      {row4Items.length > 0 && (
        <Grid templateColumns={{ base: "1fr", md: "688fr 972fr" }} gap={gap2col} mb={mb}>
          {row4Items.map((item, idx) => (
            <PortfolioCard key={item.id} item={item} aspectRatio={{ base: "4/3", md: row4Ratios[idx] }} index={idx + 7} />
          ))}
        </Grid>
      )}

      {/* Row 5: equal 2 cols */}
      {row5Items.length > 0 && (
        <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={gap2col} mb={mb}>
          {row5Items.map((item, idx) => (
            <PortfolioCard key={item.id} item={item} aspectRatio={{ base: "4/3", md: row5Ratio }} index={idx + 9} />
          ))}
        </Grid>
      )}

      {/* Row 6: 547fr / 548fr / 547fr */}
      {row6Items.length > 0 && (
        <Grid templateColumns={{ base: "1fr", md: "547fr 548fr 547fr" }} gap={gap3col} mb={mb}>
          {row6Items.map((item, idx) => (
            <PortfolioCard key={item.id} item={item} aspectRatio={{ base: "4/3", md: row6Ratios[idx] }} index={idx + 11} />
          ))}
        </Grid>
      )}

      {/* Show more */}
      <Flex justify="center" mt={{ base: 6, md: 8, xl: 10 }} mb={{ base: 6, md: 8, xl: 10 }}>
        <Button
          variant="outline"
          borderColor="black"
          color="black"
          borderRadius="40px"
          h={{ base: "32px", md: "34px", lg: "36px", xl: "40px" }}
          w={{ base: "110px", md: "120px", lg: "130px", xl: "140px" }}
          fontSize={{ base: "13px", md: "13px", lg: "14px", xl: "16px" }}
          fontWeight="500"
          fontFamily="'Be Vietnam Pro', sans-serif"
          display="flex"
          alignItems="center"
          justifyContent="center"
          _hover={{ bg: "gray.100" }}
        >
          Show more
        </Button>
      </Flex>
    </Container>
  );
};

export default PortfolioGrid;
export { PortfolioCard };
export type { PortfolioItem };