import Footer from './components/shared/Footer';
import profileImg from '../public/static/images/profileImage.jpeg';
import SearchComp from './components/home/SearchComp';
import ShopListing from './components/home/ShopListing';

export default function Home() {
  return (
    <main className="mt-12 mb-[140px]">
      <div className="flex flex-row-reverse">
        <img className="rounded-full w-[50px]" src={profileImg.src} alt="profile-img" />
      </div>
      <div className="font-semibold text-[25px] leading-[29.35px]">
        <h1>Find a coffee shop</h1>
        <h1>Anywhere</h1>
      </div>
      <SearchComp />
      <ShopListing />
      <Footer />
    </main>
  );
}
