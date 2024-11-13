import About from '../components/About';
import BuyingSelling from '../components/BuyingSelling';
import Expertise from '../components/Expertise';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Luxury from '../components/Luxury';
import Market from '../components/Market';
import Marketing from '../components/Marketing';
import ScrollToTopButton from '../components/ScrollToTopButton';
import Work from '../components/Work';
import { useState } from 'react';

const Services = () => {
    const [scrollBackwards, setScrollBackwards] = useState(false);
    const [scrollAppointment, setScrollAppointment] = useState(false);

    return (
        <div>
            <Header
                scrollBackwards={scrollBackwards}
                setScrollBackwards={setScrollBackwards}
            />
            <Hero
                scrollBackwards={scrollBackwards}
                scrollAppointment={scrollAppointment}
                setScrollAppointment={setScrollAppointment}
            />
            <Marketing />
            <Expertise />
            <BuyingSelling />
            <About />
            <Market />
            <Luxury />
            <Work />
            <ScrollToTopButton />
            <Footer />
        </div>
    );
};
export default Services;
