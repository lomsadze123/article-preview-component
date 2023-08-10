import { styled } from "styled-components";
import avatar from "../assets/avatar-michelle.jpg";
import share from "../assets/icon-share.svg";
import Share from "./Share";

const ArticleText = ({ title, review, name, date }) => {
  return (
    <Article>
      <h1>{title}</h1>
      <p>{review}</p>
      <div className="flex">
        <img src={avatar} alt="avatar michelle" />
        <div>
          <h2>{name}</h2>
          <p>{date}</p>
        </div>
        <img src={share} alt="share icon" />
      </div>
    </Article>
  );
};

export default ArticleText;

const Article = styled.article`
  padding: 3rem 3.2rem 1.6rem 3.2rem;
  h1 {
    color: hsl(217, 19%, 35%);
    font-size: 1.6rem;
    font-weight: 700;
  }
  p {
    color: hsl(214, 17%, 51%);
    font-size: 1.3rem;
    font-weight: 500;
  }
  h1 + p {
    margin: 1.6rem 0 3.2rem 0;
  }
  .flex {
    display: flex;
    align-items: center;
    position: relative;
    gap: 1.6rem;
  }
  div img:first-child {
    width: 4.8rem;
    height: auto;
    border-radius: 50%;
  }
  div img:last-child {
    width: auto;
    height: auto;
    padding: 0.8rem;
    background-color: hsl(210, 46%, 95%);
    border-radius: 50%;
    box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.3);
    position: absolute;
    right: 0;
    bottom: 1rem;
  }
  h2 {
    color: hsl(217, 19%, 35%);
    font-size: 1.44rem;
    margin-bottom: 0.32rem;
  }

  @media (min-width: 768px) {
    padding: 4rem 4rem 3.2rem 4rem;
    h1 {
      font-size: 2.4rem;
    }
    p,
    h2 {
      font-size: 1.6rem;
    }
    div img:last-child {
      padding: 1.2rem;
      bottom: 0;
      cursor: pointer;
    }
  }
`;
