import {ConnectAPI} from './ConnectAPI';

export const FetchAPIBooks = (API, content, type_content) => {


    return (dispatch, getState) => {
        ConnectAPI(API).then((response) => dispatch({
                type: 'FETCH_API_ISBNS',
                result: response,
                content: content,
                type_content: type_content
            })
        );


    }

};