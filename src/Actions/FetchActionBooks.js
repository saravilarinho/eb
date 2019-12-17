import {ConnectAPI} from './ConnectAPI';

export const FetchAPIBooks = (API, content, type_content) => {


    let bookisbns = [];

    return (dispatch, getState) => {
        ConnectAPI(API).then((response) => {


                response.results.map(book => {


                        if (Array.isArray(book.book_details) === true) {

                            //key nova: AIzaSyCMhPWtvzMZf6RFRR7xJ69I9UIBEHT80Gk
                            //key nova nova: AIzaSyDkibc59KVVXNm-6LbWRp5HUybKJY7Yhpw
                            //key nova nova nova: AIzaSyA3NQ18-cLUvwl6PFpWG1gLenSazhEs8ms
                            //key nova nova nova nova: AIzaSyCg9iTNiLd_9f9k55g2wrxjJOTpdokFZqs
                            //key nova nova nova nova nova: AIzaSyAiDQzrYuazi4kakyEopdexfMzPXwxqwqw


                            ConnectAPI('https://www.googleapis.com/books/v1/volumes?q=isbn:' + book.book_details[0].primary_isbn13 + '&key=AIzaSyAiDQzrYuazi4kakyEopdexfMzPXwxqwqw')
                                .then((response) => {

                                if (response.totalItems > 0) {

                                    dispatch({
                                        type: 'FETCH_API',
                                        result: response.items[0].volumeInfo,
                                        content: content,
                                        type_content: type_content
                                    })

                                }


                            }).catch(
                                dispatch({
                                    type: 'FETCH_API_FAIL',
                                    result: false,
                                    content: content,
                                    type_content: type_content
                                }))

                        }
                    }
                )
                ;


            }
        ).catch(
            dispatch({
                type: 'FETCH_API_FAIL',
                result: false,
                content: content,
                type_content: type_content
            })
        );


    }

};