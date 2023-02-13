/*
* Authored by Ethan Howard,
* Copyright Polydon Industries 2023
* All Rights Reserved
*
* Standardised footer component, editing this file will globally amend the footer.
* */
import {NextPage} from "next";
import React from "react";

const Footer: NextPage = () => {
    return (
        <div
            className="flex-col justify-center justify-between items-center w-screen h-fit bg-PDIBLUE text-white bottom-0 block md:flex m-0 p-0">
            <div className="flex-row h-100 w-screen justify-center m-0 pt-2 pb-2 block md:flex ">
                <div className="w-full md:w-1/3 text-center flex-row bg-PDIBLUE">
                    <div className="flex md:hidden flex-col justify-center items-center">
                        <img src="/PDI.svg" alt="Polydon Industries Logo" className="h-16 w-16 inline-block"/>
                    </div>

                    <div className="flex flex-col justify-center md:pt-16">
                        Polydon Park, Radiance Road, <br/>
                        South Yorkshire, DN1 2TE
                    </div>
                </div>

                {/* Allows swapping of copyright location logically*/}
                <div className="hidden md:flex md:flex-col items-center text-center justify-center bg-PDIBLUE">
                    <div className="hidden md:flex flex-col justify-center items-center">
                        <img src="/PDI.svg" alt="Polydon Industries Logo" className="h-16 w-16 inline-block"/>
                    </div>

                    <div className="flex flex-col justify-center">
                        <p> Copyright © 2023 Polydon Industries. All Rights Reserved.</p>
                    </div>
                </div>

                <div className="w-full md:w-1/3 text-center bg-PDIBLUE  md:pt-16 ">
                    <p className="hidden md:inline">Tel:</p> <a className="text-PDIRED font-bold text-lg">01302
                    327172</a><br/>
                    <p className="hidden md:inline">Email:</p> <a href="mailto:void"
                                                                  className="text-PDIRED font-bold text-lg">someone@polydon.co.uk</a><br/>
                </div>

                {/* Allows swapping of copyright location logically*/}
                <div className="md:hidden sm:flex w-full items-center text-center justify-center bg-PDIBLUE">
                    <p> Copyright © 2023 Polydon Industries.
                        All Rights Reserved.
                    </p>

                </div>
            </div>
        </div>
    )
}

export default Footer