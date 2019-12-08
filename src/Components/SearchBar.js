import React from 'react';
import Lupa from '../Images/search_icon.png'
import '../Styles/Styles.css';


class SearchBar extends React.Component{

        constructor(props) {
            super(props);
            this.state=
                {term:''}
        }

        render() {
            return (

                <div className={'nav-item barra  col-12  col-lg-4 col-xl-7 w-100 p-3 d-inline px-3'}>
                    <input className={'barrapesquisa col-sm-8 col-md-4 w-100'} onChange={this.atualizar_pai}/>
                        <a onClick={this.at} className={'lupa '}>
                            <img src={Lupa} style={{width: '20px', height: '20px'}}/>
                        </a>
                </div>

            )
        }


        atualizar_pai = (e)=> {
            this.setState({term:e.target.value});
        };


        at=()=>{
            this.props.fn(this.state.term);
        }

    };

export default SearchBar;