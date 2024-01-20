import TechCard from "./TechCard";
import { OpenInNew } from "@mui/icons-material";
import CarouselSlider from "./CarouselSlider";

const iconStyles = {
  fontSize: "1.25rem",
  ml: "3px",
};

const ProjectItem = ({ onClick, title, about, techUsed, slides }) => {
  return (
    <div className="mb-10 flex flex-col items-start gap-4 text-start md:mb-12 md:flex-row">
      <CarouselSlider slides={slides} />
      <div className="space-y-5 md:w-4/6">
        <button
          onClick={onClick}
          className="cursor-pointer text-[1.15rem] font-semibold text-white transition-all duration-300 ease-in-out hover:text-[1.15rem] hover:leading-[1.65rem] hover:text-card-text md:text-xl"
        >
          {title} <OpenInNew sx={iconStyles} />
        </button>
        <p className="md:text-lg">{about}</p>
        <TechCard tech={techUsed} />
      </div>
    </div>
  );
};

export default ProjectItem;
