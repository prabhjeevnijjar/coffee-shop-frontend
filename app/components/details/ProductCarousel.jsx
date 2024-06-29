import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import produtImage from '../../../public/static/images/shopMenu.jpeg';
import Link from 'next/link';
const ProductCarousel = () => {
  return (
    <div className="relative">
      <Link href='/' className="top-8 left-7 z-50 absolute w-[36px] h-[36px] flex items-center justify-center bg-white rounded-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-chevron-left"
        >
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </Link>
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <div className="h-[300px] w-full">
              <img className="object-fill" src={produtImage.src} />
            </div>
          </CarouselItem>
          <CarouselItem>
            {' '}
            <div className="h-[300px] w-full">
              <img className="object-fill" src={produtImage.src} />
            </div>
          </CarouselItem>
          <CarouselItem>
            {' '}
            <div className="h-[300px] w-full">
              <img className="object-fill" src={produtImage.src} />
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="translate-x-14" />
        <CarouselNext className="-translate-x-14" />
      </Carousel>
    </div>
  );
};

export default ProductCarousel;
