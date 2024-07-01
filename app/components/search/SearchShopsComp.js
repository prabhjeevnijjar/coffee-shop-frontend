'use client';
import { Fragment, useEffect, useRef, useState } from 'react';
import { baseUrl } from '@/utils/config';
import Link from 'next/link';
import API from '@/utils/endpoints.json';
import { checkInputHandler } from '@/utils/utilityFunctions';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import _, { debounce } from 'lodash';

const SearchShopComp = () => {
  const [searchResults, setSearchResults] = useState([]);

  const [searchTerm, setSearchTerm] = useState('');

  const performSearch = async (searchTerm) => {
    const response = await fetch(baseUrl + API.searchShopsApi + '?query=' + searchTerm || 0);
    const data = await response.json();
    setSearchResults(data.message.results.result || []);
  };
  const debouncedSearch = useRef(debounce(performSearch, 500)).current;

  useEffect(() => {
    debouncedSearch(searchTerm);
  }, [searchTerm]);

  const onSearchChange = (event) => {
    if (checkInputHandler) setSearchTerm(event.target.value);
  };

  return (
    <Fragment>
      <input type="text" className="rounded-[20px] bg-customSeaFoam w-[70%] px-[13px] py-[16px]" placeholder="Search" onChange={onSearchChange} value={searchTerm} />
      <Table className="mt-10">
        <TableBody>
          {searchResults?.map((item, index) => {
            return (
              <Link href={`/details/[slug]?slug=${encodeURIComponent(item._id)}`} key={index}>
                <TableRow key={index} className="w-full mt-2 hover:cursor-pointer">
                  <TableCell>
                    <img className="w-[120px] rounded-[20px]" src={item.images[0]} />
                  </TableCell>
                  <TableCell className="font-semibold text-[18px]">{item.shopName}</TableCell>
                </TableRow>
              </Link>
            );
          })}
        </TableBody>
      </Table>
    </Fragment>
  );
};
export default SearchShopComp;
