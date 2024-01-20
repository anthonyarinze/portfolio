import SocialMediaIcons from "../ui/SocialMediaIcons";

const Header = () => {
  return (
    <header className="flex items-center justify-between lg:flex-row">
      <div className="animated-grow z-9 mb-4 cursor-pointer text-4xl font-bold lg:mb-0">
        A●A
      </div>
      <SocialMediaIcons />
    </header>
  );
};

export default Header;
