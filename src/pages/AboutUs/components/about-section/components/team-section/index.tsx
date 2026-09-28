import { Box, Flex, Image, Text, Heading, useBreakpointValue } from '@chakra-ui/react';
import datAva from '@assets/aboutus/ava_dat.jpg';
import quangAva from '@assets/aboutus/ava_quang.jpg';
import tanAva from '@assets/aboutus/ava_tan.jpg';
import thanhAva from '@assets/aboutus/ava_thanh.jpg';
import benAva from '@assets/aboutus/ava_ben.jpg';
import ScheduleCallButton from '@components/schedule-call-button';

import { useEffect, useState } from "react";

interface TeamMemberProps {
  bg: string;
  name: string;
  title: string;
  image: string;
  leftPercent?: string;
  style?: React.CSSProperties;
}

const TeamMember = ({ leftPercent, bg, name, title, image, style }: TeamMemberProps) => {
  const combinedStyle: React.CSSProperties = {
    position: leftPercent ? 'absolute' : 'relative',
    left: leftPercent || 'auto',
    top: '0px',
    width: '22.03125%',
    height: '100%',
    background: bg,
    overflow: 'hidden',
    flex: leftPercent ? 'none' : '0 0 22.03125%',
    ...style,
  };

  return (
    <Box style={combinedStyle}>
      {/* Photo */}
      <Box position="absolute" inset={0}>
        <Image
          src={image}
          alt={name}
          width="100%"
          height="100%"
          objectFit="cover"
          objectPosition="top"
        />
      </Box>

      {/* Name & Title overlay */}
      <Flex
        position="absolute"
        width="86.05%"
        height="auto"
        left="50%"
        transform="translateX(-50%)"
        bottom="clamp(10px, 2vw, 20px)"
        flexDirection="column"
        alignItems="flex-end"
        gap="clamp(2px, 0.4vw, 6px)"
        zIndex={10}
      >
        <Text
          fontSize="clamp(10px, 2vw, 30px)"
          lineHeight="1.2"
          fontWeight="semibold"
          color="white"
          textAlign="right"
        >
          {name}
        </Text>
        <Heading
          as="h3"
          fontSize="clamp(8px, 1.3vw, 19px)"
          lineHeight="1.2"
          fontWeight="medium"
          color="white"
          textAlign="right"
        >
          {title}
        </Heading>
      </Flex>
    </Box>
  );
};

interface TeamSectionProps {
  style?: React.CSSProperties;
  enableCarousel?: boolean;
  memberWidthPercent?: number;
}

const MEMBERS_DATA = [
  { name: "Le Nguyen Quang Tan", title: "Chief Production Officer", bg: "#FDE5CB", image: tanAva, id: 'tan' },
  { name: "Nguyen Tien Dat", title: "Chief Technology Officer", bg: "#FFD8B7", image: datAva, id: 'dat' },
  { name: "Nguyen Hong Quang", title: "Creative Director", bg: "#FFBE9A", image: quangAva, id: 'quang' },
  { name: "Tran Minh Thanh", title: "Chief Executive Officer", bg: "#FF9E76", image: thanhAva, id: 'thanh' },
  { name: "Ben", title: "Product Owner", bg: "#FF9E76", image: benAva, id: 'ben' },
];

const STATIC_POSITIONS = [
  "-1.71875%",
  "20.20833%",
  "42.23958%",
  "64.27083%",
  "86.27083%",
];

