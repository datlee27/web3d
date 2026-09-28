import { Box, Container } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

// Portfolio item type
interface PortfolioItem {
  id: number;
  title: string;
  image: string;
  tags: string[];
}

interface PortfolioGridProps {
  bg?: string;
  items: PortfolioItem[];
}

// Single portfolio card - no overlays, just clean image
const PortfolioCard = ({
  item,
  height = "420px",
}: {
  item: PortfolioItem;
  height?: string;
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/work/${item.id}`);
  };

  return (
    <Box
      onClick={handleClick}
      h={height}
      borderRadius="0"
      position="relative"
      overflow="hidden"
      cursor="pointer"
      // Each card grows on hover via the parent row's CSS
      transition="flex 0.5s cubic-bezier(0.4, 0, 0.2, 1)"
      flex="1 1 0%"
      _hover={{
        flex: "1.8 1 0%",
      }}
    >
      {/* Background image - zooms slightly on hover */}
      <Box
        position="absolute"
        inset={0}
        bgImage={`url(${item.image})`}
        bgSize="cover"
        bgPosition="center"
        transition="transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)"
        _groupHover={{}}
        sx={{
          "[data-card]:hover &": {
            transform: "scale(1.05)",
          },
        }}
      />
    </Box>
  );
};

// A row wrapper that uses flexbox so children can expand/shrink on hover
const PortfolioRow = ({
  items,
  height,
  flexRatios,
  hoverFlex = 4,
}: {
  items: PortfolioItem[];
  height: any;
  flexRatios?: number[];
  hoverFlex?: number;
}) => {
  const baseH = typeof height === "string" ? { md: height } : height;

  const hoverH: any = {};
  if (typeof height === "string") {
    hoverH.md = `calc(${height} + 150px)`;
  } else {
    for (const key in height) {
      hoverH[key] = `calc(${height[key]} + 150px)`;
    }
  }

  return (
    <Box
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      gap="10px"
      mb="10px"
      h={{ base: "auto", ...baseH }}
      role="group"
      transition="height 0.8s cubic-bezier(0.4, 0, 0.2, 1)"
      _hover={{
        h: { base: "auto", ...hoverH },
      }}
    >
      {items.map((item, idx) => {
        const baseFlex = flexRatios ? flexRatios[idx] || 1 : 1;
        return (
          <Box
            key={item.id}
            data-card
            flex={{ base: "none", md: `${baseFlex} 1 0%` }}
            h={{ base: "250px", md: "full" }}
            transition="flex 0.8s cubic-bezier(0.4, 0, 0.2, 1)"
            overflow="hidden"
            cursor="pointer"
            position="relative"
            onClick={() => {
              window.location.href = `/work/${item.id}`;
            }}
            _hover={{
              flex: { base: "none", md: `${hoverFlex} 1 0%` },
            }}
          >
            <Box
              position="absolute"
              inset={0}
              bgImage={`url(${item.image})`}
              bgSize="cover"
              bgPosition="center"
            />
          </Box>
        );
      })}
    </Box>
  );
};

const PortfolioGrid = ({ items, ...props }: PortfolioGridProps) => {
  const row1Items = items.slice(0, 2);
  const row2Items = items.slice(2, 4);
  const row3Items = items.slice(4, 7);
  const row4Items = items.slice(7, 9);

  return (
    <Box w="full" {...props}>
      <Container
        maxW={{ base: "container.xl", md: "100%", lg: "container.xl" }}
        px={{ base: 4, md: 0, lg: 8 }}
        py={12}
      >
        {/* Row 1: 3/5, 2/5 */}
        {row1Items.length > 0 && (
          <PortfolioRow
            items={row1Items}
            height={{ md: "420px", lg: "588px" }}
            flexRatios={[3, 2]}
            hoverFlex={6}
          />
        )}

        {/* Row 2: 2/5, 3/5 */}
        {row2Items.length > 0 && (
          <PortfolioRow
            items={row2Items}
            height={{ md: "420px", lg: "588px" }}
            flexRatios={[2, 3]}
            hoverFlex={6}
          />
        )}

        {/* Row 3: 3 images */}
        {row3Items.length > 0 && (
          <PortfolioRow
            items={row3Items}
            height={{ md: "420px", lg: "588px" }}
          />
        )}

        {/* Row 4: 2 images */}
        {row4Items.length > 0 && (
          <PortfolioRow
            items={row4Items}
            height={{ md: "420px", lg: "588px" }}
            hoverFlex={6}
          />
        )}
      </Container>
    </Box>
  );
};

export default PortfolioGrid;
export { PortfolioCard };
export type { PortfolioItem };
