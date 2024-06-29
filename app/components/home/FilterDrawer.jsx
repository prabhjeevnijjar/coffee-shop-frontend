'use client';
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';

const FilterDrawer = () => {
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
          <DrawerTitle>Are you absolutely sure?</DrawerTitle>
          <DrawerDescription>This action cannot be undone.</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <DrawerClose></DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default FilterDrawer;