const TeamSection = ({
  style,
  enableCarousel = false,
  memberWidthPercent,
}: TeamSectionProps) => {
  const [orderedMembers, setOrderedMembers] = useState(MEMBERS_DATA);
  const [isAnimating, setIsAnimating] = useState(false);
  const isMobile = useBreakpointValue({ base: true, sm: false }) ?? false;

  const SLIDE_DURATION = 2000;
  const CAROUSEL_CARD_WIDTH = 21.58;
  const BASE_OFFSET = 0;

  useEffect(() => {
    if (!enableCarousel) return;
    const timer = setTimeout(() => {
      setIsAnimating(true);
    }, isMobile ? 1200 : 800);
    return () => clearTimeout(timer);
  }, [enableCarousel, orderedMembers, isMobile]);

  const handleTransitionEnd = () => {
    if (!enableCarousel || !isAnimating) return;
    setIsAnimating(false);
    setOrderedMembers(prev => {
      const [first, ...rest] = prev;
      return [...rest, first];
    });
  };

  const displayMembers = enableCarousel
    ? [
      ...orderedMembers,
      { ...orderedMembers[0], id: `${orderedMembers[0].id}-buffer` },
    ]
    : orderedMembers;

  const mobileCardWidthPercent = 100 / displayMembers.length;

  if (isMobile && enableCarousel) {
    return (
      <Box
        position="relative"
        width="100%"
        mt="40px"
        height="312px"
        style={style}
      >
        <Box width="100%" height="312px" overflow="hidden">
          <Box
            display="flex"
            width={`${displayMembers.length * 100}%`}
            height="100%"
            style={{
              transform: isAnimating
                ? `translateX(-${mobileCardWidthPercent}%)`
                : 'translateX(0%)',
              transition: isAnimating
                ? `transform ${SLIDE_DURATION}ms ease-out`
                : 'none',
              willChange: 'transform',
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {displayMembers.map((member) => (
              <Box
                key={member.id}
                position="relative"
                flex={`0 0 ${mobileCardWidthPercent}%`}
                width={`${mobileCardWidthPercent}%`}
                height="312px"
                background={member.bg}
                overflow="hidden"
              >
                <Box position="absolute" inset={0}>
                  <Image
                    src={member.image}
                    alt={member.name}
                    width="100%"
                    height="100%"
                    objectFit="cover"
                    objectPosition="top"
                  />
                </Box>
                <Flex
                  position="absolute"
                  left="34px"
                  bottom="20px"
                  width="240px"
                  flexDirection="column"
                  alignItems="flex-start"
                  gap="2px"
                  zIndex={10}
                >
                  <Text
                    fontFamily="'Be Vietnam Pro', sans-serif"
                    fontWeight={600}
                    fontSize="16px"
                    lineHeight="20px"
                    color="white"
                  >
                    {member.name}
                  </Text>
                  <Heading
                    as="h3"
                    fontFamily="'Be Vietnam Pro', sans-serif"
                    fontWeight={500}
                    fontSize="10px"
                    lineHeight="13px"
                    color="white"
                  >
                    {member.title}
                  </Heading>
                </Flex>
              </Box>
            ))}
          </Box>
        </Box>
        <ScheduleCallButton />
      </Box>
    );
  }

  if (enableCarousel) {
    return (
      <Box
        position="relative"
        width="100%"
        mt={{ base: '40px', md: '60px', lg: '80px' }}
        height="clamp(160px, 28vw, 532px)"
        style={style}
      >
        <Box position="relative" width={{ base: '100%', lg: '86.30208%' }} height="100%" overflow="hidden">
          <Box width="115.87206%" height="100%">
            <Box
              display="flex"
              flexWrap="nowrap"
              width="100%"
              height="100%"
              gap={0}
              style={{
                transform: isAnimating
                  ? `translateX(${BASE_OFFSET - CAROUSEL_CARD_WIDTH}%)`
                  : `translateX(${BASE_OFFSET}%)`,
                transition: isAnimating
                  ? `transform ${SLIDE_DURATION}ms ease-out`
                  : 'none',
                willChange: 'transform',
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {displayMembers.map((member) => (
                <TeamMember
                  key={member.id}
                  bg={member.bg}
                  name={member.name}
                  title={member.title}
                  image={member.image}
                  style={{
                    position: 'relative',
                    flex: `0 0 ${CAROUSEL_CARD_WIDTH}%`,
                    flexShrink: 0,
                    width: `${CAROUSEL_CARD_WIDTH}%`,
                    margin: 0,
                    padding: 0,
                    height: '100%',
                  }}
                />
              ))}
            </Box>
          </Box>
        </Box>
        <ScheduleCallButton />
      </Box>
    );
  }

  // Static Mode (Contact Page)
  const cardWidthPercent = memberWidthPercent ?? 22.03125;
  const positions = memberWidthPercent
    ? MEMBERS_DATA.map((_, i) => `${i * memberWidthPercent}%`)
    : STATIC_POSITIONS;

  return (
    <Box
      position="relative"
      width="100%"
      mt={{ base: '40px', md: '60px', lg: '80px' }}
      height="clamp(160px, 28vw, 532px)"
      style={style}
    >
      {MEMBERS_DATA.map((member, index) => (
        <TeamMember
          key={member.id}
          {...member}
          leftPercent={positions[index]}
          style={{ width: `${cardWidthPercent}%`, height: '100%' }}
        />
      ))}
      <ScheduleCallButton />
    </Box>
  );
};

export default TeamSection;
