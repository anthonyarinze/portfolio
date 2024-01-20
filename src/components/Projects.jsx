import { headerStyles } from "../constants/headerStyle";
import { projectData } from "../data";
import ProjectItem from "../ui/ProjectItem";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <motion.section
      className="mt-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
      }}
    >
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
    </motion.section>
  );
};

export default Projects;
