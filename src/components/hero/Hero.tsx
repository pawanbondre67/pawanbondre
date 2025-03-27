import Experience from "../Experience/Experience";
import Skills from "../Skills/Skills";
import { Button } from "../ui/button";
import Education from "../Education/Education";
// import Services from "../Services/Services"

import Contact from "../contact/Contact";
// import Projects from "../Projects/Projects"
import { useNavigate } from "react-router-dom";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-3xl p-0 font-bold tracking-tight sm:text-4xl md:text-5xl">
              <motion.span
                className="text-white block mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Pawan Bondre
              </motion.span>
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

            <motion.p
              className="mt-6  text-muted-foreground text-base text-gray-600 px-5 lg:max-w-screen-lg lg:mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              I am a Computer Engineering student passionate about{" "}
              <span className="font-semibold text-white">
                frontend and mobile development
              </span>
              . Skilled in React, React Native, and the{" "}
              <span className="font-semibold text-white">MERN stack</span>, I build
              dynamic user interfaces and seamless experiences. Let’s create something
              amazing! 🚀
            </motion.p>

            <motion.div
              className="mt-10 mb-6 flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <div className="flex justify-center gap-8">
                <div className="text-black mt-4">
                  <a href="#contact">
                    <Button
                      variant="outline"
                      className="hover:text-white bg-clip-text text-transparent hover:shadow-lg hover:shadow-green-400"
                    >
                      Let's Connect
                    </Button>
                  </a>
                </div>
                <div className="text-black mt-4">
                  <Button
                    variant="outline"
                    onClick={handleViewProjects}
                    className="hover:text-white bg-clip-text hover:bg-slate-100 text-transparent hover:shadow-lg hover:shadow-blue-400"
                  >
                    My Work
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
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
