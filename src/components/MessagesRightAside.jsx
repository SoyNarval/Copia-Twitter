import React from 'react'

export default function MessagesRightAside() {
    return (
        
    <div className='flex flex-col h-screen justify-center items-left border-b border-slate-200 gap-4 p-8'>
        <h1 className='text-2xl font-bold text-left'>Select a message</h1>
        <p className='w-full px'>Choose from your existing conversations, start a new one, or just keep swimming.</p>
        <button className='bg-blue-500 text-white p-4 rounded-full w-1/3'>New message</button>
    </div>

    )
}
