import styled from "styled-components";

export const Container = styled.div `
  margin-left: 160px;
  text-align: center;
  @media (max-width: 700px) {
    margin-left: 100px;
    text-align: center;
  }
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