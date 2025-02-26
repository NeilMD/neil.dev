import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
const LinkCard = ({ headerValue }) => {
  return (
    <div
      id="links_card"
      className={`order-3 md:order-2 lg:order-2 flex flex-row gap-3 align-middle bg-slate-100 lg:col-span-3 md:col-span-1 col-span-2 row-span-1 lg:row-span-1 sm:row-span-1 rounded-4xl px-8 py-4 drop-shadow-xs transition duration-500 ease-in-out hover:drop-shadow-sm
        ${headerValue === 1 ? "inactive_card" : "active_card"}`}
    >
      <div className="flex flex-col w-full">
        <h2 className="hidden lg:block font-serif font-medium text-2xl">
          Check out my Links:
        </h2>
        <div className="flex md:flex-col lg:flex-row gap-4 text-black-700 w-full h-full items-center text-xl lg:text-md font-extralight justify-center">
          <div className="flex relative justify-center group px-2 md:px-6 py-1 bg-white rounded-4xl md:w-full md:text-center">
            <div className="-z-10 absolute transition-all duration-1000 opacity-0 -inset-px bg-gradient-to-r from-[#fef3c6] via-[#cbfbf1] to-[#e0e7ff] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-500"></div>
            <a
              className="group-hover:text-green-600 transition duration-500 ease-in-out px-6 py-1 bg-white rounded-4xl md:w-full md:text-center"
              href="https://github.com/NeilMD"
              target="_blank"
            >
              <span className="hidden mr-1 md:inline">Github</span>
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>

          <div className="flex relative justify-center group px-2 md:px-6 py-1 bg-white rounded-4xl md:w-full md:text-center">
            <div className="-z-10 absolute transition-all duration-1000 opacity-0 -inset-px bg-gradient-to-r from-[#fef3c6] via-[#cbfbf1] to-[#e0e7ff] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-500"></div>
            <a
              className="group-hover:text-blue-600 transition duration-500 ease-in-out px-6 py-1 bg-white rounded-4xl md:w-full md:text-center"
              href="https://www.linkedin.com/in/neil-capistrano/"
              target="_blank"
            >
              <span className="hidden mr-2 md:inline">Linkedin</span>
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
          <div className="flex relative justify-center group px-2 md:px-6 py-1 bg-white rounded-4xl md:w-full md:text-center">
            <div className="-z-10 absolute transition-all duration-1000 opacity-0 -inset-px bg-gradient-to-r from-[#fef3c6] via-[#cbfbf1] to-[#e0e7ff] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-500"></div>
            <a
              className="group-hover:text-orange-600 transition duration-500 ease-in-out px-6 py-1 bg-white rounded-4xl md:w-full md:text-center"
              href="mailto:neil.capistrano2007.ca@gmail.com"
              target="_blank"
            >
              <span className="hidden mr-1 md:inline">Gmail</span>
              <FontAwesomeIcon icon={faGoogle} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkCard;
