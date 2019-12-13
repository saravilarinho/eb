/*import {ConnectAPI} from "./ConnectAPI";


export const FetchActionFavorites = (IDS, type_content) =>{

    let save_favorites =[];

    return (dispatch, getState) => {



        IDS.map((item) => {

            ConnectAPI("https://api.themoviedb.org/3/movie/"+ item +"?api_key=9af2cb9433dbe1e985ec3f026427fe3d&language=en-US&fbclid=IwAR2T1U1Kspx-V184iQAq2XUwkvX8I1DIjUY6X9oe7Yr2tL1cDC8IDR8Vvlw")
                .then( (result) => save_favorites.push(result))
        });

        dispatch({
            type: 'FETCH_FAVORITES',
            result: save_favorites,
            type_content: type_content
        });

    }
};











*/


import {ConnectAPI} from "./ConnectAPI";


export const FetchActionFavorites = (IDS, type_content) => {


    return (dispatch, getState) => {


        IDS.map((item) => {

            if(type_content === "Movies") {


                ConnectAPI("https://api.themoviedb.org/3/movie/" + item + "?api_key=9af2cb9433dbe1e985ec3f026427fe3d&language=en-US&fbclid=IwAR2T1U1Kspx-V184iQAq2XUwkvX8I1DIjUY6X9oe7Yr2tL1cDC8IDR8Vvlw")
                    .then((result) => dispatch({
                        type: 'FETCH_FAVORITES',
                        result: result,
                        type_content: type_content
                    }))

            }

            if(type_content === "Series"){


                ConnectAPI("https://api.themoviedb.org/3/tv/" + item + "?api_key=9af2cb9433dbe1e985ec3f026427fe3d&language=en-US")
                    .then((result) => dispatch({
                        type: 'FETCH_FAVORITES',
                        result: result,
                        type_content: type_content
                    }));


                console.log("tem series")

            }

        });


    }
};













