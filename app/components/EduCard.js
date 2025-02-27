const EduCard = ({ headerValue }) => {
  const cardVariants = {
    base: "hidden md:order-6 lg:order-6 lg:block overflow-hidden bg-red-100 lg:col-span-2 sm:col-span-1 rounded-4xl",
    active:
      "drop-shadow-xs transition duration-500 ease-in-out hover:drop-shadow-sm active_card",
    inactive: "inactive_card",
  };

  return (
    <div
      id="edu_card"
      className={` ${cardVariants.base}
        ${headerValue === 1 ? cardVariants.inactive : cardVariants.active}`}
    >
      <div className="flex flex-row h-full">
        <div className="flex-1/2 relative h-full px-8 py-8 flex flex-col">
          <h2 className="font-serif font-medium text-2xl text-center mb-4">
            April 2025
          </h2>
          <span className="text-sm text-center mb-2 font-medium">
            Diploma in Web Design and Development Major
          </span>
          <span className="text-xs text-center font-light">
            Southern Alberta Institute of Technology
          </span>
          <span className="text-xs text-center font-extralight">
            Calgary, AB, Canada
          </span>
        </div>

        <div className="flex-1/2 bg-green-100 h-full px-8 py-8 flex flex-col">
          <h2 className="font-serif font-medium text-2xl text-center mb-4">
            August 2018
          </h2>
          <span className="text-sm text-center mb-2 font-medium">
            Bachelor's Degree in Information Technology
          </span>
          <span className="text-xs text-center font-light">
            De La Salle University - Manila
          </span>
          <span className="text-xs text-center font-extralight">
            Manila, Philippines
          </span>
        </div>
      </div>
    </div>
  );
};

export default EduCard;
