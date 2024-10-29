import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
   const data =useLoaderData()

    // useEffect(() => {
    //     fetch('https://api.github.com/users/dikshapanwar')
    //         .then((response) => {
    //             if (!response.ok) {
    //                 throw new Error(`HTTP error! Status: ${response.status}`);
    //             }
    //             return response.json();
    //         })
    //         .then((data) => {
    //             setData(data);
    //             setLoading(false);
    //         })
    //         .catch((error) => {
    //             console.error(error);
    //             setError("Failed to fetch data");
    //             setLoading(false);
    //         });
    // }, []);

    

    return (
        <div className='mt-24 mb-60'>
            <h1>{data.name || "User"}</h1>
            <p>GitHub Followers: {data.followers}</p>
            {data.avatar_url && (
                <img 
                    src={data.avatar_url} 
                    alt="GitHub Profile" 
                    width={300} 
                    height={300} 
                    style={{ borderRadius: '50%' }}
                />
            )}
        </div>
    );
}

export default Github;

export const GithubInfoLoader = async ({ params }) => {
    const response = await fetch('https://api.github.com/users/dikshapanwar')
    const data = await response.json()
    return data
}

