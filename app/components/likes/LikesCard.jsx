import Link from 'next/link';
import Footer from '../shared/Footer';
import { Fragment } from 'react';

const LikesCard = ({ item, handleToggleFavourite }) => {
  return (
    <Fragment>
      <div className="relative mt-4 gap-4 bg-customSeaFoam rounded-[20px] w-full p-4 flex flex-row justify-between">
        <span className="focus:cursor-pointer rounded-full  absolute bg-orange-700 flex items-center justify-center w-[36px] h-[30px] top-[-10px] right-0" onClick={() => handleToggleFavourite(item)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-minus"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </span>
        <Link href={`/details/[slug]?slug=${encodeURIComponent(item?._id)}`} className="flex flex-row justify-between gap-10">
          <div className="w-[108px] h-[70px]">
            <img className="h-[100%] rounded-lg" src={item?.images?.[0] || ''} alt="menue item" />
          </div>
          <div className="flex flex-col">
            <p className="font-bold">{item?.shopName}</p>
            <span>
              <p className="text-wrap">{item?.description}</p>
            </span>
          </div>
        </Link>
      </div>
      <Footer />
    </Fragment>
  );
};

export default LikesCard;
