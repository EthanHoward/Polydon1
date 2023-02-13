import {NextPage} from "next";
import React from "react";
import ContentPage from "@/components/ContentPage";

const Links: NextPage = () => {
    return (
        <>
            <ContentPage title={"Polydon Industries - Links"}>
                <div className="flex flex-grow dark:text-white text-black text-justify">
                    <div className="flex flex-col justify-center items-center w-full h-full text-xl mt-10">
                        <h1 className="text-3xl font-bold text-justify  py-2 px-4 rounded-xl">Links</h1>
                        <div className="flex flex-col justify-center items-center w-full h-full text-xl mt-10">
                            <a href={"/"}>Home</a>
                            <a href={"/contact"}>Contact</a>
                            <a href={"/hours"}>Hours</a>
                            <a href={"/links"}>Links</a>
                            <a href={"/under_construction"}>Under Construction</a>
                            <a href={"/manufacturing"}>Manufacturing</a>
                            <p>Note, all pages are still a work in progress</p>
                        </div>
                    </div>
                </div>
            </ContentPage>
        </>
    )
}