'use client';
import { useContext } from 'react';
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Filter_data } from '@/context/filterContext';

const FilterDrawer = () => {
  const { filters, setFilters } = useContext(Filter_data);
  console.log({ filters });
  return (
    <Drawer>
      <DrawerTrigger className="bg-customPrimary p-5 rounded-[20px] w-[58px] h-[58px] drop-shadow-custom">
        <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="11" y1="4" x2="19" y2="4" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <line x1="1" y1="14" x2="9" y2="14" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <circle cx="4" cy="4" r="3" stroke="white" strokeWidth="2" />
          <circle cx="16" cy="14" r="3" stroke="white" strokeWidth="2" />
        </svg>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Sort By</DrawerTitle>
          <RadioGroup defaultValue="starRating" className="my-3">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="starRating" id="starRating" checked={filters === 'starRating'} onClick={(e) => setFilters(e.target.value)} />
              <Label htmlFor="starRating">Star Rating</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="reviewCount" id="reviewCount" checked={filters === 'reviewCount'} onClick={(e) => setFilters(e.target.value)} />
              <Label htmlFor="reviewCount">Review Count</Label>
            </div>
          </RadioGroup>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
};

export default FilterDrawer;
