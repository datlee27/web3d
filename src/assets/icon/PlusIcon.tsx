import { Box } from "@chakra-ui/react";

// ── Plus / X icon dùng trong FAQ ─────────────────────────────────────────────
const PlusIcon = ({ isOpen }: { isOpen: boolean }) => (
    <Box
        as="svg"
        width={{ base: "16px", md: "35px" }} 
        height={{ base: "16px", md: "35px" }} 
        viewBox="0 0 35 35" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        transition="transform 0.3s ease"
        transform={isOpen ? 'rotate(45deg)' : 'rotate(0deg)'}
        flexShrink={0}
    >
        <path d="M0.75 17.25H33.75" stroke="#AAA9A9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17.25 33.75V0.75" stroke="#AAA9A9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </Box>
);

export default PlusIcon;

