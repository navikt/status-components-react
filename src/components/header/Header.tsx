import styled from "styled-components";
import { Heading } from "@navikt/ds-react";
import { RouterHomePage } from "../../types/routes";

import {
  CustomHeader,
  HeaderContent,
  HeadingCustomized,
  DetailText,
} from "../Styles";

function Header() {
  return (
    <CustomHeader>
      <div className="header-menues">
        <a href={RouterHomePage.PATH} aria-label="Lenke til forside">
          <img
            src="src/assets/navblack.png"
            alt="Til forsiden"
            aria-hidden="true"
          />
        </a>
      </div>

      <HeaderContent>
        <HeadingCustomized size="2xlarge" level="1">
          <b>Status</b> digitale tjenester{" "}
          <DetailText>Under oppbygging</DetailText>
        </HeadingCustomized>
      </HeaderContent>
    </CustomHeader>
  );
}

export default Header;
