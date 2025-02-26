const NightSparrowCard = () => {
  return (
    <div
      id="ns_card"
      className="cursor-pointer h-[240px] lg:h-full group relative overflow-hidden bg-indigo-100 order-6 md:order-7 lg:order-3 col-span-2 md:col-span-1 lg:col-span-1 row-span-3 rounded-4xl px-8 py-12 drop-shadow-xs transition duration-500 ease-in-out hover:drop-shadow-sm"
    >
      <img
        className="absolute bottom-[-200px] right-[-10px] lg:inset-0 object-cover scale-90 lg:scale-125 group-hover:scale-100 transition duration-500 ease-in-out"
        height="580"
        width="240"
        src="/img/night_sparrows.webp"
      />

      <div
        id="button"
        className="absolute m-4 bottom-0 left-0 h-[40px] w-[40px] bg-white rounded-full flex justify-center items-center overflow-hidden group-hover:w-[150px] transition-all duration-400 ease-in-out"
      >
        <span className="text-nowrap group-hover:inline group-hover:translate-x-0 transition-all duration-300 ease-in-out delay-75 transform -translate-x-full p-2">
          Go to Site
        </span>
        <span className="absolute group-hover:hidden">
          <i className="fa-solid fa-arrow-right"></i>
        </span>
      </div>

      <div className="absolute inset-0 h-full flex flex-col px-8 py-8 lg:py-12">
        <h2 className="font-serif text-3xl font-semibold">
          Night Sparrows Production
        </h2>
      </div>
    </div>
  );
};

export default NightSparrowCard;
