import React from 'react'
import { useTweets } from '../context/TweetsContext'

export default function DMessages({setPage, setProfile}) {

    const tweets = useTweets()
    const imgsrc = "/images/profile-pictures/"

    const renderMessages = () => {
        return tweets.slice(0, 10).map((tweet) => {
            return (
                <div key={tweet.id} className='flex flex-col justify-center w-full p-4 border-b border-slate-200 hover:bg-slate-200' href='https://portfolio.igpemo.es/' target="_blank">
                    <div className='flex items-center'>
                        <img src={`${imgsrc}${tweet.userImage}`} className='w-10 h-10 rounded-full' alt='profile picture' onClick={(e) => {e.stopPropagation; setPage("profile"); setProfile(tweet.user)}} />
                        <div className='flex flex-col p-2'>
                            <div className='flex'>
                                <p className='text-sm font-bold'>{tweet.name}</p>
                                <p className='text-sm'>{tweet.user}</p>
                            </div>
                            
                            <a className='text-sm'>Hey honey, visit my page</a>
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
    <div className='flex w-full p-4'>
        <div className='w-full h-screen overflow-y-scroll'>
            <div className='flex w-full justify-between p-4 items-center'>
                <h2 className='text-xl font-bold w-full'>Messages</h2>
                <div className='flex justify-around px-4'>
                    <button className='hover:bg-slate-200 rounded-full p-2'>
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
                            <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
                            <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                        </svg>
                        
                    </button>

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
                </div>
            </div>

            <div>
                {renderMessages()}
            </div>
        </div>  
    </div>

  )
}
