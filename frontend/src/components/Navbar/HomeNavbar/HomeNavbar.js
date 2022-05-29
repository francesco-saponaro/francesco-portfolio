import React, { useState } from 'react'

// Component imports
import HomeMainNav from './HomeMainNav'
import HomeSideMenu from './HomeSideMenu'

// Utils imports
import CheckScrolledToDiv from '../../../utils/CheckScrolledToDiv';
import CheckScrollPosition from '../../../utils/CheckScrollPosition';

// Styles imports
import '../Navbar.scss'
import { motion } from 'framer-motion';

// Framer motion animation params
const animationParams = {
    whileInView: { opacity: [0, 1] },
    transition: { delay: .3},
    exit: { opacity: 0, transition: { duration: .5 } }
}

// Navbar component
const HomeNavbar = ({ homeRef, projectsRef, testimonialsRef, introDisplay }) => {
    
    // States
    const [scrollPosition, setScrollPosition] = useState(0);
    const [menuToggle, setMenuToggle] = useState(false);
    const [largeInfoToggle, setLargeInfoToggle] = useState(false);
    const [smallInfoToggle, setSmallInfoToggle] = useState(false);
    const [activeSection, setActiveSection] = useState('home-active');

    // Function setting scroll position state (needed for navbar color style changes)
    CheckScrollPosition(setScrollPosition)

    // Function checking when scrolling over section and setting state to its active class
    CheckScrolledToDiv(setActiveSection)

    return (
        // Navbar 
        <>
        {!introDisplay &&
        <motion.nav {...animationParams}>
            {/* Main nav and nav links visible on large screens */}
            <HomeMainNav scrollPosition={scrollPosition}
                        setMenuToggle={setMenuToggle}
                        largeInfoToggle={largeInfoToggle}
                        setLargeInfoToggle={setLargeInfoToggle}
                        activeSection={activeSection}
                        setActiveSection={setActiveSection}
                        homeRef={homeRef}
                        projectsRef={projectsRef}
                        testimonialsRef ={testimonialsRef }
            />

            {/* Side menu - visible on medium screens */}
            <HomeSideMenu menuToggle={menuToggle}
                        setMenuToggle={setMenuToggle}
                        smallInfoToggle={smallInfoToggle}
                        setSmallInfoToggle={setSmallInfoToggle}
                        activeSection={activeSection}
                        setActiveSection={setActiveSection}
                        homeRef={homeRef}
                        projectsRef={projectsRef}
                        testimonialsRef ={testimonialsRef }
            />
        </motion.nav>
        }
        </>
    )
}

export default HomeNavbar