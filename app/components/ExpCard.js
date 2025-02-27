const ExpCard = ({ headerValue }) => {
  const cardVariants = {
    base: "bg-amber-100 col-span-2 md:col-span-1 lg:col-span-1 lg:row-span-2 row-span-1 rounded-4xl px-8 py-12",
    active:
      "transition duration-500 ease-in-out drop-shadow-xs hover:drop-shadow-sm",
    inactive: "inactive_card",
  };
  return (
    <div
      id="exp_card"
      className={` ${cardVariants.base}
        ${headerValue === 1 ? cardVariants.inactive : cardVariants.active}`}
    >
      <div className="flex flex-col">
        <h2 className="text-8xl font-serif text-center font-medium">
          5<span className="text-2xl">yrs</span>
        </h2>
        <span className="text-center">Software Development Experience</span>
      </div>
    </div>
  );
};

export default ExpCard;
