import { RevealOnScroll } from "../RevealOnScroll";
import movie from "../../assets/Screenshot 2025-06-22 163137.png"
import food from "../../assets/Screenshot 2025-06-22 163306.png"
import gadget from "../../assets/Screenshot 2025-06-22 163450.png"
import cricket from '../../assets/Screenshot 2025-06-22 163604.png'
import chess from "../../assets/Screenshot 2025-06-22 163704.png"

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
             <img
    src={movie}
    alt="Movie Project Screenshot"
    className="w-full h-48 object-cover rounded-lg mb-4 shadow-lg hover:scale-105 transition-transform duration-300"
  />
              <h3 className="text-xl font-bold mb-2">Movie Portal Website</h3>
              <p className="text-gray-400 mb-4">
                It is a responsive single-page application designed for movie lovers to explore, contribute to, and organize their favorite films. The platform supports Google authentication and delivers a seamless user experience across all devices. Users can browse community-recommended movies, add their own, and curate a personal favorites list.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Node.js", "TailwindCSS", "MongoDB"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://my-movie-site-1a1ab.web.app/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
               <img
    src={food}
    alt="Movie Project Screenshot"
    className="w-full h-48 object-cover rounded-lg mb-4 shadow-lg hover:scale-105 transition-transform duration-300"
  />
              <h3 className="text-xl font-bold mb-2">Food Sharing Website</h3>
              <p className="text-gray-400 mb-4">
               Food Feasta enables users to donate and receive food in times of need through a seamless, secure, and user-friendly platform. The application supports Google authentication and provides a fully responsive experience across all devices, making food sharing efficient, accessible, and impactful.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Node.js", "TailwindCSS", "MongoDB","express.js","Tanstack query"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://my-food-web.web.app/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
               <img
    src={gadget}
    alt="Movie Project Screenshot"
    className="w-full h-48 object-cover rounded-lg mb-4 shadow-lg hover:scale-105 transition-transform duration-300"
  />
              <h3 className="text-xl font-bold mb-2">Gadget Heaven</h3>
              <p className="text-gray-400 mb-4">
                Gadget Heaven is a Frontend based website where you can find your needed tec product. We have different categories of product with a beautiful user interface.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "TailwindCSS", "DaisyUI"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://remarkable-croquembouche-06b9d2.netlify.app/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
               <img
    src={cricket}
    alt="Movie Project Screenshot"
    className="w-full h-48 object-cover rounded-lg mb-4 shadow-lg hover:scale-105 transition-transform duration-300"
  />
              <h3 className="text-xl font-bold mb-2">Dream-11 Cricket</h3>
              <p className="text-gray-400 mb-4">
               This is a simple react web based project(Frontend).Its platform where you can build your team. Players all over the world are here with their stat you just have to chose them using your cricket sense and build your team.For the transaction we give you coin so that you can bye players.I am very excited to launch this project!!
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["TailwindCSS", "React", "DaisyUI"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center ">
                <a
                  href="https://dear-suggestion.surge.sh/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
                 <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
               <img
    src={chess}
    alt="Movie Project Screenshot"
    className="w-full h-48 object-cover rounded-lg mb-4 shadow-lg hover:scale-105 transition-transform duration-300"
  />
              <h3 className="text-xl font-bold mb-2">Simple Chess Game</h3>
              <p className="text-gray-400 mb-4">
                This is something I wanted to try.Build a simple chess game using the html css and js.Here I polish my js knowledge more for the game logic.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML5", "CSS", "JavaScript"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center ">
                <a
                  href="https://shafisiyam712.github.io/Chess-Game/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
