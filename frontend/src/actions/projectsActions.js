import axios from 'axios'

// This function will dispatch actions to get projects from the backend
export const getProjectsAction = () => async (dispatch) => {
    
    try {
        // We first dispatch the ALL_PROJECTS_REQUEST action type, which 
        // will set projects to an empty array.
        dispatch({ type:'ALL_PROJECTS_REQUEST' })

        // Then we perform a get request to the backend with the URL corresponding to 
        // its route and extract the data from it
        // This is why we need thunk.
        const { data }  = await axios.get(`/api/v1/projects`)

        // Then we dispatch the ALL_PROJECTS_SUCCESS action type with a payload of the
        // data extracted from the backend, which will set the projects state to the 
        // action payload.
        dispatch({ 
            type:'ALL_PROJECTS_SUCCESS',
            payload: data
        })
    } catch(error) {
        // If there is an error we dispatch the ALL_PROJECTS_FAIL action type with
        // a payload of the error errMessage, which will simply return the error .
        dispatch({
            type:'ALL_PROJECTS_FAIL',
            payload: error
        })
    }
}

// This function will dispatch actions to get a single project from the backend
export const getProjectAction = (id) => async (dispatch) => {
    
    try {
        // We first dispatch the PROJECTS_REQUEST action type, which 
        // will set projects to an empty array.
        dispatch({ type:'PROJECT_REQUEST' })

        // Then we perform a get request to the backend with the URL corresponding to 
        // its route and extract the data from it
        // This is why we need thunk.
        const { data } = await axios.get(`/api/v1/project/${id}`)
        console.log(data)
        console.log(id)

        // Then we dispatch the PROJECT_SUCCESS action type with a payload of the
        // data extracted from the backend, which will set the projects state to the 
        // action payload.
        dispatch({ 
            type:'PROJECT_SUCCESS',
            payload: data
        })
    } catch(error) {
        // If there is an error we dispatch the PROJECT_FAIL action type with
        // a payload of the error errMessage, which will simply return the error .
        dispatch({
            type:'PROJECT_FAIL',
            payload: error
        })
    }
}

// If this action type dispatched since we just want to clear the errors,
// we simply return the state array and set the errors to null
export const clearErrors = () => async (dispatch) => {
    dispatch({ type:'CLEAR_ERRORS' })
}