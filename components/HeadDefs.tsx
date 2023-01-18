import { NextPage } from "next"
import Head from "next/head"
import { ReactElement } from "react"

interface IProps {
  title: string
}

function HeadDefs({title} : IProps): ReactElement {
  return (
    <Head>
      <link rel="icon" href="/Favicon.png" />
      <title>{title}</title>
    </Head>
  )
}

export default HeadDefs