"use client"
import React, { useState, useEffect } from 'react'
import "../src/app/globals.css"
import { useTweets } from '../context/TweetsContext'
import Tweet from '@/components/Tweet'
import ShowImg from '@/components/ShowImg'

export default function Profile({  profile, setShowImage, showImage, setPage, showTweet, setShowTweet }) {

    const tweets = useTweets()
    const imgsrc = "/images/profile-pictures/"

    const [numTweets, setNumTweets] = useState(5)
    const [name, setName] = useState('')
    const [userName, setUserName] = useState('')
    const [tweetNum, setTweetNum] = useState(0)
    const [userImg, setUserImg] = useState('')

    const [following, setFollowing] = useState(false)
    const [isHovered, setIsHovered] = useState(false)


    useEffect(() => {
        const userTweets = tweets.filter(tweet => tweet.user === profile)

        if (userTweets.length > 0) {
            setName(userTweets[0].name)
            setUserName(userTweets[0].user)
            setTweetNum(userTweets.length)
            setUserImg(userTweets[0].userImage)
        }
        setFollowing(false)
    }, [profile, tweets]) 

    const renderTweets = () => {
        if (!profile) {
            return <div>No hay perfil seleccionado</div>
        }

        const userTweets = tweets.filter(tweet => tweet.user === profile)
        return userTweets.slice(0, numTweets).map(tweet => (
            <div>
                <Tweet 
                    key={tweet.id} 
                    tweet={tweet}
                    setShowTweet={setShowTweet}
                    showTweet={showTweet}
                />
            </div>

        ))
    }

    return (
        <>
            <div className='flex flex-col w-full'>
                {/* Header */}
                <div className='h-full w-full'>

                    <div className='flex gap-8 p-2 sticky bg-white z-2'>
                        <button className='flex px-4 rounded-full hover:bg-slate-200 items-center' onClick={() => setPage("home")}>&#8592;</button>
                        <div>
                            <h2 className='text-2xl font-bold'>{name}</h2>
                            <p className='text-slate-400'> {tweetNum} posts</p>
                        </div>
                    </div>
                        

                    <div className='relative flex flex-col gap-2 h-auto max-md:flex-col border-b border-slate-200'>
                        <img className=' flex w-full h-48' src='/images/bg-img.jpg' alt='bg-img'></img>
                        
                        <div className='flex max-md:flex-col md:justify-between p-3'>
                            <div className='-mt-16 '>
                                <img className='border-4 border-white rounded-full h-28 w-28' src={`${imgsrc}${userImg}`} alt='prf-pic' onClick={() => setShowImage(userImg)}></img>
                            </div>

                            <div className='flex max-md:flex-wrap items-center justify-end'>
                                <a className='flex border-b border-gray-200 hover:bg-gray-200 rounded-full p-4' title='More'>
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="black"
                                    stroke-width="2.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    >
                                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                                    <path d="M8 12l0 .01" />
                                    <path d="M12 12l0 .01" />
                                    <path d="M16 12l0 .01" />
                                    </svg>
                                </a>

                                <a className='flex border-b border-gray-200 hover:bg-gray-200 rounded-full p-4' title='Grok'>
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
                                    <path d="M5.931 6.936l1.275 4.249m5.607 5.609l4.251 1.275" />
                                    <path d="M11.683 12.317l5.759 -5.759" />
                                    <path d="M5.5 5.5m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0" />
                                    <path d="M18.5 5.5m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0" />
                                    <path d="M18.5 18.5m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0" />
                                    <path d="M8.5 15.5m-4.5 0a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0 -9 0" />
                                    </svg>
                                </a>

                                <a className='flex border-b border-gray-200 hover:bg-gray-200 rounded-full p-4' title='Search'>
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="3"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    >
                                    <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                                    <path d="M21 21l-6 -6" />
                                    </svg>
                                </a>

                                <a className='flex border-b border-gray-200 hover:bg-gray-200 rounded-full p-4' title='Messages'>
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    >
                                    <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                                    <path d="M3 7l9 6l9 -6" />
                                    </svg>
                                </a>

                                <button 
                                    className={` font-bold border p-2 w-36 lg:w-48 rounded-full bg-slate-950 hover:bg-slate-900 ${following ? "bg-white text-slate-800 hover:bg-white hover:text-red-400 hover:border-red-400" : "text-white"}`} 
                                    onClick={() => setFollowing(!following)}
                                    onMouseEnter={() => setIsHovered(true)}
                                    onMouseLeave={() => setIsHovered(false)}
                                    >
                                    {following && isHovered ? "Unfollow" : following ? "Following" : "Follow"}
                                </button>
                            </div>
                        </div>
                        
                    </div>
                    
                    <div className='flex flex-col p-2 gap-2 border-b border-slate-200'>
                        <div>
                            <h2 className='text-2xl font-bold'>{name}</h2>
                            <h3 className=' text-slate-600'>{userName}</h3>
                        </div>
                        <p>Bio Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <div className='grid grid-cols-2 gap-2 text-slate-600'>
                            <div className='flex gap-2 items-center'>
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
                                    <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
                                    <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
                                    <path d="M12 12l0 .01" />
                                    <path d="M3 13a20 20 0 0 0 18 0" />
                                </svg>
                                <a href='https://github.com/SoyNarval' target="_blank">Working at</a>
                            </div>
                            
                            <div className='flex gap-2 items-center' title='Location'>
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
                                    <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                                    <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                                </svg>
                                <a href='https://www.google.es/maps/place/Huelva/@37.2709291,-6.9808903,13z/data=!3m1!4b1!4m6!3m5!1s0xd11cfe6d744284b:0xd82baac110b40f83!8m2!3d37.2619585!4d-6.9427327!16zL20vMDF2XzBx?hl=es&entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D' target="_blank">Rigth here</a>
                            </div>

                            <a className='flex gap-2 items-center' href='https://portfolio.igpemo.es/' target="_blank">
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
                                    <path d="M9 15l6 -6" />
                                    <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
                                    <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
                                </svg>
                                <p className='text-blue-500 border-b border-transparent hover:border-blue-500'>Click here</p>
                            </a>

                            <div className='flex gap-2 items-center'>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="17"
                                    height="17"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    >
                                    <path d="M11.795 21h-6.795a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4" />
                                    <path d="M18 14v4h4" />
                                    <path d="M18 18m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                                    <path d="M15 3v4" />
                                    <path d="M7 3v4" />
                                    <path d="M3 11h16" />
                                </svg>
                                <p>01/01/2000</p>
                            </div>
                        </div>

                        <div className='flex gap-2'>
                            <p className=' border-b border-transparent hover:border-black cursor-pointer'><span className='text-lg font-bold'>254</span> Following</p>
                            <p className=' border-b border-transparent hover:border-black cursor-pointer'><span className='text-lg font-bold'>35.4K</span> Followers</p>
                        </div>

                        <div className='flex gap-12 items-center w-full h-full'>
                            <div className='relative flex md:gap-0 h-10 w-10'>
                                <img className='absolute top-0 left-0 rounded-full border-4 border-white max-md:h-auto max-md:w-full h-10 w-10' src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' alt='prf-pic'></img>
                                <img className='absolute top-0 left-5 rounded-full border-4 border-white max-md:h-auto max-md:w-full h-10 w-10' src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' alt='prf-pic'></img>
                                <img className='absolute top-0 left-10 rounded-full border-4 border-white max-md:h-auto max-md:w-full h-10 w-10' src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' alt='prf-pic'></img>
                            </div>
                            <p className='relative z-1'> Followed by User, User, User and 9 others you follow</p> 
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className='flex flex-col justify-center w-full'>
                {renderTweets()}
                <button className={`justify-center text-center text-blue-400 border-b border-transparent hover:border-blue-400 ${numTweets >= tweetNum ? "hidden" : ""}`} onClick={() => setNumTweets(numTweets+5)}>Charge more tweets</button>
            </div>
            
            <ShowImg
                setShowImage={setShowImage}
                showImage={showImage}
            />
        </>
    )
}
