import React from 'react';

const Contact = () => {
    return (
        <div className='grid grid-cols-2 bg-yellow-400 p-10'>
            <div>
                <h1 className='text-xl'>Have Any Questioon?</h1>
                <h2 className='font-bold text-2xl'>DON'T HESITATE TO CONTACT US ANY TIME.</h2>
            </div>
            <div className='text-right'>
                <button className='btn btn-outline text-lg font-semibold border-2'>Contact Us</button>
            </div>
        </div>
    );
};

export default Contact;