import { Fragment } from 'react';
import LikesList from '../components/likes/LikesList';

const myLikesPage = () => {
  return (
    <Fragment>
      <div className="font-semibold text-[25px] leading-[29.35px] mt-12">
        <h1>My Favourite Coffee ☕</h1>
        <h1>Shops {':)'}</h1>
      </div>
      <LikesList/>
    </Fragment>
  );
};

export default myLikesPage;
