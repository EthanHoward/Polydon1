/*
* Authored by Ethan Howard,
* Copyright Polydon Industries 2023
* All Rights Reserved
*
* This defines the <head> of all pages it is used in, stores arbitrary metadata and title which removes code duplication in each page.
* */
import Head from "next/head"
import { ReactElement } from "react"

interface IProps {
  title: string
}

function HeadDefs({title} : IProps): ReactElement {
  return (
    <Head>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
      <link href='https://api.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.css' rel='stylesheet' />
      <link rel="icon" href="/Favicon.png" />
      <title>{title}</title>
    </Head>
  )
}

export default HeadDefs