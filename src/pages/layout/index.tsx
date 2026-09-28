import { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import HomeHeader from "./components/header";
import Footer from "./components/footer";
import ContactForm from "./components/contact";
import { Box } from "@chakra-ui/react";
import BlobCursor from "@hooks/blob-cursor";

const Layout = () => {
  const location = useLocation();
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.history.scrollRestoration = "manual";
    if (boxRef.current) {
      boxRef.current.scrollTo(0, 0);
    }
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Box ref={boxRef} width={"100%"} height={"100%"} minH={"100dvh"} overflow={"auto"} bgColor={"bg.main"}>
      <HomeHeader />
      <BlobCursor>
        <Box position="relative" zIndex={1}>
          <Outlet />
          <Box position="relative" zIndex={2} bg="transparent" w="100%" pt={{ base: "20px" }}>
            <ContactForm />
            <Footer />
          </Box>
        </Box>
      </BlobCursor>
    </Box>
  );
};

export default Layout;
