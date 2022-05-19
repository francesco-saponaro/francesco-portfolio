import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

// Actions imports
import { getProjectsAction, clearErrors } from '../../actions'

// Styles and images imports
import './Projects.scss'
import { motion } from 'framer-motion';

// Framer motion animation params
const animationOpacityParams = {
    whileInView: { opacity: [0, 1] }
}

// Projects list component
const Projects = ({ projectsRef }) => {

    const dispatch = useDispatch();

    // Extract retrieved data from the store projects state
    const { projects, error, loading } = useSelector(state => state.projects)

    // Selected project image state
    const [image, setImage] = useState('');

    // On page load dispatch action to retrieve projects from backend
    useEffect(() => {
        dispatch(getProjectsAction())

        if(error) {
            dispatch(clearErrors());
        }
    }, [dispatch, error])

    return (
        // Projects container
        <div ref={projectsRef} className='projects__container'>
            {/* Projects header */}
            <motion.p className='projects__header flex-start' {...animationOpacityParams}>
                    Projects
            </motion.p>

            {!loading &&
            <>
            {/* Projects details */}
            <div className='projects__details'>
                {/* Projects info */}
                <div className='project__info-container'>
                    {/* Project info */}
                    {projects?.map((project, index) => (
                        <motion.div className='project__info flex-between' key={index} 
                                    {...animationOpacityParams}>
                            <motion.p whileHover={{ x: 20, color:'#ccc' }}
                                    transition={{ type: 'sween' }}
                                    className='project__name flex-start width-height100'
                                    onMouseOver={() => setImage(`projectImages/${project.imgReference}-main.png`)}
                                    onMouseOut={() => setImage('')}
                            >
                                <Link to={`/project/${project._id}`} 
                                      className='purple-color width-height100 flex-start'
                                >
                                    {project?.name}
                                </Link>
                            </motion.p>
                            <p>{project.stack}</p>
                        </motion.div>
                    )).reverse()}
                </div>

                {/* Selected project image */}
                <div className='projects__images'>
                    {image && 
                        <motion.div className='projects__image' 
                                    whileInView= {{ opacity: 1, x: [1, -1, 1], y: [1, -1, 1] }}
                                    transition= {{ opacity: {duration: .5}, x: {repeat: Infinity, duration: 2.5}, 
                                                   y: {repeat: Infinity, duration: 2.5} }}
                        >
                            <motion.img src={image} 
                                        alt='project image' 
                                        className='width-height100'
                            />
                        </motion.div>
                    }
                </div>
            </div>
            </>
            }
        </div>
    )
}

export default Projects