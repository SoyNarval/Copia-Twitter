"use client"

import React, { useState, useEffect } from 'react'
import ToTweet from '@/components/ToTweet'
import Tweet from '@/components/Tweet'
import { useTweets } from '../context/TweetsContext'
import ShowTweet from '@/components/ShowTweet'
import ShowImg from '@/components/ShowImg'
import Loading from '@/app/Loading'

export default function Timeline({setProfile, setPage, setShowTweet, showTweet}) {

  const tweets = useTweets()


  const [selectedTweet, setSelectedTweet] = useState(null)
  
  const [randomTweets, setRandomTweets] = useState([])

  const [activePage, setActivePage] = useState(false)

  const [loading, setLoading] = useState(true)

  const getRandomTweets = (tweets, num = 10) => {
    const tweetsCopy = [...tweets]
    const randomTweets = []

    while (randomTweets.length < num) {
      const randomIndex = Math.floor(Math.random() * tweetsCopy.length)
      const tweet = tweetsCopy[randomIndex]

      if (!randomTweets.includes(tweet)){
        randomTweets.push({
          ...tweet,
          id: Math.random().toString(36).substring(2, 9),
        })
      }
    }

    return randomTweets
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    setLoading(true)
    const tweetsData = getRandomTweets(tweets)
    setRandomTweets(tweetsData)
    setLoading(false)
  }, [tweets, activePage]) 
  

  return (
    <div>
      <div className='flex flex-row bg-background border-b border-gray-300 justify-between sticky w-full top-0 z-10'>
        <button className={`flex flex-col items-center justify-center w-full hover:bg-gray-200 p-4 font-bold ${activePage ? "text-black font-bold" : "text-gray-600 font-semibold"}`} title='For you' onClick={() => setActivePage(true)}>
          For you
          <div  className={`border-2 rounded-full w-1/3 ${activePage ? "border-blue-600" : "border-transparent"}`}></div>
        </button>
        <button className={`flex flex-col items-center justify-center w-full hover:bg-gray-200 p-4 font-bold ${activePage ? "text-gray-600 font-semibold" : "text-black font-bold"}`} title='Following' onClick={() => setActivePage(false)}>
          Following
          <div  className={`border-2 rounded-full w-1/3 ${activePage ? "border-transparent" : "border-blue-600"}`}></div>
        </button>
      </div>
      <ToTweet/>
      {loading ? (
        <Loading/>
      ) : (
        <div>
          {randomTweets.map(tweet => (
            <Tweet
              setPage={setPage}
              key={tweet.id}
              tweet={tweet}
              setShowTweet={setShowTweet}
              setSelectedTweet={setSelectedTweet}
              setProfile={setProfile}
            />
          ))}
          <ShowTweet
            showTweet={showTweet}
            setShowTweet={setShowTweet}
            tweet={selectedTweet}
            setProfile={setProfile}
            setPage={setPage}
          />
        </div>
      )}
    </div>
  )
}
