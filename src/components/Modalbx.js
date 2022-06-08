import React from 'react';
import '../App.css';
const Modalbx = ({closeModal}) => {
    return (

        <div className='modalbx-cont'>

       <div className='modalbx'>
            <h1> 
                modal box
                </h1>
        </div>
        <div className='overlay' onClick={closeModal}></div>
                </div>

    );
};

export default Modalbx;