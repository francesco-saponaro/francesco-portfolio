import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

// Actions imports
import { getProjectsAction, clearErrors } from '../../../actions'

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
    const [projectsToggle, setProjectsToggle] = useState(false);

    // Function setting scroll position state (needed for navbar color style changes)
    CheckScrollPosition(setScrollPosition)

    const dispatch = useDispatch();

    // Extract retrieved data from the store projects state
    const { projects, error, loading } = useSelector(state => state.projects)

    // On page load dispatch action to retrieve projects from backend
    useEffect(() => {
        dispatch(getProjectsAction())

        if(error) {
            dispatch(clearErrors());
        }
    }, [dispatch, error])

    return (
        // Project page Navbar 
        <motion.nav {...animationParams}>
            {/* Project Main nav and nav links visible on large screens */}
            <ProjectMainNav scrollPosition={scrollPosition}
                            setMenuToggle={setMenuToggle}
                            largeInfoToggle={largeInfoToggle}
                            setLargeInfoToggle={setLargeInfoToggle}
                            projectsToggle={projectsToggle}
                            setProjectsToggle={setProjectsToggle}
                            projects={projects}
                            loading={loading}
            />

            {/* Side menu - visible on medium screens */}
            <ProjectSideMenu menuToggle={menuToggle}
                        setMenuToggle={setMenuToggle}
                        smallInfoToggle={smallInfoToggle}
                        setSmallInfoToggle={setSmallInfoToggle}
                        projectsToggle={projectsToggle}
                        setProjectsToggle={setProjectsToggle}
                        projects={projects}
                        loading={loading}
            />
        </motion.nav>
    )
}

export default ProjectNavbar