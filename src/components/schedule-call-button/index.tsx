import React, { useState } from 'react';
import { Button, Text, Portal, useDisclosure } from '@chakra-ui/react';
import ScheduleACallV1 from '@pages/layout/components/schedule_a_call';
import ScheduleACallV2 from '@pages/layout/components/schedule_a_call_2';

interface ScheduleCallButtonProps {
    label?: string;
    onClick?: () => void;
    style?: React.CSSProperties;
    className?: string;
}

const ScheduleCallButton = ({
    label = 'Schedule a call',
    onClick,
    style,
    className,
}: ScheduleCallButtonProps) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [activeVersion, setActiveVersion] = useState<1 | 2>(1);
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    const handleClick = () => {
        setActiveVersion(1);
        setSelectedDate(null);
        onOpen();
        if (onClick) onClick();
    };

    const handleDateSelected = (date: Date) => {
        setSelectedDate(date);
        setActiveVersion(2);
    };

    const handleClose = () => {
        onClose();
        // Delay resetting version to allow modal to close smoothly
        setTimeout(() => {
            setActiveVersion(1);
            setSelectedDate(null);
        }, 300);
    };

    return (
        <>
            <Portal>
                <Button
                    onClick={handleClick}
                    className={className}
                    position="fixed"
                    display="flex"
                    flexDirection="row"
                    justifyContent="center"
                    alignItems="center"
                    gap="10px"
                    p="10px"
                    minW="unset"
                    minH="unset"
                    w={{ base: '116px', md: '140px' }}
                    h={{ base: '28px', md: '36px' }}
                    right={{ base: '20px', md: '50px', lg: '80px', xl: '120px' }}
                    bottom="50px"
                    bg="#FF682A"
                    boxShadow="0px 2px 4px rgba(0, 0, 0, 0.25)"
                    borderRadius="20px"
                    border="none"
                    cursor="pointer"
                    zIndex={9999}
                    _hover={{
                        bg: '#e55a24',
                        transform: 'scale(1.05)',
                        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
                    }}
                    transition="all 0.2s ease-in-out"
                    style={style}
                >
                    <Text
                        fontFamily="'Be Vietnam Pro', sans-serif"
                        fontStyle="normal"
                        fontWeight={600}
                        fontSize={{ base: '12px', md: '16px' }}
                        lineHeight={{ base: '15px', md: '20px' }}
                        color="#FFFFFF"
                    >
                        {label}
                    </Text>
                </Button>
            </Portal>

            {activeVersion === 1 ? (
                <ScheduleACallV1 
                    isOpen={isOpen} 
                    onClose={handleClose} 
                    onDateSelect={handleDateSelected}
                />
            ) : (
                <ScheduleACallV2 
                    isOpen={isOpen} 
                    onClose={handleClose} 
                    initialDate={selectedDate}
                />
            )}
        </>
    );
};

export default ScheduleCallButton;
