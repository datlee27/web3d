import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Header from "./header";
import BlobCursor from "@hooks/blob-cursor";
import { HeaderColorProvider } from "@contexts/HeaderColorContext";

/**
 * Unified Layout component — source of truth for all pages.
 * Contains: BlobCursor, Header, and page content (Outlet).
 * Footer and ContactForm are kept inside each page's own container
 * because they rely on position:absolute within fixed-height wrappers.
 */
const Layout = () => {
    return (
        <HeaderColorProvider>
            <BlobCursor>
                <Box
                    as="div"
                    position="relative"
                    width="100%"
                    minH="100vh"
                    left="0px"
                    top="0px"
                    backgroundColor="transparent"
                    overflowX="hidden"
                >
                    <Header />
                    <Box as="main" width="100%">
                        <Outlet />
                    </Box>
                </Box>
            </BlobCursor>
        </HeaderColorProvider>
    );
};

export default Layout;
