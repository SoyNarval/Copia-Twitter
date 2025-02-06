"use client"
import React, { useState } from 'react'
import "../app/globals.css"
import ToTweet from './ToTweet';

export default function Tweet({ tweet, setShowTweet, setSelectedTweet, setProfile, setPage }) {

    const { name, user, tweet: tweetText, rt, likes, date, userImage } = tweet;

    const [showReply, setShowReply] = useState(false)

    const [likedTweet, setLikedTweet] = useState(false)
    const [newLikes, setNewLikes] = useState(likes)
    const [isAnimating, setIsAnimating] = useState(false)

    const [retweeted, setRetweeted] = useState(false)
    const [retweets, setRetweets] = useState(rt)

    const imgsrc = "/images/profile-pictures/"


    const getTweet = () => {
        setSelectedTweet(tweet)
        setShowTweet(true)
    }

    const handleLike = () => {
        if(likedTweet){
            setNewLikes(newLikes-1);
            setLikedTweet(false)
            
        }else{
            setNewLikes(newLikes+1);
            setLikedTweet(true)
        }
        setIsAnimating(true);
        setTimeout(() => {
            setIsAnimating(false);
        }, 500);
    };

    const handleRetweet = () => {
        if (retweeted) {
            setRetweets(retweets-1);
            setRetweeted(false)
        }else{
            setRetweets(retweets+1);
            setRetweeted(true)
        }
    }

  return (
    <>
        <div className='flex justify-center h-auto w-auto p-2 hover:bg-slate-100 cursor-pointer border-b border-gray-200 ' onClick={() => getTweet()}>
            <div className='h-full w-1/6 flex items-center justify-center'>
                <img className='rounded-full h-10 w-10 hover:brightness-110' src={`${imgsrc}${userImage}`} alt='prf-pic' onClick={(e) => {e.stopPropagation(); setProfile(user); setPage("profile")}}></img>
            </div>

            <div className='p-2 w-5/6'>
                <div className='flex items-center just'>
                    <h1 className='text-black text-lg font-semibold border-b border-transparent hover:border-black' onClick={(e) => {e.stopPropagation(); setProfile(user); setPage("profile")}}>{name}</h1>
                    <div className='flex aling-center'>
                        <h2 className='text-sm text-slate-500 px-1' onClick={(e) => {e.stopPropagation(); setProfile(user); setPage("profile")}}>{user}</h2>
                        <span className='text-sm text-gray-500'>|</span>
                        <p className='text-sm text-slate-500 px-1'>{date}</p>
                    </div>
                    
                </div>
                <p>{tweetText}</p>
                {/* <img className='h-fit w-fit rounded-2xl' src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt='tweet-pic'></img> */}

                <div className='flex justify-between py-2'>
                    <div className='flex'>
                        <button className='hover:bg-blue-200 rounded-full p-2' title='Reply' onClick={(e) => {e.stopPropagation(); setShowReply(!showReply);}}>
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="grey"
                            strokeWidth="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            >
                            <path d="M17.802 17.292s.077 -.055 .2 -.149c1.843 -1.425 3 -3.49 3 -5.789c0 -4.286 -4.03 -7.764 -9 -7.764c-4.97 0 -9 3.478 -9 7.764c0 4.288 4.03 7.646 9 7.646c.424 0 1.12 -.028 2.088 -.084c1.262 .82 3.104 1.493 4.716 1.493c.499 0 .734 -.41 .414 -.828c-.486 -.596 -1.156 -1.551 -1.416 -2.29z" />
                            <path d="M7.5 13.5c2.5 2.5 6.5 2.5 9 0" />
                            </svg>
                        </button>

                        <button className={`flex hover:bg-green-200 rounded-full p-2 ${retweeted ? "text-green-600" : "text-gray-500"}`} title='Retweet' onClick={(e) => {e.stopPropagation(); handleRetweet();}}>
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            >
                            <path d="M4 12v-3a3 3 0 0 1 3 -3h13m-3 -3l3 3l-3 3" />
                            <path d="M20 12v3a3 3 0 0 1 -3 3h-13m3 3l-3 -3l3 -3" />
                            </svg>
                            <p>{retweets}</p>
                        </button>

                        <button className={`flex hover:bg-red-200 rounded-full p-2 ${likedTweet ? "text-red-600" : "text-gray-500"}`} title='Like' onClick={(e) => {e.stopPropagation(); handleLike();}}>
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill={likedTweet ? "red" : "none"}
                            stroke="currentColor"
                            strokeWidth="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className={`transition-transform duration-300 ease-in-out ${isAnimating ? "scale-110" : "scale-100"} transition-all duration-700 ease-in-out`} 
                            >
                            <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                            </svg>
                            <p>{newLikes}</p>
                        </button>

                        {/* <button className='hover:bg-blue-200 rounded-full p-2' title='Stats'>
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="grey"
                            strokeWidth="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            >
                            <path d="M10 9m0 1.105a1.105 1.105 0 0 1 1.105 -1.105h1.79a1.105 1.105 0 0 1 1.105 1.105v9.79a1.105 1.105 0 0 1 -1.105 1.105h-1.79a1.105 1.105 0 0 1 -1.105 -1.105z" />
                            <path d="M17 3m0 1.105a1.105 1.105 0 0 1 1.105 -1.105h1.79a1.105 1.105 0 0 1 1.105 1.105v15.79a1.105 1.105 0 0 1 -1.105 1.105h-1.79a1.105 1.105 0 0 1 -1.105 -1.105z" />
                            <path d="M5 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                            </svg>
                        </button> */}

                    </div>


                    <div className='flex justify-between'> 
                        <button className='hover:bg-blue-200 rounded-full p-2' title='Save' onClick={(e) => {e.stopPropagation();}}>
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="grey"
                            strokeWidth="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            >
                            <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                            <path d="M12 4v7l2 -2l2 2v-7" />
                            </svg>
                        </button>

                        <button className='hover:bg-blue-200 rounded-full p-2' title='Share' onClick={(e) => e.stopPropagation()}>
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="grey"
                            strokeWidth="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            >
                            <path d="M8 9h-1a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-8a2 2 0 0 0 -2 -2h-1" />
                            <path d="M12 14v-11" />
                            <path d="M9 6l3 -3l3 3" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div className={`${showReply ? "" : "hidden"} justify-center items-center p-4 bg-slate-100`}>
            <button className='bg-slate-950 text-white hover:bg-slate-800 rounded-full p-2' title='Close' onClick={() => setShowReply(!showReply)}>Cancel</button>
            <ToTweet/>
        </div>
    </>
  )
}
