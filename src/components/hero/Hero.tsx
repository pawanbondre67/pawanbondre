import Experience from "../Experience/Experience"
import Skills from "../Skills/Skills"
import { Button } from "../ui/button"
import Education from "../Education/Education"
import Services from "../Services/Services"

import Contact  from "../contact/Contact"


function Hero() {
  return (
    <>
    <div className=" text-white  text-center space-y-4">
    <img alt="Hero" loading="lazy" width="200" height="200" decoding="async" data-nimg="1" className="mt-7 mx-auto aspect-square overflow-hidden rounded-full object-cover" src="/photo.jpg"   />
        <h1 className="text-3xl p-0 font-bold tracking-tight sm:text-4xl md:text-5xl">
            Pawan Bondre
        </h1>

          <div className="py-2 font-medium text-xl">
            I am a: <span>Tech Enthusiast</span>
            <span className="typed-cursor typed-cursor--blink" aria-hidden="true">
            |</span>

          </div>

            <p className=" text-base text-gray-400 px-5 lg:max-w-screen-lg lg:mx-auto">I am a dedicated Computer Engineering student with a strong focus on frontend development. Experienced in creating dynamic user interfaces using Angular, I have successfully led teams in Agile environments and integrated complex UI features with backend APIs. My academic projects showcase my proficiency in full-stack development and secure authentication practices. I am eager to leverage my skills in real-world scenarios through internships and entry-level positions.
                </p>


                <div  className="text-black mt-4" >
                    <a href="#contact">
                    <Button variant="outline">Let's Connect</Button>
                      </a>
                 </div>


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