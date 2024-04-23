import TechCard from "./TechCard";

const ExperienceItem = ({ date, title, about, tech }) => {
  return (
    <div className="mt-16 flex flex-col items-start justify-between gap-4 text-start md:flex-row">
      {/* LEFT SIDE */}
      <h4 className="uppercase">{date}</h4>
      {/* RIGHT SIDE */}
      <div className="space-y-5 md:w-4/6">
        <div className="flex h-full flex-col items-start justify-evenly gap-4 text-lg">
          <h3 className="cursor-default text-white transition-all duration-300 ease-in-out hover:text-[1.15rem] hover:leading-[1.65rem] hover:text-card-text">
            {title}
          </h3>
          <p className="text-base">{about}</p>
        </div>
        {tech && <TechCard tech={tech} />}
      </div>
    </div>
  );
};

export default ExperienceItem;
