import ProductCarousel from '@/app/components/details/ProductCarousel';
import ShopDetailsComp from '@/app/components/details/ShopDetailsComp';
import MenuList from '@/app/components/details/MenuList';
const detailsPage = () => {
  return (
    <div>
      <ProductCarousel />
      <ShopDetailsComp />
      <MenuList />{' '}
    </div>
  );
};

export default detailsPage;
