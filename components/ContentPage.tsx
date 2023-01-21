/*
* Authored by Ethan Howard,
* Copyright Polydon Industries 2023
* All Rights Reserved
*
* Allows creation of arbitrary content pages with a navbar and footer, does not apply any styling to the content
* */
import React, {ReactNode} from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import HeadDefs from "@/components/HeadDefs";

type Props = {
  children?: ReactNode | undefined;
  title?: string;
}

function ContentPage({children, title}: Props): React.ReactElement {
  return (
    <>
      <HeadDefs title={title ? title : "Polydon Industries"}/>
      <Navbar/>
      {children}
      <Footer/>
    </>
  )
}

export default ContentPage