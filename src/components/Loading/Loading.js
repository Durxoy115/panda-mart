import React from 'react';
import spinner from '../../images/spinner-pre-angular.webp'

const Loading = () => {
    return (
        <div className='mx-auto w-1/2'>
            <img src={spinner} alt="" />
        </div>
    );
};

export default Loading;