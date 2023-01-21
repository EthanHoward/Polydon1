/*
* Authored by Ethan Howard,
* Copyright Polydon Industries 2023
* All Rights Reserved
*
* Home page of PDI website
* */
import {Content, Roboto} from '@next/font/google'
import HeadDefs from '../components/HeadDefs'
import NavBar from '../components/Navbar'
import Footer from "@/components/Footer";
import React from "react";
import ContentPage from "@/components/ContentPage";

const roboto = Roboto({
  weight: "400",
  subsets: ['latin'],
})

export default function Home() {
  return (
    <>
      <ContentPage title={"Polydon Industries - Home"}>
      
      </ContentPage>
    </>
  )
}
