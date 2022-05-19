import React from 'react'

// Styles and images imports
import './Project.scss'

const ProjectImages = ({ imgReference }) => {
    return (
        <>
        {imgReference &&
            // Project images
            <div className={`project-page__images flex ${imgReference === 'ramen-locator' && 'flex-column'}`}>
                <div className={`project-page__image ${imgReference === 'ramen-locator' ? 'width-height100 margin-bottom10' : 'width49'}`}>
                    <a href={`/projectImages/${imgReference}-first.png`} target='_blank'>
                        <img className='width-height100' 
                            src={`/projectImages/${imgReference}-first.png`} 
                            alt='project pic' 
                        />
                    </a>
                </div>
                <div className={`project-page__image ${imgReference === 'ramen-locator' ? 'width-height100' : 'width49'}`}>
                    <a href={`/projectImages/${imgReference}-second.png`} target='_blank'>
                        <img className='width-height100' 
                            src={`/projectImages/${imgReference}-second.png`} 
                            alt='project pic' 
                        />
                    </a>
                </div>
            </div>
        }
        </>
    )
}

export default ProjectImages