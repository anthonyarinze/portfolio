import { headerStyles } from "../constants/headerStyle";
import { recentWorkExperience } from "../data";
import ExperienceItem from "../ui/ExperienceItem";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.25 }}
      variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      <h2 className={headerStyles}>Recent Experience</h2>
      {recentWorkExperience.map((data, index) => (
        <ExperienceItem
          date={data.date}
          title={data.title}
          about={data.about}
          key={index}
        />
      ))}
    </motion.section>
  );
};

export default Experience;
