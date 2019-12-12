import {ConnectAPI} from './ConnectAPI';

export const FetchAPI = (API, content, type_content) => {

    return (dispatch, getState) => {

        ConnectAPI(API).then((response) => {

                (console.log('api connect'));
            console.log(response);
                dispatch({
                    type: 'FETCH_API',
                    result: response,
                    content: content,
                    type_content: type_content
                })
            },
            (response) => dispatch({
                type: 'FETCH_API_FAIL',
                result: false,
                content: content,
                type_content: type_content
            })).catch(
            dispatch({
                type: 'FETCH_API_FAIL',
                result: false,
                content: content,
                type_content: type_content
            })
        );


    }


};