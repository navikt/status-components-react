import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Navigation } from "./Navigation";
import {
  RouterArbeidsgiver,
  RouterInternt,
  RouterPrivatperson,
  RouterSamarbeidspartner,
  RouterVaktor,
} from "../../types/routes";

export default {
  title: "Navigation",
  component: Navigation,
} as ComponentMeta<typeof Navigation>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Navigation> = (args) => <Navigation {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  userID: "",
};

export const internPath = {
  parameters: { 
    nextRouter: {
      pathname: RouterInternt.PATH,
      asPath: RouterInternt.PATH
    }
  }
}

export const privatpersonPath = {
  parameters: { 
    nextRouter: {
      pathname: RouterPrivatperson.PATH,
      asPath: RouterPrivatperson.PATH
    }
  }
}

export const arbeidsgiverPath = {
  parameters: { 
    nextRouter: {
      pathname: RouterArbeidsgiver.PATH,
      asPath: RouterArbeidsgiver.PATH
    }
  }
}

export const samarbeidspartnerPath = {
  parameters: { 
    nextRouter: {
      pathname: RouterSamarbeidspartner.PATH,
      asPath: RouterSamarbeidspartner.PATH
    }
  }
}

export const  vaktorPath = {
  parameters: { 
    nextRouter: {
      pathname: RouterVaktor.PATH,
      asPath: RouterVaktor.PATH
    }
  }
}