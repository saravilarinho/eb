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

                <div className={'barra'}>
                    <input className={'barrapesquisa'} onChange={this.atualizar_pai}/>
                        <a onClick={this.at} className={'lupa'}>
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