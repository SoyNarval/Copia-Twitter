"use client"
import React, { useState } from 'react'
import "../app/globals.css"
import Tweet from './Tweet'


export default function ToTweet() {

    const [tweeting, setTweeting] = useState("")
    const [newTweetList, setNewTweetList] = useState([])

    const generateTwList = () => {
        let generatedID = Math.floor(Math.random() * (150 - 100 + 1)) + 100;
        const newTweet =[
            { id: generatedID, name: "Nacho", user: "@nacho", tweet: tweeting, rt: 0, likes: 0, date: new Date().toLocaleDateString('en-GB').replace(/\//g, '-'), userImage: "default.jpg" },
        ]
        
        setNewTweetList(prevList => [...prevList, ...newTweet])
        setTweeting("")
    }

    const renderTweetList = () => {
        return newTweetList.map(tweet => (
            <Tweet
                key={tweet.id}
                tweet={tweet}
            />
        ))
    }

    return (
        <>
            <div className='flex h-auto w-full p-4 border-b border-gray-200 '>
                <div className='h-full flex min-h-10 min-w-10'>
                    <img className='rounded-full h-10 w-10' src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' alt='prf-pic'></img>
                </div>
                <div className='flex flex-col w-full p-4'>
                    <input className='w-full h-full text-black border-b border-gray-200 truncate focus:outline-none' type='text' placeholder={"What's happening?"} value={tweeting} onChange={(e) => setTweeting(e.target.value)}></input>
                    <div className='flex flex-row justify-around w-full py-2'>
                        <div className='flex flex-row justify-between w-2/4'>
                        <button title='Add photo'>
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="17"
                            height="17"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="DodgerBlue"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            >
                            <path d="M15 8h.01" />
                            <path d="M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z" />
                            <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5" />
                            <path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3" />
                            </svg>
                        </button>

                        <button title='Add GIF' className='max-md:hidden'>
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="dodgerblue"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            >
                            <path d="M8 8h-2a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2v-4h-1" />
                            <path d="M12 8v8" />
                            <path d="M16 12h3" />
                            <path d="M20 8h-4v8" />
                            </svg>
                        </button>

                        <button title='Generate Image' className='max-md:hidden'>
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="17"
                            height="17"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="dodgerblue"
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
                        </button>

                        <button title='Survey'>
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="17"
                            height="17"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="dodgerblue"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            >
                            <path d="M13 5h8" />
                            <path d="M13 9h5" />
                            <path d="M13 15h8" />
                            <path d="M13 19h5" />
                            <path d="M3 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                            <path d="M3 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                            </svg>
                        </button>

                        <button title='Emoji' className='max-md:hidden'>
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="17"
                            height="17"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="dodgerblue"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            >
                            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                            <path d="M9 10l.01 0" />
                            <path d="M15 10l.01 0" />
                            <path d="M9.5 15a3.5 3.5 0 0 0 5 0" />
                            </svg>
                        </button>

                        <button className='max-lg:hidden' title='Schedule'>
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="17"
                            height="17"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="dodgerblue"
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
                        </button>

                        <button className='max-lg:hidden' title='Add Ubication'>
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="17"
                            height="17"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="dodgerblue"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            >
                            <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                            <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                            </svg>
                        </button>
                        </div>

                        <div className='flex flex-row items-center justify-end w-full'>
                            <div className={`flex items-center justify-end pr-2 gap-2 w-2/4 ${tweeting === "" ? "hidden" : ""}`}>
                                <div className='border-2 border-blue-400 h-6 w-6 rounded-full' title='Character Left'></div>
                                <div className='border h-6 border-slate-400'></div>
                                <div className='flex border border-slate-400 h-6 w-6 rounded-full text-center justify-center font-bold text-blue-400 cursor-pointer' title='Add Tweet'>+</div>
                            </div>
                            <button className={`text-white font-bold border-b border-gray-200  rounded-full px-6 py-3 ${tweeting === "" ? "bg-slate-600" : "bg-slate-900 hover:bg-gray-800"}`} title='Tweet' onClick={() => tweeting !== "" && generateTwList()}>
                                Post
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                {renderTweetList()}
            </div>

        </>
    )
}
