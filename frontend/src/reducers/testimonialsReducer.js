// The reducer sends the payload coming from the action to the store.
// All testimonials reducer.
export const testimonialsReducer = (state = { testimonials:[] } , action) => { 
    
    // So we check which action has been dispatched to the reducer and update
    // the state depending on the action type
    switch(action.type) {
        // If this action type dispatched we set the state testimonials to an empty array
        case 'ALL_TESTIMONIALS_REQUEST':
            return {
                loading: true,
                ...state
            }

        // If this action type dispatched we set the state testimonials to the testimonials 
        // array in the action payload data
        case 'ALL_TESTIMONIALS_SUCCESS':
            return {
                loading: false,
                success: action.payload.success,
                testimonials: action.payload.testimonials
            }

        // If this action type dispatched we get the error returning from the action payload
        case 'ALL_TESTIMONIALS_FAIL':
            return {
                loading: false,
                error: action.payload
            }

        // If this action type dispatched since we just want to clear the errors,
        // we simply return the state array and set the errors to null.
        case 'CLEAR_ERRORS':
            return {
                ...state,
                error: null
            }

        default:
            return state;
    }
}

// New testimonial reducer
export const newTestimonialReducer = (state = { testimonial: {} }, action) => {
    switch(action.type) {

        case 'NEW_TESTIMONIAL_REQUEST':
            return {
                ...state,
                loading: true
            }
        
        case 'NEW_TESTIMONIAL_SUCCESS':
            return {
                loading: false,
                success: action.payload.success,
                testimonial: action.payload.testimonial
            }

        case 'NEW_TESTIMONIAL_FAIL':
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        case 'NEW_TESTIMONIAL_RESET':
            return {
                ...state,
                success: false
            }

        case 'CLEAR_ERRORS':
            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}