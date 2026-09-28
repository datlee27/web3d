import { Box, Flex, Grid, Text, GridItem } from "@chakra-ui/react";
import GradientText from "@components/gradient-text";

interface OutstandingServicesProps {
  title: React.ReactNode;
  columns: string[][]; // Array of columns, each containing an array of paragraphs
}

const OutstandingServices = ({ title, columns }: OutstandingServicesProps) => {
  return (
    <Box
      position="relative"
      w="full"
      py={{ base: "80px", md: "120px" }}
      bg="transparent"
      overflow="hidden"
    >
      <Flex
        maxW="1440px"
        mx="auto"
        px={{ base: "40px", md: "80px" }}
        direction={{ base: "column", xl: "row" }}
        align="flex-start"
        gap={{ base: "40px", lg: "100px" }}
        position="relative"
        zIndex={1}
      >
        {/* Left Side: Title */}
        <Box flex="none" w={{ base: "full", xl: "500px" }}>
          <GradientText
            fontSize={{ base: "48px", md: "64px", xl: "72px" }}
            fontWeight="800"
            lineHeight="1.1"
          >
            {title}
          </GradientText>
        </Box>

        {/* Right Side: Description Columns */}
        <Grid
          flex="1"
          templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
          gap={{ base: "30px", md: "40px" }}
          w="full"
        >
          {columns.slice(0, 2).map((col, colIdx) => (
            <GridItem key={colIdx}>
              <Flex direction="column" gap="30px">
                {col.map((para, paraIdx) => (
                  <Text
                    key={paraIdx}
                    fontFamily="'Be Vietnam Pro'"
                    fontSize={{ base: "14px", xl: "16px" }}
                    lineHeight="24px"
                    color="#000000"
                    transition="all 0.3s ease"
                    _hover={{ opacity: 0.8 }}
                  >
                    {para}
                  </Text>
                ))}
              </Flex>
            </GridItem>
          ))}
        </Grid>
      </Flex>
    </Box>
  );
};

export default OutstandingServices;
