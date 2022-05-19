import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

// Actions imports
import { getTestimonialsAction, clearErrors } from '../../actions'

// Cursor functions
import { cursorScale, cursorUnScale } from '../../utils/Cursor'

// Styles and images imports
import './Testimonial.scss'
import images from '../../assets/images'
import { motion } from 'framer-motion';

// Framer motion animation params
const animationParams = {
    whileInView: { opacity: [0, 1] },
    transition: { delay: .3 },
}

// Testimonials component
const Testimonial = ({ testimonialsRef }) => {

    const dispatch = useDispatch();

    // Extract retrieved data from the store projects state
    const { testimonials, error } = useSelector(state => state.testimonials)

    // On page load dispatch action to retrieve projects from backend
    useEffect(() => {
        dispatch(getTestimonialsAction())

        if(error) {
            dispatch(clearErrors());
        }
    }, [dispatch, error])

    return (
        // Testimonials container 
        <div ref={testimonialsRef} className='reviews__container'>
            {/* Testimonial container */}
            {testimonials?.map((testimonial, index) => (
                <motion.div key={index}
                            className={`review__container flex ${index % 2 !== 0 && 'align-end'}`} 
                            {...animationParams}
                            onMouseOver={() => cursorScale('6')}
                            onMouseOut={() => cursorUnScale()}
                >
                    {/* Testimonial text */}
                    <p className='review__text'>
                        {testimonial.testimonial}
                    </p>
                    {/* Testimonial signature */}
                    <p className='review__signature'>
                        {testimonial.name} - <span>{testimonial.relationship}</span>
                    </p>
        
                    {/* Background Apostrophe images */}
                    <div className='review__apostrophe review__apostrophe-left'>
                        <img src={images.apostropheLeft} alt='apostrophe left' className='width-height100' />
                    </div>
                    <div className='review__apostrophe review__apostrophe-right'>
                        <img src={images.apostropheRight} alt='apostrophe right' className='width-height100' />
                    </div>
                </motion.div>
            ))}
        </div>
    )
}

export default Testimonial