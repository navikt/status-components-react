import styled from "styled-components";
import { useState } from "react";
import { BodyShort } from "@navikt/ds-react";
import { FooterContainer } from "../Styles";

function Footer() {
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
}

export default Footer;
