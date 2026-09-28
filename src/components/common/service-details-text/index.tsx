import { Flex, Text, Box, Container } from "@chakra-ui/react";

export interface ServiceDetailSection {
  title: string;
  paragraphs: number;
}

const DEFAULT_SECTIONS: ServiceDetailSection[] = Array.from({ length: 7 }).map(
  () => ({
    title: "Question?",
    paragraphs: 3,
  }),
);

interface ServiceDetailsTextProps {
  sections?: ServiceDetailSection[];
}

const ServiceDetailsText = ({
  sections = DEFAULT_SECTIONS,
}: ServiceDetailsTextProps) => {
  // Paragraph block
  const renderParagraphs = (count: number) => (
    <Flex direction="column" align="flex-start" p="0" w="100%" maxW="830px">
      {Array.from({ length: count }).map((_, i) => (
        <Flex
          key={i}
          direction="row"
          align="center"
          p="0"
          gap="10px"
          w="100%"
          minH="68px"
          py={2}
        >
          <Text
            fontFamily="'Be Vietnam Pro', sans-serif"
            fontWeight="400"
            fontSize="16px"
            lineHeight="20px"
            color="#000000"
            w="100%"
          >
            Dolor sit amet, consectetur adipiscing elit. In nibh justo, commodo
            eget sapien at, consectetur viverra ipsum. Vivamus faucibus orci sed
            purus tincidunt, vel dictum turpis sagittis. Vestibulum laoreet
            varius ante, et finibus metus porta eu. Curabitur ultrices venenatis
            leo eu.
          </Text>
        </Flex>
      ))}
    </Flex>
  );

  return (
    <Container maxW="container.xl" py={{ base: 10, md: 20 }}>
      <Flex direction="column" align="center" p="0" gap="88px" width="100%">
        {/* Content Container */}
        <Flex direction="column" align="center" p="0" w="100%" gap={10}>
          {sections.map((section, idx) => (
            <Box key={idx} width="100%" maxW="830px">
              {/* Title block */}
              <Flex
                direction="row"
                align="center"
                py="10px"
                px="0"
                gap="10px"
                w="100%"
              >
                <Text
                  fontFamily="'Be Vietnam Pro', sans-serif"
                  fontWeight="700"
                  fontSize={{ base: "22px", md: "28px" }}
                  lineHeight="1.3"
                  color="#000000"
                >
                  {section.title}
                </Text>
              </Flex>
              {/* Paragraphs block */}
              {renderParagraphs(section.paragraphs)}
            </Box>
          ))}
        </Flex>

        {/* Show less — center wrapper */}
        <Flex w="100%" justify="center" align="center">
          {/* Frame 6 — Show less button */}
          <Flex
            direction="row"
            justify="center"
            align="center"
            p="10px"
            gap="10px"
            cursor="pointer"
          >
            <Text
              fontFamily="'Be Vietnam Pro', sans-serif"
              fontStyle="normal"
              fontWeight="600"
              fontSize="14px"
              lineHeight="18px"
              color="#000000"
            >
              Show less
            </Text>
            <Box
              w="24px"
              h="24px"
              transform="matrix(1, 0, 0, -1, 0, 0)"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.92 8.95L13.4 15.47C12.63 16.24 11.37 16.24 10.6 15.47L4.08 8.95"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
};

export default ServiceDetailsText;
