import React from 'react';

const initialState = {

    users: {
        login: false,
        email: null,
        favorites: {
            movies: [],
            series: [],
            books: [],
        }
    },

    movies: {
        upcoming: null,
        top_rated: null,
        popular: null,
    },


    series: {
        tv_on_the_air: null,

        top_rated: null,

        popular: null,


    },

    books: {

        young_adult: [],
        hardcover_fiction: [],
        hardcover_nonfiction: [],
        graphic_books_and_manga: [],
        childrens_middle_grade: [],


    },


    individual_entertaiment: false,
    random: {

        ony: false,
        random_content: [],
        type: "",

    },
    search:{

        movies:null,
        series:null,
        books:null,

    }


};


const rootReducer = (state = initialState, action) => {

        if (action.type === 'SIGN_IN') {
            return {
                ...state,
                users: {
                    ...state.users,
                    login: true,
                    email: action.email
                }
            }
        }



    if (action.type === 'INDIVIDUAL_BACK_0') {

        console.log('hello');

        return {
            ...state,
            individual_entertaiment: false


        }
    }




    if (action.type === 'SIGN_OUT') {

            return {
                ...state,
                users: {
                    ...state.users,
                    login: false,
                    email: null
                }
            }
        }

        if (action.type === 'FETCH_API') {

            if (action.content === 'search') {

                if (action.type_content === 'movies') {


                    return {
                        ...state,
                        search: {...state.search,
                            movies:action.result

                        }
                    }

                }


                if (action.type_content === 'series') {


                    return {
                        ...state,
                        search: {...state.search,
                            series:action.result

                        }
                    }

                }



            }
            if (action.content === 'random') {


                if (action.type_content === 'movies') {


                    let randomnr = Math.floor(Math.random() * ((action.result.results.length - 1) - 0 + 1)) + 0;

                    return {
                        ...state,
                        random: {
                            ony: true,
                            random_content: action.result.results[randomnr],
                            type: "movies"
                        }
                    }


                }

                if (action.type_content === 'series') {


                    let randomnr = Math.floor(Math.random() * ((action.result.results.length - 1) - 0 + 1)) + 0;

                    return {
                        ...state,
                        random: {
                            ony: true,
                            random_content: action.result.results[randomnr],
                            type: "series"
                        }
                    }


                }

                if (action.type_content === 'books') {

                    return {
                        ...state,
                        random: {
                            ony: true,
                            random_content: action.result,
                            type: "books"
                        }
                    }


                }

            }

            if (action.type_content === 'individual') {


                return {
                    ...state,
                    individual_entertaiment: action.result
                }
            }

            if (action.type_content === 'movies') {

                if (action.content === 'upcoming') {
                    return {
                        ...state,


                        movies: {...state.movies, upcoming: action.result}
                    }
                }
                if (action.content === 'top_rated') {
                    return {
                        ...state,


                        movies: {...state.movies, top_rated: action.result}
                    }
                }

                if (action.content === 'popular') {
                    return {
                        ...state,


                        movies: {...state.movies, popular: action.result}
                    }
                }

            }

            if (action.type_content === 'series') {

                if (action.content === 'tv_on_the_air') {
                    return {
                        ...state,


                        series: {...state.series, tv_on_the_air: action.result}
                    }
                }


                if (action.content === 'top_rated') {
                    return {
                        ...state,


                        series: {...state.series, top_rated: action.result}
                    }
                }

                if (action.content === 'popular') {
                    return {
                        ...state,


                        series: {...state.series, popular: action.result}
                    }
                }

            }

            if (action.type_content === 'books') {


                if (action.content === 'youngadult') {


                    return {
                        ...state,


                        books: {...state.books, young_adult: [...state.books.young_adult, action.result]}
                    }

                }


                if (action.content === 'fiction') {

                    return {
                        ...state,


                        books: {...state.books, hardcover_fiction: [...state.books.hardcover_fiction, action.result]}
                    }
                }

                if (action.content === 'nonFiction') {


                    return {
                        ...state,


                        books: {
                            ...state.books,
                            hardcover_nonfiction: [...state.books.hardcover_nonfiction, action.result]
                        }
                    }

                }

                if (action.content === 'graphicnovelsmanga') {

                    return {
                        ...state,


                        books: {
                            ...state.books,
                            graphic_books_and_manga: [...state.books.graphic_books_and_manga, action.result]
                        }
                    }

                }

                if (action.content === 'middlegrade') {

                    return {
                        ...state,


                        books: {
                            ...state.books,
                            childrens_middle_grade: [...state.books.childrens_middle_grade, action.result]
                        }
                    }

                }
            }

        }

    if(action.type === 'ADD_FAVOURITE'){

        console.log(action.movies);
        console.log('entrei nA ACAO DO ROOTREDUCER')

      /*  return {
            ...state,
            users: {
                movies: [action.movies],
                series: [action.series],
                books: [action.books]
            }
        }*/




    }

    return state;
};


export default rootReducer;