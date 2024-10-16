import Experience from "../Experience/Experience"
import Skills from "../Skills/Skills"
import { Button } from "../ui/button"
import Education from "../Education/Education"
import Services from "../Services/Services"

import Contact  from "../contact/Contact"
// import Projects from "../Projects/Projects"
import { useNavigate } from "react-router-dom"
// import {useTypewriter,Cursor} from "react-simple-typewriter"
import {TypeAnimation} from 'react-type-animation'

function Hero() {

  const navigate = useNavigate();

  // const [text] = useTypewriter({
  //   words: ["Tech Enthusiast", "Full Stack Developer", "Learner","Computer Engineering Student"],
  //   loop: true,
  //   typeSpeed: 120,
  //   deleteSpeed: 80,
  // });

  const handleViewProjects = () => {
    navigate(`/projects`);
  };
  return (
    <>
    <div className=" text-white  text-center space-y-4">
    <img alt="Hero" loading="lazy" width="200" height="200" decoding="async" data-nimg="1" className="mt-7 mx-auto aspect-square overflow-hidden rounded-full object-cover" src="/pawanbondre.svg"   />
        <h1 className="text-3xl p-0 font-bold tracking-tight sm:text-4xl md:text-5xl">
            Pawan Bondre
        </h1>

          {/* <div className="py-2 font-medium text-xl">
            I am a {''}
             <span>{text}</span>
            <span className="text-white" aria-hidden="true">
          <Cursor/> </span>

          </div> */}

          <div className="py-2 font-medium text-xl">
        <span>I am a {''}
       
          <TypeAnimation
          className="font-bold bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
          sequence={[
            "Tech Enthusiast",
            2000,
            "Full Stack Developer",
            2000,
            "Learner",
            2000,
            "Computer Engineering Student",
            2000,
          ]}
          wrapper="span"
          speed={3}
          repeat={Infinity}
        /></span>


          </div>

            <p className=" text-base text-gray-400 px-5 lg:max-w-screen-lg lg:mx-auto">I am a dedicated Computer Engineering student with a strong focus on frontend development. Experienced in creating dynamic user interfaces using Angular, I have successfully led teams in Agile environments and integrated complex UI features with backend APIs. My academic projects showcase my proficiency in full-stack development and secure authentication practices. I am eager to leverage my skills in real-world scenarios through internships and entry-level positions.
                </p>


                <div className="flex justify-center gap-8">
                  <div  className="text-black mt-4" >
                    <a href="#contact">
                    <Button variant="outline">Let's Connect</Button>
                      </a>
                 </div>
                 <div  className="text-black mt-4" >
                  
                    <Button variant="outline" onClick={handleViewProjects} >My Work</Button>
                     
                 </div></div>


</div>

<Experience/>
<Skills/>
<Education/>
<Services/>
<Contact/>

</>
  )
}

export default Hero