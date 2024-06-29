const SearchComp = () => {
  return (
    <div className="mt-10 flex justify-between mx-0 px-0">
      <input type="text" className="rounded-[20px] bg-customSeaFoam w-[251px] px-[13px] py-[16px]" placeholder="Search"/>
      <button className="bg-customPrimary p-5 rounded-[20px] w-[58px] h-[58px] drop-shadow-custom">
        <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="11" y1="4" x2="19" y2="4" stroke="white" stroke-width="2" stroke-linecap="round" />
          <line x1="1" y1="14" x2="9" y2="14" stroke="white" stroke-width="2" stroke-linecap="round" />
          <circle cx="4" cy="4" r="3" stroke="white" stroke-width="2" />
          <circle cx="16" cy="14" r="3" stroke="white" stroke-width="2" />
        </svg>
      </button>
    </div>
  );
};
export default SearchComp;
