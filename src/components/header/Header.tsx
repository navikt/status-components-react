import styled from "styled-components";
import { Heading } from "@navikt/ds-react";
import { RouterHomePage } from "../../types/routes";
import { SERVER_PROPS_ID } from "next/dist/shared/lib/constants";

export const CustomHeader = styled.div`
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

export const HeaderContent = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 1150px) {
    margin-right: 150px;
  }
`;

export const DetailText = styled.div`
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

export const Header = (props: { imageURL: any }) => {
  return (
    <CustomHeader>
      <div className="header-menues">
        <a href={RouterHomePage.PATH} aria-label="Lenke til forside">
          <img src={props.imageURL} alt="Til forsiden" aria-hidden="true" />
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
};
