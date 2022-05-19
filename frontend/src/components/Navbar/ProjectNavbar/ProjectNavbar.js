import React, { useState } from 'react'

// Component imports
import ProjectMainNav from './ProjectMainNav'
import ProjectSideMenu from './ProjectSideMenu'

// Utils imports
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
const ProjectNavbar = () => {
    
    // States
    const [scrollPosition, setScrollPosition] = useState(0);
    const [menuToggle, setMenuToggle] = useState(false);
    const [largeInfoToggle, setLargeInfoToggle] = useState(false);
    const [smallInfoToggle, setSmallInfoToggle] = useState(false);

    // Function setting scroll position state (needed for navbar color style changes)
    CheckScrollPosition(setScrollPosition)

    return (
        // Project page Navbar 
        <motion.nav {...animationParams}>
            {/* Project Main nav and nav links visible on large screens */}
            <ProjectMainNav scrollPosition={scrollPosition}
                            setMenuToggle={setMenuToggle}
                            largeInfoToggle={largeInfoToggle}
                            setLargeInfoToggle={setLargeInfoToggle}
            />

            {/* Side menu - visible on medium screens */}
            <ProjectSideMenu menuToggle={menuToggle}
                        setMenuToggle={setMenuToggle}
                        smallInfoToggle={smallInfoToggle}
                        setSmallInfoToggle={setSmallInfoToggle}
            />
        </motion.nav>
    )
}

export default ProjectNavbar