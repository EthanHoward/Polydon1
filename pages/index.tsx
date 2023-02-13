/*
* Authored by Ethan Howard,
* Copyright Polydon Industries 2023
* All Rights Reserved
*
* Home page of PDI website
* */
import {Roboto} from '@next/font/google'
import React, {useEffect, useRef} from "react";
import ContentPage from "@/components/ContentPage";
import * as assert from "assert";

const roboto = Roboto({
    weight: "400",
    subsets: ['latin'],
})

export default function Home() {
    const backgroundRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handle = () => {
            if (backgroundRef.current == null) return;
            const doc = document.documentElement;
            const rotation = (window.scrollY) / (window.innerHeight - backgroundRef.current.offsetHeight) * 360;
            if (rotation >= 720) {
                backgroundRef.current.style.transform = `rotate(720deg)`;
            } else backgroundRef.current.style.transform = `rotate(${rotation}deg)`;
            console.log(`Handling scroll event ${rotation}deg rotated`)
        };

            window.addEventListener('scroll', handle);
            return () => window.removeEventListener('scroll', handle);
    }, []);

    return (
        <>
            <ContentPage title="Polydon Industries - Home">
                <div className="flex justify-center items-center place-items-center h-[calc(100rem)] flex-col">
                    <div className="fixed top-1/4 -z-10 flex flex-row justify-center items-center w-fit h-fit text-xl mt-10" ref={backgroundRef}>
                        <img id={"PDISvg"} src="/PDI.svg" alt="logo" className="h-[calc(30rem)]" style={{ transform: "translate(0%, 0%)" }}/>
                        <div className="absolute text-5xl text-white font-bold text-center">
                            <h1>Polydon Industries</h1>
                        </div>
                    </div>
                </div>
            </ContentPage>
        </>
    )
}
