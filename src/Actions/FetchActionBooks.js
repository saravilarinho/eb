import {ConnectAPI} from './ConnectAPI';

export const FetchAPIBooks = (API, content, type_content) => {


    let bookisbns = [];

    return (dispatch, getState) => {
        ConnectAPI(API).then((response) => {


                response.results.map(book => {


                        if (Array.isArray(book.book_details)=== true) {

                            ConnectAPI('https://www.googleapis.com/books/v1/volumes?q=isbn:' +  book.book_details[0].primary_isbn13 + '&key=AIzaSyC755kq2kWZ-_6Gb21br9piXNrqJEB5GoY').then((response) => {

                                if (response.totalItems > 0) {

                                    dispatch({
                                        type: 'FETCH_API',
                                        result: response.items[0].volumeInfo,
                                        content: content,
                                        type_content: type_content
                                    })

                                }


                            })

                        }
                    }





                    /* */
                )
                ;


            }
        );


    }

};