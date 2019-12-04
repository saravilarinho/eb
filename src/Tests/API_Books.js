
/*
    // PESQUISA BOOK


    var books = require('google-books-catalogue-search');

    books.search("Margarida", function (error, results) {
        if (!error) {
            console.log(results);
        } else {
            console.log(error);
        }
    });


// INDIVIDUAL BOOK

    const api = "https://www.googleapis.com/books/v1/volumes?q=isbn:9780399178573";
    const request = new XMLHttpRequest();
    request.open('GET', api);
    request.onload = () => {

        if (request.status === 200) {
            console.log(request.response);
        } else {

            console.log('erro na coneção a base de dados');
        }
    };
    request.send();

// UPCOMING MOVIES

const api = "https://api.themoviedb.org/3/movie/upcoming?api_key=9af2cb9433dbe1e985ec3f026427fe3d&language=en-US&page=1";
    const request = new XMLHttpRequest();
    reque  st.open('GET', api);
    request.onload = () => {

        if (request.status === 200) {
            console.log(JSON.parse(request.response));
        } else {

            console.log('erro na coneção a base de dados');
        }
    };
    request.send();

// NYT API

    const api = "https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=6RBlK3mo9vCIv5tjnsBbGrx0hfrGTQxz";
    const request = new XMLHttpRequest();
    request.open('GET', api);
    request.onload = () => {

        if (request.status === 200) {
            console.log(JSON.parse(request.response));
        } else {

            console.log('erro na coneção a base de dados');
        }
    };
    request.send();

*/

