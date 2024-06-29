const MenuCard = () => {
  return (
    <div className="relative mt-4 gap-4 bg-customSeaFoam rounded-[20px] w-full p-4 flex flex-row justify-between">
      <span className="focus:cursor-pointer rounded-full p-1 absolute bg-black flex items-center justify-center w-[36px] h-[36px] top-[-10px] right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          class="feather feather-plus"
        >
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      </span>
      <div className="w-[108px] max-h-[105px]">
        <img className="object-fill rounded-lg" src={'https://m.media-amazon.com/images/I/81iiWil8DHL._AC_UF894,1000_QL80_.jpg'} alt="menue item" />
      </div>
      <div className="flex flex-col">
        <h3 className="font-bold">Cafe mocha</h3>
        <span>
          <p className="text-wrap">A chocolate-flavored warm beverage that is a variant of a café latte</p>
        </span>
        <span className="font-semibold">200rs</span>
      </div>
    </div>
  );
};
export default MenuCard;
