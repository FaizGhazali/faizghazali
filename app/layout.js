"use client";

import "../styles/global.css";
import useDarkMode from "../components/hook/useDarkMode";

export default function Layout({ children }) {
  const [colorTheme, setTheme] = useDarkMode();

  return (
    <div className="relative h-full w-full p-10 dark:bg-gray-900 bg-indigo-200 ">
      {colorTheme === "light" ? (
        <>
          <header>Header</header>
          <svg
            onClick={() => setTheme("light")}
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-indigo-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            />
          </svg>
        </>
      ) : (
        <>
          <header className={"text-black "}>Header</header>
          <svg
            onClick={() => setTheme("dark")}
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-red-900"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        </>
      )}
      <main>{children}</main>
      <footer>&copy; 2023 - Our portfolio</footer>
    </div>
  );
}
