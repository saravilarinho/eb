import React from 'react';
import './Styles.css';
import IndividualEntertaiment from './Componentes/IndividualEntertaiment'


function Page_individual() {
  return (
    <div className={'pads'}>
      <IndividualEntertaiment/>
        <iframe className={'col-12 videoorpreview'}
                src="https://www.youtube.com/embed/tgbNymZ7vqY">
        </iframe>
    </div>
  );
}

export default Page_individual;
