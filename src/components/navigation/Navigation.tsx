import { NavigationContainer, LinkSpacer } from "../Styles";

import { useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { BodyShort } from "@navikt/ds-react";
import { UserStateContext } from "../UserStatusContext";
import { UserData } from "../../types/userData";

import {
  RouterArbeidsgiver,
  RouterInternt,
  RouterPrivatperson,
  RouterSamarbeidspartner,
  RouterVaktor,
  RouterArbeidsgiverShort,
  RouterInterntShort,
  RouterPrivatpersonShort,
  RouterSamarbeidspartnerShort,
  RouterVaktorShort,
} from "../../types/routes";

export const Navigation = (props: { userID: string;}) => {
  const router = useRouter();

  const user = useContext<UserData>(UserStateContext);

  return (
    <NavigationContainer>
      <ul role="tablist">
        {props.userID && (
          <li role="tab" onClick={() => router.push(RouterInternt.PATH)}>
            <Link href={RouterInternt.PATH}>
              <a>
                <LinkSpacer
                  className="inactive"
                >
                  <BodyShort
                    size="small"
                    
                  >
                    {RouterInternt.NAME}
                  </BodyShort>
                </LinkSpacer>
              </a>
            </Link>
          </li>
        )}
        <li role="tab" onClick={() => router.push(RouterPrivatperson.PATH)}>
          <Link href={RouterPrivatperson.PATH}>
            <a>
              <LinkSpacer
                className="inactive"
              >
                <BodyShort
                  size="small"
                  
                >
                  {RouterPrivatperson.NAME}
                </BodyShort>
              </LinkSpacer>
            </a>
          </Link>
        </li>

        <li role="tab" onClick={() => router.push(RouterArbeidsgiver.PATH)}>
          <Link href={RouterArbeidsgiver.PATH}>
            <a>
              <LinkSpacer
               className="inactive"
              >
                <BodyShort
                  size="small"
                  
                >
                  {RouterArbeidsgiver.NAME}
                </BodyShort>
              </LinkSpacer>
            </a>
          </Link>
        </li>

        <li
          role="tab"
          onClick={() => router.push(RouterSamarbeidspartner.PATH)}
        >
          <Link href={RouterSamarbeidspartner.PATH}>
            <a>
              <LinkSpacer
              className="inactive"
              >
                <BodyShort
                  size="small"
                  
                >
                  {RouterSamarbeidspartner.NAME}
                </BodyShort>
              </LinkSpacer>
            </a>
          </Link>
        </li>

        <li role="tab" onClick={() => router.push(RouterVaktor.PATH)}>
          <Link href={RouterVaktor.PATH}>
            <a>
              <LinkSpacer
                className="active"
              >
                <BodyShort
                  size="small"
                  className="active"
                >
                  {RouterVaktor.NAME}
                </BodyShort>
              </LinkSpacer>
            </a>
          </Link>
        </li>
      </ul>
    </NavigationContainer>
  );
};
