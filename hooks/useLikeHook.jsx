'use client';
import { useEffect, useState } from 'react';

const useLikeHook = () => {
  const [items, setItems] = useState(getStorageList()); //
  //main helper function to get data from the storage or set it
  function getStorageList() {
    const list = localStorage.getItem('dufavorites');
    if (list) {
      return JSON.parse(list);
    } else {
      return [];
    }
  }

  //on item change in the list save it to the state and localStorage
  useEffect(() => {
    localStorage.setItem('dufavorites', JSON.stringify(items));
  }, [items]);

  const handleToggleFavourite = (favId) => {
    //checking if the item is already in the list or not
    const Favorites = items === null ? false : items.filter((item, index) => item._id === favId._id);

    if (Favorites?.length) {
      console.log('remove item');
      const currentList = getStorageList();
      const filteredCurrentList = currentList?.filter((item, index) => item._id !== favId._id);
      setItems(filteredCurrentList);
    } else {
      console.log('add item');
      const currentList = getStorageList();
      const newList = [...currentList, favId];
      setItems(newList);
    }
  };
  return [items, handleToggleFavourite];
};

export default useLikeHook;
