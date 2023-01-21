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
    <div className="flex-col justify-center justify-between items-center w-screen h-fit bg-PDIBLUE text-white fixed bottom-0 block md:flex m-0 p-0">
      <div className="flex-row h-100 w-screen justify-center m-0 pt-2 pb-2 block md:flex ">
        <div className="w-full md:w-1/3 text-center flex-row bg-PDIBLUE">
          <div className="flex flex-col justify-center items-center">
            <img src="/PDI.svg" alt="Polydon Industries Logo" className="h-16 w-16 inline-block"/>
          </div>
          <div className="flex flex-col justify-center">
            Polydon Park, Radiance Road, <br/>
            South Yorkshire, DN1 2TE
          </div>
        </div>
        
        {/* Allows swapping of copyright location logically*/}
        <div className="hidden md:flex items-center text-center justify-center bg-PDIBLUE">
          <p> Copyright © 2023 Polydon Industries.
            All Rights Reserved.
          </p>
        
        </div>
        
        <div className="w-full md:w-1/3 text-center bg-PDIBLUE">
          Tel: 01302 327172 <br/>
          Email: <a href="mailto:notputtingmyemailherefornowLoL" className="text-PDIRED font-bold text-lg">someone@polydon.co.uk</a><br/>
          7:30am - 4:00pm Monday - Thursday,<br/> 7:30am - 3:00pm Friday
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