import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

// Actions imports
import { getProjectAction, clearErrors } from '../actions'

// Component imports
import { ProjectNavbar } from '../components/Navbar';
import { ProjectImages, ProjectDetails } from '../container';

// Utils imports
import ScrollBar from '../utils/ScrollBar'

// Styles and images imports
import '../container/ProjectDetails/Project.scss'
import { motion } from 'framer-motion';;

// Framer motion animation params
const animationParams = {
    whileInView: { opacity: [0, 1] },
    transition: { delay: .3},
    exit: { opacity: 0, transition: { duration: .5 } },
    key: 'project'
}

// Project details component
const Project = () => {

    const params = useParams();
    const { id } = params;

    const dispatch = useDispatch();

    // Extract retrieved data from the store projects state
    const { project, error, loading } = useSelector(state => state.project)

    // On page load dispatch action to retrieve projects from backend
    useEffect(() => {
        dispatch(getProjectAction(id))

        if(error) {
            dispatch(clearErrors());
        }
    }, [dispatch, error, id])

    // Custom scrollbar
    ScrollBar();
    
    return (
        <>
        {/* Custom scrollbar */}
        <div className='scroll__path' />
        <div className='scroll__bar' />

        {/* Project navbar */}
        <ProjectNavbar />
        
        {/* Project page container */}
        <motion.div className='project-page__container flex' {...animationParams}>
            <ProjectImages imgReference={project.imgReference} />
            <ProjectDetails project={project} loading={loading} />  
        </motion.div>
        </>
    )
}

export default Project