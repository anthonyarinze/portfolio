import placeholder2 from "../assets/code2.jpg";

const PreviewFallback = () => {
  return (
    <div className="flex items-start text-[0.90rem] md:text-xl">
      <img
        src={placeholder2}
        alt="image"
        width="35%"
        height="35%"
        className="rounded-md border-[1.2px] border-gray-500  object-cover"
      />
      <div className="ml-5 md:ml-6">
        <h4>2020</h4>
        <p className="cursor-pointer text-white transition-all duration-300 ease-in-out hover:mb-1 hover:leading-[1.85rem] hover:text-card-text hover:md:text-[1.35rem]">
          On the Shortness of Life
        </p>
        <p className="text-base md:text-xl">
          Developed features and beautiful, responsive UI. •Integrated UI
          services with the backend API services to fetch data and perform
          transactions.
        </p>
      </div>
    </div>
  );
};

export default PreviewFallback;
