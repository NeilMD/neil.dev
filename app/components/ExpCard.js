const ExpCard = () => {
  return (
    <div
      id="exp_card"
      className="order-1 bg-amber-100 col-span-2 md:col-span-1 lg:col-span-1 lg:row-span-2 row-span-1 rounded-4xl px-8 py-12 drop-shadow-xs hover:drop-shadow-sm"
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
