import Experience from "../Experience/Experience";
import Skills from "../Skills/Skills";
import { Button } from "../ui/button";
import Education from "../Education/Education";
// import Services from "../Services/Services"

import Contact from "../contact/Contact";
// import Projects from "../Projects/Projects"
import { useNavigate } from "react-router-dom";
import { Cursor, useTypewriter } from "react-simple-typewriter";

// import { Boxes } from "../ui/background-boxes";
// import { cn } from "@/lib/utils";

import { BackgroundBeams } from "../ui/background-beam";
function Hero() {
  const navigate = useNavigate();
  const [text] = useTypewriter({
    words: [
      "Frontend Developer",
      "React Developer",
      "Tech Enthusiast",
      "Full Stack Developer",
      "learner",
      "React Native Developer",
      "Computer Science Student",
    ],
    loop: true,
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  const handleViewProjects = () => {
    navigate(`/projects`);
  };
  return (
    <>
      <div className="py-6 w-full rounded-md  relative flex flex-col items-center justify-center antialiased">
        <BackgroundBeams />
        <div className=" text-white  text-center space-y-4  z-20">
          <img
            alt="Hero"
            loading="lazy"
            width="200"
            height="200"
            decoding="async"
            data-nimg="1"
            className="mt-7 mx-auto aspect-square overflow-hidden rounded-full object-cover"
            src="/pawanbondre.svg"
          />
          <h1 className="text-3xl p-0 font-bold tracking-tight sm:text-4xl md:text-5xl">
            Pawan Bondre
          </h1>

          <div className="py-2 font-medium text-xl">
            <span>
              I am a{" "}
              <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                {text}
              </span>
              <span>
                <Cursor />
              </span>
            </span>
          </div>


          <p className=" text-base text-gray-600 px-5 lg:max-w-screen-lg lg:mx-auto">
            I am a dedicated Computer Engineering student with a strong passion
            for  <span className="font-semibold text-white">frontend and mobile development </span>. Proficient in React and React
            Native, I specialize in building dynamic user interfaces and
            seamless user experiences. My experience as a  <span className="font-semibold text-white">React Native Developer </span> 
             has enhanced my expertise in mobile app development, while my
            academic projects showcase my proficiency in full-stack development
            using the  <span className="font-semibold text-white">MERN stack </span>  and secure authentication practices. I am eager
            to innovate, learn, and build cutting-edge digital experiences that
            make an impact. Let’s create something amazing together! 🚀
          </p>

          <div className="flex justify-center gap-8">
            <div className="text-black mt-4">
              <a href="#contact">
                <Button
                  variant="outline"
                  className="hover:text-white bg-clip-text text-transparent"
                >
                  Let's Connect
                </Button>
              </a>
            </div>
            <div className="text-black mt-4">
              <Button
                variant="outline"
                onClick={handleViewProjects}
                className="hover:text-white bg-clip-text text-transparent"
              >
                My Work
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Experience />
      <Skills />
      <Education />
      {/* <Services/> */}
      <Contact />
    </>
  );
}

export default Hero;
