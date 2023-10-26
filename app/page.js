'use client'

import useDarkMode from "../components/hook/useDarkMode";
import Head from "next/head";
import Header from "../components/header";

export default function Home() {
  const [colorTheme, setTheme] = useDarkMode();

  return (
    <div>
      <Header/>
    </div>
  )
}