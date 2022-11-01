import { RouterContext } from "next/dist/shared/lib/router-context";
export const parameters = {
  nextRouter: {
    Provider: RouterContext.Provider,
    path: '/', // defaults to `/`
        asPath: '/', // defaults to `/`
        query: {}, // defaults to `{}`
        push() {}
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}