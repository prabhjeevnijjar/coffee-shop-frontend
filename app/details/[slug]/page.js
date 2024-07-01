import { Fragment } from 'react';
import { baseUrl } from '@/utils/config';
import ProductCarousel from '@/app/components/details/ProductCarousel';
import ShopDetailsComp from '@/app/components/details/ShopDetailsComp';
import MenuList from '@/app/components/details/MenuList';
import API from '../../../utils/endpoints.json';

const detailsPage = async ({ searchParams }) => {
  const data = await getData(searchParams);

  return (
    <Fragment>
      <ProductCarousel images={data.message?.results?.images || []} />
      <ShopDetailsComp shopName={data.message?.results?.shopName || 'Coffee Shop'} starRating={data.message?.results?.starRating} description={data.message?.results?.description} />
      <MenuList menuItems={data.message?.results?.menuItems || []} />
    </Fragment>
  );
};

const getData = async (searchParams) => {
  try {
    const res = await fetch(baseUrl + API.getShopDetailsApi + '?id=' + searchParams.slug || '');

    return res.json();
  } catch (error) {
    return {};
  }
};

export default detailsPage;
