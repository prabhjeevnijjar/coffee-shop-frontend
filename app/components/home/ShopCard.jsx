import shopImg from '../../../public/static/images/shop1.jpeg';
const ShopCard = () => {
  return (
    <div className="w-[130px] sm:w-[160px] flex flex-col relative">
      <span className="top-[-15px] right-0 absolute border-2 border-white bg-customSeaFoam rounded-full w-[36px] h-[36px] flex items-center justify-center hover:cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-heart"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="WHITE"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className=" feather feather-heart"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg> */}
      </span>
      <img src={shopImg.src} alt="shop-image" className="w-[153px] h-[169px] rounded-[20px]" />
      <span className="font-bold leading-[18.78px] mt-2">Home Coffee Roasters</span>
      <div className="gap-1 flex flex-row mt-1 items-center">
        <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7.5 0.818497L9.5085 4.8875L14 5.544L10.75 8.7095L11.517 13.1815L7.5 11.069L3.483 13.1815L4.25 8.7095L1 5.544L5.4915 4.8875L7.5 0.818497Z"
            fill="#FDCB6E"
            stroke="#FDCB6E"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="font-semibold text-[14px]">4.5</span>
        <span className="font-normal text-[14px] text-customDisabled">200 reviews</span>
      </div>
      <div className="font-semibold text-[14px]">12 km</div>
    </div>
  );
};
export default ShopCard;
