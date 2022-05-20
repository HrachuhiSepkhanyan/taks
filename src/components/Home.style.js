import styled from "styled-components";

export const Container = styled.div `
  margin-left: 160px;
`;

export const HeaderContainer = styled.div `
  height: 194px;
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
`;
export const Popular = styled.div `
  position: absolute;
  width: 99px;
  height: 29px;
  left: 1221px;
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
`;

export const Favorite = styled.div `
  position: absolute;
  width: 109px;
  height: 21px;
  left: 1368px;
  top: 90px;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;

  color: #cbb1a2;
  /* position: absolute;
  width: 109px;
  height: 21px;
  left: 1221px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  background-color: white;
  border: none; */
  & > a {
    outline: 0;
    color: #cbb1a2;
  }
  & > a:focus {
    color: #6749a5;
  }
`;

export const Neww = styled.div `
  position: absolute;
  width: 79px;
  height: 28px;
  left: 1525px;
  top: 91px;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;

  /* position: absolute;
  width: 109px;
  height: 21px;
  left: 1368px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #cbb1a2;
  background-color: white;
  border: none; */
  & > a {
    outline: 0;
    color: #cbb1a2;
  }
  & > a:focus {
    color: #6749a5;
  }
`;

export const Images = styled.div `
  background-color: #e5e5e5;

  & > div > img {
    position: absolute;
    width: 1345px;
    height: 544px;
    left: 259px;
    top: 194px;
    border-radius: 24px;

    /* height: 100%;
    width: 100%;
    width: 1045px;
    left: 259px;
    top: 194px;
    margin-left: 99px;

    margin-bottom: 10px;
    border-radius: 24px; */
  }
`;