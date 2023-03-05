import React from "react"
import Head from "next/head"
import SessionReact from "supertokens-auth-react/recipe/session"
import SuperTokensReact from "supertokens-auth-react"
import { useSessionContext } from "supertokens-auth-react/recipe/session"

interface ILink {
  name: string
  onClick: () => void
}

function ProtectedPage() {
  const session = useSessionContext()

  async function logoutClicked() {
    await SessionReact.signOut()
    SuperTokensReact.redirectToAuth()
  }

  async function fetchUserData() {
    const res = await fetch("/api/user")
    if (res.status === 200) {
      const json = await res.json()
      alert(JSON.stringify(json))
    }
  }

  if (session.loading === true) {
    return null
  }

  function openLink(url: string) {
    window.open(url, "_blank")
  }

  const links: ILink[] = [
    {
      name: "Sign Out",
      onClick: logoutClicked,
    },
  ]

  return (
    <div>
      <Head>
        <title>SuperTokens</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div></div>
        <div>
          <div>Your userID is:</div>
          <div>{session.userId}</div>
          <div onClick={fetchUserData}>Call API</div>
        </div>
      </div>
      <div>
        {links.map((link) => (
          <div key={link.name}>
            <div role={"button"} onClick={link.onClick}>
              {link.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Home(props) {
  return (
    <SessionReact.SessionAuth>
      <ProtectedPage />
    </SessionReact.SessionAuth>
  )
}
