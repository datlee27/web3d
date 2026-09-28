import { Box, Flex } from "@chakra-ui/react";
import PortfolioGrid, {
  type PortfolioItem,
} from "../../../home-page/components/portfolio-grid";
import GradientText from "@components/gradient-text";

interface ServicePortfolioProps {
  title: React.ReactNode;
  items: PortfolioItem[];
}

const ServicePortfolio = ({ title, items }: ServicePortfolioProps) => {
  return (
    <Box py="100px" width="full">
      {/* Frame 21 (Title Section) */}
      <Flex
        ml={{ base: "40px", md: "80px", xl: "262px" }}
        maxW="688px"
        flexDirection="row"
        alignItems="center"
        padding="10px 0px"
        gap="10px"
        zIndex={10}
      >
        <Box width="full">
          <GradientText
            fontSize={{ base: "36px", md: "48px" }}
            lineHeight="1.2"
            fontWeight="700"
          >
            {title}
          </GradientText>
        </Box>
      </Flex>

      {/* Group 31 (Portfolio Grid Container) */}
      <Box px={{ base: "20px", md: "120px" }} mt="50px" zIndex={10}>
        <PortfolioGrid items={items} bg="transparent" />
      </Box>
    </Box>
  );
};

export default ServicePortfolio;
