import React, {useState, useEffect, useRef} from 'react'

// Styles and images imports
import './Project.scss'
import { motion, AnimatePresence } from 'framer-motion';

// Framer motion animation params
const animationParams = {
    whileInView: { opacity: [0, 1] },
    transition: { duration: .5 },
    exit: { opacity: 0, transition: { duration: .5 } },
    key: 'project-image'
}

const ProjectImages = ({ imgReference }) => {

    const [openImage, setOpenImage] = useState([false, null]);
    const modalRef = useRef()

    const closeImageOnWindow = (e) => {
        if(openImage) {
            if(e.target === modalRef?.current) {
                setOpenImage([false, null])
            }
        }
    }

    useEffect(() => {
        window.addEventListener('click', closeImageOnWindow)

        return () => {
            window.removeEventListener('click', closeImageOnWindow)
        }
    }, [closeImageOnWindow])

    return (
        imgReference &&
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

            {/* Framer motion component for exit animation */}
            <AnimatePresence exitBeforeEnter initial={false}>
                {openImage[0] &&
                /* Zoomed image modal */
                <motion.div className='project-page__images-modal flex' {...animationParams}>
                    {/* Modal overlay */}
                    <div ref={modalRef} className='modal__overlay'></div>
                    {/* Modal image */}
                    <div className='modal'>
                        <img className="project-page__images-image" src={`/projectImages/${imgReference}-${openImage[1]}.png`}/>
                    </div>
                </motion.div>
                }
            </AnimatePresence>
            </>
    )
}

export default ProjectImages