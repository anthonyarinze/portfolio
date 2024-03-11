import { headerStyles } from "../constants/headerStyle";
import { motion } from "framer-motion";
import { articles } from "../data";
import ArticleItem from "../ui/ArticleItem";

const Writing = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.25 }}
      variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      <h2 className={headerStyles}>Writing</h2>
      {articles.map((article, index) => (
        <ArticleItem url={article} key={index} />
      ))}
    </motion.section>
  );
};

export default Writing;
