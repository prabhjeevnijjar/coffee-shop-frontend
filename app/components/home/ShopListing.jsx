'use client';
import { useContext, useEffect, useState } from 'react';
import { baseUrl } from '@/utils/config';
import API from '../../../utils/endpoints.json';
import ShopCard from './ShopCard';
import { Filter_data } from '@/context/filterContext';
import { Shops_data } from '@/context/shopsContext';

const ShopListing = () => {
  // const [resData, setData] = useState([]);
  const [page, setPage] = useState(0);
  const { filters, setFilters } = useContext(Filter_data);
  const { shopsData, setShopsData  } = useContext(Shops_data);

  const fetchShopData = async (page) => {
    const response = await fetch(baseUrl + API.getShopsListApi + '?page=' + page + '&sort=' + filters);
    const data = await response.json();
    setShopsData((prev) => [...prev, ...(data.message.results.result || [])]);
  };

  useEffect(() => {
    fetchShopData(page);
  }, [page]);

  useEffect(() => {
    setPage(0);
  }, [filters]);

  return (
    <div>
      <h2 className="font-semibold text-[20px] leading=[23.48px] mt-5">Featured coffee shops</h2>
      <div className="grid grid-cols-2 gap-4 mt-6 p-auto m-auto">
        {shopsData?.map((data, index) => {
          return <ShopCard key={index} data={data} isLast={index === shopsData.length - 1} newLimit={() => setPage(page + 1)} />;
        })}
      </div>
    </div>
  );
};

export default ShopListing;
