import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const styles = {};

const colors = {
  bg: {
    main: "#fff",
  },
  text: {
    main: "#000",
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
  fontFamily: "Outfit",
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
      fontFamily: "Outfit",
      color: "text.primary",
    },
  },
  Input: {
    baseStyle: {
      field: {
        color: "text.main",
      },
    },
  },
  Textarea: {
    baseStyle: {
      color: "text.main",
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

const spacing = {
  space: {
    px: "1px",
    0.5: "0.125rem",
    1: "0.25rem",
    1.5: "0.375rem",
    2: "0.5rem",
    2.5: "0.625rem",
    3: "0.75rem",
    3.5: "0.875rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    10: "2.5rem",
    12: "3rem",
    14: "3.5rem",
    16: "4rem",
    20: "5rem",
    24: "6rem",
    28: "7rem",
    32: "8rem",
    36: "9rem",
    40: "10rem",
    44: "11rem",
    48: "12rem",
    52: "13rem",
    56: "14rem",
    60: "15rem",
    64: "16rem",
    72: "18rem",
    80: "20rem",
    96: "24rem",
  },
};

const darkTheme = extendTheme({
  config,
  styles,
  colors,
  fonts,
  components,
  spacing,
});

export default darkTheme;
