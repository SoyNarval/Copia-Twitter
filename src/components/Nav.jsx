"use client"
import React, { useState } from 'react'
import "../app/globals.css"
import ToTweet from './ToTweet'

export default function Nav({setProfile, setPage, setShowToTweet}) {

    const [focus, setFocus] = useState("home")


    const handleToTweet = () => {
        setShowToTweet(true)
    }

    return (
        <div className='h-screen w-full flex flex-col justify-between items-center border-r border-gray-200'>
            <a className='border-b border-gray-200 hover:bg-gray-200 rounded-full p-4' title='Home' href='/' onClick={() => setFocus("home")}>
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
                <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                </svg>
            </a>

            <a className='flex border-b border-gray-200 hover:bg-gray-200 rounded-full p-4' title='Home' href='/' onClick={() => setFocus("home")}>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill={focus === "home" ? "black" : "none"}
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                >
                <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
                <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
                </svg>
                <p className='max-md:hidden px-2 text-lg'>Home</p>
            </a>

            <button className='flex border-b border-gray-200 hover:bg-gray-200 rounded-full p-4' title='Search' onClick={() => {setPage("search"); setFocus("search")}}>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill={focus === "search" ? "black" : "none"}
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
                >
                <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                <path d="M21 21l-6 -6" />
                </svg>
                <p className='max-md:hidden px-2 text-lg'>Explore</p>
            </button>

            <a className='flex border-b border-gray-200 hover:bg-gray-200 rounded-full p-4' title='Notifications' onClick={() => { setPage("notifications"); setFocus("notifications") }}>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill={focus === "notifications" ? "black" : "none"}
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                >
                <path d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                </svg>
                <p className='max-md:hidden px-2 text-lg'>Notifications</p>
            </a>

            <button className='flex border-b border-gray-200 hover:bg-gray-200 rounded-full p-4' title='Messages' onClick={() =>{setPage("DM"); setFocus("dm")}}>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill={focus === "dm" ? "black" : "none"}
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                >
                <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                <path d="M3 7l9 6l9 -6" />
                </svg>
                <p className='max-md:hidden px-2 text-lg'>Messages</p>
            </button>

            <a className='flex border-b border-gray-200 hover:bg-gray-200 rounded-full p-4' title='Grok'>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill={focus === "grok" ? "black" : "none"}
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
                <p className='max-md:hidden px-2 text-lg'>Grok</p>
            </a>

            <button className='flex border-b border-gray-200 hover:bg-gray-200 rounded-full p-4' title='Profile' onClick={(e) =>{e.stopPropagation(); setProfile("@default"); setPage("profile"); setFocus("profile")}}>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill={focus === "profile" ? "black" : "none"}
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                >
                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
                </svg>
                <p className='max-md:hidden px-2 text-lg'>Profile</p>
            </button>

            <a className='flex border-b border-gray-200 hover:bg-gray-200 rounded-full p-4' title='Settings'>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill={focus === "settings" ? "black" : "none"}
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                >
                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                <path d="M8 12l0 .01" />
                <path d="M12 12l0 .01" />
                <path d="M16 12l0 .01" />
                </svg>
                <p className='max-md:hidden px-2 text-lg'>Settings</p>
            </a>

            <button className='flex bg-gray-900 border-b border-gray-200 hover:bg-gray-800 rounded-full p-5' title='Tweet' onClick={() => handleToTweet()}>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                >
                <path d="M3 19c3.333 -2 5 -4 5 -6c0 -3 -1 -3 -2 -3s-2.032 1.085 -2 3c.034 2.048 1.658 2.877 2.5 4c1.5 2 2.5 2.5 3.5 1c.667 -1 1.167 -1.833 1.5 -2.5c1 2.333 2.333 3.5 4 3.5h2.5" />
                <path d="M20 17v-12c0 -1.121 -.879 -2 -2 -2s-2 .879 -2 2v12l2 2l2 -2z" />
                <path d="M16 7h4" />
                </svg>
                <p className='max-md:hidden px-2 text-lg text-white font-bold'>Post</p>
            </button>
            
            <button className='border-b border-gray-200 hover:bg-gray-200 rounded-full p-6 max-md:p-0' title='Accounts'>
                <img className='rounded-full h-10 w-10' src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' alt='prf-pic'></img>
            </button>
        </div>
    )
}
