import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_USER = "RECEIVE_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const RECEIVE_SIGNUP_ERRORS = "RECEIVE_SIGNUP_ERRORS";

const receiveUser = (user) => ({
    type: RECEIVE_USER,
    user
})

const logoutCurrentUser = () => ({
    type: LOGOUT_USER
});

const receiveErrors = (errors) => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

const receiveSignupErrors = (errors) => ({
    type: RECEIVE_SIGNUP_ERRORS,
    errors
});

export const signupUser = (user) => dispatch => SessionAPIUtil.signup(user)
    .then( user => dispatch(receiveUser(user))
    , (errors) => dispatch(receiveSignupErrors(errors)));

export const loginUser = (user) => dispatch => SessionAPIUtil.login(user)
    .then(user => dispatch(receiveUser(user))
    , (errors) => dispatch(receiveErrors(errors)));

export const logoutUser = () => dispatch => SessionAPIUtil.logout()
    .then(() => dispatch(logoutCurrentUser())
    , (errors) => dispatch(receiveErrors(errors)));


