import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "HTML5",
    "TailwindCSS",
    "Bootstrap",
    "JavaScript",
    "React",
    "Figma"
  ];

  const backendSkills = ["Node.js", "Python", "Express.js", "MongoDB","Authentication", "MySQL"];
  const othersSkills = ["C", "C++", "JAVA", "Analytical Skills", "Creative Writing","English"];

  return (
    <section
  id="about"
  className="min-h-screen flex items-center justify-center py-20"
>
  <RevealOnScroll>
    <div className="max-w-3xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
        About Me
      </h2>

      <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
        <p className="text-gray-300 mb-6">
          I am Shafiuddin Seyam, a passionate BSc Engineering student in Information and Communication Technology (ICT) at Mawlana Bhashani Science and Technology University. I specialize in front-end development with a solid understanding of backend technologies and a growing interest in full-stack development. With a good knowledge of C, C++, Java, and Python, I approach challenges with a problem-solving mindset and a drive for continuous improvement.I enjoy building seamless, efficient applications and am eager to grow as a developer by exploring modern tools, frameworks, and development practices. My enthusiasm for full-stack development drives me to learn continuously and solve problems with innovative solutions.Here are my skills....
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Frontend */}
          <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              {frontendSkills.map((tech, key) => (
                <span
                  key={key}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">Backend</h3>
            <div className="flex flex-wrap gap-2">
              {backendSkills.map((tech, key) => (
                <span
                  key={key}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Others (centered and full-width) */}
          <div className="md:col-span-2 rounded-xl p-6 hover:-translate-y-1 transition-all text-center flex flex-col items-center">
            <h3 className="text-xl font-bold mb-4">Others</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {othersSkills.map((tech, key) => (
                <span
                  key={key}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Education & Experience */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
          <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>
              <strong>B.S. in Information & Communication Technology</strong> - Mawlana Bashani Science & Technology University
              (2022-2026)
            </li>
            <li>
              Relevant Coursework: Data Structures, Web Development, Java
              Programming...
            </li>
          </ul>
        </div>
        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
          <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
          {/* <div className="space-y-4 text-gray-300">
            <div>
              <h4 className="font-semibold">
                Software Engineer at ABC Corp (2020 - Present)
              </h4>
              <p>
                Developed and maintained microservices for cloud-based
                applications.
              </p>
            </div>

            <div>
              <h4 className="font-semibold">
                Intern at DEF Startups (2019)
              </h4>
              <p>
                Assisted in building front-end components and integrating REST
                APIs.
              </p>
            </div>
          </div> */}
          Still none..but will be added soon
        </div>
      </div>
    </div>
  </RevealOnScroll>
</section>

    
  );
};
