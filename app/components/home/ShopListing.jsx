'use client';
import { useEffect, useState } from 'react';
import { baseUrl } from '@/utils/config';
import * as API from '../../../utils/endpoints.json';
import ShopCard from './ShopCard';

const ShopListing = () => {
  const [resData, setImages] = useState([]);
  const [page, setPage] = useState(0);

  const fetchImages = async (page) => {
    const response = await fetch(baseUrl + API.getShopsListApi + '?page=' + page || 0);
    const data = await response.json();
    setImages((prev) => [...prev, ...data.message.results.result || []]);
  };

  useEffect(() => {
    fetchImages(page);
  }, [page]);

  return (
    <div>
      <h2 className="font-semibold text-[20px] leading=[23.48px] mt-5">Featured coffee shops</h2>
      <div className="grid grid-cols-2 gap-4 mt-6 p-auto m-auto">
        {[...resData]?.map((data, index) => {
          return <ShopCard key={index} data={data} isLast={index === resData.length - 1} newLimit={() => setPage(page + 1)} />;
        })}
      </div>
    </div>
  );
};

export default ShopListing;
