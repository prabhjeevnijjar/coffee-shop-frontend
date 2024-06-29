import ShopCard from './ShopCard';

const ShopListing = () => {
  return (
    <div>
      <h2 className="font-semibold text-[20px] leading=[23.48px] mt-5">Featured coffee shops</h2>
      <div className="grid grid-cols-2 gap-4 mt-6 p-auto m-auto">
        <ShopCard />
        <ShopCard />
        <ShopCard />
      </div>
    </div>
  );
};

export default ShopListing;
