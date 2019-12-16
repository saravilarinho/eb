export const Clear_dashboard = (type_content) => {
    return (dispatch, getState) => {
        dispatch(
            {type: 'CLEAR_DASH',
            type_content: type_content})
    }
};