/*
* Authored by Ethan Howard,
* Copyright Polydon Industries 2023
* All Rights Reserved
*
* Hours  page of PDI website
* */
import {NextPage} from "next";
import ContentPage from "@/components/ContentPage";

const Hours: NextPage = () => {
    return (
        <>
            <ContentPage title={"Polydon Industries - Hours"}>
                <div className="flex flex-grow dark:text-white text-black text-justify">
                    <div className="flex flex-col justify-center items-center w-full h-full text-xl mt-10">
                        <h1 className="text-3xl font-bold text-justify  py-2 px-4 rounded-xl">Hours</h1>
                        <p className="text-xl font-bold text-justify  py-2 px-4 rounded-xl">Monday: 7:00am - 4:00pm</p>
                        <p className="text-xl font-bold text-justify  py-2 px-4 rounded-xl">Tuesday: 7:00am - 4:00pm</p>
                        <p className="text-xl font-bold text-justify  py-2 px-4 rounded-xl">Wednesday: 7:00am -
                            4:00pm</p>
                        <p className="text-xl font-bold text-justify  py-2 px-4 rounded-xl">Thursday: 7:00am -
                            4:00pm</p>
                        <p className="text-xl font-bold text-justify  py-2 px-4 rounded-xl">Friday: 7:00am - 3:00pm</p>
                        <p className="text-xl font-bold text-justify  py-2 px-4 rounded-xl">Saturday: Closed</p>
                        <p className="text-xl font-bold text-justify  py-2 px-4 rounded-xl">Sunday: Closed</p>
                    </div>
                </div>

            </ContentPage>
        </>
    )
}

export default Hours;