"use client";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

const Header = ({ headerValue, setHeaderValue }) => {
  const router = useRouter();
  const pathname = usePathname();
  console.log(pathname);
  return (
    <header
      className={`flex items-center px-8 lg:px-0 py-8 fixed w-full z-100 top-0 left-[50%] -translate-x-[50%] ${
        pathname === "/" ? "lg:max-w-[1296px]" : "lg:max-w-[900px]"
      }`}
    >
      <div className="absolute top-0 left-0 bg-white inset-0 inset-x-10 w-full blur-3xl -z-10"></div>
      <span className="hidden flex-1/3 text-stone-800 font-light  text-xl  justify-baseline md:flex">
        <a href="#exp_card">Neil Capistrano</a>
      </span>
      <nav className="flex-1/3 flex justify-center opacity-65">
        <ul className="relative flex gap-4 self-center px-4 py-2 bg-transparent rounded-full">
          <div
            className={`-z-10 absolute inset-0 opacity-90  rounded-full ${
              pathname === "/" ? "bg-n-bg" : "bg-stone-300"
            }`}
          ></div>
          {pathname === "/" ? (
            <HomeHeader
              headerValue={headerValue}
              setHeaderValue={setHeaderValue}
            />
          ) : (
            <ReturnHeader
              headerValue={headerValue}
              setHeaderValue={setHeaderValue}
            />
          )}
        </ul>
      </nav>
      <span className="hidden text-stone-800 font-light  text-xl md:flex flex-1/3  justify-end">
        <a href="mailto:neil.capistrano2007.ca@gmail.com">Contact Me</a>
      </span>
    </header>
  );
};

const HomeHeader = ({ headerValue, setHeaderValue }) => {
  return (
    <>
      <li
        id="all_nav"
        className={`py-1 px-4 rounded-2xl hover:bg-white transition duration-500 ease-in-out ${
          headerValue === 0 ? "active_nav" : ""
        }`}
        onClick={() => {
          setHeaderValue(0);
        }}
      >
        <a href="#exp_card">All</a>
      </li>
      <li
        id="project_nav"
        className={`py-1 px-4 rounded-2xl hover:bg-white transition duration-500 ease-in-out ${
          headerValue === 1 ? "active_nav" : ""
        }`}
        onClick={() => {
          setHeaderValue(1);
        }}
      >
        <a href="#ns_card">Projects</a>
      </li>
      <li
        id="about_nav"
        className={`py-1 px-4 rounded-2xl hover:bg-white transition duration-500 ease-in-out ${
          headerValue === 2 ? "active_nav" : ""
        }`}
        onClick={() => {
          setHeaderValue(2);
        }}
      >
        <a href="#neil_card">About</a>
      </li>
    </>
  );
};

const ReturnHeader = ({ headerValue, setHeaderValue }) => {
  return (
    <>
      <li
        id="back_nav"
        className={`py-1 px-4 rounded-2xl hover:bg-white transition duration-500 ease-in-out ${
          headerValue === 3 ? "active_nav" : ""
        }`}
        onClick={() => {
          setHeaderValue(3);
        }}
      >
        <Link href="/"> Return to Home</Link>
      </li>
    </>
  );
};

export default Header;
