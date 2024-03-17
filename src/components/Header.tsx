"use client";
import Image from "next/image";
import Link from "next/link";
// import Github from "@/assets/Github.svg";
// import Logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="flex h-16 w-full items-center justify-between border-b-[1px] border-border bg-background px-12">
      <div className="flex h-full w-[10rem] items-center justify-center">
        <Link href="/" className="flex h-full items-center justify-center">
          <h1 className="font-bold text-2xl">Stratik / UI</h1>
        </Link>
      </div>
      <div className="flex h-full items-center gap-8">
        <Link
          href="/components"
          className="text-textSecondary hover:text-textPrimary"
        >
          Components
        </Link>
        <Link
          href="/premitives"
          className="text-textSecondary hover:text-textPrimary"
        >
          Premitives
        </Link>
        <Link
          href="/feedback"
          className="text-textSecondary hover:text-textPrimary"
        >
          Feedback
        </Link>
        {/* <Link
          href="/docs"
          className="text-textSecondary hover:text-textPrimary"
        >
          Templates
        </Link> */}
        <div className="flex justify-center items-center gap-4">
          <a
            href="https://github.com/krishpatel023/Atlantic-UI"
            target="_blank"
            className="w-8 h-10 flex justify-center items-center rounded hover:bg-secondary"
          >
            <SimpleIconsX />
          </a>

          <button className="w-8 h-10 flex justify-center items-center rounded hover:bg-secondary">
            <SystemUiconsSun />
          </button>
        </div>
      </div>
    </div>
  );
};

export const ZmdiGithub = (props: { props?: any }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1.5em"
    height="1.5em"
    viewBox="0 0 432 416"
    {...props}
  >
    <path
      fill="currentColor"
      d="M213.5 0q88.5 0 151 62.5T427 213q0 70-41 125.5T281 416q-14 2-14-11v-58q0-27-15-40q44-5 70.5-27t26.5-77q0-34-22-58q11-26-2-57q-18-5-58 22q-26-7-54-7t-53 7q-18-12-32.5-17.5T107 88h-6q-12 31-2 57q-22 24-22 58q0 55 27 77t70 27q-11 10-13 29q-42 18-62-18q-12-20-33-22q-2 0-4.5.5t-5 3.5t8.5 9q14 7 23 31q1 2 2 4.5t6.5 9.5t13 10.5T130 371t30-2v36q0 13-14 11q-64-22-105-77.5T0 213q0-88 62.5-150.5T213.5 0z"
    ></path>
  </svg>
);

export const SimpleIconsX = (props: { props?: any }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584l-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
    ></path>
  </svg>
);

export const SystemUiconsSun = (props: { props?: any }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1.3em"
    height="1.3em"
    viewBox="0 0 21 21"
    {...props}
  >
    <g
      fill="none"
      fillRule="evenodd"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        d="M10.5 14.5c2.219 0 4-1.763 4-3.982a4.003 4.003 0 0 0-4-4.018c-2.219 0-4 1.781-4 4c0 2.219 1.781 4 4 4zM4.136 4.136L5.55 5.55m9.9 9.9l1.414 1.414M1.5 10.5h2m14 0h2M4.135 16.863L5.55 15.45m9.899-9.9l1.414-1.415M10.5 19.5v-2m0-14v-2"
        opacity=".3"
      ></path>
      <g transform="translate(-210 -1)">
        <path d="M220.5 2.5v2m6.5.5l-1.5 1.5"></path>
        <circle cx="220.5" cy="11.5" r="4"></circle>
        <path d="m214 5l1.5 1.5m5 14v-2m6.5-.5l-1.5-1.5M214 18l1.5-1.5m-4-5h2m14 0h2"></path>
      </g>
    </g>
  </svg>
);

export default Header;
