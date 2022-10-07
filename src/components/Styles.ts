import styled from "styled-components";

const CustomHeader = styled.header`
  min-height: 106px;
  height: 100%;
  padding-bottom: 0.5rem;
  background-color: white;
  border-bottom: 1px solid #c6c2bf;

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

const HeaderContent = styled.span`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 1150px) {
    margin-right: 150px;
  }
`;

const HeadingCustomized = styled(Heading)`
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

const HeaderOptions = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1;
  flex-wrap: wrap;

  @media (min-width: 250px) {
    justify-content: flex-end;
  }

  @media (min-width: 768px) {
    flex-wrap: none;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
`;

const SubscribeModalWrapper = styled.div`
  position: absolute;
  z-index: 100;
  @media (min-width: 930px) {
    right: auto;
  }
`;

const SubscribeButtonWrapper = styled.div`
  position: relative;
  display: none;

  @media (min-width: 450px) {
    display: block;
  }
`;
const FilterButtonWrapper = styled.div`
  display: none;

  @media (min-width: 450px) {
    display: block;
  }
`;
