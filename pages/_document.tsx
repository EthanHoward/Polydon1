import {Head, Html, Main, NextScript} from 'next/document'
import React from "react";

export default function Document() {
    return (
        <Html lang="en">
            <Head/>
            <body className="bg-white dark:bg-zinc-800 min-h-screen">
            <Main/>
            <NextScript/>
            </body>
        </Html>
    )
}
