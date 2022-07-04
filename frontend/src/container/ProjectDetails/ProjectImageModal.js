import React from 'react';
import ReactDom from 'react-dom'

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

// Image Modal component
const Modal = ({ modalRef, openImage }) => {
    if(!openImage[0]) return null

    return ReactDom.createPortal(
        <>
        {/* Framer motion component for exit animation */}
        <AnimatePresence exitBeforeEnter initial={false}>
        {/* Zoomed image modal */}
        <motion.div className='project-page__images-modal flex' {...animationParams}>
            {/* Modal overlay */}
            <div ref={modalRef} className='modal__overlay'></div>
            {/* Modal image */}
            <div className='modal'>
                <img className="project-page__images-image" src={openImage[1]}/>
            </div>
        </motion.div>
        </AnimatePresence>
        </>,
        document.getElementById("portal")
    )
}

export default Modal