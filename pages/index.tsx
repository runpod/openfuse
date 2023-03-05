import React from "react"
import Head from "next/head"

export default function Home(props) {
  return (
    <>
      <Head>
        <title>OpenFuse</title>
      </Head>
      <div>test</div>
    </>
  )
}

export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}
