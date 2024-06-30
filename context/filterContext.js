'use client';

import { createContext, useState } from 'react';
export const Filter_data = createContext(null);

const FilterContext = ({ children }) => {
  const [filters, setFilters] = useState('starRating');
  return <Filter_data.Provider value={{ filters, setFilters }}>{children}</Filter_data.Provider>;
};

export default FilterContext;
