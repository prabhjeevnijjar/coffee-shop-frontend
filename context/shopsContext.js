// keep the shops data in this context
'use client';

import { createContext, useState } from 'react';
export const Shops_data = createContext(null);

const ShopsContext = ({ children }) => {
  const [shopsData, setShopsData] = useState([]);
  return <Shops_data.Provider value={{ shopsData, setShopsData }}>{children}</Shops_data.Provider>;
};

export default ShopsContext;
