import React from 'react';
import './Styles/Styles.css';
import IndividualEntertaiment from './Components/IndividualEntertaiment'
import {connect} from 'react-redux';
import {FetchAPI} from "./Actions/FetchAction";
import {Redirect} from "react-router";


class IndividualEntertaimentPage extends React.Component {


    constructor(props) {
        super(props);
    }

    componentDidMount() {

        let type = this.props.match.params.type;
        const id = this.props.match.params.identertaiment;


        if(type==='Movies'){

            this.props.FetchAPI("https://api.themoviedb.org/3/movie/"+id+"?api_key=9af2cb9433dbe1e985ec3f026427fe3d&language=en-US", 'individual', 'individual');


        }

        if(type==='Series'){

            this.props.FetchAPI(" https://api.themoviedb.org/3/tv/"+id+"?api_key=9af2cb9433dbe1e985ec3f026427fe3d&language=en-US", 'individual', 'individual');

                }


        if(type==='Books'){

            this.props.FetchAPI("  https://www.googleapis.com/books/v1/volumes?q=isbn:"+id, 'individual', 'individual')

        }else {
            return <Redirect to='/Homepage' />

        }
    }


        render() {

            let type = this.props.match.params.type;

            return (



            <div className={'pads'}>

                <IndividualEntertaiment type={type} info={this.props.individual_entertaiment}/>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {individual_entertaiment: state.individual_entertaiment}
};

const mapDispatchtoProps = (dispatch) => {
    return {
        FetchAPI: (API, content, type_content) => dispatch(FetchAPI(API, content, type_content))
    }

};

export default connect(mapStateToProps, mapDispatchtoProps) (IndividualEntertaimentPage);
