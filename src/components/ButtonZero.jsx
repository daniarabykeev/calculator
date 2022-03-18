import React from 'react';

const ButtonZero = ({handleValues}) => {
    return (
        <div onClick={()=>handleValues("0")} className='button-zero'>
            0
        </div>
    );
};

export default ButtonZero;