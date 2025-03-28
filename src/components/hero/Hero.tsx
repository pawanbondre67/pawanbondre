
import { Button } from "../ui/button";


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
            className="mt-3 mx-auto aspect-square overflow-hidden rounded-full object-cover"
            src="/pawanbondre.svg"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            // whileInView={{ opacity: 1, y: 0 }}
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
              className="mt-6  text-base text-gray-400 px-5 lg:max-w-screen-lg lg:mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileInView={{ opacity: 1 }}
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
              whileInView={{ opacity: 1 }}
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



       {/* Experience & Skills Section */}
       <section className="py-10 md:py-20 relative">
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto px-4"
          >
            <h2 className="text-4xl font-bold mb-12 text-white">Experience & Skills</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                // animate={{ opacity: 1, x: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ 
                  scale: 1.05,
                  rotate: 2,
                  boxShadow: "0 0 20px rgba(79, 70, 229, 0.3)"
                }}
                transition={{ duration: 0.3 }}
                className="glass-effect p-6 rounded-lg border cursor-pointer border-gray-800  hover:scale-105 hover:rotate-2 hover:shadow-lg hover:shadow-blue-500 sm:hover:scale-100 sm:hover:rotate-0 sm:hover:shadow-none"
              >
                <h3 className="text-xl font-semibold mb-4 text-white">Full Stack Development</h3>
                <p className="text-gray-400">TypeScript, React, Node.js, Express.js, Next.js, and modern web technologies.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                // animate={{ opacity: 1, x: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ 
                  scale: 1.05,
                  rotate: -2,
                  boxShadow: "0 0 20px rgba(79, 70, 229, 0.3)"
                }}
                transition={{ duration: 0.3 }}
                className="glass-effect p-6 rounded-lg cursor-pointer border border-gray-800  hover:scale-105 hover:rotate-2 hover:shadow-lg hover:shadow-blue-500 sm:hover:scale-100 sm:hover:rotate-0 sm:hover:shadow-none"
              >
                <h3 className="text-xl font-semibold mb-4 text-white">Database Management</h3>
                <p className="text-gray-400">Experienced with MySQL, MongoDB, and database optimization techniques.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                // animate={{ opacity: 1, x: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ 
                  scale: 1.05,
                  rotate: -2,
                  boxShadow: "0 0 20px rgba(79, 70, 229, 0.3)"
                }}
                transition={{ duration: 0.3 }}
                className="glass-effect p-6 rounded-lg cursor-pointer border border-gray-800  hover:scale-105 hover:rotate-2 hover:shadow-lg hover:shadow-blue-500 sm:hover:scale-100 sm:hover:rotate-0 sm:hover:shadow-none"
              >
                <h3 className="text-xl font-semibold mb-4 text-white">UI/UX Design</h3>
                <p className="text-gray-400">Proficient in Tailwind CSS, responsive design, and creating engaging user interfaces.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                // animate={{ opacity: 1, x: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ 
                  scale: 1.05,
                  rotate: 2,
                  boxShadow: "0 0 20px rgba(79, 70, 229, 0.3)"
                }}
                transition={{ duration: 0.3 }}
                className="glass-effect p-6 rounded-lg cursor-pointer border border-gray-800  hover:scale-105 hover:rotate-2 hover:shadow-lg hover:shadow-blue-500 sm:hover:scale-100 sm:hover:rotate-0 sm:hover:shadow-none"
              >
                <h3 className="text-xl font-semibold mb-4 text-white">Mobile App Development</h3>
                <p className="text-gray-400">Proficient in building cross-platform mobile applications using React Native, ensuring seamless performance and user experience.</p>
                
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              // animate={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-16 glass-effect p-8 border border-gray-800 rounded-lg"
            >
              <p className="text-gray-300">Currently pursuing my Bachelor's Degree in Computer Science at Savitribai Phule Pune University (2021-2025), while actively working on various full-stack development projects.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Funny Quote Section */}
      <section className="py-10 max-w-5xl mx-auto px-4 relative">
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            // animate={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ 
              scale: 1.02,
              rotate: [0, -2, 2, -2, 0],
              transition: { duration: 0.5, repeat: Infinity }
            }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl mx-auto text-center glass-effect p-6 rounded-xl border cursor-pointer"
          >
            <div className="text-6xl mb-6">👨‍💻</div>
            <p className="text-xl text-gray-300 italic mb-4">
              "There are only two hard things in Computer Science: cache invalidation, naming things, and off-by-one errors."
            </p>
            <p className="text-primary text-sm">- Every Developer Ever</p>
          </motion.div>
        </div>
      </section>

      {/* Developer Life Section */}
      <section className="py-16  max-w-5xl mx-auto px-4 relative">
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center  mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Developer Life Be Like</h2>
            <p className="text-gray-400">Some days you're the debugger, some days you're the bug</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              // animate={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
              y: -10,
              scale: 1.05,
              boxShadow: "0 20px 30px rgba(79, 70, 229, 0.2)"
              }}
              transition={{ duration: 0.3 }}
              className="p-6 rounded-xl border border-gray-800 cursor-pointer hover:scale-105 hover:rotate-2 hover:shadow-lg hover:shadow-blue-500 sm:hover:scale-100 sm:hover:rotate-0 sm:hover:shadow-none"
            >
              <div className="text-6xl mb-4">🚀</div>
              <p className="text-gray-300 text-lg mb-2">"My code works and I have no idea why"</p>
              <p className="text-slate-400 text-sm">- Every Junior Dev</p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              // animate={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                y: -10,
                scale: 1.05,
                boxShadow: "0 20px 30px rgba(79, 70, 229, 0.2)"
              }}
              transition={{ duration: 0.3 }}
              className="glass-effect p-6 rounded-xl border border-gray-800 cursor-pointer hover:scale-105 hover:rotate-2 hover:shadow-lg hover:shadow-blue-500 sm:hover:scale-100 sm:hover:rotate-0 sm:hover:shadow-none"
            >
              <div className="text-6xl mb-4">💻</div>
              <p className="text-gray-300 text-lg mb-2">"It works on my machine!"</p>
              <p className="text-slate-400 text-sm">- Developer's Famous Last Words</p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              // animate={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                y: -10,
                scale: 1.05,
                boxShadow: "0 20px 30px rgba(79, 70, 229, 0.2)"
              }}
              transition={{ duration: 0.3 }}
              className=" md:glass-effect p-6 rounded-xl border border-gray-800 hover:scale-105 hover:rotate-2 hover:shadow-lg hover:shadow-blue-500 cursor-pointer sm:hover:scale-100 sm:hover:rotate-0 sm:hover:shadow-none"
            >
              <div className="text-6xl mb-4">🐛</div>
              <p className="text-gray-300 text-lg mb-2">"When the bug appears in production"</p>
              <p className="text-slate-400 text-sm">- DevOps Nightmare</p>
            </motion.div>
          </div>

          {/* Fun Facts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ 
              scale: 1.02,
              backgroundColor: "rgba(79, 70, 229, 0.1)",
              transition: { duration: 0.3 }
            }}
            // whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-2xl mx-auto mt-16 glass-effect p-8 border border-gray-800 hover:scale-105 hover:rotate-2 hover:shadow-lg hover:shadow-blue-500 sm:hover:scale-100 sm:hover:rotate-0 sm:hover:shadow-none rounded-xl cursor-pointer"
          >
            <h3 className="text-xl font-bold text-white mb-6">Developer Fun Facts</h3>
            <ul className="space-y-4 text-left">
              <li className="flex items-center text-gray-300">
                <span className="text-2xl mr-4">🍕</span>
                "The average developer's blood type is C++"
              </li>
              <li className="flex items-center text-gray-300">
                <span className="text-2xl mr-4">☕</span>
                "Coffee to Code Converter"
              </li>
              <li className="flex items-center text-gray-300">
                <span className="text-2xl mr-4">🐛</span>
                "I don't always test my code, but when I do, I do it in production"
              </li>
            </ul>
          </motion.div>
        </div>
      </section>


      {/* <Experience />
      <Skills />
      <Education />
      <Services/> */}
      <Contact />
    </>
  );
}

export default Hero;
