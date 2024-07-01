import { Fragment } from 'react';
import Footer from '../components/shared/Footer';
import dynamic from 'next/dynamic';

const LikesList = dynamic(() => import('../components/likes/LikesList'), {
  ssr: false,
});
const myLikesPage = () => {
  return (
    <Fragment>
      <div className="font-semibold text-[25px] leading-[29.35px] mt-12">
        <h1>My Favourite Coffee ☕</h1>
        <h1>Shops {':)'}</h1>
      </div>
      <LikesList />
      <Footer />
    </Fragment>
  );
};

export default myLikesPage;
