import React from 'react';
import './Styles/Styles.css'
import HorizontalList from './Components/HorizontalList'
import {Link} from "react-router-dom";
import arrowemblem from "./Images/arrow_emblem.svg";
import './Styles/Styles.css';
import {connect} from 'react-redux';
import {FetchAPIBooks} from "./Actions/FetchActionBooks";
import Logo from './Images/Logo.png';


class Books extends React.Component {

    constructor(props) {
        super(props);

    }

    componentDidMount() {

        this.props.FetchAPIBooks("https://api.nytimes.com/svc/books/v3/lists.json?list=young-adult&api-key=rRapa7ol5qNQBOJ7XrhjxovNu3907ulc", 'youngadult', 'books');
        this.props.FetchAPIBooks("https://api.nytimes.com/svc/books/v3/lists.json?list=hardcover-fiction&api-key=6RBlK3mo9vCIv5tjnsBbGrx0hfrGTQxz", 'fiction', 'books');
        this.props.FetchAPIBooks("https://api.nytimes.com/svc/books/v3/lists.json?list=hardcover-nonfiction&api-key=6RBlK3mo9vCIv5tjnsBbGrx0hfrGTQxz", 'nonFiction', 'books');
        this.props.FetchAPIBooks("https://api.nytimes.com/svc/books/v3/lists.json?list=graphic-books-and-manga&api-key=6RBlK3mo9vCIv5tjnsBbGrx0hfrGTQxz", 'graphicnovelsmanga', 'books');
        this.props.FetchAPIBooks("https://api.nytimes.com/svc/books/v3/lists.json?list=children-middle-gradet&api-key=6RBlK3mo9vCIv5tjnsBbGrx0hfrGTQxz", 'middlegrade', 'books');
    }


    Loading = (typebook) => {

        return <section className={'row justify-content-center my-5'}>

            <div className="spinner-border text-warning loadingsmall d-inline-block" id={'loading'}
                 role="status">
                <span className="sr-only">Loading...</span>
            </div>
            <div className={'col-12 my-3'}>
                <section className={'row loadingtitle justify-content-center'}>
                    <small className={'col-4 col-md-2 pl-3'}>Loading {typebook} Books</small>
                </section>
            </div>
        </section>

    };

    render() {


        return (


            <div>
                <h1 className="titulos pt-3 pb-3">BOOKS</h1>
                 <h2 className={'titulos3 d-inline'}> ALL OF THE BEST SELLERS ACCORDING TO NEW YORK TIMES...</h2>




                <section>
                    {this.props.young_adult.length > 0 ?

                        <HorizontalList titulo={'Young Adult...'} info={this.props.young_adult} type={'Book'}
                                        listacess={'no'}
                                        content={'YoungAdult'}/> : this.Loading('Young Adult')}

                    {this.props.hardcover_fiction.length > 0 ?

                        <HorizontalList titulo={'Fiction ...'} info={this.props.hardcover_fiction} type={'Book'}
                                        listacess={'no'}
                                        content={'Fiction'}/> : this.Loading('Fiction')}

                    {this.props.hardcover_nonfiction.length > 0 ?

                        <HorizontalList titulo={'NonFiction ...'} info={this.props.hardcover_nonfiction} type={'Book'}
                                        listacess={'no'}
                                        content={'NonFiction'}/> : this.Loading('NonFiction')}

                    {this.props.graphic_books_and_manga.length > 0 ?

                        <HorizontalList titulo={'Graphic Novels & Manga ...'} info={this.props.graphic_books_and_manga}
                                        type={'Book'}
                                        listacess={'no'}
                                        content={'GraphicNovels&Manga'}/> : this.Loading('Graphic Novels & Manga')}

                </section>
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    return ({
        young_adult: state.books.young_adult,
        hardcover_fiction: state.books.hardcover_fiction,
        hardcover_nonfiction: state.books.hardcover_nonfiction,
        graphic_books_and_manga: state.books.graphic_books_and_manga,

    })

};


const mapDispatchtoProps = (dispatch) => {
    return {
        FetchAPIBooks: (API, content, type_content) => {
            dispatch(FetchAPIBooks(API, content, type_content))
        }
    }

};


export default connect(mapStateToProps, mapDispatchtoProps)(Books);