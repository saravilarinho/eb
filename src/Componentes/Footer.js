import React from 'react';
import '../Styles.css';


function Footer() {
    return (
        <div className={"row footer justify-content-center pt-2"}>

            <div className={'col-8 col-lg-3 col-md-4 col-sm-6'}>
                <div className={'row justify-content-center' }>
                <img className={'col-2 img-fluid p-2'} src={'IMGS/face_icon.png'}/>
                <img className={'col-2 img-fluid p-2'} src={'IMGS/insta_icon.png'}/>
                <img className={'col-2 img-fluid p-2'} src={'IMGS/twitter_icon.png'}/>
                </div>
                <div className={'row  text-center p-2'}>
                    <p className={'col-12'}>Entertement Base 2018</p>
                </div>
            </div>

        </div>

    );
}

export default Footer;
