import React, { useState } from 'react'

export default function Explore() {

    const [focus, setFocus] = useState("for you")

  return (
    <div className='flex flex-col w-full gap-4 p-4'> 
        <div className='flex w-full gap-4'>
            <input className='p-2 w-full border border-gray-200 rounded-full outline-blue-500 top-0' type='text' placeholder='Search...'></input>
            <button>
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
        </div>

        <div className='flex w-fit max-md:flex-wrap'>
            <button className='flex flex-col items-center flex-1 text-xl text-slate-600 border-b border-gray-200 hover:bg-gray-200 p-4' onClick={() =>setFocus("for you")}>
                For you
                <div  className={`border-2 rounded-full w-1/3 ${focus === "for you" ? "border-blue-600" : "border-transparent"}`} ></div>
            </button>

            <button className='flex flex-col items-center flex-1 text-xl text-slate-600 border-b border-gray-200 hover:bg-gray-200 p-4'  onClick={() =>setFocus("trending")}>
                Trending
                <div  className={`border-2 rounded-full w-1/3 ${focus === "trending" ? "border-blue-600" : "border-transparent"}`}></div>
            </button>
            
            <button className='flex flex-col items-center flex-1 text-xl text-slate-600 border-b border-gray-200 hover:bg-gray-200 p-4'  onClick={() =>setFocus("news")}>
                News
                <div  className={`border-2 rounded-full w-1/3 ${focus === "news" ? "border-blue-600" : "border-transparent"}`}></div>
            </button>
            
            <button className='flex flex-col items-center flex-1 text-xl text-slate-600 border-b border-gray-200 hover:bg-gray-200 p-4' onClick={() =>setFocus("sports")}>
                Sports
                <div  className={`border-2 rounded-full w-1/3 ${focus === "sports" ? "border-blue-600" : "border-transparent"}`}></div>
            </button>
            
            <button className='flex flex-col items-center flex-1 text-xl text-slate-600 border-b border-gray-200 hover:bg-gray-200 p-4' onClick={() =>setFocus("entertaiment")}>
                Entertaiment
                <div  className={`border-2 rounded-full w-1/3 ${focus === "entertaiment" ? "border-blue-600" : "border-transparent"}`}></div>
            </button>
        </div>
        
        <h1 className='text-2xl font-bold p-4'>Trending topics</h1>

        <div>
            <div className='w-full hover:bg-slate-200 p-4 flex flex-col gap-4 cursor-pointer'>
                <h2 className='text-xl font-bold'>Trending</h2>
                <p className='text-gray-500 text-sm'>2 hours ago · News · 100K posts</p>

            </div>
        </div>
        
        <div>
            <div className='w-full hover:bg-slate-200 p-4 flex flex-col gap-4 cursor-pointer'>
                <h2 className='text-xl font-bold'>Trending</h2>
                <p className='text-gray-500 text-sm'>2 hours ago · News · 100K posts</p>

            </div>
        </div>
        
        <div>
            <div className='w-full hover:bg-slate-200 p-4 flex flex-col gap-4 cursor-pointer'>
                <h2 className='text-xl font-bold'>Trending</h2>
                <p className='text-gray-500 text-sm'>2 hours ago · News · 100K posts</p>

            </div>
        </div>
        
        <div>
            <div className='w-full hover:bg-slate-200 p-4 flex flex-col gap-4 cursor-pointer'>
                <h2 className='text-xl font-bold'>Trending</h2>
                <p className='text-gray-500 text-sm'>2 hours ago · News · 100K posts</p>

            </div>
        </div>

        <div className='sticky top-0 z-2 h-full flex flex-col gap-4 bg-white border border-gray-200 rounded-xl  '>
            <h2 className='text-2xl font-bold border-b border-gray-200 p-3'>What's happening</h2>

            <div className=' flex flex-col gap-1 border-b border-gray-200 p-4 cursor-pointer'>
                <div className='flex justify-between'>
                <p className='text-gray-400 text-sm'>Trending</p>
                <p className='text-gray-800 text-xl rounded-full hover:bg-blue-300 cursor-pointer px-2'>···</p>
                </div>
                <h3 className='font-semibold'>Trend</h3>
                <p className='text-gray-400 text-sm '>100K posts</p>
            </div>
            
            <div className='flex flex-col gap-1 border-b border-gray-200 p-4  cursor-pointer'>
                <div className='flex justify-between'>
                <p className='text-gray-400 text-sm'>Trending</p>
                <p className='text-gray-800 text-xl rounded-full hover:bg-blue-300 cursor-pointer px-2'>···</p>
                </div>
                <h3 className='font-semibold'>Trend</h3>
                <p className='text-gray-400 text-sm '>100K posts</p>
            </div>
            
            <div className='flex flex-col gap-1 border-b border-gray-200 p-4 cursor-pointer'>
                <div className='flex justify-between'>
                <p className='text-gray-400 text-sm'>Trending</p>
                <p className='text-gray-800 text-xl rounded-full hover:bg-blue-300 cursor-pointer px-2'>···</p>
                </div>
                <h3 className='font-semibold'>Trend</h3>
                <p className='text-gray-400 text-sm '>100K posts</p>
            </div>
            
            <div className='flex flex-col gap-1 border-b border-gray-200 p-4 cursor-pointer'>
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
