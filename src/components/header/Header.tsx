// import { useState } from 'react';
import { FaArrowRight } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { IoDocumentText } from "react-icons/io5";
import { CiTwitter } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import React, { useRef, useState } from "react";
// import { useRouter } from 'next/router';

const Header: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };


  return (
    <header className="backdrop-blur-md text-white xl:py-2 sticky top-0 flex items-center justify-between px-4 py-3 md:px-6 md:py-4 lg:px-8 lg:py-5 z-50 lg:static">
      <a className="flex items-center gap-2" href="/">
        <span className="text-xl font-bold bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">PB</span>
      </a>

      <div className="flex gap-3">
        <Dialog>
          <DialogTrigger asChild>
            <button className="text-white  border-gray-500 border hover:text-green-600 backdrop-blur-lg bg-gradient-to-tr from-transparent via-[rgba(151,126,126,0.16)] to-transparent rounded-md  text-xl lg:text-2xl p-1.5 md:p-1 shadow hover:shadow-green-600 duration-700">
              ☸️
            </button>
          </DialogTrigger>
          <DialogContent className="w-80 rounded-md lg:w-full bg-primary shadow-lg border-gray-800 border ">
            <DialogHeader>
              <DialogTitle className="text-white">
                Welcome To my space !!
              </DialogTitle>
            </DialogHeader>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col items-start gap-1">
                <div className="font-bold text-white">Actions</div>

                <div className="hover:bg-violet-200 hover:text-black w-full rounded-md">
                  <a href="/projects">
                    
                    <button className=" flex  items-center gap-2 text-gray-500 hover:bg-violet-200 hover:text-black w-full rounded-md p-2">
                      <FaArrowRight />
                      Checkout my work
                    </button>
                  </a>
                </div>

               <div className=" text-gray-500 hover:bg-violet-200 hover:text-black w-full rounded-md p-2">
               <a href="/pawanbondre_resume.pdf" target="_blank" className="flex  items-center gap-2" > <IoDocumentText />
                  Download my resume
                  </a>
                </div>
              
              </div>

              <div className="font-bold text-white">Connect with me</div>
              <div className="flex flex-col items-start gap-1">
                <div className="hover:bg-violet-200 hover:text-black w-full rounded-md">
                 
                  <a href="https://github.com/pawanbondre67"  target="_blank">
                    <button className="flex  items-center gap-2 text-gray-500 hover:bg-violet-200 hover:text-black w-full rounded-md p-2">
                      <FaGithub /> Check out my GitHub
                    </button>
                  </a>
                </div>
                <div className="hover:bg-violet-200 hover:text-black w-full rounded-md">
                  
                  <a href="https:x.com/pawancodes" target="_blank">
                    
                    <button className="flex items-center gap-2 text-gray-500 hover:bg-violet-200 hover:text-black w-full  rounded-md p-2">
                      <CiTwitter />
                      Connect on Twitter
                    </button>
                  </a>
                </div>
                <div className="hover:bg-violet-200 hover:text-black w-full rounded-md">
                
                  <a href=""  target="_blank">
                    <button className="flex  items-center gap-2 text-gray-500 hover:bg-violet-200 hover:text-black w-full rounded-md p-2">
                      <MdOutlineMail />
                      Send me an mail
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        <button
          onClick={handlePlayPause}
          className={`border-gray-500 border hover:text-green-600 backdrop-blur-lg bg-gradient-to-tr from-transparent via-[rgba(151,126,126,0.16)] to-transparent rounded-md p-1.5 text-xl shadow duration-700 ${
            isPlaying ? 'animate-glow' : ''
          }`}>
          🎵 {isPlaying}
        </button>
        <audio loop ref={audioRef} src="/src_assets_audio_ghostrifter-purple-dream.ogg" />
     
      </div>
    </header>
  );
};

export default Header;
