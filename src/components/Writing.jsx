import { headerStyles } from "../constants/headerStyle";
import { articles } from "../data";
import ArticleItem from "../ui/ArticleItem";

const Writing = () => {
  return (
    <section>
      <h2 className={headerStyles}>Writing</h2>
      {articles.map((article, index) => (
        <ArticleItem url={article} key={index} />
      ))}
    </section>
  );
};

export default Writing;
