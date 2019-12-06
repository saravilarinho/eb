import React from 'react';
import './Styles/Styles.css'
import HorizontalList from './Components/HorizontalList'
import {Link} from "react-router-dom";
import arrowemblem from "./Images/arrow_emblem.svg";
import './Styles/Styles.css';
import {connect} from 'react-redux';
import {FetchAPIBooks} from "./Actions/FetchActionBooks";
import {FetchAPIBooks1by1} from "./Actions/FetchActionBooks1by1";

import MiniatureEntertaiment from "./Components/MiniatureEntertaiment";

class Books extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

       this.props.FetchAPIBooks("https://api.nytimes.com/svc/books/v3/lists.json?list=young-adult&api-key=6RBlK3mo9vCIv5tjnsBbGrx0hfrGTQxz", 'youngadult', 'books');
      // this.props.FetchAPIBooks("https://api.themoviedb.org/3/movie/top_rated?api_key=9af2cb9433dbe1e985ec3f026427fe3d&language=en-US&page=1", 'fiction', 'books');
       //this.props.FetchAPIBooks("https://api.themoviedb.org/3/movie/popular?api_key=9af2cb9433dbe1e985ec3f026427fe3d&language=en-US&page=1", 'nonFiction', 'books');
       //this.props.FetchAPIBooks("https://api.themoviedb.org/3/movie/popular?api_key=9af2cb9433dbe1e985ec3f026427fe3d&language=en-US&page=1", 'graphicnovelsmanga', 'books');
       //this.props.FetchAPIBooks("https://api.themoviedb.org/3/movie/popular?api_key=9af2cb9433dbe1e985ec3f026427fe3d&language=en-US&page=1", 'middlegrade', 'books');
    }

    render() {

        return (


            <div>
                <h1 className="titulos pt-3 pb-3">BOOKS</h1>

                <Link className={'titulos2'} to={"/List/Book/AllBestSellers"}>
                    <h2 className={'titulos3 d-inline'}> SEE ALL OF THE BEST SELLERS ...</h2>
                    <img src={arrowemblem} className={'d-inline arrowemblem'} width={30}/>

                </Link>
{/*

                {this.props.isbn_ya.length>0

                    this.props.FetchAPIBooks("https://api.nytimes.com/svc/books/v3/lists.json?list=young-adult&api-key=6RBlK3mo9vCIv5tjnsBbGrx0hfrGTQxz", 'youngadult', 'books');


                }*/}

                <HorizontalList titulo={'Young Adult...'} info={this.props.young_adult} type={'Book'} listacess={'no'}
                                content={'YoungAdult'}/>

               {/* <HorizontalList titulo={'Fiction ...'} info={this.props.hardcover_fiction} type={'Book'} listacess={'no'}
                                content={'Fiction'}/>

                <HorizontalList titulo={'NonFiction ...'} info={this.props.hardcover_nonfiction} type={'Book'}
                                listacess={'no'}
                                content={'NonFiction'}/>

                <HorizontalList titulo={'Graphic Novels & Manga ...'} info={this.props.graphic_books_and_manga} type={'Book'}
                                listacess={'no'} content={'GraphicNovels&Manga'}/>

                <HorizontalList titulo={'Middle Grade ...'} info={this.props.childrens_middle_grade} type={'Book'}
                                listacess={'no'} content={'MiddleGrade'}/>
*/}
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
        childrens_middle_grade: state.books.childrens_middle_grade,
        isbn_ya:state.isbns.ya,
        isbn_hf: state.isbns.hf,
        isbn_hnf: state.isbns.hnf,
        isbn_gbam: state.isbns.gbam,
        isbn_cmg: state.isbns.cmg



    })

};


const mapDispatchtoProps = (dispatch) => {
    return {
        FetchAPIBooks: (API, content, type_content) => dispatch(FetchAPIBooks(API, content, type_content)),
        FetchAPIBooks1by1: (API, content, type_content) => dispatch(FetchAPIBooks1by1(API, content, type_content))

    }

};


export default connect(mapStateToProps,mapDispatchtoProps)(Books);