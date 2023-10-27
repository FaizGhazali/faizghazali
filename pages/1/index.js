import { useState } from "react";


import useDarkMode from "../../components/hook/useDarkMode";

export default function AboutPage() {
  const [colorTheme, setTheme] = useDarkMode();
  console.log(colorTheme);
  return (
    <>
      <div
        className={colorTheme === "light" ? "text-white-900" : "text-black "}
      >
        About Page
      </div>
    </>
  );
}
