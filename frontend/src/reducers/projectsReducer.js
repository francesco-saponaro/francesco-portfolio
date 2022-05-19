// The reducer sends the payload coming from the action to the store.
// All projects reducer.
export const projectsReducer = (state = { projects:[] } , action) => { 
    
    // So we check which action has been dispatched to the reducer and update
    // the state depending on the action type
    switch(action.type) {
        // If this action type dispatched we set the state proJECTs to an empty array
        case 'ALL_PROJECTS_REQUEST':
            return {
                loading: true,
                ...state
            }

        // If this action type dispatched we set the state projects to the projects 
        // array in the action payload data
        case 'ALL_PROJECTS_SUCCESS':
            return {
                loading: false,
                success: action.payload.success,
                projects: action.payload.projects
            }

        // If this action type dispatched we get the error returning from the action payload
        case 'ALL_PROJECTS_FAIL':
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

// Project details reducer.
export const projectReducer = (state = { project: {} } , action) => { 
    
    // So we check which action has been dispatched to the reducer and update
    // the state depending on the action type
    switch(action.type) {
        case 'PROJECT_REQUEST':
            return {
                ...state,
                loading: true
            }

        case 'PROJECT_SUCCESS':
            return {
                loading: false,
                success: action.payload.success,
                project: action.payload.project
            }

        case 'PROJECT_FAIL':
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