'use client';

import LikesCard from './LikesCard';
import useLikeHook from '@/hooks/useLikeHook';

const LikesList = () => {
  const [items, handleToggleFavourite] = useLikeHook();

  return (
    <div>
      {items?.map((item, index) => {
        return <LikesCard item={item} handleToggleFavourite={handleToggleFavourite} key={index} />;
      })}
    </div>
  );
};

export default LikesList;
