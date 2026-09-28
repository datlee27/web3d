import { useState } from "react";
import { Box, Flex, Text, Collapse, VStack, Link } from "@chakra-ui/react";
import PlusIcon from "@assets/icon/PlusIcon";
import { FAQ_ANSWER } from "@assets/icon/styles";

export interface FaqItem {
  id: number;
  question: string;
  answer?: string;
}

const DEFAULT_FAQ_ITEMS: FaqItem[] = [
  { id: 0, question: "What are 3D visuals?" },
  { id: 1, question: "Are 3D visuals suitable for all industries?" },
  { id: 2, question: "Why are 3D visuals more effective than 2D images?" },
  { id: 3, question: "Can 3D visuals improve marketing performance?" },
  { id: 4, question: "How are 3D visuals used in digital experiences?" },
  { id: 5, question: "How long does it take to create 3D visuals?" },
];

interface FaqSectionProps {
  top?: string;
  items?: FaqItem[];
  className?: string;
}

const FaqSection = ({ top, items = DEFAULT_FAQ_ITEMS, className }: FaqSectionProps) => {
  const [openIds, setOpenIds] = useState<number[]>([]);
  const [isViewAll, setIsViewAll] = useState(false);

  const toggleId = (id: number) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );
  };

  const displayedItems = isViewAll ? items : items.slice(0, 5);

  return (
    <Box
      position={top ? "absolute" : "relative"}
      top={top}
      display="flex"
      flexDirection="column"
      alignItems="center"
      w="full"
      gap={{ base: "0px", md: "30px" }}
      className={className}
    >
      {/* FAQ label */}
      <Flex
        justify="center"
        align="center"
        py="10px"
        w={{ base: "full", md: "532px" }}
        h="68px"
      >
        <Text
          fontFamily="'Be Vietnam Pro', sans-serif"
          fontWeight={700}
          fontSize={{ base: "20px", md: "32px" }}
          lineHeight="40px"
          bgGradient="linear(to-r, #DC602D 0%, #FDE5CB 100%)"
          bgClip="text"
        >
          FAQ
        </Text>
      </Flex>

      {/* Items List */}
      <VStack spacing={{ base: "20px", md: "40px" }} w="full" align="stretch">
        <VStack spacing={0} w="full" align="stretch">
          {displayedItems.map((item) => {
            const isOpen = openIds.includes(item.id);
            return (
              <Box
                key={item.id}
                w="full"
                borderBottom="1px solid"
                borderColor="gray.100"
              >
                {/* Question row */}
                <Flex
                  onClick={() => toggleId(item.id)}
                  cursor="pointer"
                  py={{ base: "15px", md: "20px" }}
                  px={{ base: "0px", md: "0px" }}
                  align="center"
                  justify="center"
                  gap="15px"
                >
                  <Flex
                    align="center"
                    justify="center"
                    gap={{ base: "6px", md: "12px" }}
                    w="full"
                  >
                    <Text
                      fontFamily="'Be Vietnam Pro', sans-serif"
                      fontWeight={700}
                      fontSize={{ base: "12px", md: "28px", lg: "40px" }}
                      lineHeight="1.2"
                      color="black"
                      textAlign="center"
                      maxW={{ base: "calc(100% - 30px)", md: "calc(100% - 56px)" }}
                    >
                      {item.question}
                    </Text>

                    <Flex
                      w={{ base: "24px", md: "44px" }}
                      h={{ base: "24px", md: "44px" }}
                      align="center"
                      justify="center"
                      flexShrink={0}
                    >
                      <PlusIcon isOpen={isOpen} />
                    </Flex>
                  </Flex>
                </Flex>

                {/* Answer block */}
                <Collapse in={isOpen} animateOpacity>
                  <Flex
                    justify="center"
                    pb="30px"
                    px="20px"
                  >
                    <Text
                      maxW="800px"
                      fontFamily="'Be Vietnam Pro', sans-serif"
                      fontWeight={400}
                      fontSize={{ base: "12px", md: "16px" }}
                      lineHeight="1.6"
                      color="black"
                      textAlign="center"
                    >
                      {item.answer || FAQ_ANSWER}
                    </Text>
                  </Flex>
                </Collapse>
              </Box>
            );
          })}
        </VStack>

        {/* View All */}
        {items.length > 5 && (
          <Flex justify="center" py="10px">
            <Link
              onClick={() => setIsViewAll(!isViewAll)}
              fontFamily="'Be Vietnam Pro', sans-serif"
              fontSize={{ base: "8px", md: "14px" }}
              textDecoration="underline"
              color="#949494"
              _hover={{ color: "black" }}
              cursor="pointer"
            >
              {isViewAll ? "Show Less" : "View All"}
            </Link>
          </Flex>
        )}
      </VStack>
    </Box>
  );
};

export default FaqSection;
