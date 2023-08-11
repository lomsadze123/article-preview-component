import { styled } from "styled-components";
import avatar from "../assets/avatar-michelle.jpg";
import share from "../assets/icon-share.svg";
import Share from "./Share";
import { useState } from "react";

const ArticleText = ({ title, review, name, date }) => {
  const [show, setShow] = useState(false);

  return (
    <Article>
      <h1>{title}</h1>
      <p>{review}</p>
      <div className="flex">
        <img className="img" src={avatar} alt="avatar michelle" />
        <div>
          <h2>{name}</h2>
          <p>{date}</p>
        </div>
        {show && <Share />}
        {show && <Custom></Custom>}
        <ShareImg
          about={show ? "hsl(217, 19%, 35%)" : ""}
          onClick={() => setShow(!show)}
          src={share}
          alt="share icon"
        />
      </div>
    </Article>
  );
};

export default ArticleText;

const Article = styled.article`
  position: relative;
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
    gap: 1.6rem;
  }
  .img {
    width: 4.8rem;
    height: auto;
    border-radius: 50%;
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
    .flex {
      position: relative;
    }
  }
`;
const Custom = styled.div`
  background-color: hsl(217, 19%, 35%);
  width: 3.394rem;
  height: 3.394rem;
  position: absolute;
  right: 0.8rem;
  bottom: 6rem;
  transform: rotate(45deg);
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;
const ShareImg = styled.img`
  width: auto;
  height: auto;
  padding: 0.8rem;
  background-color: hsl(210, 46%, 95%);
  border-radius: 50%;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.3);
  position: absolute;
  right: 2.9rem;
  bottom: 2.5rem;

  @media (min-width: 768px) {
    padding: 1.2rem;
    bottom: 0.5rem;
    right: 0.5rem;
    cursor: pointer;
    background-color: ${(props) => props.about} !important;
  }
`;
