import React from 'react';
import './Styles/Styles.css'
import {connect} from 'react-redux';
import {Redirect} from "react-router";
import HorizontalList from "./Movies";
//import HorizontalList from './Components/HorizontalList'



class Favourites extends React.Component{
    constructor(props){
        super(props);
    }

    render(){


        return(
            <div>
            {this.props.user !== null ?



                <div>
                    <section>

                        <h1 className="titulos pt-3 pb-3">FAVOURITES</h1>

                        {console.log(this.props.users)}
                        {/*<HorizontalList titulo={'Upcoming ...'} info={this.props.upcoming} type={'Movie'}
                                        listacess={'yes'}
                                        content={'Upcoming'}/> : this.Loading('Upcoming')
*/}

                    </section>

                 </div>


                : <Redirect to='/Homepage' />}

            </div>

        )
    }



}


const mapStateToProps = (state) => {

    return {
        user: state.users }
};


export default connect(mapStateToProps, null)(Favourites);