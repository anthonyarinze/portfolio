import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className="sticky mt-28"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <h4 className="text-xl text-white">© 2024 Anthony Arinze</h4>
      <p className="mt-5 md:text-xl">
        Built with React, TailwindCSS and framer-motion. Deployed on Netlify.
        Font is Montserrat.
      </p>
    </motion.footer>
  );
};

export default Footer;
