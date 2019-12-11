import React from 'react';
import '../Styles/Styles.css'
import {connect} from 'react-redux';
import HorizontalList from '../Components/HorizontalList'
import {FetchAPI} from "../Actions/FetchAction";

class Select_Individual_Movie extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {




        //this.props.FetchAPI("https://api.themoviedb.org/3/movie/upcoming?api_key=9af2cb9433dbe1e985ec3f026427fe3d&language=en-US&page=1", 'upcoming', 'movies');
        //this.props.FetchAPI("https://api.themoviedb.org/3/movie/top_rated?api_key=9af2cb9433dbe1e985ec3f026427fe3d&language=en-US&page=1", 'top_rated', 'movies');
        this.props.FetchAPI("https://api.themoviedb.org/3/movie/popular?api_key=9af2cb9433dbe1e985ec3f026427fe3d&language=en-US&page=1", 'popular', 'movies');
        this.props.FetchAPI("https://api.themoviedb.org/3/tv/popular?api_key=9af2cb9433dbe1e985ec3f026427fe3d&language=en-US&page=1", 'popular', 'series');

    }

    render() {

        return (

            <div>
                <h1 className="titulos pt-3 pb-3">MOVIES</h1>

                <HorizontalList titulo={'1'} info={this.props.popular_movie} type={'Movie'} listacess={'no'}
                                content={'none'}/>

            <h1 className="titulos pt-3 pb-3">SERIES</h1>
                <HorizontalList titulo={'2'} info={this.props.popular_serie} type={'Serie'} listacess={'no'}
                                content={'none'}/>
  {/*
                <h1 className="titulos pt-3 pb-3">BOOKS</h1>
                <HorizontalList titulo={''} info={this.props.popular} type={'Movie'} listacess={'yes'}
                                content={'Popular'}/>*/}

            </div>
        )

    }
}

const mapStateToProps = (state) => {
    return {popular_movie: state.movies.popular,popular_serie:state.series.popular}
};

const mapDispatchtoProps = (dispatch) => {
    return {
        FetchAPI: (API, content, type_content) => dispatch(FetchAPI(API, content, type_content))
    }

};




export default connect(mapStateToProps, mapDispatchtoProps)(Select_Individual_Movie);

{/*<div>
                   <Button color='primary' id='toggler' style={{marginBottom:'1rem'}}/>
                   Botão
                    <Button/>
                    <Collapse toggler='#toggler'>
                        <Card>
                            Adicionado aos teus favoritos!
                        </Card>
                    </Collapse>
                </div>

            </div>*/

}

