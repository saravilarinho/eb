import React from 'react';
import '../Styles.css';
import twitter from '../IMGS/twitter_icon.png'
import face from '../IMGS/face_icon.png'
import insta from '../IMGS/insta_icon.png'


function Footer() {
    return (
        <div className={"row footer justify-content-center pt-2"}>

            <div className={'col-8 col-lg-3 col-md-4 col-sm-6'}>
                <div className={'row justify-content-center' }>
                <img className={'col-2 img-fluid p-2'} src={face}/>
                <img className={'col-2 img-fluid p-2'} src={insta}/>
                <img className={'col-2 img-fluid p-2'} src={twitter}/>
                </div>
                <div className={'row  text-center p-2'}>
                    <p className={'col-12'}>Entertainment Base 2019</p>
                </div>
            </div>

        </div>

    );
}

export default Footer;
