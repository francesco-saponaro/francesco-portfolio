import React, {useState, useEffect, useRef, useCallback} from 'react'

import Modal from './ProjectImageModal'

// Styles and images imports
import './Project.scss'

const ProjectImages = ({ imgReference }) => {

    const [openImage, setOpenImage] = useState([false, null]);
    const modalRef = useRef()

    const closeImageOnWindow = useCallback((e) => {
        if(openImage) {
            if(e.target === modalRef?.current) {
                setOpenImage([false, null])
            }
        }
    }, [openImage, setOpenImage])

    useEffect(() => {
        window.addEventListener('click', closeImageOnWindow)

        return () => {
            window.removeEventListener('click', closeImageOnWindow)
        }
    }, [closeImageOnWindow])

    if(!imgReference) return null

    return (
        <>
        {/* Project images */}
        <div className={`project-page__images flex ${imgReference === 'ramen-locator' && 'flex-column'}`}>
            {/* First image */}
            <div className={`project-page__image ${imgReference === 'ramen-locator' ? 'width-height100 margin-bottom10' : 'width49'}`}>        
                <img className='width-height100' 
                        src={`/projectImages/${imgReference}-first.png`} 
                        alt='project pic'
                        onClick={() => setOpenImage([true, "first"])} 
                />        
            </div>
            {/* Second image */}
            <div className={`project-page__image ${imgReference === 'ramen-locator' ? 'width-height100' : 'width49'}`}>               
                <img className='width-height100' 
                        src={`/projectImages/${imgReference}-second.png`} 
                        alt='project pic' 
                        onClick={(e) => setOpenImage([true, "second"])} 
                />
            </div>
        </div>

        <Modal modalRef={modalRef} openImage={openImage} imgReference={imgReference} />
        </>
    )
}

export default ProjectImages