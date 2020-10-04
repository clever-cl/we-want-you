export const initialState = {
    user: null,
    playlists: [],
    search: '',

}

const reducer = (state, action) => {
 
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