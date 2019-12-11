//import authTypes from './auth.types'

export const SetFavourites = (movies, series, books) => {

    return (dispatch, getState) => {

          dispatch({
              type: 'ADD_FAVOURITE',
              movies: movies,
              books: books,
              series: series
          })
    }

};