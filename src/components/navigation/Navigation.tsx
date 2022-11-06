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

export const Navigation = (props: { userID: string; }) => {
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
                  className={`${
                    router.asPath === RouterInterntShort.PATH ? "active" : "inactive"
                  }`}
                >
                  <BodyShort
                    size="small"
                    className={`${
                      router.pathname === RouterInterntShort.PATH ? "active" : ""
                    }`}
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
                className={`${
                  router.asPath === RouterPrivatpersonShort.PATH
                    ? "active"
                    : "inactive"
                }`}
              >
                <BodyShort
                  size="small"
                  className={`${
                    router.pathname === RouterPrivatpersonShort.PATH ? "active" : ""
                  }`}
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
                className={`${
                  router.asPath === RouterArbeidsgiverShort.PATH
                    ? "active"
                    : "inactive"
                }`}
              >
                <BodyShort
                  size="small"
                  className={`${
                    router.pathname === RouterArbeidsgiverShort.PATH ? "active" : ""
                  }`}
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
                className={`${
                  router.asPath === RouterSamarbeidspartnerShort.PATH
                    ? "active"
                    : "inactive"
                }`}
              >
                <BodyShort
                  size="small"
                  className={`${
                    router.pathname === RouterSamarbeidspartnerShort.PATH ? "active" : ""
                  }`}
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
                className={`${
                  router.asPath === RouterVaktorShort.PATH ? "active" : "inactive"
                }`}
              >
                <BodyShort
                  size="small"
                  className={`${router.pathname === RouterVaktorShort.PATH ? "active" : ""}`}
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
