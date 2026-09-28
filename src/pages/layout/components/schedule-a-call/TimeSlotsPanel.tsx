import { Box, VStack, Text, Button } from '@chakra-ui/react';

interface TimeSlotsPanelProps {
    selectedDate: Date | null;
    onTimeSelect?: (time: string) => void;
}

const TimeSlotsPanel = ({ selectedDate, onTimeSelect }: TimeSlotsPanelProps) => {
    const timeSlots = [
        "8:00", "9:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00", "17:00"
    ];

    const getDayName = (date: Date | null) => {
        if (!date) return "";
        const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        return dayNames[date.getDay()];
    };

    return (
        <Box
            w="174px"
            minW="174px"
            h="100%"
            pt="103px"
            px="10px"
            display="flex"
            flexDirection="column"
            bg="white"
            flexShrink={0}
            overflowY="auto"
            animation="fadeIn 0.3s ease-in-out"
        >
            <Text
                fontFamily="'Be Vietnam Pro', sans-serif"
                fontWeight={400}
                fontSize="clamp(12px, 1.2vw, 14px)"
                color="#1A1A1A"
                mb="15px"
                textAlign="center"
            >
                {getDayName(selectedDate)}, {selectedDate?.toLocaleString('en-US', { month: 'long' })} {selectedDate?.getDate()}, {selectedDate?.getFullYear()}
            </Text>

            <VStack
                spacing="10px"
                overflowY="auto"
                pr="5px"
                css={{
                    '&::-webkit-scrollbar': { width: '4px' },
                    '&::-webkit-scrollbar-track': { background: 'transparent' },
                    '&::-webkit-scrollbar-thumb': { background: '#eee', borderRadius: '4px' },
                }}
            >
                {timeSlots.map((time) => (
                    <Button
                        key={time}
                        w="100%"
                        h="40px"
                        variant="outline"
                        borderColor="#FFAF8E"
                        color="#FFAF8E"
                        fontSize="14px"
                        fontWeight={500}
                        borderRadius="4px"
                        _hover={{ bg: "#FFF5F2", borderColor: "#FF682A", color: "#FF682A" }}
                        onClick={() => onTimeSelect?.(time)}
                    >
                        {time}
                    </Button>
                ))}
            </VStack>
        </Box>
    );
};

export default TimeSlotsPanel;