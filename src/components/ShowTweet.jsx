"use client"
import React from 'react'
import "../app/globals.css"
import Tweet from './Tweet'

export default function ShowTweet({ showTweet, setShowTweet, tweet, setProfile, setPage }) {

    if (!tweet) {
        return null;
    }
    
    if (showTweet) {
        return (
            <div className='fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex flex-col justify-center items-center gap-4 z-10'>
                <div className='fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex flex-col justify-center items-center gap-4 z-10'>
                    <button className='p-4 bg-background hover:bg-gray-200 rounded-full' title='Close' onClick={() => setShowTweet(!showTweet)}>&#x2716;</button>
                    <div className='bg-background max-md:w-full w-2/3 p-4'>
                        <Tweet 
                            tweet={tweet} 
                            setProfile={setProfile}
                            setPage={setPage}
                        />
                    </div>
                </div>
            </div>
            
        )
    }
    else return null;
}


