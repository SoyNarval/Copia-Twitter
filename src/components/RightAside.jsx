"use client"
import React, { useState } from 'react'
import { useTweets } from '../../context/TweetsContext'

export default function RightAside({setProfile, setPage}) {

  const imgsrc = "/images/profile-pictures/"
  const tweets = useTweets()


  const renderUsers = () => {
    return (
    tweets.slice(0,3).map(tweet => {
      
    const [following, setFollowing] = useState(false)
    const [isHovered, setIsHovered] = useState(false)
    
      return (
        <>
          <div className='h-1/3  flex border-b border-gray-200 hover:bg-slate-100 p-4 items-center cursor-pointer justify-between' key={tweet.id} onClick={() =>  { setPage("profile") ; setProfile(tweet.user)}}>
            <div className='flex'>
              <div className='h-15 w-15 flex items-center justify-center p-2'>
                <img className='h-12 w-12 rounded-full' src={`${imgsrc}${tweet.userImage}`} alt='prf-pic'></img>
              </div>
              <div className='items-center flex flex-col justify-center'>
                <h2 className='font-bold text-lg'>{tweet.name}</h2>
                <p className='text-md text-gray-500'>{tweet.user}</p>
              </div>
            </div>
            
            <button 
              className={` font-bold border p-2 w-36 lg:w-48 rounded-full bg-slate-950 hover:bg-slate-900 ${following ? "bg-white text-slate-800 hover:bg-white hover:text-red-400 hover:border-red-400" : "text-white"}`} 
              onClick={(e) => {e.stopPropagation() ;setFollowing(!following)}}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              >
              {following && isHovered ? "Unfollow" : following ? "Following" : "Follow"}
            </button>
            
          </div>
        </>
      )
    }))
  }

  return (
    <div className='flex-1 h-full p-8 flex flex-col w-full gap-4 relative'>
        <input className='p-2 w-full border border-gray-200 rounded-full outline-blue-500 top-0' type='text' placeholder='Search...'></input>

        <div className='flex flex-col gap-4 flex-1'>
          <div className='border border-gray-200 rounded-xl flex flex-col w-full h-2/3 justify-center'>
            <h2 className='text-2xl font-bold border-b border-gray-200 p-3'>Who to follow</h2>
            {renderUsers()}
          </div>
        </div>

        <div className='sticky top-0 z-2 h-full flex flex-col gap-4 bg-white border border-gray-200 rounded-xl  '>
          <h2 className='text-2xl font-bold border-b border-gray-200 p-3'>What's happening</h2>

          <div className=' flex flex-col gap-1 border-b border-gray-200 p-4 cursor-pointer' onClick={() => setPage("search")}>
            <div className='flex justify-between'>
              <p className='text-gray-400 text-sm'>Trending</p>
              <p className='text-gray-800 text-xl rounded-full hover:bg-blue-300 cursor-pointer px-2'>···</p>
            </div>
            <h3 className='font-semibold'>Trend</h3>
            <p className='text-gray-400 text-sm '>100K posts</p>
          </div>
          
          <div className='flex flex-col gap-1 border-b border-gray-200 p-4  cursor-pointer' onClick={() => setPage("search")}>
            <div className='flex justify-between'>
              <p className='text-gray-400 text-sm'>Trending</p>
              <p className='text-gray-800 text-xl rounded-full hover:bg-blue-300 cursor-pointer px-2'>···</p>
            </div>
            <h3 className='font-semibold'>Trend</h3>
            <p className='text-gray-400 text-sm '>100K posts</p>
          </div>
          
          <div className='flex flex-col gap-1 border-b border-gray-200 p-4 cursor-pointer' onClick={() => setPage("search")}>
            <div className='flex justify-between'>
              <p className='text-gray-400 text-sm'>Trending</p>
              <p className='text-gray-800 text-xl rounded-full hover:bg-blue-300 cursor-pointer px-2'>···</p>
            </div>
            <h3 className='font-semibold'>Trend</h3>
            <p className='text-gray-400 text-sm '>100K posts</p>
          </div>
          
          <div className='flex flex-col gap-1 border-b border-gray-200 p-4 cursor-pointer' onClick={() => setPage("search")}>
            <div className='flex justify-between'>
              <p className='text-gray-400 text-sm'>Trending</p>
              <p className='text-gray-800 text-xl rounded-full hover:bg-blue-300 cursor-pointer px-2'>···</p>
            </div>
            <h3 className='font-semibold'>Trend</h3>
            <p className='text-gray-400 text-sm '>100K posts</p>
          </div>
          
        </div>
        
    </div>
  )
}
