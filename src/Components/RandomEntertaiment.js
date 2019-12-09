import React from 'react';
import '../Styles/Styles.css';
import poster_default from  '../Images/dafaul_poster.png'

function RandomEntertaiment(props) {
    return (
        <div>

            {props.state === false &&
            <section className={'row justify-content-center EnterButton'}>
                <button id={'randombutton'} className={'col-lg-3 col-9 col-sm-7 col-md-5 p-3'}
                        onClick={() => {
                            props.onclickfunction();

                            document.getElementById('loading').style.display = "block";

                            document.getElementById('randombutton').style.display = "none";
                        }}>I'M BORED
                </button>
                <div className="spinner-border text-warning loading" id={'loading'} role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </section>
            }
            {props.state !== false &&
            <section>

                {props.content === undefined ? props.onclickfunction : console.log('hello')}

                {props.type === 'books' &&

                <div className={'row justify-content-around pb-5 d-flex align-items-center pt-5 mt-5'}>
                    <h1 className={'col-12 p-5 text-center randomtitle'}>Random Book - {props.content.title} </h1>
                    <div className={'col-7 col-md-2'}>
                        <img className={'img-fluid w-100'} src={props.content.imageLinks.thumbnail}/>
                    </div>
                    <div className={'col-10 col-md-6'}>
                        {console.log(props.content.description)}
                        <p className={'col-12 my-4'}>{props.content.description}</p>
                        <div className={'row justify-content-between my-4 px-5'}>
                            <button className={'col-4 p-2 stylebrandom'}>SEE MORE</button>
                            <button className={'col-4 p-2 stylebrandom'} onClick={props.onclickfunction}>ANOTHER ONE!
                            </button>
                        </div>
                        <div/>
                    </div>
                </div>
                }

                {props.type === 'series' &&



                    <div className={'row justify-content-around pb-5 d-flex align-items-center pt-5 mt-5'}>
                        <h1 className={'col-12 p-5 text-center randomtitle'}>Random Series - {props.content.name} </h1>
                        <div className={'col-7 col-md-2'}>
                            <img className={'img-fluid w-100'} src={props.content.poster_path===null ? poster_default :'https://image.tmdb.org/t/p/w600_and_h900_bestv2/'+ props.content.poster_path}/>
                        </div>
                        <div className={'col-10 col-md-6'}>
                            {console.log(props.content.overview)}

                            <p className={'col-12 my-4'}>{props.content.overview}</p>
                            <div className={'row justify-content-between my-4 px-5'}>
                                <button className={'col-4 p-2 stylebrandom'}>SEE MORE</button>
                                <button className={'col-4 p-2 stylebrandom'} onClick={props.onclickfunction}>ANOTHER ONE!
                                </button>
                            </div>
                            <div/>
                        </div>
                    </div>

                }

                {props.type === 'movies' &&



                <div className={'row justify-content-around pb-5 d-flex align-items-center pt-5 mt-5'}>
                    <h1 className={'col-12 p-5 text-center randomtitle'}>Random Movie - {props.content.title} </h1>
                    <div className={'col-7 col-md-2'}>
                        <img className={'img-fluid w-100'} src={props.content.poster_path===null ? poster_default :'https://image.tmdb.org/t/p/w600_and_h900_bestv2/'+ props.content.poster_path}/>
                    </div>
                    <div className={'col-10 col-md-6'}>
                        {console.log(props.content.overview)}

                        <p className={'col-12 my-4'}>{props.content.overview}</p>
                        <div className={'row justify-content-between my-4 px-5'}>
                            <button className={'col-4 p-2 stylebrandom'}>SEE MORE</button>
                            <button className={'col-4 p-2 stylebrandom'} onClick={props.onclickfunction}>ANOTHER ONE!
                            </button>
                        </div>
                        <div/>
                    </div>
                </div>
                }


            </section>
            }


        </div>
    );
}

export default RandomEntertaiment;
