import { Flex, Text } from '@chakra-ui/react';

interface ContactInfoProps {
    order?: any;
    py?: any;
    my?: any;
}

const ContactInfo = ({ order, py, my }: ContactInfoProps) => {
    return (
        <Flex
            flexDirection={{ base: 'column', lg: 'row' }}
            alignItems="flex-start"
            gap={{ base: '0px', lg: '162px' }}
            width="100%"
            maxW="1440px"
            mx="auto"
            px={{ base: "20px", md: "40px", lg: "40px" }}
            zIndex={10}
            order={order}
            py={py}
            my={my}
        >
            {/* Left Column - Phone and Email */}
            <Flex
                flexDirection="column"
                alignItems="flex-start"
                gap={{ base: "0px", lg: "40px" }}
                flex="1"
            >

                {/* Phone Section */}
                <Flex flexDirection="column" alignItems="flex-start" width="100%">
                    <Flex alignItems="center" py="10px" gap="10px" width="100%">
                        <Text
                            fontFamily="'Be Vietnam Pro', sans-serif"
                            fontWeight={400}
                            fontSize={{ base: '18px', sm: '22px', md: "28px", lg: '32px', xl: "36px" }}
                            lineHeight="1.2"
                            textTransform="capitalize"
                            color="#000000"
                            m={0}
                        >
                            (+84) 83 846 2620
                        </Text>
                    </Flex>
                    <Flex alignItems="center" py="10px" gap="10px">
                        <Text
                            fontFamily="'Be Vietnam Pro', sans-serif"
                            fontWeight={500}
                            fontSize={{ base: '14px', md: '16px', lg: '18px' }}
                            lineHeight="1.2"
                            color="#444444"
                            m={0}
                        >
                            Phone
                        </Text>
                    </Flex>
                </Flex>

                {/* Email Section */}
                <Flex flexDirection="column" alignItems="flex-start" width="100%">
                    <Flex alignItems="center" py="10px" gap="10px" width="100%">
                        <Text
                            fontFamily="'Be Vietnam Pro', sans-serif"
                            fontWeight={400}
                            fontSize={{ base: '18px', sm: '22px', md: "28px", lg: '32px', xl: "36px" }}
                            lineHeight="1.2"
                            textTransform="lowercase"
                            color="#000000"
                            m={0}
                        >
                            brendontran@3darchtech.com
                        </Text>
                    </Flex>
                    <Flex alignItems="center" py="10px" gap="10px">
                        <Text
                            fontFamily="'Be Vietnam Pro', sans-serif"
                            fontWeight={500}
                            fontSize={{ base: '14px', md: '16px', lg: '18px' }}
                            lineHeight="1.2"
                            color="#444444"
                            m={0}
                        >
                            Mail
                        </Text>
                    </Flex>
                </Flex>
            </Flex>

            {/* Right Column - Location */}
            <Flex
                flexDirection="column"
                alignItems="flex-start"
                gap={{ base: "0px", lg: "29px" }}
                flex="1"
            >

                <Flex
                    alignItems="center"
                    py="10px"
                    gap="10px"
                    width="112px"
                    order={{ base: 2, lg: 1 }}
                >
                    <Text
                        fontFamily="'Be Vietnam Pro', sans-serif"
                        fontWeight={500}
                        fontSize={{ base: '14px', md: '16px', lg: '18px' }}
                        lineHeight="1.2"
                        color="#444444"
                        m={0}
                    >
                        Location
                    </Text>
                </Flex>


                <Flex
                    flexDirection="column"
                    alignItems="flex-start"
                    gap="10px"
                    flex="1"
                    order={{ base: 1, lg: 2 }}
                >
                    <Flex alignItems="center" py="10px" gap="10px" width="100%">
                        <Text
                            fontFamily="'Be Vietnam Pro', sans-serif"
                            fontWeight={400}
                            fontSize={{ base: '18px', sm: '22px', md: "28px", lg: '32px', xl: "36px" }}
                            lineHeight="1.2"
                            textTransform="lowercase"
                            color="#000000"
                            m={0}
                        >
                            48-50 Nguyen Phuoc Lan, Hoa Xuan, Cam Le, Da Nang, <br />Viet nam
                        </Text>
                    </Flex>
                </Flex>

            </Flex>
        </Flex>
    );
};

export default ContactInfo;
