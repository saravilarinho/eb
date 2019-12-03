import React from 'react';
import './Styles/Styles.css';
import {connect} from 'react-redux';
import HorizontalList from './Components/HorizontalList';

const Books = (props) => {
    return (

        <div>
            <h1 className="titulos pt-3 pb-3">BOOKS</h1>
            <h2 className={'titulos'}> SEE ALL OF THE BEST ...</h2>

            <HorizontalList titulo={'Young Adult...'} info={props.young_adult} type={'Book'} listacess={'no'} content={'YoungAdult'}/>

            <HorizontalList titulo={'Fiction ...'} info={props.hardcover_fiction} type={'Book'} listacess={'no'} content={'Fiction'}/>

            <HorizontalList titulo={'NonFiction ...'} info={props.hardcover_nonfiction} type={'Book'} listacess={'no'} content={'NonFiction'} />

            <HorizontalList titulo={'Graphic Novels & Manga ...'} info={props.graphic_books_and_manga} type={'Book'} listacess={'no'} content={'GraphicNovels&Manga'}/>

            <HorizontalList titulo={'Middle Grade ...'} info={props.childrens_middle_grade} type={'Book'} listacess={'no'} content={'MiddleGrade'}/>

        </div>
)
};

const mapStateToProps = (state) => {

    return({
        young_adult: state.books.young_adult,
        hardcover_fiction: state.books.hardcover_fiction,
        hardcover_nonfiction: state.books.hardcover_nonfiction,
        graphic_books_and_manga:state.books.graphic_books_and_manga,
        childrens_middle_grade: state.books.childrens_middle_grade
    })

};



export default connect(mapStateToProps)(Books);
