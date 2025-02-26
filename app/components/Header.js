const Header = () => {
  return (
    <header className="flex items-center p-8 fixed w-full z-10">
      <span className="hidden flex-1/3 font-semibold text-lg justify-baseline md:flex">
        <a href="#exp_card">Neil Capistrano</a>
      </span>
      <nav className="flex-1/3 flex justify-center opacity-65">
        <ul className="relative flex gap-4 self-center px-4 py-2 bg-transparent rounded-full">
          <div className="-z-10 absolute inset-0 opacity-90 bg-n-bg rounded-full"></div>
          <li
            id="all_nav"
            className="active_nav py-1 px-4 rounded-2xl hover:bg-white transition duration-500 ease-in-out"
          >
            <a href="#exp_card">All</a>
          </li>
          <li
            id="project_nav"
            className="py-1 px-4 rounded-2xl hover:bg-white transition duration-500 ease-in-out"
          >
            <a href="#ns_card">Projects</a>
          </li>
          <li
            id="about_nav"
            className="py-1 px-4 rounded-2xl hover:bg-white transition duration-500 ease-in-out"
          >
            <a href="#neil_card">About</a>
          </li>
        </ul>
      </nav>
      <span className="hidden md:flex flex-1/3 font-semibold text-lg justify-end">
        <a href="mailto:neil.capistrano2007.ca@gmail.com">Contact Me</a>
      </span>
    </header>
  );
};

export default Header;
