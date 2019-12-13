//import authTypes from './auth.types'

export const SetCurrentUser = (user) => {

    return (dispatch, getState) => {

        dispatch({type: 'SIGN_IN', email: user.email , user:user})
    }

};