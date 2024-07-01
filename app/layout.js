import { Raleway } from 'next/font/google';
import './globals.css';
import FilterContext from '@/context/filterContext';
import ShopsContext from '@/context/shopsContext';
const raleway = Raleway({ style: ['normal', 'italic'], subsets: ['latin'], variable: '--font-poppins', display: 'swap', weight: ['400', '700', '600'] });

export const metadata = {
  title: 'Coffee near me',
  description: 'Coffee shops near me',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleway.className + ' bg-customBg'}>
        <div className="container mx-auto">
          <ShopsContext>
            <FilterContext>{children}</FilterContext>
          </ShopsContext>
        </div>
      </body>
    </html>
  );
}
