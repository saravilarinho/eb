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


        if (this.props.match.params.type === 'Movies') {

            this.props.FetchAPI("https://api.themoviedb.org/3/movie/" + this.props.match.params.identertaiment + "?api_key=9af2cb9433dbe1e985ec3f026427fe3d&language=en-US", 'individual', 'individual');


        }

        if (this.props.match.params.type === 'Series') {

            this.props.FetchAPI(" https://api.themoviedb.org/3/tv/" + this.props.match.params.identertaiment + "?api_key=9af2cb9433dbe1e985ec3f026427fe3d&language=en-US", 'individual', 'individual');

        }


        if (this.props.match.params.type === 'Books') {

            this.props.FetchAPI("  https://www.googleapis.com/books/v1/volumes?q=isbn:" + this.props.match.params.identertaiment, 'individual', 'individual')

        } else {
            return <Redirect to='/Homepage'/>

        }
    }


    componentWillUnmount() {
        this.props.IndividualBackTo0();
    }


    Loading = () => {

        return <section className={'row justify-content-center my-5'}>

            <div className="spinner-border text-warning loading d-inline-block" id={'loading'}
                 role="status">
                <span className="sr-only">Loading...</span>
            </div>

        </section>

    };


    render() {

        return (

            <section>
            {this.props.individual_entertaiment !== false ?


                    <div className={'pads'}>

                        <IndividualEntertaiment type={this.props.match.params.type}
                                                info={this.props.individual_entertaiment}/>
                    </div>
                    : this.Loading()
            }
            </section>
        );
    }

}

const mapStateToProps = (state) => {
    return {individual_entertaiment: state.individual_entertaiment}
};

const mapDispatchtoProps = (dispatch) => {
    return {
        FetchAPI: (API, content, type_content) => dispatch(FetchAPI(API, content, type_content)),
        IndividualBackTo0: () => {
            dispatch({type: 'INDIVIDUAL_BACK_0'})
        },
    }

};

export default connect(mapStateToProps, mapDispatchtoProps)(IndividualEntertaimentPage);
