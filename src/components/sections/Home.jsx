// import { RevealOnScroll } from "../RevealOnScroll";

// export const Home = () => {
//   return (
//     <section
//       id="home"
//       className="min-h-screen flex items-center justify-center relative mt-20 md:mt-1"
//     >
//       <RevealOnScroll>
//         <div className="text-center z-10 px-4 flex-row md:flex-col">
//           <div>
//  <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
//             Hi, I'm Shafi Seyam
//           </h1>

//           <p className="tex-gray-400 text-lg mb-8 max-w-lg mx-auto">
//             I’m a full-stack developer who loves crafting clean, scalable web
//             applications. My goal is to build solutions that offer both
//             exceptional performance and a delightful user experience.
//           </p>
//           <div className="flex justify-center space-x-4">
//             <a
//               href="#projects"
//               className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
//             >
//               View Projects
//             </a>

//             <a
//               href="#contact"
//               className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
//              hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
//             >
//               Contact Me
//             </a>
//           </div>
//         </div>
//           </div>
//           <div>
//             <img src="../../assets/photo_2025-04-29_00-47-04 (3).jpg" alt="" />
//           </div>
//           {/* <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
//             Hi, I'm Shafi Seyam
//           </h1>

//           <p className="tex-gray-400 text-lg mb-8 max-w-lg mx-auto">
//             I’m a full-stack developer who loves crafting clean, scalable web
//             applications. My goal is to build solutions that offer both
//             exceptional performance and a delightful user experience.
//           </p>
//           <div className="flex justify-center space-x-4">
//             <a
//               href="#projects"
//               className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
//             >
//               View Projects
//             </a>

//             <a
//               href="#contact"
//               className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
//              hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
//             >
//               Contact Me
//             </a>
//           </div>
//         </div> */}
//       </RevealOnScroll>
//     </section>
//   );
// };
import { RevealOnScroll } from "../RevealOnScroll";
import pic from "../../assets/photo_2025-04-29_00-47-04 (3).jpg"
export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative px-4 mt-20 md:mt-1"
    >
      <RevealOnScroll>
        <div className="flex flex-col z-10 md:flex-row items-center gap-10 text-center md:text-left">
          {/* Info Section */}
          <div className="max-w-xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
              Hi, I'm Shafi Seyam
            </h1>

            <p className="text-gray-400 text-lg mb-8">
              I’m a full-stack developer who loves crafting clean, scalable web
              applications. My goal is to build solutions that offer both
              exceptional performance and a delightful user experience.
            </p>

            {/* <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="#projects"
                className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
              >
                Contact Me
              </a>
            </div> */}
            <div className="flex justify-center md:justify-start space-x-4">
  <a
    href="#projects"
    className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:bg-blue-500 hover:text-white"
  >
    View Projects
  </a>

  <a
    href="#contact"
    className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:bg-blue-500 hover:text-white"
  >
    Contact Me
  </a>
</div>

          </div>

          {/* Image Section */}
          <div>
            <img
              src={pic}
              alt="Shafi Seyam"
              className="w-80 h-80 object-cover rounded-full border-4 border-blue-500 shadow-lg"
            />
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

