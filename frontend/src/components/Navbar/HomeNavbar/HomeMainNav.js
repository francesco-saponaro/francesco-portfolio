import React from 'react'
import { Link } from 'react-router-dom'

// Utils imports
import { cursorScale, cursorUnScale } from '../../../utils/Cursor'
import ScrollToSectionAndActive from '../../../utils/ScrollToSectionAndActive';

// Styles and images imports
import '../Navbar.scss'
import images from '../../../assets/images'
import { motion, AnimatePresence } from 'framer-motion';

// Framer motion animation params
const largeInfoAnimationParams = {
    initial: { opacity: 0, x: -1500 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: .5},
    exit: { x: 2000, transition: {duration: .5} },
    key: 'large-info'
}

// Main nav component
const HomeMainNav = ({ scrollPosition, 
                       setMenuToggle, 
                       largeInfoToggle,
                       setLargeInfoToggle, 
                       activeSection,
                       setActiveSection,
                       homeRef,
                       projectsRef,
                       testimonialsRef }) => {
    
    return (
        <>
        {/* Main nav                                If scrolled change styles                  */}
        <div className={`navbar__main flex-between ${scrollPosition > 30 ? 'navbar__scrolled' : 'false'}`}>
            {/* Nav title */}
            <div className='navbar__title flex-start'>
                <p onMouseOver={() => cursorScale('4')}
                   onMouseOut={() => cursorUnScale()}>
                    <Link to='/'>francesco saponaro</Link>
                </p>
            </div>

            {/* Nav links - visible on large screens */}
            <ul className='navbar__links flex-end ul-text'>
                {/* Section links */}
                <li className={activeSection?.includes('home') ? activeSection  : 'false'} 
                    onClick={() => ScrollToSectionAndActive({block:'end'}, 'home', homeRef, setActiveSection)}
                >
                    Home
                </li>
                <li className={activeSection?.includes('projects') ? activeSection  : 'false'} 
                    onClick={() => ScrollToSectionAndActive({block:'end'}, 'projects', projectsRef, setActiveSection)}
                >
                    Projects
                </li>
                <li className={activeSection?.includes('testimonials') ? activeSection  : 'false'} 
                    onClick={() => ScrollToSectionAndActive({block:'start'}, 'testimonials', testimonialsRef, setActiveSection)}
                >
                    Testimonials
                </li>
            

                {/* Info toggler */}
                <li onClick={() => setLargeInfoToggle(prevToggle => !prevToggle)}>
                    Info
                </li>

                {/* Contact link */}
                <li className='navbar__button'>
                    <a href='mailto:francescosaponaro5@gmail.com' className='ul-text'>
                        Contact Me
                    </a>
                </li>
            </ul>

            {/* Burger icon - visible on medium screens */}
            <div className='navbar__burger' 
                onClick={() => setMenuToggle(true)}
                onMouseOver={() => cursorScale('4')}
                onMouseOut={() => cursorUnScale()}
            >
                <img src={scrollPosition > 30 ? images.menuIconBlack : images.menuIconWhite} 
                    alt='burger icon'
                    className='width-height100' 
                />
            </div>
        </div>

        {/* Info nav */}
        <AnimatePresence>
        {largeInfoToggle && 
        <motion.div className='navbar__info-container' {...largeInfoAnimationParams}>
            <ul className='navbar__info width-height100 flex-around ul-text'>
                <li><a href='https://github.com/francesco-saponaro' target='blank'>Github</a></li>
                <li><a href='https://www.linkedin.com/in/francesco-saponaro87/' target='blank'>Linkedin</a></li>
                <li><a href={images.CV} target='blank'>CV</a></li>
            </ul>
        </motion.div>
        }
        </AnimatePresence>
        </>
    )
}

export default HomeMainNav