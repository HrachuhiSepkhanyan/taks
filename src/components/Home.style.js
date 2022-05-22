import styled from "styled-components";

export const Container = styled.div `
  margin-left: 130px;
  text-align: center;
  @media (max-width: 1000px) {
    margin-left: 100px;
    text-align: center;
  }
`;

export const HeaderContainer = styled.div `
  height: 194px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Title = styled.h1 `
  position: absolute;
  width: 191px;
  height: 59px;
  left: 259px;
  top: 64px;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 59px;

  color: #000000;
  @media (max-width: 1400px) {
    width: 191px;
    height: 59px;
    left: 170px;
    top: 64px;
  }
  @media (max-width: 1000px) {
    width: 191px;
    height: 59px;
    left: 150px;
    top: 64px;
  }
  @media (max-width: 700px) {
    width: 191px;
    height: 59px;
    left: 120px;
    top: 64px;
  }
`;
export const Popular = styled.div `
  position: absolute;
  width: 99px;
  height: 29px;
  left: 1121px;
  top: 90px;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;

  color: #6749a5;
  & > a {
    outline: 0;
    color: #cbb1a2;
  }
  & > a:focus {
    color: #6749a5;
  }
  @media (max-width: 1400px) {
    position: absolute;
    width: 99px;
    height: 29px;
    left: 700px;
    top: 90px;

    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
  }
  @media (max-width: 1000px) {
    position: absolute;
    width: 99px;
    height: 29px;
    left: 150px;
    top: 150px;

    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
  }
  @media (max-width: 700px) {
    position: absolute;
    width: 99px;
    height: 29px;
    left: 110px;
    top: 150px;

    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
  }
`;

export const Favorite = styled.div `
  position: absolute;
  width: 109px;
  height: 21px;
  left: 1230px;
  top: 90px;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #cbb1a2;
  & > a {
    outline: 0;
    color: #cbb1a2;
  }
  & > a:focus {
    color: #6749a5;
  }
  @media (max-width: 1400px) {
    position: absolute;
    width: 99px;
    height: 29px;
    left: 810px;
    top: 90px;

    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
  }
  @media (max-width: 1000px) {
    position: absolute;
    width: 99px;
    height: 29px;
    left: 250px;
    top: 150px;

    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
  }
  @media (max-width: 700px) {
    position: absolute;
    width: 99px;
    height: 29px;
    left: 210px;
    top: 150px;

    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
  }
`;

export const Neww = styled.div `
  position: absolute;
  width: 79px;
  height: 28px;
  left: 1350px;
  top: 91px;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;

  & > a {
    outline: 0;
    color: #cbb1a2;
  }
  & > a:focus {
    color: #6749a5;
  }
  @media (max-width: 1400px) {
    position: absolute;
    width: 99px;
    height: 29px;
    left: 910px;
    top: 90px;

    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
  }
  @media (max-width: 1000px) {
    position: absolute;
    width: 99px;
    height: 29px;
    left: 350px;
    top: 150px;

    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
  }
  @media (max-width: 700px) {
    position: absolute;
    width: 99px;
    height: 29px;
    left: 290px;
    top: 150px;

    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
  }
`;

export const Images = styled.div `
  background-color: #e5e5e5;

  & > div > img {
    @media (max-width: 1400px) {
      width: 800px;
      height: 374px;
      top: 194px;
      left: 190px;
    }
    @media (max-width: 1000px) {
      width: 500px;
      height: 274px;
      top: 194px;
      left: 150px;
    }
    @media (max-width: 700px) {
      width: 300px;
      height: 174px;
      top: 194px;
      left: 150px;
    }

    position: absolute;
    width: 1245px;
    height: 444px;
    left: 180px;
    top: 194px;
    border-radius: 24px;
  }
`;