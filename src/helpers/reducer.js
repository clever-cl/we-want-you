export const initialState = {
    user: null,
    playlists: [],
    search: '',
    //REMOVE after finish developing
    //token: 'BQCY5jeXyqVLl4DzXPfjaQCNJI1nBgBoQAGpwN6RB3zIiuc8KAlFs4P92lLKvWiaftmi4ONOHRV-jBHgHEuwcL5Yae4fsCjF4FMJuvfy9NHjszB_ZO0YUVAOvhXXv3J0shK0jSpDE988moslGK1Mk4KqNiI8q7vRXZrdW7c6DZf6vSbTjCWzH4fVsRh01bUpyg',
}

const reducer = (state, action) => {
    console.log(state, action)
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists
            }
        case "SET_RESULT":
            return {
                ...state,
                result: action.result
            }
        case "SET_SEARCH":
            return {
                ...state,
                search: action.search
            }


        default:
            return state;
    }
}

export default reducer