/*
* Authored by Ethan Howard,
* Copyright Polydon Industries 2023
* All Rights Reserved
*
* Theme Toggler module, adds small icon and theme toggling in tandem with ThemeProvider in _app.tsx
* */
import {useTheme} from "next-themes";
import {useEffect, useState} from "react";
import {NextPage} from "next";

const ThemeToggler: NextPage = () => {
  const [mounted, setMounted] = useState(false);
  const {theme, setTheme} = useTheme();
  
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  else return (
    <>
      <button
        className="material-symbols-outlined"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")} // opposite so it toggles, if it was the same, light ? light : dark, it'd never swap
      >
        {theme === "light" ? "light_mode" : "dark_mode"}
      </button>
    </>
  )
}


export default ThemeToggler