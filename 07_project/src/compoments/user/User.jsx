
import React from 'react';
import { useParams } from 'react-router-dom';

function User() {
    const { userid } = useParams(); // Destructure userid from the params object

    return (
        <div className='w-full max-h-screen mt-10 mb-40'>User: {userid}</div>
    );
}

export default User;
