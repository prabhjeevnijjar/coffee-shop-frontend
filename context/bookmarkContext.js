'use client';

import { createContext, useState } from 'react';
export const Bookmark_data = createContext(null);

const BookmarkContext = ({ children }) => {
  const [bookmarks, setBookmark] = useState([]);
  return <Bookmark_data.Provider value={{ bookmarks, setBookmark }}>{children}</Bookmark_data.Provider>;
};

export default BookmarkContext;
