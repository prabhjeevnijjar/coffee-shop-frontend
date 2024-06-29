const MenuCard = ({ item }) => {
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
          className="feather feather-plus"
        >
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      </span>
      <div className="w-[108px] h-[70px]">
        <img className="h-[100%] rounded-lg" src={item?.image || ''} alt="menue item" />
      </div>
      <div className="flex flex-col">
        <h3 className="font-bold">{item?.name}</h3>
        <span>
          <p className="text-wrap">{item?.description}</p>
        </span>
        <span className="font-semibold">{item?.price}rs</span>
      </div>
    </div>
  );
};
export default MenuCard;
