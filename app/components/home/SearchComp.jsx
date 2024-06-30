'use client';

import Link from 'next/link';
import FilterDrawer from './FilterDrawer';

const SearchComp = () => {
  return (
    <div className="mt-10 flex justify-between mx-0 px-0">
      <Link href="/search">
        <input type="text" className="rounded-[20px] bg-customSeaFoam w-[251px] px-[13px] py-[16px]" placeholder="Search" />
      </Link>
      <FilterDrawer />
    </div>
  );
};
export default SearchComp;
