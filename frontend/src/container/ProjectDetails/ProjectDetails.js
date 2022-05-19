import React from 'react'

// Styles and images imports
import './Project.scss'

const ProjectDetails = ({ project, loading }) => {
    return (
        // Project details
        <>
        {!loading &&
        <div className='project-page__details'>
            {project &&
                <>
                {/* Project description */}
                <div className='project-page__details-description'>
                    {project?.description}
                </div>

                {/* Project name */}
                <div className='project-page__details-item'>
                    <div className='project-page__details-title'>
                        Name:
                    </div>
                    <div className='project-page__details-content'>
                        {project.name}
                    </div>
                </div>

                {/* Project languages */}
                <div className='project-page__details-item'>
                    <div className='project-page__details-title'>
                        Languages:
                    </div>
                    <div className='project-page__details-content'>
                        {project.languages?.map((language, index) => 
                            <span key={index}>{language.language}{index !== project.languages.length - 1 && <span>,</span>} </span>
                        )}
                    </div>
                </div>

                {/* Project frameworks */}
                {project.frameworks?.length > 0 &&
                    <div className='project-page__details-item'>
                        <div className='project-page__details-title'>
                            Frameworks:
                        </div>
                        <div className='project-page__details-content'>
                            {project.frameworks?.map((framework, index) => 
                                <span key={index}>{framework.framework}{index !== project.frameworks.length - 1 && <span>,</span>} </span>
                            )}
                        </div>
                    </div>
                }

                {/* Project database */}
                {project.database?.length > 0 &&
                    <div className='project-page__details-item'>
                        <div className='project-page__details-title'>
                            Database:
                        </div>
                        <div className='project-page__details-content'>
                            {project.database}
                        </div>
                    </div>
                }

                {/* Project libraries */}
                {project.libraries?.length > 0 &&
                    <div className='project-page__details-item'>
                        <div className='project-page__details-title'>
                            Libraries:
                        </div>
                        <div className='project-page__details-content'>
                            {project.libraries?.map((library, index) => 
                                <span key={index}>{library.library}{index !== project.libraries.length - 1 && <span>,</span>} </span>
                            )}
                        </div>
                    </div>
                }

                {/* Project other */}
                {project.other?.length > 0 &&
                    <div className='project-page__details-item'>
                        <div className='project-page__details-title'>
                            Other:
                        </div>
                        <div className='project-page__details-content'>
                            {project.other?.map((item, index) => 
                                <span key={index}>{item.item}{index !== project.other.length - 1 && <span>,</span>} </span>
                            )}
                        </div>
                    </div>
                }

                {/* Project github */}
                <div className='project-page__details-item'>
                    <div className='project-page__details-title'>
                        Github:
                    </div>
                    <div className='project-page__details-content'>
                        <a href={project.github} target='_blank'>
                            {project.github}
                        </a>
                    </div>
                </div>

                {/* Project app */}
                <div className='project-page__details-item'>
                    <div className='project-page__details-title'>
                        App:
                    </div>
                    <div className='project-page__details-content'>
                        <a href={project.app} target='_blank'>
                            {project.app}
                        </a>
                    </div>
                </div>
                </>
            }
        </div>
        }
        </>
    )
}

export default ProjectDetails