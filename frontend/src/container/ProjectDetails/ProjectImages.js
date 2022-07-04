import React, {useState, useEffect, useRef, useCallback, useLayoutEffect} from 'react'

// Components imports
import Modal from './ProjectImageModal'
import ProjectImageTogglers from './ProjectImageTogglers'
import ProjectImageNavigator from './ProjectImageNavigator'

// Styles and images imports
import './Project.scss'
import projectPics from '../../projectPics/projectPics'
import images from '../../assets/images'

// Projects Images Slider Component
const ProjectImages = ({ imgReference }) => {

    // Array storing all images paths related to current project
    let imagesArray = Object.values(projectPics).filter(item => item.includes(imgReference))
    
    const [imgArr, setImgArr] = useState([]);
    const [imgArrIndex, setImgArrIndex] = useState(0)
    const [openImage, setOpenImage] = useState([false, null]);

    const modalRef = useRef();

    // Function to close modal when clicking outside of it
    const closeImageOnWindow = useCallback((e) => {
        if(openImage) {
            if(e.target === modalRef?.current) {
                setOpenImage([false, null])
            }
        }
    }, [openImage, setOpenImage])

    // Function to slide to next image
    const nextImg = () => {
        if(imgArrIndex === imagesArray.length - 1) {
            setImgArrIndex(0)
        } else {
            setImgArrIndex(prev => prev + 1)
        }
    }

    // Function to slide to previous image
    const prevImg = () => {
        if(imgArrIndex === 0) {
            setImgArrIndex(imagesArray.length - 1)
        } else {
            setImgArrIndex(prev => prev - 1)
        }
    }

    // On page load set imgArr state to the current project images
    useLayoutEffect(() => {
        setImgArr(imagesArray);

        return () => {
            setImgArr([]);
        }
    }, [setImgArr, imgReference])

    // On page load add close modal function to the onClick window listener
    useEffect(() => {
        window.addEventListener('click', closeImageOnWindow)

        return () => {
            window.removeEventListener('click', closeImageOnWindow)
        }
    }, [closeImageOnWindow])

    if(!imgReference) return null

    return (
        <>
        {/* Project images container */}
        <div className={`project-page__images flex`}>
            {/* Project images slider */}
            <div className={`project-page__image-slider`}>
                {/* Image */}     
                <img className='width-height100' 
                     src={imgArr[imgArrIndex]}
                     alt='project pic'
                     onClick={() => setOpenImage([true, imgArr[imgArrIndex]])} 
                />

                {/* Image togglers */}
                <ProjectImageTogglers nextImg={nextImg} 
                                      prevImg={prevImg} 
                                      imgReference={imgReference} 
                />

                {/* Image navigator */}
                <ProjectImageNavigator imgArr={imgArr} 
                                       imgArrIndex={imgArrIndex} 
                                       setImgArrIndex={setImgArrIndex} 
                                       imgReference={imgReference} 
                />
            </div>
        </div>

        {/* Selected image modal */}
        <Modal modalRef={modalRef} openImage={openImage} />
        </>
    )
}

export default ProjectImages