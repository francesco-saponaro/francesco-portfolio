import React from 'react'
import { Link } from 'react-router-dom'

// Utils imports
import { cursorScale, cursorUnScale } from '../../../utils/Cursor'

// Styles and images imports
import '../Navbar.scss'
import images from '../../../assets/images'
import { motion, AnimatePresence } from 'framer-motion';

// Framer motion animation params
const animationParams = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { delay: .1, duration: .5 },
    exit: { opacity: 0, transition: { duration: .2 } },
    key: 'navbar'
}

const smallInfoAnimationParams = {
    initial: { opacity: 0, y: -500 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: .5 },
    exit: { y: 1000, transition: {duration: .5} },
    key: 'small-info'
}

// Side menu component
const ProjectSideMenu = ({ menuToggle, 
                           setMenuToggle, 
                           smallInfoToggle, 
                           setSmallInfoToggle,
                           projectsToggle,
                           setProjectsToggle,
                           projects,
                           loading }) => {
                        
    return (
        //Side menu - visible on medium screens
        // Framer motion component for exit animations
        <AnimatePresence>
        {menuToggle && 
            <motion.div className='navbar__slider' {...animationParams}>
                {/* Menu info links */}
                <AnimatePresence>
                    {smallInfoToggle && 
                    <motion.ul className='navbar__slider--info-ul flex-around ul-text' {...smallInfoAnimationParams}>
                        <li className='rotate'><a href='https://github.com/francesco-saponaro' target='blank'>Github</a></li>
                        <li className='rotate'><a href='https://www.linkedin.com/in/francesco-saponaro87/' target='blank'>Linkedin</a></li>
                        <li className='rotate'><a href={images.CV} target='blank'>CV</a></li>
                    </motion.ul>
                    }
                </AnimatePresence>

                {/* Projects nav */}
                <AnimatePresence>
                    {projectsToggle && 
                    <motion.ul className='navbar__slider--projects-ul flex-around ul-text' {...smallInfoAnimationParams}>
                        {!loading && projects && projects.map(project => (
                            <li key={project._id}>
                                <Link to={`/project/${project._id}`}>
                                    {project?.name}
                                </Link>
                            </li>
                            )
                        )}
                    </motion.ul>
                    }
                </AnimatePresence>

                {/* Side menu links */}
                <ul className='navbar__slider--main-ul width-height100'>
                    {/* Section links */}
                    <li>
                        <Link to='/'>Home</Link>
                    </li>

                    {/* Projects list toggler */}
                    <li className='flex'
                        onClick={() => setProjectsToggle(prevToggle => !prevToggle)}
                    >
                        Projects
                        <div className='navbar__slider-caret flex'>
                            <img src={images.dropdownCaretBlack} alt='down-caret' />
                        </div>
                    </li>

                    {/* Info toggler */}
                    <li onClick={() => setSmallInfoToggle(prevToggle => !prevToggle)}>
                        Info
                    </li>

                    {/* Contact link */}
                    <li onClick={()=> {setMenuToggle(false);
                                       setSmallInfoToggle(false);
                                       setProjectsToggle(false)}}>
                        <a href='mailto:francescosaponaro5@gmail.com'>
                            Contact
                        </a>
                    </li>
                </ul>

                {/* Toggle close icon  */}
                <div className='navbar__slider--close-icon' 
                        onClick={() => {setMenuToggle(false);
                                        setSmallInfoToggle(false);
                                        setProjectsToggle(false)}}
                        onMouseOver={() => cursorScale('4')}
                        onMouseOut={() => cursorUnScale()}
                >
                    <img src={images.close} alt='close icon' className='width-height100' />
                </div>
            </motion.div>
        }
        </AnimatePresence>
    )
}

export default ProjectSideMenu