import Head from "next/head"
import React, { useEffect } from "react"
import dynamic from "next/dynamic"
import SuperTokens from "supertokens-auth-react"

const SuperTokensComponentNoSSR = dynamic<
  React.ComponentProps<typeof SuperTokens.getRoutingComponent>
>(new Promise((res) => res(SuperTokens.getRoutingComponent)), { ssr: false })

export default function Auth(): JSX.Element {
  useEffect(() => {
    if (SuperTokens.canHandleRoute() === false) {
      SuperTokens.redirectToAuth({
        redirectBack: false,
      })
    }
  }, [])

  return (
    <div>
      <Head>
        <title>SuperTokens</title>
      </Head>

      <main>
        <SuperTokensComponentNoSSR />
      </main>
    </div>
  )
}
