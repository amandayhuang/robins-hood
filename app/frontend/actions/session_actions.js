import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_USER = "RECEIVE_USER";
export const LOGOUT_USER = "LOGOUT_USER";
// export const RECEIVE_ERRORS = "RECEIVE_ERRORS"

const receiveUser = (user) => ({
    type: RECEIVE_USER,
    user
})

const logoutCurrentUser = () => ({
    type: LOGOUT_USER
});

// const receiveErrors = (errors) => ({
//     type: RECEIVE_ERRORS,
//     errors
// });

export const signupUser = (user) => dispatch => SessionAPIUtil.signup(user)
    .then( user => dispatch(receiveUser(user)));

export const loginUser = (user) => dispatch => SessionAPIUtil.login(user)
    .then(user => dispatch(receiveUser(user)));

export const logoutUser = () => dispatch => SessionAPIUtil.logout()
    .then(() => dispatch(logoutCurrentUser()));


