import { useState } from 'react';
import {
    Box,
    VStack,
    Heading,
    Input,
    Textarea,
    Button,
    FormControl,
    FormLabel,
    Text,
} from '@chakra-ui/react';

interface DetailsFormPanelProps {
    onSchedule?: (data: { name: string; email: string; guests: string[]; notes: string }) => void;
}

const inputStyles = {
    fontFamily: "'Be Vietnam Pro', sans-serif",
    fontSize: "14px",
    fontWeight: 400,
    color: "#1A1A1A",
    border: "1px solid #CCCCCC",
    borderRadius: "8px",
    h: "44px",
    px: "12px",
    _focus: {
        borderColor: "#FF682A",
        boxShadow: "0 0 0 1px #FF682A",
        outline: "none",
    },
    _placeholder: { color: "#AAAAAA" },
};

const DetailsFormPanel = ({ onSchedule }: DetailsFormPanelProps) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [notes, setNotes] = useState('');
    const [guests, setGuests] = useState<string[]>([]);
    const [showGuestInput, setShowGuestInput] = useState(false);
    const [guestEmail, setGuestEmail] = useState('');

    const handleAddGuest = () => {
        if (!showGuestInput) {
            setShowGuestInput(true);
            return;
        }
        if (guestEmail.trim()) {
            setGuests(prev => [...prev, guestEmail.trim()]);
            setGuestEmail('');
            setShowGuestInput(false);
        }
    };

    const handleSchedule = () => {
        if (onSchedule) {
            onSchedule({ name, email, guests, notes });
        }
    };

    return (
        <Box
            flex={1}
            h="100%"
            bg="white"
            px={{ base: "24px", md: "48px" }}
            pt={{ base: "48px", md: "58px" }}
            pb="32px"
            overflowY="auto"
            css={{
                '&::-webkit-scrollbar': { width: '4px' },
                '&::-webkit-scrollbar-track': { background: 'transparent' },
                '&::-webkit-scrollbar-thumb': { background: '#eee', borderRadius: '4px' },
            }}
        >
            <Heading
                fontFamily="'Be Vietnam Pro', sans-serif"
                fontWeight={700}
                fontSize={{ base: "24px", md: "32px" }}
                color="#FF682A"
                mb="32px"
                letterSpacing="-0.5px"
            >
                Enter  Details
            </Heading>

            <VStack spacing="20px" align="stretch">
                {/* Name */}
                <FormControl>
                    <Box position="relative">
                        <FormLabel
                            position="absolute"
                            top="-10px"
                            left="10px"
                            bg="white"
                            px="4px"
                            fontSize="12px"
                            color="#FF5822"
                            fontFamily="'Be Vietnam Pro', sans-serif"
                            zIndex={2}
                            mb={0}
                        >
                            Name *
                        </FormLabel>
                        <Input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder=""
                            {...inputStyles}
                        />
                    </Box>
                </FormControl>

                {/* Email */}
                <FormControl>
                    <Box position="relative">
                        <FormLabel
                            position="absolute"
                            top="-10px"
                            left="10px"
                            bg="white"
                            px="4px"
                            fontSize="12px"
                            color="#FF5822"
                            fontFamily="'Be Vietnam Pro', sans-serif"
                            zIndex={2}
                            mb={0}
                        >
                            Email *
                        </FormLabel>
                        <Input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder=""
                            {...inputStyles}
                        />
                    </Box>
                </FormControl>

                {/* Guest input (conditional) */}
                {showGuestInput && (
                    <FormControl>
                        <Box position="relative">
                            <FormLabel
                                position="absolute"
                                top="-10px"
                                left="10px"
                                bg="white"
                                px="4px"
                                fontSize="12px"
                                color="#888888"
                                fontFamily="'Be Vietnam Pro', sans-serif"
                                zIndex={2}
                                mb={0}
                            >
                                Guest Email
                            </FormLabel>
                            <Input
                                type="email"
                                value={guestEmail}
                                onChange={(e) => setGuestEmail(e.target.value)}
                                placeholder=""
                                {...inputStyles}
                                onKeyDown={(e) => { if (e.key === 'Enter') handleAddGuest(); }}
                            />
                        </Box>
                    </FormControl>
                )}

                {/* Existing guests */}
                {guests.map((g, i) => (
                    <Text
                        key={i}
                        fontFamily="'Be Vietnam Pro', sans-serif"
                        fontSize="13px"
                        color="#FF682A"
                    >
                        ✓ {g}
                    </Text>
                ))}

                {/* Add Guests button */}
                <Box>
                    <Button
                        variant="outline"
                        borderColor="#FF682A"
                        color="#FF682A"
                        borderRadius="24px"
                        fontSize="12px"
                        fontWeight={500}
                        fontFamily="'Be Vietnam Pro', sans-serif"
                        w="98px"
                        h="32px"
                        px="12px"
                        justifyContent="flex-start"
                        _hover={{ bg: "#FFF5F2" }}
                        onClick={handleAddGuest}
                    >
                        Add Guests
                    </Button>
                </Box>

                {/* Notes */}
                <FormControl>
                    <Text
                        fontFamily="'Be Vietnam Pro', sans-serif"
                        fontSize="13px"
                        color="#FF682A"
                        mb="10px"
                        fontWeight={500}
                    >
                        Please share  anything that will help prepare for our meeting
                    </Text>
                    <Textarea
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        border="1px solid #CCCCCC"
                        borderRadius="8px"
                        resize="none"
                        h="120px"
                        fontFamily="'Be Vietnam Pro', sans-serif"
                        fontSize="14px"
                        color="#1A1A1A"
                        _focus={{
                            borderColor: "#FF682A",
                            boxShadow: "0 0 0 1px #FF682A",
                            outline: "none",
                        }}
                    />
                </FormControl>

                {/* Schedule event button */}
                <Box>
                    <Button
                        bg="#FF682A"
                        color="white"
                        borderRadius="24px"
                        fontSize="12px"
                        fontWeight={600}
                        fontFamily="'Be Vietnam Pro', sans-serif"
                        w="112px"
                        h="32px"
                        px="12px"
                        justifyContent="flex-start"
                        _hover={{ bg: "#e55a20" }}
                        onClick={handleSchedule}
                    >
                        Schedule event
                    </Button>
                </Box>
            </VStack>
        </Box>
    );
};

export default DetailsFormPanel;
