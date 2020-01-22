const initialState = {
    currentUser: {},
    loginError: null
}

export const user = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_USER':
            return {...state, currentUser: action.user}
        case 'LOGIN_ERROR':
            return {...state, currentUser: null, loginError: action.error}
        case 'LOGOUT_USER':
            return {...state, currentUser: null}
        default:
            return state;
    }
}
