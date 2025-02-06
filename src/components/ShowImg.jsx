import React from 'react'

export default function ShowImg({setShowImage, showImage}) {


    const imgsrc = "/images/profile-pictures/"

    if(showImage == " "){
        return null
    }else{
            return (
                <div className='fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex flex-col justify-center items-center gap-4 z-10 overflow-'>
                    <div className='fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex flex-col justify-center items-center gap-4 z-2'>
                        <button className='p-4 bg-white hover:bg-gray-200 rounded-full' title='Close' onClick={() => setShowImage(" ")}>&#x2716;</button>
                        <div className='h-60 w-60 md:h-80 md:w-80'>
                            <img className='h-full w-full rounded-full border-4 border-white' src={`${imgsrc}${showImage}`} alt={showImage} />
                        </div>
                        </div>
                </div>
                
            )
        }
}
