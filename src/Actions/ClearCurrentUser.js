export const ClearCurrentUser = () => {
    return (dispatch, getState) => {
        dispatch({type: 'SIGN_OUT'})
    }
};