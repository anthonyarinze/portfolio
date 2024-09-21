import { GitHub, LinkedIn, Description } from "@mui/icons-material";

const iconStyle = {
  fontSize: "2.25rem",
  lineHeight: "2.5rem",
  cursor: "pointer",
};

const SocialMediaIcons = () => {
  return (
    <div className="flex items-center justify-center gap-4">
      <a
        target="_blank"
        rel="noreferrer"
        className="transition duration-300 hover:scale-125"
        href="https://github.com/anthonyarinze"
      >
        <GitHub sx={iconStyle} />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        className="transition duration-300 hover:scale-125"
        href="https://www.linkedin.com/in/anthony-arinze-a5544321b/"
      >
        <LinkedIn sx={iconStyle} />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        className="transition duration-300 hover:scale-125"
        href="https://flowcv.com/resume/gb915i0fcv"
      >
        <Description sx={iconStyle} />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
