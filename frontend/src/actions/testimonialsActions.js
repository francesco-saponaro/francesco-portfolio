import axios from 'axios'

// This function will dispatch actions to get testimonials from the backend
export const getTestimonialsAction = () => async (dispatch) => {
    
    try {
        // We first dispatch the ALL_TESTIMONIALS_REQUEST action type, which 
        // will set testimonials to an empty array.
        dispatch({ type:'ALL_TESTIMONIALS_REQUEST' })

        // Then we perform a get request to the backend with the URL corresponding to 
        // its route and extract the data from it
        // This is why we need thunk.
        const { data } = await axios.get(`/api/v1/testimonials`)

        // Then we dispatch the ALL_TESTIMONIALS_SUCCESS action type with a payload of the
        // data extracted from the backend, which will set the testimonials state to the 
        // action payload.
        dispatch({ 
            type:'ALL_TESTIMONIALS_SUCCESS',
            payload: data
        })
    } catch(error) {
        // If there is an error we dispatch the ALL_TESTIMONIALS_FAIL action type with
        // a payload of the error errMessage, which will simply return the error .
        dispatch({
            type:'ALL_TESTIMONIALS_FAIL',
            payload: error
        })
    }
}

// This function will dispatch actions to add a new testimonial
export const newTestimonial = (testimonialData) => async (dispatch) => {

    try {
        // We first dispatch the NEW_TESTIMONIAL_REQUEST action type, which 
        // will simply return the state array.
        dispatch({ type: 'NEW_TESTIMONIAL_REQUEST' })

        // Then we set the headers config variable to be sent into the PUT request
        // to tell the request what kind of data is coming in.
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        // Then we perform a POST request to the backend with the testimonial data, and the config, 
        // and extract the testimonial data.
        // This is why we need thunk
        const data = await fetch(`/api/v1/admin/testimonial/new`, testimonialData, config)

        // Then we dispatch the NEW_TESTIMONIAL_SUCCESS action type with a payload of the
        // data extracted from the backend.
        dispatch({
            type: 'NEW_TESTIMONIAL_SUCCESS',
            payload: data
        })

    } catch (error) {
        // If there is an error we dispatch the NEW_TESTIMONIAL_FAIL action type with
        // a payload of the error errMessage, which will simply return the error.
        dispatch({
            type: 'NEW_TESTIMONIAL_FAIL',
            payload: error
        })
    }
}

// If this action type dispatched since we just want to clear the errors,
// we simply return the state array and set the errors to null
export const clearErrors = () => async (dispatch) => {
    dispatch({ type:'CLEAR_ERRORS' })
}
