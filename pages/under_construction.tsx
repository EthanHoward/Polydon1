/*
* Authored by Ethan Howard,
* Copyright Polydon Industries 2023
* All Rights Reserved
*
* Construction page of PDI website
* */
import {NextPage} from "next";
import React from "react";
import HeadDefs from "@/components/HeadDefs";

const construction: NextPage = () => {
    return (
        <div>
            <HeadDefs title={"Polydon Industries"}/>
            <div className={"h-screen grid place-items-center bg-PDIBLUE"}>
                <h1 className={"text-3xl font-bold text-center text-white py-2 px-4 rounded-xl"}>Site Under
                    Construction</h1> {/*  &nbsp;&nbsp; <ThemeToggler/></h1> */}
            </div>
        </div>
    )
}

export default construction;