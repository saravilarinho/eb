import React from 'react';
import '../Styles/Styles.css'
import MiniatureEntertaiment from "../Components/MiniatureEntertaiment";
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom'
import img from '../Images/rei_leao.jpg';


class Select_Individual_Movie extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {


        return (

            <div>
                <h1 className="titulos pt-3 pb-5">Movies</h1>
                <h1 className="titulos pt-3 pb-5">Series</h1>
                <h1 className="titulos pt-3 pb-5">Books</h1>
                <h1 className="titulos pt-3 pb-5">Music</h1>


                <div className={'ml-5'}>




                    {/*{Type==='Movie' &&

                    info.map((item) => <MiniatureEntertaiment img={item.poster_path} text={item.overview}
                                                              title={item.title} id={item.id} type={"Movie"}/>)
                    }


                    {Type==='Serie' &&

                    info.map((item) => <MiniatureEntertaiment img={item.poster_path} text={item.overview}
                                                              title={item.name} id={item.id}  type={'Serie'}/>)
                    }

                    {Type==='Book' &&

                    info.map((item) => <MiniatureEntertaiment img={item.items[0].volumeInfo.imageLinks.thumbnail} text={item.items[0].volumeInfo.description}
                                                              title={item.items[0].volumeInfo.title} id={item.items[0].volumeInfo.industryIdentifiers[0].identifier} type={'Book'}/>)
                    }*/}

                </div>


            </div>


        )
    }


}





export default Select_Individual_Movie;

