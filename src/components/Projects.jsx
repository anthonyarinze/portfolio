import { headerStyles } from "../constants/headerStyle";
import { projectData } from "../data";
import ProjectItem from "../ui/ProjectItem";

const Projects = () => {
  return (
    <section className="mt-10 h-auto">
      <h2 className={headerStyles}>Projects</h2>
      {projectData.map((data, index) => (
        <ProjectItem
          onClick={data.onClick}
          title={data.title}
          about={data.about}
          techUsed={data.techUsed}
          slides={data.slides}
          key={index}
        />
      ))}
    </section>
  );
};

export default Projects;
