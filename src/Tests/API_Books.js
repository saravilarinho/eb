import React from 'react';
import '../Styles/Styles.css';


function Api_Books() {


    var books = require('google-books-catalogue-search');

    books.search("Margarida", function(error, results) {
        if ( ! error ) {
            console.log(results);
        } else {
            console.log(error);
        }
    });
    return (
        <div>

            <p>
                Teste API Books!!!!!!!!!!!!!!!!!!!!!!!!!!!!! Bota que tem panico vs ansiedade vs terror
            </p>
        </div>
    );
}

export default Api_Books;
