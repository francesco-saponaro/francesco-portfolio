import React from 'react'

// Cursor functions
import { cursorScale, cursorUnScale } from '../../utils/Cursor'

// Styles imports
import './Header.scss'
import { motion } from 'framer-motion';

// Framer motion animation params
const animationParams = {
    whileInView: { opacity: [0, 1] },
    transition: { delay: .3},
}

// Header component
const Header = ({ homeRef }) => {
    return (
        // Header container
        <motion.div ref={homeRef} className='header__container flex' {...animationParams}>
            {/* Header title */}
            <p className='header__title'>   
                <span onMouseOver={() => cursorScale('6')}
                      onMouseOut={() => cursorUnScale()}
                >
                    Junior <span className='purple-color header__title-stack'>FullStack</span> & <span className='purple-color header__title-stack'>Frontend</span>  Developer
                </span>
            </p>
        </motion.div>
    )
}

export default Header