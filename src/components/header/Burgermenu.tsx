import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useRef, useState } from "react";
import styled from "styled-components";

import { Close, Employer, Hamburger } from "@navikt/ds-icons";
import { Button, Popover } from "@navikt/ds-react";

import { UserStateContext } from "../UserStatusContext";
import { UserData } from "../../types/userData";
import {
  RouterAdmin,
  RouterArbeidsgiver,
  RouterInternt,
  RouterOpsMeldinger,
  RouterPrivatperson,
  RouterSamarbeidspartner,
} from "../../types/routes";

const TextContainer = styled.div`
  display: inline-block;
  height: auto;
`;

const BurgerMenuContainer = styled.div`
  & > * {
    color: black !important;
  }

  .navds-button:hover {
    box-shadow: inset 0 0 0 2px var(--navds-global-color-gray-900);
  }

  .menu-text {
    font-weight: bold;
    float: left;
    display: inline;
    top: 50%;
    vertical-align: baseline;
  }

  .hamburger-ikon,
  .close-ikon {
    width: 28px;
    height: 24px;
    float: left;
    position: relative;
    display: inline;
  }

  .closed-burger {
    display: none;
  }

  @media (min-width: 450px) {
    button {
      margin-right: 1rem;
    }
  }
`;

const PopoverCustomized = styled(Popover)`
  width: max-content;

  div {
    display: flex;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 1rem;

    li {
      padding: 1rem 0;
    }

    .popover-link-ikon {
      margin-right: 0.5rem;
    }

    a {
      color: black;
    }
  }
`;

const BurgerMenu = () => {
  const buttonRef = useRef(null);
  const [open, setOpen] = useState(false);

  useRouter();

  return (
    <BurgerMenuContainer>
      <Button
        variant="tertiary"
        id="menu-container"
        aria-expanded={open}
        ref={buttonRef}
        onClick={() => setOpen(!open)}
      >
        <TextContainer>
          <span className="menu-text">Meny</span>
          <span>
            <Hamburger className={!open ? "hamburger-ikon" : "closed-burger"} />
          </span>
          <span>
            <Close className={open ? "close-ikon" : "closed-burger"} />
          </span>
        </TextContainer>
      </Button>

      <PopoverCustomized
        open={open}
        onClose={() => setOpen(!open)}
        anchorEl={buttonRef.current}
        placement="bottom"
      >
        <Popover.Content>
          <PopoverContent />
        </Popover.Content>
      </PopoverCustomized>
    </BurgerMenuContainer>
  );
};

/*------------ Helpers below ------------*/

const PopoverContent = () => {
  const user = useContext<UserData>(UserStateContext);

  return (
    <div>
      <ul>
        {user.navIdent && (
          <>
            <li>
              <Link href={RouterInternt.PATH}>
                {RouterInternt.NAME + " (Kun for innloggede nav brukere)"}
              </Link>
            </li>
            <li>
              <Link href={RouterOpsMeldinger.PATH}>
                {RouterOpsMeldinger.NAME}
              </Link>
            </li>
          </>
        )}

        <li>
          <Link href={RouterPrivatperson.PATH}>{RouterPrivatperson.NAME}</Link>
        </li>
        <li>
          <Link href={RouterArbeidsgiver.PATH}>{RouterArbeidsgiver.NAME}</Link>
        </li>
        <li>
          <Link href={RouterSamarbeidspartner.PATH}>
            {RouterSamarbeidspartner.NAME}
          </Link>
        </li>
      </ul>

      <ul>
        {user.navIdent && (
          <>
            <li>
              <Link href={RouterAdmin.PATH}>
                <a>
                  <Employer className="popover-link-ikon" />
                  {RouterAdmin.NAME}
                </a>
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default BurgerMenu;
