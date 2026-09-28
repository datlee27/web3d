import { Flex } from '@chakra-ui/react';
import TeamSection from '../AboutUs/components/about-section/components/team-section';
import Slogan from '../AboutUs/components/our-service/components/slogan';
import Hero from './hero';
import ContactInfo from './contact-info';

const Contacts = () => {
    return (
        <Flex
            flexDirection="column"
            width="100%"
            bg="transparent"
            gap={{ base: '10px', md: '80px', lg: '100px' }}
        >
            <Hero />
            <TeamSection enableCarousel={true} />

            <Slogan order={{ base: 2, lg: 1 }} my={{ base: '40px', lg: '0px' }} />
            <ContactInfo order={{ base: 1, lg: 2 }} />


        </Flex>
    );
};

export default Contacts;
