import React from 'react';
import './Styles/Styles.css'
import HorizontalList from './Components/HorizontalList'
import {Link} from "react-router-dom";
import arrowemblem from "./Images/arrow_emblem.svg";
import './Styles/Styles.css';
import {connect} from 'react-redux';

const Books = (props) => {
    return (

        <div>
            <h1 className="titulos pt-3 pb-3">BOOKS</h1>

            <Link className={'titulos2'} to={"/List/Book/AllBestSellers"}>
                <h2 className={'titulos3 d-inline'}> SEE ALL OF THE BEST SELLERS ...</h2>
                <img src={arrowemblem} className={'d-inline arrowemblem'} width={30}/>

            </Link>

            <HorizontalList titulo={'Young Adult...'} info={props.young_adult} type={'Book'} listacess={'no'}
                            content={'YoungAdult'}/>

            <HorizontalList titulo={'Fiction ...'} info={props.hardcover_fiction} type={'Book'} listacess={'no'}
                            content={'Fiction'}/>

            <HorizontalList titulo={'NonFiction ...'} info={props.hardcover_nonfiction} type={'Book'} listacess={'no'}
                            content={'NonFiction'}/>

            <HorizontalList titulo={'Graphic Novels & Manga ...'} info={props.graphic_books_and_manga} type={'Book'}
                            listacess={'no'} content={'GraphicNovels&Manga'}/>

            <HorizontalList titulo={'Middle Grade ...'} info={props.childrens_middle_grade} type={'Book'}
                            listacess={'no'} content={'MiddleGrade'}/>

        </div>
    )
};

const mapStateToProps = (state) => {

    return ({
        young_adult: state.books.young_adult,
        hardcover_fiction: state.books.hardcover_fiction,
        hardcover_nonfiction: state.books.hardcover_nonfiction,
        graphic_books_and_manga: state.books.graphic_books_and_manga,
        childrens_middle_grade: state.books.childrens_middle_grade
    })

};


export default connect(mapStateToProps)(Books);