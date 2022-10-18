import styled from "styled-components";
import { Heading } from "@navikt/ds-react";
/*
---- FOOTER ----
*/

export const FooterContainer = styled.footer`
  width: 100%;
  margin-top: auto; /*Footer always at bottom (if min.height of container is 100vh)*/
  padding: 0 1.5rem;
  font-family: "Source Sans Pro", "Trebuchet MS", "Lucida Sans Unicode",
    "Lucida Grande", "Lucida Sans", Arial, sans-serif, sans-serif;
  background-color: white;
  border-top: 1px solid #eaeaea;

  display: flex;
  flex-direction: column;

  img {
    width: 63px;
    margin-right: 1.2rem;

    :hover {
      transform: scale(1.05);
    }
  }

  span {
    display: flex;
    flex-direction: row;
    align-items: center;

    min-height: 80px;
  }

  ul {
    padding: 0;
    list-style: none;

    display: flex;
    flex-direction: column;

    li {
      padding: 0.625rem 0;
    }
  }

  a {
    color: black;
    :hover {
      text-decoration: none;
    }
  }

  @media (min-width: 600px) {
    padding: 0 50px;

    flex-direction: row;
    justify-content: space-between;

    ul {
      flex-direction: row;
      justify-content: flex-end;
      gap: 1.5rem;
    }
  }
`;

export const Separator = styled.span`
  display: none;
  @media (min-width: 700px) {
    display: block;
    border-left: 1px solid var(--navds-global-color-blue-100);
    height: 100%;
    width: 1px;
    padding: 0 5ch;
  }
`;

/*
---- HEADER ----
*/

export const CustomHeader = styled.header`
  min-height: 106px;
  height: 100%;
  padding-bottom: 0.5rem;
  background-color: white;
  border-bottom: 1px solid #c6c2bf;
  font-family: "Source Sans Pro", "Trebuchet MS", "Lucida Sans Unicode",
    "Lucida Grande", "Lucida Sans", Arial, sans-serif, sans-serif;
  position: relative;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;

  .header-menues {
    width: 150px;
  }

  .last {
    @media (max-width: 1149px) {
      padding: 3px 0;
      min-height: inherit;

      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: space-between;

      button {
        margin: 0;
      }
    }

    @media (min-width: 1150px) {
      position: absolute;
      display: flex;
      right: 150px;
    }
  }

  img {
    max-width: 84px;
    max-height: 55px;
    margin-left: 1rem;

    :hover {
      transform: scale(1.05);
    }
  }

  > h1 {
    font-size: 1.875rem;
    font-weight: 600;
  }

  @media (min-width: 450px) {
    flex-flow: column wrap;
  }
  @media (min-width: 650px) {
    img {
      margin-left: 0;
    }

    padding: 0 1rem;

    flex-flow: row nowrap;
    align-items: center;
    flex-basis: 10% 80% 10%;

    > span {
      padding-left: 20px;
    }
  }
`;

export const HeaderContent = styled.span`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 1150px) {
    margin-right: 150px;
  }
`;

export const DetailText = styled(Heading)`
  font-size: 14px;
  font-weight: 100;
`;

export const HeadingCustomized = styled(Heading)`
  display: none;

  text-align: center;
  font-weight: normal;

  @media (min-width: 390px) {
    width: 100%;
    display: block;
  }
  @media (min-width: 450px) {
    width: 425px;
  }
  @media (min-width: 650px) {
    white-space: normal;
  }
`;
