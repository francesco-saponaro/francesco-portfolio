import React from 'react'

// Image navigator component
const ProjectImageNavigator = ({ imgArr, imgArrIndex, setImgArrIndex, imgReference}) => {
    return (
        <div className='project-page__image-slider_navigator'>
            {imgArr && imgArr.map((item, index) => (
                <div key={index} 
                    className={`project-page__image-slider_navigate ${imgReference} ${imgArrIndex === index && 'navigate_active'}`} 
                    onClick={() => setImgArrIndex(index)}
                />
            ))}
        </div>
    )
}

export default ProjectImageNavigator