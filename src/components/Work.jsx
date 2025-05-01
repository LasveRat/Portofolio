/**
 *  @copyright 2024 Fampian Vella
 * @license Apache-2
 */

import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "/images/project-1.png",
    title: "Full stack Task manager",
    tags: ["Development", "API"],
    projectLink: "https://github.com/LasveRat/Task-Manager",
  },
  {
    imgSrc: "/images/project-2.png",
    title: "Travel Landing Page",
    tags: ["Frontend", "UI"],
    projectLink: "https://travel-app-sage-psi.vercel.app/",
  },
  {
    imgSrc: "/images/project-3.png",
    title: "Virtual App",
    tags: ["Frontend", "UI"],
    projectLink: "https://virtual-app-orpin.vercel.app/",
  },
];

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8">My portfolio highlights</h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
