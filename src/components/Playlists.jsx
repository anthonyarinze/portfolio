import { motion } from "framer-motion";
import { headerStyles } from "../constants/headerStyle";

const Playlists = () => {
  return (
    <motion.section
      className="mt-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.25 }}
      variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      <h2 className={headerStyles}>My Playlists</h2>
      <iframe
        style={{ borderRadius: "12px" }}
        src="https://open.spotify.com/embed/playlist/0BImrgynnyD6aL1nv8xwSe?utm_source=generator"
        width="100%"
        height="352"
        frameBorder="0"
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </motion.section>
  );
};

export default Playlists;
