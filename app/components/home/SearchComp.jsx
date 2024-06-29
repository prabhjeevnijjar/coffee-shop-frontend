'use client';

import FilterDrawer from "./FilterDrawer";

const SearchComp = () => {
  return (
    <div className="mt-10 flex justify-between mx-0 px-0">
      <input type="text" className="rounded-[20px] bg-customSeaFoam w-[251px] px-[13px] py-[16px]" placeholder="Search" />
    
      <FilterDrawer/>
    </div>
  );
};
export default SearchComp;
