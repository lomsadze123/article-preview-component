import { styled } from "styled-components";
import drawers from "../assets/drawers.jpg";

const Image = () => {
  return (
    <Img>
      <img src={drawers} alt="drawers" />
    </Img>
  );
};

export default Image;

const Img = styled.div`
  overflow: hidden;

  img {
    max-width: 42.5rem;
    width: 100%;
    height: auto;
    border-radius: 0.8rem 0.8rem 0 0;
  }

  @media (min-width: 768px) {
    max-width: 32rem;
    width: 100%;

    img {
      height: 100%;
      border-radius: 0.8rem 0 0 0.8rem;
      transition: transform 0.5s linear;
    }

    img:hover {
      transform: scale(1.2);
    }
  }
`;
