import Link from "next/link";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import styled from "styled-components";

import { Close, Employer, Hamburger } from "@navikt/ds-icons";
import { Button, Popover } from "@navikt/ds-react";
import {
  TextWrapper,
  IconWrapper,
  BurgerMenuContainer,
  PopoverCustomized,
} from "../Styles";
import {
  RouterAdmin,
  RouterArbeidsgiver,
  RouterInternt,
  RouterOpsMeldinger,
  RouterPrivatperson,
  RouterSamarbeidspartner,
} from "../../types/routes";

const BurgerMenu = (props: { userID: string }) => {
  const buttonRef = useRef(null);
  const [open, setOpen] = useState(false);

  useRouter();

  return (
    <BurgerMenuContainer>
      <Button
        icon={!open ? <Hamburger /> : <Close />}
        iconPosition="right"
        variant="tertiary"
        className="menu-container"
        aria-expanded={open}
        ref={buttonRef}
        onClick={() => setOpen(!open)}
      >
        <TextWrapper>Meny</TextWrapper>
      </Button>

      <PopoverCustomized
        open={open}
        onClose={() => setOpen(!open)}
        anchorEl={buttonRef.current}
        placement="bottom"
      >
        <Popover.Content>
          <PopoverContent userID={props.userID} />
        </Popover.Content>
      </PopoverCustomized>
    </BurgerMenuContainer>
  );
};

/*------------ Helpers below ------------*/

const PopoverContent = (props: { userID: string }) => {
  //const user = useContext<UserData>(UserStateContext);

  return (
    <div>
      <ul>
        {props.userID && (
          <>
            <li>
              <Link href={RouterInternt.PATH}>
                {RouterInternt.NAME + " (Kun for innloggede NAV-brukere)"}
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
        {props.userID && (
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
