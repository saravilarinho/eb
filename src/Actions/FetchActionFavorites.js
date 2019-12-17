import {ConnectAPI} from "./ConnectAPI";


export const FetchActionFavorites = (IDS, type_content, page) => {


    return (dispatch, getState) => {

        let start = (page - 1) * 20;
        let end = (page * 20) -1;

        console.log(start);
        console.log(end);


        for (let x = start; x <= end; x++) {



            if (type_content === "Movies") {

                if(IDS[x] === undefined){
                    x = end
                }
                else {
                    ConnectAPI("https://api.themoviedb.org/3/movie/" + IDS[x] + "?api_key=9af2cb9433dbe1e985ec3f026427fe3d&language=en-US&fbclid=IwAR2T1U1Kspx-V184iQAq2XUwkvX8I1DIjUY6X9oe7Yr2tL1cDC8IDR8Vvlw")
                        .then((result) =>
                            dispatch({
                                type: 'FETCH_FAVORITES',
                                result: result,
                                type_content: type_content
                            }))
                }

            }

            if (type_content === "Series") {


                if(IDS[x] === undefined){
                    x = end

                }else {

                    ConnectAPI("https://api.themoviedb.org/3/tv/" + IDS[x] + "?api_key=9af2cb9433dbe1e985ec3f026427fe3d&language=en-US")
                        .then((result) => dispatch({
                            type: 'FETCH_FAVORITES',
                            result: result,
                            type_content: type_content
                        }));
                }
            }

            if (type_content === "Books") {

                if(IDS[x] === undefined){
                    x = end

                }else {

                    ConnectAPI('https://www.googleapis.com/books/v1/volumes?q=isbn:' + IDS[x] + '&key=AIzaSyD-zklYb-4hfvnS0K4AVXp08nLn_eW3Wlg')
                        .then((response) => response.totalItems > 0  ? dispatch({
                                type: 'FETCH_FAVORITES',
                                result: response.items[0].volumeInfo,
                                type_content: type_content
                            }):console.log(IDS[x])
                        )
                }
                // {console.log(result.items[0].volumeInfo)}
                // nova nova key: AIzaSyDkibc59KVVXNm-6LbWRp5HUybKJY7Yhpw
                //nova key: AIzaSyCMhPWtvzMZf6RFRR7xJ69I9UIBEHT80Gk
                //antiga key: AIzaSyC755kq2kWZ-_6Gb21br9piXNrqJEB5GoY
                //nova nova nova key: AIzaSyA3NQ18-cLUvwl6PFpWG1gLenSazhEs8ms
                //nova nova nova nova key: AIzaSyAiDQzrYuazi4kakyEopdexfMzPXwxqwqw
            }
        }
    }
};