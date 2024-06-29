const ShopDetailsComp = () => {
  return (
    <div className="bg-white rounded-t-3xl translate-y-15 px-8">
      <h1 className="font-semibold text-[20px] leading-[23.4x] mt-10">Haus Cafe</h1>
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
      <div className="font-semibold text-[14px] mt-2">Sanfrancisco, CS</div>
    </div>
  );
};

export default ShopDetailsComp;
