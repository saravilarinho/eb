import React from 'react';
import './Styles/Styles.css'
import {connect} from 'react-redux';
import {FetchActionFavorites} from "./Actions/FetchActionFavorites";
import HorizontalList from "./Components/HorizontalList";



class Favorites extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: 0,
        }
    }


    Loading = () => {

        return <section className={'row justify-content-center my-5'}>

            <div className="spinner-border text-warning loadingsmall d-inline-block" id={'loading'}
                 role="status">
                <span className="sr-only">Loading...</span>
            </div>
            <div className={'col-12 my-3'}>
                <section className={'row loadingtitle justify-content-center'}>
                    <small className={'col-4 col-md-2 pl-3'}>Loading Movies</small>
                </section>
            </div>
        </section>

    };

    render() {

        if (this.props.user.favorites.movies.length > 0 && this.state.movies === 0) {
            this.props.FetchActionFavorites(this.props.user.favorites.movies, 'Movies' );
            this.setState({movies: 1})

        }


        return (


          <div>

              {this.state.movies !== 0 && this.props.user.favorites.movies.length === this.props.user.favorites.movies_content.results.length ?

                  <HorizontalList titulo={'Favorite Movies'} info={this.props.user.favorites.movies_content} type={'Movie'}
                                  listacess={'yes'}
                                  content={'Favorites'}/>

                  : this.Loading()
              }






            </div>
        )


    }
}





const mapStateToProps = (state) => {

    return {
        user: state.users,
        upcoming: state.movies.upcoming, top_rated: state.movies.top_rated, popular: state.movies.popular
    }
};



const mapDispatchtoProps = (dispatch) => {
    return {
        FetchActionFavorites: (IDS, type_content) => { dispatch(FetchActionFavorites(IDS,type_content)) }

    }
    };






export default connect(mapStateToProps, mapDispatchtoProps)(Favorites);