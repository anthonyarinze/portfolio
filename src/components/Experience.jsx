import { headerStyles } from "../constants/headerStyle";
import { recentWorkExperience } from "../data";
import ExperienceItem from "../ui/ExperienceItem";

const Experience = () => {
  return (
    <section>
      <h2 className={headerStyles}>Recent Experience</h2>
      {recentWorkExperience.map((data, index) => (
        <ExperienceItem
          date={data.date}
          title={data.title}
          about={data.about}
          key={index}
        />
      ))}
    </section>
  );
};

export default Experience;
