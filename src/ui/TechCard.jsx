const TechCard = ({ tech }) => {
  return (
    <ul>
      {tech.map((data, index) => (
        <li
          key={index}
          className="bg-card-color text-card-text border-card-text mb-3 mr-[0.35rem] inline-block w-fit rounded-full border-[1.2px] p-2 text-center text-xs font-semibold sm:p-[0.75rem] md:text-xl"
        >
          {data}
        </li>
      ))}
    </ul>
  );
};

export default TechCard;
