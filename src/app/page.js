"use client"
import Image from "next/image";
import { useState, useEffect } from "react";
import { TweetsProvider } from "../../context/TweetsContext";
import { useTweets } from "../../context/TweetsContext";
import Timeline from "../../pages/timeline";
import Profile from "../../pages/profile";
import Nav from "@/components/Nav";
import RightAside from "@/components/RightAside";
import Messages from "@/components/Messages";
import Explore from "../../pages/Explore";
import DMessages from "../../pages/DMessages";
import MessagesRightAside from "@/components/MessagesRightAside";
import ToTweet from '@/components/ToTweet'
import Notifications from "../../pages/Notifications";

export default function Home() {

  const [profile, setProfile] = useState("")
  const [showTweet, setShowTweet] = useState(false)
  const [page, setPage] = useState("home")

  const [showImage, setShowImage] = useState(" ")
  const [showToTweet, setShowToTweet] = useState(false)

  // hacer las notificaciones


  const tweet = useTweets()

  useEffect(()=>{
    window.scrollTo(0, 0)
  },[page])

  return (
    <>
      <TweetsProvider>  
        <div className='relative flex flex-row w-screen'>

          
          <div className=' flex justify-end max-md:w-1/5 md:w-2/5 lg:w-3/12 xl:w-1/4'>
            <div className="fixed w-fit">
              <Nav
                setProfile={setProfile}
                setPage={setPage}
                setShowToTweet={setShowToTweet}
              />
            </div>
            
          </div>

          <div className="flex h-full relative max-md:w-4/5 md:w-full lg:w-4/5">
          
            <div className='h-full lg:w-1/2 w-full border-r border-r-slate-200'> 
              <div className={`${page === "home" ? "" : "hidden"} w-full`}>
                <Timeline
                  setProfile = {setProfile}
                  setPage={setPage}
                  setShowTweet={setShowTweet}
                  showTweet={showTweet}
                />
              </div>

              <div className={`${page === "profile" ? "" : "hidden"} w-full`}>
                <Profile
                  setPage={setPage}
                  setProfile={setProfile}
                  profile={profile}
                  setShowImage={setShowImage} 
                  showImage={showImage}
                  setShowTweet={setShowTweet}
                  showTweet={showTweet}
                  
                />
              </div>

              <div className={`${page === "search" ? "" : "hidden"} w-full`}>
                <Explore/>
              </div>
              
              <div className={`${page === "DM" ? "" : "hidden"} w-full`}>
                <DMessages
                  setPage={setPage}
                  setProfile={setProfile}
                />
              </div>

              <div className={`${page === "notifications" ? "" : "hidden"} w-full`}>
                <Notifications
                />
              </div>

            </div>

            <div className={`h-full flex justify-start max-lg:hidden w-1/2 ${page === "DM" ? "hidden" : ""}`}>
              <RightAside
                setPage={setPage}
                setProfile={setProfile}
              />

            </div>

            <div className={`h-full flex justify-start max-lg:hidden w-1/2 ${page === "DM" ? "" : "hidden"}`}>
              <MessagesRightAside
              />
            </div>

            <div className={`absolute z-1 max-lg:hidden ${page === "DM" ? "hidden" : ""}`}>
              <Messages/>
            </div>
          </div>

          {showToTweet && 
            <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex flex-col justify-center items-center gap-4 z-20">
              <button className="p-4 bg-white hover:bg-gray-200 rounded-full" title="Close" onClick={() => setShowToTweet(false)}>&#x2716;</button>
              <div className="bg-white max-md:w-full w-2/3 p-4">
                <ToTweet/>
              </div>
              
            </div>
          
          }
          
          
        </div>
      </TweetsProvider>
    </>
  );
}
