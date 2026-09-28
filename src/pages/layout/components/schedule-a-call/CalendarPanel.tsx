import { useState, useEffect } from 'react';
import { Box, VStack, Heading, Flex, Text, Grid, Image, HStack } from '@chakra-ui/react';
import { RiGlobalLine } from "react-icons/ri";
import arrowLeft from "@assets/icon/arrow-left.webp";
import arrowRight from "@assets/icon/arrow-right.webp";

interface CalendarPanelProps {
    onDateSelect: (date: Date) => void;
    selectedDate: Date | null;
    showBorder?: boolean;
    paddingTop?: string;   // ✅ Version 1: "104px", Version 2: "40px"
    isVersion1?: boolean;
}

const CalendarPanel = ({
    onDateSelect,
    selectedDate,
    showBorder = false,
    paddingTop = "40px",
    isVersion1 = false,
}: CalendarPanelProps) => {
    const [currentMonth, setCurrentMonth] = useState(new Date(2026, 1, 1));

    // ✅ Real-time clock
    const [currentTime, setCurrentTime] = useState(() => {
        const now = new Date();
        return `${now.getHours().toString().padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}`;
    });

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const h = now.getHours().toString().padStart(2, "0");
            const m = now.getMinutes().toString().padStart(2, "0");
            setCurrentTime(`${h}:${m}`);
        };
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    const days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

    const generateDates = (viewDate: Date) => {
        const year = viewDate.getFullYear();
        const month = viewDate.getMonth();
        const monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        let firstDay = new Date(year, month, 1).getDay();
        firstDay = firstDay === 0 ? 6 : firstDay - 1;

        const calendarDates: (number | string)[] = [];
        for (let i = 0; i < firstDay; i++) calendarDates.push('');
        for (let d = 1; d <= daysInMonth; d++) calendarDates.push(d);
        while (calendarDates.length < 42) calendarDates.push('');

        return { dates: calendarDates, label: `${monthNames[month]} ${year}` };
    };

    const { dates, label } = generateDates(currentMonth);

    const handlePrevMonth = () => {
        setCurrentMonth(prev => {
            const d = new Date(prev);
            d.setMonth(d.getMonth() - 1);
            return d;
        });
    };

    const handleNextMonth = () => {
        setCurrentMonth(prev => {
            const d = new Date(prev);
            d.setMonth(d.getMonth() + 1);
            return d;
        });
    };

    const handleDateClick = (date: number) => {
        onDateSelect(new Date(currentMonth.getFullYear(), currentMonth.getMonth(), date));
    };

    return (
        <Box
            flex={1}
            h="100%"
            position="relative"
            px={isVersion1 ? "0" : "clamp(30px, 5vw, 50px)"}
            pt={isVersion1 ? "20px" : paddingTop}
            pb="0"
            display="flex"
            flexDirection="column"
            bg="white"
            overflow="visible"
            borderRight={showBorder ? "1px solid" : "none"}
            borderColor="gray.100"
        >
            {/* Heading + Calendar */}
            <Heading
                fontFamily="'Be Vietnam Pro', sans-serif"
                fontWeight={700}
                fontSize="clamp(20px, 2.5vw, 28px)"
                color="#FF682A"
                mb={isVersion1 ? "28px" : "24px"}
                w={isVersion1 ? "500px" : "auto"}
                h={isVersion1 ? "56px" : "auto"}
                position="relative"
                left={isVersion1 ? "-9px" : "0"}
                display="flex"
                alignItems="center"
                opacity={1}
            >
                Choose a Date & Time
            </Heading>

            <VStack
                spacing={isVersion1 ? "20px" : "16px"}
                align="flex-start"
                w={isVersion1 ? "426px" : "100%"}
                maxW="426px"
                h={isVersion1 ? "294px" : "auto"}
                mx="auto"
            >
                {/* Thanh điều hướng tháng */}
                <Flex
                    w="320px"
                    maxW="320px"
                    h="32px"
                    alignItems="center"
                    justifyContent="space-between"
                    gap="20px"
                    mx="auto"
                >
                    <Box
                        as="button"
                        w="24px"
                        h="24px"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        bg="transparent"
                        cursor="pointer"
                        onClick={handlePrevMonth}
                        _hover={{ opacity: 0.7 }}
                        transition="all 0.2s"
                        border="none"
                        outline="none"
                        p={0}
                    >
                        <Image src={arrowLeft} alt="Prev" w="24px" h="24px" objectFit="contain" />
                    </Box>

                    <Text
                        fontFamily="'Be Vietnam Pro', sans-serif"
                        fontWeight={400}
                        fontSize="14px"
                        lineHeight="14px"
                        textAlign="center"
                        flex={1}
                        color="#1A1A1A"
                        userSelect="none"
                    >
                        {label}
                    </Text>

                    <Box
                        as="button"
                        w="24px"
                        h="24px"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        bg="transparent"
                        cursor="pointer"
                        onClick={handleNextMonth}
                        _hover={{ opacity: 0.7 }}
                        transition="all 0.2s"
                        border="none"
                        outline="none"
                        p={0}
                    >
                        <Image src={arrowRight} alt="Next" w="24px" h="24px" objectFit="contain" />
                    </Box>
                </Flex>

                {/* Grid calendar - 42 ô cố định */}
                <Grid templateColumns="repeat(7, 1fr)" w="100%" textAlign="center" gap="8px">
                    {days.map(day => (
                        <Text key={day} fontSize="11px" fontWeight={500} color="gray.500">{day}</Text>
                    ))}
                    {dates.map((date, idx) => {
                        if (!date) return <Box key={idx} h="32px" w="32px" mx="auto" />;

                        const isSelected = selectedDate &&
                            typeof date === 'number' &&
                            date === selectedDate.getDate() &&
                            currentMonth.getMonth() === selectedDate.getMonth() &&
                            currentMonth.getFullYear() === selectedDate.getFullYear();

                        return (
                            <Box
                                key={idx}
                                w="32px"
                                h="32px"
                                mx="auto"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                fontSize="13px"
                                fontWeight={500}
                                cursor="pointer"
                                bg={isSelected ? "#FF682A" : "transparent"}
                                color={isSelected ? "white" : "inherit"}
                                borderRadius="full"
                                onClick={() => handleDateClick(date as number)}
                                _hover={{
                                    bg: isSelected ? "#FF682A" : "gray.50",
                                    color: isSelected ? "white" : "#FF682A"
                                }}
                            >
                                {date}
                            </Box>
                        );
                    })}
                </Grid>
            </VStack>

            {/* ✅ Timezone - Real-time clock */}
            <Box
                position="absolute"
                top={isVersion1 ? "427px" : "427px"}
                left={isVersion1 ? "-9px" : "50%"}
                transform={isVersion1 ? "none" : "translateX(-50%)"}
                w={isVersion1 ? "378px" : "100%"}
                maxW={isVersion1 ? "378px" : "426px"}
                h={isVersion1 ? "68px" : "auto"}
                px="10px"
                opacity={1}
            >
                <VStack align="flex-start" spacing="4px">
                    <Text fontSize="12px" fontWeight={700} color="black">
                        Time zone
                    </Text>
                    <HStack spacing="8px" color="#1A1A1A">
                        <RiGlobalLine size={16} />
                        <Text as="span" fontSize="13px" fontWeight={500} color="#1A1A1A" letterSpacing="normal">
                            Indochina Time ({currentTime})
                        </Text>
                        <Text as="span" color="#C4C4C4" fontSize="13px" fontWeight={500}>
                            Auto
                        </Text>
                    </HStack>
                </VStack>
            </Box>
        </Box>
    );
};

export default CalendarPanel;