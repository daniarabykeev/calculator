import React from 'react';

const ButtobDivide = ( {handleValues} ) => {
    return (
        <div onClick={()=>handleValues("/")} className='button-operation'>
            /
        </div>
    );
};

export default ButtobDivide;