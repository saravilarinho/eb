import React from 'react';
import './Styles/Styles.css'
import HorizontalList from './Components/HorizontalList'
import {Link} from "react-router-dom";
import arrowemblem from "./Images/arrow_emblem.svg";
import './Styles/Styles.css';
import {connect} from 'react-redux';
import {FetchAPIBooks} from "./Actions/FetchActionBooks";

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

    render() {

        return (


            <div>
                <h1 className="titulos pt-3 pb-3">BOOKS</h1>

                <Link className={'titulos2'} to={"/List/Book/AllBestSellers"}>
                    <h2 className={'titulos3 d-inline'}> SEE ALL OF THE BEST SELLERS ...</h2>
                    <img src={arrowemblem} className={'d-inline arrowemblem'} width={30}/>

                </Link>



                {this.props.young_adult.length>0 &&

                <HorizontalList titulo={'Young Adult...'} info={this.props.young_adult} type={'Book'} listacess={'no'}
                                content={'YoungAdult'}/>
                }



                {this.props.hardcover_fiction.length > 0 &&
                <HorizontalList titulo={'Fiction ...'} info={this.props.hardcover_fiction} type={'Book'} listacess={'no'}
                                                                            content={'Fiction'}/>
                }

                {this.props.hardcover_nonfiction.length > 0 &&

                <HorizontalList titulo={'NonFiction ...'} info={this.props.hardcover_nonfiction} type={'Book'}
                                listacess={'no'}
                                content={'NonFiction'}/>

                }


                {this.props.graphic_books_and_manga.length > 0 &&

                <HorizontalList titulo={'Graphic Novels & Manga ...'} info={this.props.graphic_books_and_manga} type={'Book'}
                                                                                   listacess={'no'} content={'GraphicNovels&Manga'}/>
                }



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

    })

};


const mapDispatchtoProps = (dispatch) => {
    return {
        FetchAPIBooks: (API, content, type_content) => {dispatch(FetchAPIBooks(API, content, type_content))}
    }

};


export default connect(mapStateToProps,mapDispatchtoProps)(Books);