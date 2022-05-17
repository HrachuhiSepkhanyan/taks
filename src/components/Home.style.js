import styled from "styled-components";

export const Title = styled.h1 `
  position: absolute;
  width: 191px;
  height: 59px;
  left: 259px;
  top: 90px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 59px;
  text-align: center;
  margin-top: 50px;
`;

export const Images = styled.div `
  & > div > img {
    height: 444px;
    width: 1045px;
    left: 259px;
    top: 194px;
    margin-left: 200px;
    border-radius: 24px;
  }
`;

export const HeaderContainer = styled.div `
  background-color: none;
  height: 300px;
`;

export const Main = styled.div `
  background-color: none;
  margin-left: 170px;
`;

export const Popular = styled.button `
  position: absolute;
  width: 99px;
  height: 29px;
  left: 1068px;
  top: 90px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #cbb1a2;
  background-color: white;
  border: none;
  &:focus {
    color: #6749a5;
    outline: 0;
  }
`;

export const Favorite = styled.button `
  position: absolute;
  width: 109px;
  height: 21px;
  left: 1221px;
  top: 90px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #cbb1a2;
  background-color: white;
  border: none;
  &:focus {
    outline: 0;
    color: #6749a5;
  }
`;

export const Neww = styled.button `
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
  background-color: white;
  border: none;
  &:focus {
    outline: 0;
    color: #6749a5;
  }
`;