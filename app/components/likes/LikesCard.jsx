import Link from 'next/link';

const LikesCard = ({ item }) => {
  return (
    <Link href={`/details/[slug]?slug=${encodeURIComponent(item?._id)}`} className="relative mt-4 gap-4 bg-customSeaFoam rounded-[20px] w-full p-4 flex flex-row justify-between">
      <span className="focus:cursor-pointer rounded-full  absolute bg-orange-700 flex items-center justify-center w-[36px] h-[30px] top-[-10px] right-0">
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
      <div className="w-[108px] h-[70px]">
        <img className="h-[100%] rounded-lg" src={item?.image || ''} alt="menue item" />
      </div>
      <div className="flex flex-col">
        <p className="font-bold">{item?.name}</p>
        <span>
          <p className="text-wrap">{item?.description}</p>
        </span>
      </div>
    </Link>
  );
};

export default LikesCard;
