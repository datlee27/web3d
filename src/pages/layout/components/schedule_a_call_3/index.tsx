import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    IconButton,
    Flex,
} from '@chakra-ui/react';
import { IoCloseOutline, IoArrowBackCircleOutline } from "react-icons/io5";
import ImagePanelV1 from '../schedule-a-call/ImagePanelVersion1';
import DetailsFormPanel from '../schedule-a-call/DetailsFormPanel';

interface ScheduleACall3Props {
    isOpen: boolean;
    onClose: () => void;
    onBack?: () => void;
    selectedDate?: Date | null;
    selectedTime?: string | null;
}

const ScheduleACall3 = ({
    isOpen,
    onClose,
    onBack,
    selectedDate = null,
    selectedTime = null,
}: ScheduleACall3Props) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered size="6xl">
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
                {/* Back button — top-left over the image */}
                {onBack && (
                    <IconButton
                        aria-label="Back"
                        icon={<IoArrowBackCircleOutline size={36} />}
                        position="absolute"
                        left="16px"
                        top="16px"
                        variant="unstyled"
                        onClick={onBack}
                        zIndex={10}
                        color="white"
                        _hover={{ opacity: 0.75 }}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                    />
                )}

                {/* Close button — top-right */}
                <IconButton
                    aria-label="Close"
                    icon={<IoCloseOutline size={24} />}
                    position="absolute"
                    right="20px"
                    top="20px"
                    variant="unstyled"
                    onClick={onClose}
                    zIndex={10}
                    _hover={{ opacity: 0.7 }}
                />

                <ModalBody p={0}>
                    {/* 50/50 split */}
                    <Flex direction={{ base: "column", md: "row" }} h="100%">
                        <ImagePanelV1
                            w={{ base: "100%", md: "50%" }}
                            h={{ base: "300px", md: "100%" }}
                            minW={{ md: "0" }}
                            selectedDate={selectedDate}
                            selectedTime={selectedTime}
                        />
                        <DetailsFormPanel
                            onSchedule={(data) => {
                                console.log("Scheduled:", data);
                                onClose();
                            }}
                        />
                    </Flex>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default ScheduleACall3;
