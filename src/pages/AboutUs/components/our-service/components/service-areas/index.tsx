import { Box, Flex, Heading, Text, Image } from '@chakra-ui/react';
import LogoStudioService from '@assets/aboutus/service-logo-studio.png';
import ServiceVector from '@assets/aboutus/service_vector.png';
import ServicePicBottom from '@assets/aboutus/service_pic_bottom.png';

import Slogan from '../slogan';
import ScrollAnimationWrapper from '@components/animation/scroll-animation-wrapper';
import { useBlobCursor } from '@hooks/blob-cursor';

const gradientHeading = {
  background: 'linear-gradient(90.48deg, #FF682A 26.14%, #FDE5CB 99.59%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  color: 'transparent',
};

const ServiceAreas = () => {
  const { triggerRotation } = useBlobCursor();

  return (
    <Box position="relative" width="100%">

      {/* YOU IMAGINE - WE CREATE (Slogan) */}
      <Slogan enableCarousel={true} />

      {/* Heading "Service areas and Expertise" */}
      <Box
        px={{ base: '4%', md: '6%', lg: '13.64583%' }}
        pt={{ base: '40px', md: '60px', lg: '80px' }}
        pb={{ base: '20px', md: '30px', lg: '40px' }}
      >
        <ScrollAnimationWrapper
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%' }}
        >
          <Box width={{ base: '80%', lg: '65%' }}>
            <Heading
              as="h2"
              fontSize={{ base: '36px', md: '52px', lg: '64px', xl: '80px' }}
              lineHeight={{ base: '1.2', xl: '101px' }}
              fontWeight="bold"
              style={gradientHeading}
            >
              Service areas <br />
              and Expertise
            </Heading>
          </Box>
          {/* Logo element */}
          <Box
            width={{ base: '36px', lg: '56px' }}
            height={{ base: '38px', lg: '60px' }}
            cursor="pointer"
            onMouseEnter={() => triggerRotation()}
            flexShrink={0}
          >
            <Image src={LogoStudioService} alt="3D Archtech" width="100%" height="100%" objectFit="contain" />
          </Box>
        </ScrollAnimationWrapper>
      </Box>

      {/* Content Text */}
      <Box
        px={{ base: '4%', md: '6%', lg: '13.64583%' }}
        pb={{ base: '40px', md: '60px', lg: '80px' }}
        width={{ base: '100%', lg: '56%' }}
      >
        <ScrollAnimationWrapper delay={0.1} style={{ width: '100%' }}>
          <Flex
            width="100%"
            alignItems={{ base: 'flex-start', lg: 'center' }}
            gap={{ base: '12px', lg: '20px' }}
            direction={{ base: 'column', sm: 'row' }}
            mb={{ base: '24px', lg: '40px' }}
          >
            <Box flexShrink={0} width={{ base: '70px', lg: '121px' }} height={{ base: '52px', lg: '91px' }}>
              <Image src={ServiceVector} alt="Service Vector" width="100%" height="100%" objectFit="contain" />
            </Box>
            <Box>
              <Text
                fontSize={{ base: '15px', md: '18px', lg: '22px', xl: '26px' }}
                lineHeight={{ base: '1.5', xl: '24px' }}
                color="black"
              >
                Our mission is consectetur adipiscing elit. In nibh justo, commodo eget sapien at, consectetur viverra ipsum.
              </Text>
            </Box>
          </Flex>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper delay={0.2} style={{ width: '100%' }}>
          <Text
            fontSize={{ base: '22px', md: '30px', lg: '38px', xl: '48px' }}
            lineHeight={{ base: '1.4', xl: '61px' }}
            fontWeight="bold"
            color="#AAA9A9"
          >
            We recognize the critical role that outstanding digital materials play in the field of development industry, and we are committed to crafting solutions that elevate each project's success.
          </Text>
        </ScrollAnimationWrapper>
      </Box>

      {/* Background Image (full-width) */}
      <Box
        position="relative"
        width="100%"
        height={{ base: '220px', sm: '320px', md: '420px', lg: '550px' }}
        overflow="hidden"
      >
        <ScrollAnimationWrapper
          delay={0.2}
          initial={{ opacity: 0, scale: 1.2 }}
          whileInView={{ opacity: 1, scale: 1 }}
          style={{ width: '100%', height: '100%' }}
        >
          <Image src={ServicePicBottom} alt="Service Background" width="100%" height="100%" objectFit="cover" />
        </ScrollAnimationWrapper>
      </Box>
    </Box>
  );
};

export default ServiceAreas;
