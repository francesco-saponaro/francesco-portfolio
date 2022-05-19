import React from 'react'

// Styles and images imports
import './IntroName.scss'
import { motion } from 'framer-motion';

const IntroName = () => {
    return (
        <div className='intro__container flex'>
            <motion.p whileInView={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 3 }}>
                Francesco Saponaro
            </motion.p>
        </div> 
    )
}

export default IntroName