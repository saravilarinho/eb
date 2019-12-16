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

                    ConnectAPI('https://www.googleapis.com/books/v1/volumes?q=isbn:' + IDS[x] + '&key=AIzaSyCMhPWtvzMZf6RFRR7xJ69I9UIBEHT80Gk')
                        .then((response) => dispatch({
                                type: 'FETCH_FAVORITES',
                                result: response.items[0].volumeInfo,
                                type_content: type_content
                            })
                        )

                }
            
                // {console.log(result.items[0].volumeInfo)}
                //nova key: AIzaSyCMhPWtvzMZf6RFRR7xJ69I9UIBEHT80Gk
                //antiga key: AIzaSyC755kq2kWZ-_6Gb21br9piXNrqJEB5GoY
            }


            //CONDIÇÃO PARA MAIS DE 20 FILMES FAVORITOS
           /* if (IDS.length < (page * 20) && x >= IDS.length - 1) {
                x = 20;
            }*/


        }





    }
};