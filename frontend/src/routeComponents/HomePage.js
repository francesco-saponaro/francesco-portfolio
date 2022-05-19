import React, { useState, useRef } from 'react'

// Component imports
import { Header, Skills, Testimonial, Projects, IntroName } from '../container';
import { HomeNavbar } from '../components/Navbar';

// Utils imports
import ScrollBar from '../utils/ScrollBar'

// Framer motion
import { motion } from 'framer-motion';

// Framer motion animation params
const animationParams = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0, transition: { duration: .5 } },
    key: 'homepage'
}

// Homepage component
const Home = () => {

    const [introDisplay, setIntroDisplay] = useState(true);

    setTimeout(() => {
        setIntroDisplay(false)
    }, 3100)

    // Refs needed to scroll into views
    const homeRef = useRef();
    const projectsRef = useRef();
    const testimonialsRef = useRef();

    // Custom scrollbar
    ScrollBar();

    return (
        <>
        {introDisplay 
        ?
        <IntroName />
        :
        <>
        {/* Custom scrollbar */}
        <div className='scroll__path' />
        <div className='scroll__bar' />

        {/* Home page nav */}
        <HomeNavbar homeRef={homeRef} 
                    projectsRef={projectsRef} 
                    testimonialsRef={testimonialsRef} 
        />
        
        <motion.div className='app__container' {...animationParams}>
            <Header homeRef={homeRef} />
            <Skills />
            <Projects projectsRef={projectsRef} />
            <Testimonial testimonialsRef={testimonialsRef} />
        </motion.div>   
        </>
        } 
        </>
    )
}

export default Home