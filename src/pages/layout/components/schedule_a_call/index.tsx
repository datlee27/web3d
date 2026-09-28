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
import ImagePanelV1 from '../schedule-a-call/ImagePanelVersion1';
import CalendarPanel from '../schedule-a-call/CalendarPanel';

interface ScheduleACallProps {
    isOpen: boolean;
    onClose: () => void;
    onDateSelect?: (date: Date) => void;
}

const ScheduleACall = ({ isOpen, onClose, onDateSelect }: ScheduleACallProps) => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    const handleDateSelect = (date: Date) => {
        setSelectedDate(date);
        if (onDateSelect) onDateSelect(date);
    };

    const handleClose = () => {
        setSelectedDate(null);
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={handleClose} isCentered size="6xl">
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
                    <Flex direction={{ base: "column", md: "row" }} h="100%" gap="40px">
                        {/* Box ảnh: 530x530 (mặc định trong ImagePanelV1) */}
                        <ImagePanelV1 />
                        
                        {/* Lịch: top 104px theo design */}
                        <CalendarPanel
                            onDateSelect={handleDateSelect}
                            selectedDate={selectedDate}
                            showBorder={false}
                            paddingTop="104px"  // ✅ Đúng theo design version 1
                            isVersion1={true}
                        />
                    </Flex>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default ScheduleACall;
