import React from 'react';

const ButtonEqual = ({equal}) => {
    return (
        <div onClick={equal} className='button-operation'>
            =
        </div>
    );
};

export default ButtonEqual;