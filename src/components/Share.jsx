import { styled } from "styled-components";
import facebook from "../assets/icon-facebook.svg";
import twitter from "../assets/icon-twitter.svg";
import pinterest from "../assets/icon-pinterest.svg";

const imgList = [facebook, twitter, pinterest];

const Share = () => {
  return (
    <AbsoluteShare>
      <h3>share</h3>
      {imgList.map((img, i) => (
        <a
          href={`https://www.${img.split(/[.-]/)[1]}.com/`}
          target="_blank"
          rel="noopener noreferrer"
          key={i}
        >
          <Img src={img} alt="icon" />
        </a>
      ))}
    </AbsoluteShare>
  );
};

export default Share;

const AbsoluteShare = styled.div`
  width: 100%;
  background-color: hsl(217, 19%, 35%);
  padding: 2.4rem 3.2rem 2.8rem 3.2rem;
  border-radius: 0 0 0.8rem 0.8rem;
  position: absolute;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1.6rem;
  right: 0;
  bottom: 0;
  h3 {
    color: hsl(214, 17%, 51%);
    text-transform: uppercase;
    letter-spacing: 0.5rem;
    font-size: 1.3rem;
    font-weight: 500;
  }
  img {
    width: 2rem;
    height: auto;
  }

  @media (min-width: 768px) {
    border-radius: 1.26rem;
    padding: 1.6rem 4rem;
    max-width: 26.4rem;
    right: -10rem;
    bottom: 6.5rem;
    z-index: 1;
    img {
      cursor: pointer;
    }
  }
`;
const Img = styled.img`
  width: 2rem;
`;
