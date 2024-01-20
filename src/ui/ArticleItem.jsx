import styled from "styled-components";
import Microlink from "@microlink/react";

const StyledMicrolink = styled(Microlink)`
  font-family: inherit;
  max-width: 100%;
  border-radius: 0.42857em;
`;

const ArticleItem = ({ url }) => {
  return <StyledMicrolink url={url} />;
};

export default ArticleItem;
