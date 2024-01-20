import { motion } from "framer-motion";

const Intro = () => {
  return (
    <motion.section
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <h1 className="text-4xl font-bold lg:text-5xl">いらっしゃい (Welcome)</h1>
      <div className="mt-5 md:text-xl">
        Hi, I&apos;m Anthony, a software engineer specializing in the React and
        Flutter frameworks; which means I build cool apps and websites like the
        one you&apos;re looking at right now :) <br />
        This site will undergo changes as there&apos;s always something new and
        exciting I try out (where better than your own site) so it&apos;s
        possible what you see today won&apos;t be what you see tomorrow. Do
        enjoy the suspense ;)
      </div>
    </motion.section>
  );
};

export default Intro;
