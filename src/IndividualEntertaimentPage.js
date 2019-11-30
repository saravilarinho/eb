import React from 'react';
import './Styles/Styles.css';
import IndividualEntertaiment from './Components/IndividualEntertaiment'


function IndividualEntertaimentPage() {
  return (
    <div className={'pads'}>
      <IndividualEntertaiment/>
        <iframe className={'col-12 videoorpreview'}
                src="https://www.youtube.com/embed/tgbNymZ7vqY">
        </iframe>
    </div>
  );
}

export default IndividualEntertaimentPage;
