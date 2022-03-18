import React from 'react';

const ButtonAC = ({setResult}) => {
    return (
        <div onClick={()=>setResult("0")} className='beige-btn'>
            AC
        </div>
    );
};

export default ButtonAC;