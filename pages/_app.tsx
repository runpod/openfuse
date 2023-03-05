import "@/styles/globals.css"
import { useEffect } from "react"
import * as SuperTokensConfig from "../config/frontendConfig"
import Head from "next/head"
import Session from "supertokens-auth-react/recipe/session"
import SuperTokensReact, { SuperTokensWrapper } from "supertokens-auth-react"
import Layout from "@/components/layout"

if (typeof window !== "undefined") {
  SuperTokensReact.init(SuperTokensConfig.frontendConfig())
}

function MyApp({ Component, pageProps }): JSX.Element {
  useEffect(() => {
    async function doRefresh() {
      if (pageProps.fromSupertokens === "needs-refresh") {
        if (await Session.attemptRefreshingSession()) {
          location.reload()
        } else {
          // user has been logged out
          SuperTokensReact.redirectToAuth()
        }
      }
    }
    doRefresh()
  }, [pageProps.fromSupertokens])
  if (pageProps.fromSupertokens === "needs-refresh") {
    return null
  }

  return (
    <SuperTokensWrapper>
      <Component {...pageProps} />
    </SuperTokensWrapper>
  )
}

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <MyApp Component={Component} pageProps={pageProps} />
    </Layout>
  )
}
