import { useState } from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    IconButton,
    Flex,
} from '@chakra-ui/react';
import { IoCloseOutline } from "react-icons/io5";
import ImagePanel from '../schedule-a-call/ImagePanelVersion2';
import CalendarPanel from '../schedule-a-call/CalendarPanel';
import TimeSlotsPanel from '../schedule-a-call/TimeSlotsPanel';
import ScheduleACall3 from '../schedule_a_call_3';

interface ScheduleACallProps {
    isOpen: boolean;
    onClose: () => void;
    initialDate?: Date | null;
}

const ScheduleACall = ({ isOpen, onClose, initialDate = null }: ScheduleACallProps) => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(initialDate);
    const [showTimeSlots, setShowTimeSlots] = useState(!!initialDate);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const [showDetails, setShowDetails] = useState(false);

    const handleDateSelect = (date: Date) => {
        setSelectedDate(date);
        setShowTimeSlots(true);
    };

    const handleTimeSelect = (time: string) => {
        setSelectedTime(time);
        setShowDetails(true);
    };

    const handleClose = () => {
        setSelectedDate(null);
        setShowTimeSlots(false);
        setSelectedTime(null);
        setShowDetails(false);
        onClose();
    };

    const handleBackFromDetails = () => {
        setShowDetails(false);
        setSelectedTime(null);
    };

    return (
        <>
            <Modal isOpen={isOpen && !showDetails} onClose={handleClose} isCentered size="6xl">
                <ModalOverlay backdropFilter="blur(8px)" bg="blackAlpha.600" />
                <ModalContent
                    maxW="1082px"
                    h={{ base: "auto", md: "618px" }}
                    borderRadius="0"
                    overflow="hidden"
                    bg="white"
                    position="relative"
                    transition="none"
                >
                    <IconButton
                        aria-label="Close"
                        icon={<IoCloseOutline size={24} />}
                        position="absolute"
                        right="20px"
                        top="20px"
                        variant="unstyled"
                        onClick={handleClose}
                        zIndex={10}
                        _hover={{ opacity: 0.7 }}
                    />
                    <ModalBody p={0}>
                        <Flex direction={{ base: "column", md: "row" }} h="100%">
                            <ImagePanel
                                w={{ base: "100%", md: "345px" }}
                                h={{ base: "300px", md: "530px" }}
                                minW={{ md: "345px" }}
                            />
                            <CalendarPanel
                                onDateSelect={handleDateSelect}
                                selectedDate={selectedDate}
                                showBorder={showTimeSlots}
                            />
                            {showTimeSlots && (
                                <TimeSlotsPanel
                                    selectedDate={selectedDate}
                                    onTimeSelect={handleTimeSelect}
                                />
                            )}
                        </Flex>
                    </ModalBody>
                </ModalContent>
            </Modal>

            <ScheduleACall3
                isOpen={showDetails}
                onClose={handleClose}
                onBack={handleBackFromDetails}
                selectedDate={selectedDate}
                selectedTime={selectedTime}
            />
        </>
    );
};

export default ScheduleACall;