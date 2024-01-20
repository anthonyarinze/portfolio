import styled from "styled-components";
import Microlink from "@microlink/react";

const StyledMicrolink = styled(Microlink)`
  font-family: inherit;
  width: 50%;
  border-radius: 0.42857em;

  @media (min-width: 768px) {
    /* Apply styles for medium screens and larger (md:w-[100%]) */
    max-width: 100%;
  }
`;

const ArticleItem = ({ url }) => {
  return <StyledMicrolink url={url} />;
};

export default ArticleItem;
