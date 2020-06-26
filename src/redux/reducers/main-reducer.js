const CREATE_LINK = 'CREATE_LINK'

let initialState = {
    links: [
        { title: 'home', link: '/' },
    ]
}


const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case '':
            return {
                ...state,

            }

        case CREATE_LINK:
            return {
                ...state,
                links: [...state.links, { title: 'second', link: '/' }]
            }

        default:
            return state
    }
}

export const LINK_CREATOR = () => ({ type: CREATE_LINK });


export default mainReducer