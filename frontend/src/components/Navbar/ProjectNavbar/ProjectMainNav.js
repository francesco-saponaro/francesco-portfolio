import React from 'react'
import { Link } from 'react-router-dom'

// Utils imports
import { cursorScale, cursorUnScale } from '../../../utils/Cursor'

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
const ProjectMainNav = ({ scrollPosition, 
                          setMenuToggle, 
                          largeInfoToggle,
                          setLargeInfoToggle,
                          projectsToggle,
                          setProjectsToggle,
                          projects,
                          loading }) => {
    
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
                <li>
                    <Link to='/'>Home</Link>
                </li>

                {/* Projects list toggler */}
                <li className='flex'
                    onClick={() => setProjectsToggle(prevToggle => !prevToggle)}
                >
                    Projects
                    <div className='navbar__links-caret flex'>
                        <img src={images.dropdownCaret} alt='down-caret' />
                    </div>
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

        {/* Projects nav */}
        <AnimatePresence>
            {projectsToggle && 
            <motion.div className='navbar__info-container' {...largeInfoAnimationParams}>
                <ul className='navbar__projects width-height100 flex-around ul-text'>
                    {!loading && projects && projects.map(project => (
                        <li key={project._id}>
                            <Link to={`/project/${project._id}`}>
                                {project?.name}
                            </Link>
                        </li>
                        )
                    )}
                </ul>
            </motion.div>
            }
        </AnimatePresence>

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

export default ProjectMainNav