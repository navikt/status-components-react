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
} from "../../types/routes";

export const Navigation = () => {
  const router = useRouter();

  const user = useContext<UserData>(UserStateContext);

  return (
    <NavigationContainer>
      <ul role="tablist">
        {user.navIdent && (
          <li role="tab" onClick={() => router.push(RouterInternt.PATH)}>
            <Link href={RouterInternt.PATH}>
              <a>
                <LinkSpacer
                  className={`${
                    router.asPath === RouterInternt.PATH ? "active" : "inactive"
                  }`}
                >
                  <BodyShort
                    size="small"
                    className={`${
                      router.pathname === RouterInternt.PATH ? "active" : ""
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
                  router.asPath === RouterPrivatperson.PATH
                    ? "active"
                    : "inactive"
                }`}
              >
                <BodyShort
                  size="small"
                  className={`${
                    router.pathname === RouterPrivatperson.PATH ? "active" : ""
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
                  router.asPath === RouterArbeidsgiver.PATH
                    ? "active"
                    : "inactive"
                }`}
              >
                <BodyShort
                  size="small"
                  className={`${
                    router.pathname === RouterArbeidsgiver.PATH ? "active" : ""
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
                  router.asPath === RouterSamarbeidspartner.PATH
                    ? "active"
                    : "inactive"
                }`}
              >
                <BodyShort
                  size="small"
                  className={`${
                    router.pathname === RouterSamarbeidspartner.PATH ? "active" : ""
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
                  router.asPath === RouterVaktor.PATH ? "active" : "inactive"
                }`}
              >
                <BodyShort
                  size="small"
                  className={`${router.pathname === RouterVaktor.PATH ? "active" : ""}`}
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
