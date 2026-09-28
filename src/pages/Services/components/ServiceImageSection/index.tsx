import { Box, Image } from "@chakra-ui/react";

interface ServiceImageSectionProps {
  imageSrc: string;
}

const ServiceImageSection = ({ imageSrc }: ServiceImageSectionProps) => {
  return (
    <Box
      width="100%"
      maxHeight="900px"
      overflow="hidden"
      sx={{
        aspectRatio: "16 / 9" /* Thay 16/9 bằng tỉ lệ W/H của ảnh trên Figma */,
      }}
    >
      <Image
        src={imageSrc}
        alt="Service Image"
        width="100%"
        height="100%"
        objectFit="cover"
      />
    </Box>
  );
};

export default ServiceImageSection;
