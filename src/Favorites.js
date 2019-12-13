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
            series: 0,
            books: 0
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
                    <small className={'col-4 col-md-2 pl-3'}>Loading Favorites</small>
                </section>
            </div>
        </section>

    };

    render() {

        if (this.props.user.favorites.movies.length > 0 && this.state.movies === 0) {
            this.props.FetchActionFavorites(this.props.user.favorites.movies, 'Movies', 1);
            this.setState({movies: 1});

        }


        if (this.props.user.favorites.series.length > 0 && this.state.series === 0) {
            this.props.FetchActionFavorites(this.props.user.favorites.series, 'Series', 1 );
            this.setState({series: 1});

        }


        if (this.props.user.favorites.books.length > 0 && this.state.books === 0) {
            this.props.FetchActionFavorites(this.props.user.favorites.books, 'Books', 1 );
            this.setState({books: 1});

        }



        return (


          <div>
              <h1 className="titulos pt-3 pb-3">FAVORITES</h1>


              {this.state.movies !== 0 && this.props.user.favorites.movies.length === this.props.user.favorites.movies_content.results.length ?

                  <div>



                      <HorizontalList titulo={'Favorite Movies'} info={this.props.user.favorites.movies_content} type={'Movie'}
                                  listacess={'yes'}
                                  content={'Favorites'}/>
                  </div>

                  : this.Loading()
              }


              {this.state.series !== 0 && this.props.user.favorites.series.length === this.props.user.favorites.series_content.results.length ?

                  <HorizontalList titulo={'Favorite Series'} info={this.props.user.favorites.series_content} type={'Serie'}
                                  listacess={'yes'}
                                  content={'Favorites'}/>

                  : this.Loading()
              }



              {this.state.books !== 0 && this.props.user.favorites.books.length === this.props.user.favorites.books_content.length ?

                      <HorizontalList titulo={'Favorite Books'} info={this.props.user.favorites.books_content} type={'Book'}
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
    }
};



const mapDispatchtoProps = (dispatch) => {
    return {
        FetchActionFavorites: (IDS, type_content, page) => { dispatch(FetchActionFavorites(IDS,type_content, page)) }

    }
    };






export default connect(mapStateToProps, mapDispatchtoProps)(Favorites);