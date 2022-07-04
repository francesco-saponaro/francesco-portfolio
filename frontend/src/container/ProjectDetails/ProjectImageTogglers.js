import React from 'react'

// Styles and images imports
import images from '../../assets/images'

// Image togglers component
const ProjectImageTogglers = ({ nextImg, prevImg, imgReference }) => {
  return (
    <>
    {/* Image togglers */}
    <div className={`project-page__image-slider_toggler project-page__image-slider_next`}
         onClick={nextImg}
    >
        <img className={`${imgReference}-toggler`} src={images.nextImg} alt='slider-toggler' />
    </div>
    <div className={`project-page__image-slider_toggler project-page__image-slider_prev ${imgReference}-toggler`}
         onClick={prevImg}
    >
        <img src={images.prevImg} alt='slider-toggler' />
    </div>
    </>
  )
}

export default ProjectImageTogglers