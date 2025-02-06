import React, { useState } from 'react'

export default function Notifications() {
    const [focus, setFocus] = useState("all")
  return (
    <div className='flex flex-col w-full gap-4 p-4 h-full'>
        <h1 className='text-xl font-bold p-4'>Notifications</h1>
        <div className='flex w-full justify-around border-b border-slate-200'>
            <button className='hover:bg-slate-200 w-full flex flex-col items-center py-4' onClick={() => setFocus("all")}>All
                <div  className={`border-2 rounded-full w-1/3 ${focus === "all" ? "border-blue-600" : "border-transparent"}`} ></div>
            </button>
            <button className='hover:bg-slate-200 w-full flex flex-col items-center py-4' onClick={() => setFocus("mentions")}>Mentions
                <div  className={`border-2 rounded-full w-1/3 ${focus === "mentions" ? "border-blue-600" : "border-transparent"}`} ></div>
            </button>
            <button className='hover:bg-slate-200 w-full flex flex-col items-center py-4' onClick={() => setFocus("verified")}>Verified
                <div  className={`border-2 rounded-full w-1/3 ${focus === "verified" ? "border-blue-600" : "border-transparent"}`} ></div>
            </button>
        </div>
        <div className='flex flex-col gap-6'>
            <div className='flex gap-4 items-center border-b border-slate-200 p-4'>
                <div className='h-full'>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="50"
                        viewBox="0 0 24 24"
                        fill="red"
                        stroke="currentColor"
                        strokeWidth="0"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        >
                        <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                    </svg>
                </div>
                <div className='flex flex-col gap-2'>
                    <div className='flex gap-2 items-center'>
                        <img className='h-10 w-10 rounded-full' src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' alt='prf-pic'></img>
                        <h2 className='text-lg font-bold border-b border-transparent hover:border-black cursor-pointer'>User</h2>
                        <p>Liked your tweet</p>
                    </div>
                    <p className='text-center'>Esta es la mejor copia de Twitter con diferencia</p>
                </div>
            </div>

            <div className='flex gap-4 items-center border-b border-slate-200 p-4'>
                <div className='h-full'>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="50"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="Green"
                        strokeWidth="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        >
                        <path d="M4 12v-3a3 3 0 0 1 3 -3h13m-3 -3l3 3l-3 3" />
                        <path d="M20 12v3a3 3 0 0 1 -3 3h-13m3 3l-3 -3l3 -3" />
                    </svg>
                </div>
                <div className='flex flex-col gap-2'>
                    <div className='flex gap-2 items-center'>
                        <img className='h-10 w-10 rounded-full' src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' alt='prf-pic'></img>
                        <h2 className='text-lg font-bold border-b border-transparent hover:border-black cursor-pointer'>User</h2>
                        <p>Retweeted your tweet</p>
                    </div>
                    <p className='text-center'>Esta es la mejor copia de Twitter con diferencia</p>
                </div>
            </div>

            <div className='flex gap-4 items-center border-b border-slate-200 p-4'>
                <div className='h-full'>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="50"
                        viewBox="0 0 24 24"
                        fill="red"
                        stroke="currentColor"
                        strokeWidth="0"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        >
                        <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                    </svg>
                </div>
                <div className='flex flex-col gap-2'>
                    <div className='flex gap-2 items-center'>
                        <img className='h-10 w-10 rounded-full' src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' alt='prf-pic'></img>
                        <h2 className='text-lg font-bold border-b border-transparent hover:border-black cursor-pointer'>User</h2>
                        <p>Liked your tweet</p>
                    </div>
                    <p className='text-center'>Esta es la mejor copia de Twitter con diferencia</p>
                </div>
            </div>

            <div className='flex gap-4 items-center border-b border-slate-200 p-4'>
                <div className='h-full'>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="50"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="Green"
                        strokeWidth="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        >
                        <path d="M4 12v-3a3 3 0 0 1 3 -3h13m-3 -3l3 3l-3 3" />
                        <path d="M20 12v3a3 3 0 0 1 -3 3h-13m3 3l-3 -3l3 -3" />
                    </svg>
                </div>
                <div className='flex flex-col gap-2'>
                    <div className='flex gap-2 items-center'>
                        <img className='h-10 w-10 rounded-full' src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' alt='prf-pic'></img>
                        <h2 className='text-lg font-bold border-b border-transparent hover:border-black cursor-pointer'>User</h2>
                        <p>Retweeted your tweet</p>
                    </div>
                    <p className='text-center'>Esta es la mejor copia de Twitter con diferencia</p>
                </div>
            </div>

            <div className='flex gap-4 items-center border-b border-slate-200 p-4'>
                <div className='h-full'>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="50"
                        viewBox="0 0 24 24"
                        fill="red"
                        stroke="currentColor"
                        strokeWidth="0"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        >
                        <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                    </svg>
                </div>
                <div className='flex flex-col gap-2'>
                    <div className='flex gap-2 items-center'>
                        <img className='h-10 w-10 rounded-full' src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' alt='prf-pic'></img>
                        <h2 className='text-lg font-bold border-b border-transparent hover:border-black cursor-pointer'>User</h2>
                        <p>Liked your tweet</p>
                    </div>
                    <p className='text-center'>Esta es la mejor copia de Twitter con diferencia</p>
                </div>
            </div>

            <div className='flex gap-4 items-center border-b border-slate-200 p-4'>
                <div className='h-full'>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="50"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="Green"
                        strokeWidth="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        >
                        <path d="M4 12v-3a3 3 0 0 1 3 -3h13m-3 -3l3 3l-3 3" />
                        <path d="M20 12v3a3 3 0 0 1 -3 3h-13m3 3l-3 -3l3 -3" />
                    </svg>
                </div>
                <div className='flex flex-col gap-2'>
                    <div className='flex gap-2 items-center'>
                        <img className='h-10 w-10 rounded-full' src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' alt='prf-pic'></img>
                        <h2 className='text-lg font-bold border-b border-transparent hover:border-black cursor-pointer'>User</h2>
                        <p>Retweeted your tweet</p>
                    </div>
                    <p className='text-center'>Esta es la mejor copia de Twitter con diferencia</p>
                </div>
            </div>

            <div className='flex gap-4 items-center border-b border-slate-200 p-4'>
                <div className='h-full'>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="50"
                        viewBox="0 0 24 24"
                        fill="red"
                        stroke="currentColor"
                        strokeWidth="0"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        >
                        <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                    </svg>
                </div>
                <div className='flex flex-col gap-2'>
                    <div className='flex gap-2 items-center'>
                        <img className='h-10 w-10 rounded-full' src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' alt='prf-pic'></img>
                        <h2 className='text-lg font-bold border-b border-transparent hover:border-black cursor-pointer'>User</h2>
                        <p>Liked your tweet</p>
                    </div>
                    <p className='text-center'>Esta es la mejor copia de Twitter con diferencia</p>
                </div>
            </div>

            <div className='flex gap-4 items-center border-b border-slate-200 p-4'>
                <div className='h-full'>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="50"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="Green"
                        strokeWidth="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        >
                        <path d="M4 12v-3a3 3 0 0 1 3 -3h13m-3 -3l3 3l-3 3" />
                        <path d="M20 12v3a3 3 0 0 1 -3 3h-13m3 3l-3 -3l3 -3" />
                    </svg>
                </div>
                <div className='flex flex-col gap-2'>
                    <div className='flex gap-2 items-center'>
                        <img className='h-10 w-10 rounded-full' src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' alt='prf-pic'></img>
                        <h2 className='text-lg font-bold border-b border-transparent hover:border-black cursor-pointer'>User</h2>
                        <p>Retweeted your tweet</p>
                    </div>
                    <p className='text-center'>Esta es la mejor copia de Twitter con diferencia</p>
                </div>
            </div>
            
        </div>
    </div>
  )
}
