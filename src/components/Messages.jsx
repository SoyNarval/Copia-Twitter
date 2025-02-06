import React, { useState, useEffect } from 'react'
import { useTweets } from '../../context/TweetsContext'

export default function Messages() {
    
    const tweets = useTweets()
    const imgsrc = "/images/profile-pictures/"


    const [topPosition, setTopPosition] = useState('-300px')
    const [isVisible, setIsVisible] = useState(true)

    const toggleMessages = () => {
        setIsVisible((prevIsVisible) =>{
            const newVisibility = !prevIsVisible
            setTopPosition(newVisibility ? "-300px" : '0px')
            return newVisibility
        })
    }

    const mapMessages = () => {
        return tweets.slice(0, 10).map((tweet) => {
            return (
                <div key={tweet.id} className='flex flex-col justify-center w-full p-4 border-b border-slate-200'>
                    <div className='flex items-center'>
                        <img src={`${imgsrc}${tweet.userImage}`} className='w-10 h-10 rounded-full' alt='profile picture'/>
                        <div className='flex flex-col p-2'>
                            <div className='flex'>
                                <p className='text-sm font-bold'>{tweet.name}</p>
                                <p className='text-sm'>{tweet.user}</p>
                            </div>
                            
                            <a href='https://portfolio.igpemo.es/' target="_blank" className='text-sm'>Hey honey, visit my page</a>
                        </div>
                    </div>
                    <div className='text-right'>
                        <p className='text-sm'>{tweet.date}</p>
                    </div>
                </div>
            )
        })
        
    }



  return (
    <div 
        className={`w-96 max-h-[400px] fixed right-10 z-1 bg-white p-4 rounded-lg shadow-md border border-slate-200`} 
        style={{
            bottom: topPosition,
            transition: 'bottom 0.3s ease-out', 
        }}
    >
        <div className='flex justify-between w-full p-4 border-b border-slate-200' onClick={toggleMessages}>
            <h2 className='text-xl font-bold w-full'>Messages</h2>
            <div className='flex w-full justify-around'>
                <button className='hover:bg-slate-200 rounded-full p-2' title='New Message' onClick={(e) => e.stopPropagation()}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        >
                        <path d="M12.007 19.98a9.869 9.869 0 0 1 -4.307 -.98l-4.7 1l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c1.992 1.7 2.93 4.04 2.747 6.34" />
                        <path d="M16 19h6" />
                        <path d="M19 16v6" />
                    </svg>
                </button>
                <button 
                    onClick={(e) => {e.stopPropagation(); toggleMessages()}}
                    style={{
                        transform: isVisible ? "scaleY(1)" : "scaleY(-1)",
                        transition: 'transform 0.3s ease-out',
                    }}
                    className='hover:bg-slate-200 rounded-full p-2'
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        >
                        <path d="M7 11l5 -5l5 5" />
                        <path d="M7 17l5 -5l5 5" />
                    </svg>
                </button>
            </div>
        </div>
        <div className='h-[300px] overflow-y-scroll'>
            {mapMessages()}
        </div>
        
    </div>
  )
}
