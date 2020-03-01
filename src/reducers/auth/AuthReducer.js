import * as jwt from 'jsonwebtoken';

const types = {
    LOGIN   : 'LOGIN',
    LOGOUT  : 'LOGOUT'
}

export const actions = {
    login: (username, password) => ({
        type: types.LOGIN,
        payload: {
            username: username,
            password: password
        }
    }),
    logout: () => ({
        type: types.LOGOUT,
        payload: null
    })
}

export const authReducer = (state, action) => {
    switch (action.type) {
        case types.LOGIN:
            return login(state, action.payload.username, action.payload.password)
        case types.LOGOUT:
            return logout()
        default:
            return state;
    }
}

const login = (state, username, password) => {
    if (username === 'toto' && password === 'toto') {
        // Replace these lines by your API call
        let token = jwt.sign({username: username}, 'secret', { expiresIn: '1h' });
        return {
            token: token,
            refresh_token: token
        };
    }
    return state;
}

const logout = () => {
    return {
        token: null,
        refresh_token: null
    };
}
