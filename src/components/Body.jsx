import Intro from "./Intro";
import Experience from "./Experience";
import Projects from "./Projects";
import Writing from "./Writing";
import Footer from "./Footer";
import Contact from "./Contact";

const Body = () => {
  return (
    <main className="mt-8 block h-screen w-[85%] flex-col text-wrap tracking-wider">
      <Intro />
      <Projects />
      <Experience />
      <Writing />
      <Contact />
      <Footer />
    </main>
  );
};

export default Body;
