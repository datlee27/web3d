import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Provider } from "react-redux";
import { persistor, store } from "@redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { ChakraProvider } from "@chakra-ui/react";
import { useDarkModeContext } from "@contexts/dark-mode-context/useDarkModeContext";
import darkTheme from "@themes/dark-theme";
import { defaultTheme } from "@themes/defaut-theme";
import RouterContainer from "@routes/router-container";
import SmoothScroll from "@components/common/SmoothScroll";

function App() {
  const { isDarkMode } = useDarkModeContext();

  return (
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ChakraProvider theme={isDarkMode ? darkTheme : defaultTheme}>
            <SmoothScroll>
              <RouterContainer />
            </SmoothScroll>
          </ChakraProvider>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
