import { Text, type TextProps } from "@chakra-ui/react";

interface GradientTextProps extends Omit<
  TextProps,
  "bgGradient" | "bgClip" | "color"
> {
  children: React.ReactNode;
  reverse?: boolean; // Đảo ngược gradient từ cam sang kem thành kem sang cam
}

const GradientText = ({
  children,
  reverse = false,
  ...rest
}: GradientTextProps) => {
  const fontSize = rest.fontSize || "30px";
  const fontWeight = rest.fontWeight || "700";
  const lineHeight = rest.lineHeight || "100%";
  const gradient = reverse
    ? "linear(90deg, #FDE5CB 0%, #FF682A 100%)"
    : "linear(90deg, #FF682A 0%, #FDE5CB 100%)";

  return (
    <Text
      fontFamily="'Be Vietnam Pro'"
      fontWeight={fontWeight}
      fontSize={fontSize}
      lineHeight={lineHeight}
      bgGradient={gradient}
      bgClip="text"
      color="transparent"
      sx={{
        "-webkit-text-fill-color": "transparent",
      }}
      {...rest}
    >
      {children}
    </Text>
  );
};

export default GradientText;
