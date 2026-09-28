import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const styles = {};

const customTheme = extendTheme({
  breakpoints: {
    base: "0px",
    sm: "480px",
    custom: "600px",
    md: "768px",
    lg: "992px",
    xl: "1280px",
    "2xl": "1536px",
  },
});

const colors = {
  layout: {},
  background: {},
  icon: {},
  main: {},
  upload: {
    hover: "#d9d9d9",
  },
  dark: {},
  grey: {},
  bg: {
    main: "white",
  },
  border: {},
  text: {
    main: "#fff",
  },
};

const fonts = {
  heading: `'Inter', sans-serif`,
  body: `'Inter', sans-serif`,
  nunito: `"Nunito", sans-serif`,
  outfit: `"Outfit", sans-serif`,
};

const ButtonStyle = {
  width: "100%",
  height: "4.8rem",
  fontFamily: `"Outfit", sans-serif`,
  fontSize: "1.6rem",
  fontWeight: "400",
  overflow: "hidden",
  borderRadius: ".8rem",
};

const components = {
  Button: {
    variants: {
      solid: (props: {
        colorScheme: string;
        width?: string;
        height?: string;
        color?: string;
      }) => ({
        ...ButtonStyle,
        width: props.width || ButtonStyle.width,
        height: props.height || ButtonStyle.height,
        bg: `${props.colorScheme}`,
        color: "white",
        border: `1px solid ${props.colorScheme}`,
        transition: "all 0.3s ease-in-out",

        _hover: {
          color: "#BEC2CA",
          background: "white",
          border: "1px solid #BEC2CA",
        },
      }),
      outline: (props: {
        colorScheme: string;
        width?: string;
        height?: string;
        color?: string;
        borderColor?: string;
      }) => ({
        ...ButtonStyle,
        width: props.width || ButtonStyle.width,
        height: props.height || ButtonStyle.height,
        bg: "white",
        color: props.color || props.colorScheme,
        border: `1px solid ${props.borderColor || props.colorScheme}`,
        transition: "all 0.3s ease-in-out",

        _hover: {
          color: "white",
          bg: props.colorScheme,
          border: `1px solid ${props.colorScheme}`,
        },
      }),
    },
  },
  Text: {
    baseStyle: {
      color: "text.main",
    },
  },
  Select: {
    sizes: {
      sm: {
        field: {
          height: "4rem",
          fontSize: "1.6rem",
          fontFamily: '"Inter", sans-serif',
          rounded: ".8rem",
        },
      },
    },

    defaultProps: {
      size: "sm",
    },
  },
  Switch: {
    baseStyle: {
      track: {
        width: "4rem",
        height: "2.4rem",
        bg: "#BEC2CA",
        _checked: {
          bg: "#5CA647",
        },
        "&[data-checked] .chakra-switch__thumb": {
          transform: "translateX(1.7rem)",
        },
      },

      thumb: {
        width: "2.4rem",
        height: "2.4rem",
      },
    },
  },
};

export const defaultTheme = extendTheme({
  config,
  styles,
  colors,
  fonts,
  components,
  customTheme,
});
