//import authTypes from './auth.types'

export const SetFavourites = (movies, series, books,id) => {

    return (dispatch, getState) => {

          dispatch({
              type: 'ADD_FAVOURITE',
              movies: movies,
              books: books,
              series: series,
              documentid:id,
          })
    }

};