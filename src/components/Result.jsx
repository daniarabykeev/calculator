import React from 'react';

const Result = (props) => {
    return (
        <div>
            <div className='result'>
                {props.result}
            </div>
        </div>
    );
};

export default Result;