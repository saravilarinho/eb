import {ConnectAPI} from './ConnectAPI';

export const FetchAPI = (API, content, type_content) => {

    return (dispatch, getState) => {
        ConnectAPI(API).then((response) => dispatch({type: 'FETCH_API', result: response, content: content, type_content: type_content})  ,
            (response) => console.log("NOK"));



    }


};