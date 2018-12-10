import React from 'react';
import './scroll.css';

const Scroll = ({children})=>{   
    return (
        <div className='scroll'>
            {children}
        </div>
    );
}
export default Scroll;