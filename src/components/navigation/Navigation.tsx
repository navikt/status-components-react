import { NavigationContainer, LinkSpacer } from "../Styles";

import { useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";
import { BodyShort } from "@navikt/ds-react";

import {
  RouterArbeidsgiver,
  RouterInternt,
  RouterPrivatperson,
  RouterSamarbeidspartner,
  RouterVaktor,
} from "../../types/routes";

function Navigation() {
  const router = useRouter();

  //const user = useContext<UserData>(UserStateContext)

  return (
    <NavigationContainer>
      <ul role="tablist">
        {/*{user.navIdent &&
                        <li role="tab" onClick={() => router.push(RouterInternt.PATH)}>
                            <Link href={RouterInternt.PATH}>
                                <a>
                                    <LenkeSpacer className={`${(router.asPath === RouterInternt.PATH) ? "active" : "inactive"}`}>
                                        <BodyShort size="small" className={`${router.pathname === "/Internt" ? "active" : ""}`}>{RouterInternt.NAME}</BodyShort>
                                    </LenkeSpacer>
                                </a>
                            </Link>
                        </li>
                    }*/}
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
                    router.pathname === "/Privatperson" ? "active" : ""
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
                    router.pathname === "/Arbeidsgiver" ? "active" : ""
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
                    router.pathname === "/Samarbeidspartner" ? "active" : ""
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
                  className={`${router.pathname === "/vaktor" ? "active" : ""}`}
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
}

export default Navigation;
