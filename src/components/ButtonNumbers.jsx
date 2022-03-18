import React from 'react';

const ButtonNumbers = ({elem,handleValues}) => {
    return (
        <div onClick={()=> handleValues(elem)} className={typeof elem === "number" ? "" : "button-operation"}>
            {elem}
        </div>
    );
};

export default ButtonNumbers;