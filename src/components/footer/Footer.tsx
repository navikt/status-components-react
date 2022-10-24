import styled from "styled-components";
import { useState } from "react";
import { BodyShort } from "@navikt/ds-react";

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

export const Footer = () => {
  return (
    <FooterContainer>
      <span>
        <a href="https://www.nav.no/no/person#" aria-label="Lenke til nav.no">
          <img
            src="src/assets/navblack.png"
            alt="Til forsiden"
            aria-hidden="true"
          />
        </a>
        <BodyShort>Arbeids- og velferdsetaten</BodyShort>
      </span>

      <ul>
        <li>
          <a href="https://www.nav.no/no/nav-og-samfunn/om-nav/personvern-i-arbeids-og-velferdsetaten">
            Personvern og informasjonskapsler
          </a>
        </li>
        <li>
          <a href="https://www.nav.no/no/nav-og-samfunn/kontakt-nav/teknisk-brukerstotte/nyttig-a-vite/tilgjengelighet">
            Tilgjengelighet
          </a>
        </li>
      </ul>
    </FooterContainer>
  );
};
