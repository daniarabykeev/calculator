import React from 'react';

const ButtonDot = ({handleValues}) => {
    return (
        <div onClick={()=>handleValues(".")}>
            .
        </div>
    );
};

export default ButtonDot;