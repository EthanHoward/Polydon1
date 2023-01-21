/*
* Authored by Ethan Howard,
* Copyright Polydon Industries 2023
* All Rights Reserved
*
* Standardised NavBar for whole site, stores a theme toggler, editing this file will globally amend the navbar
* */
/* eslint-disable @next/next/no-img-element */
import React, {ReactElement} from "react";
import ThemeToggler from "@/components/ThemeToggler";

function NavBar(): ReactElement {
  return (
    <>
        <nav
          className="px-2 py-2 bg-white dark:bg-zinc-800 dark:text-white text-black text-center flex justify-between items-center drop-shadow-lg float-center ">
          <div className={" flex items-center"}>
            <div><img src="/PDI.svg" alt="Polydon Industries Logo" className="h-16 w-16 inline-block"/></div>
            <div><h1 className="pl-5 text-center font-bold text-xl md:text-2xl lg:text-4xl xl:text-4xl">Polydon Industries</h1></div>
          </div>
          <div className={" flex items-center"}></div>
          <div className={""}><ThemeToggler/></div>
        </nav>
    </>
  )
}

export default NavBar