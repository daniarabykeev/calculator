import React from 'react';

const ButtonLeftBracket = ({handleValues}) => {
    return (
        <div onClick={()=>handleValues("(")} className='beige-btn'>
            (
        </div>
    );
};

export default ButtonLeftBracket;