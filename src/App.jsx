import { styled } from "styled-components";
import Image from "./components/Image";
import ArticleText from "./components/ArticleText";

function App() {
  return (
    <Body>
      <main>
        <Image />
        <ArticleText
          title="Shift the overall look and feel by adding these wonderful touches to furniture in your home"
          review="Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I've got some simple tips to help you make any room feel complete."
          name="Michelle Appleton"
          date="28 Jun 2020"
        />
      </main>
    </Body>
  );
}

export default App;

const Body = styled.div`
  padding: 0 2.72rem;
  min-height: 100vh;
  background-color: hsl(210, 46%, 95%);
  display: flex;
  justify-content: center;
  align-items: center;

  main {
    background-color: white;
    border-radius: 0.8rem;
    box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.1);
    max-width: 42.5rem;
  }

  @media (min-width: 768px) {
    padding: 0;
    main {
      display: flex;
      max-width: 85rem;
    }
  }
`;
