import React from 'react';
import BookCard from './BookCard';

const CategoryList = ({ categoryName, books }) => {
  return (
    <div className="lg:px-10 w-full flex flex-col items-center gap-14 md:grid md:grid-cols-2 xl:grid-cols-3 big:flex big:flex-row big:flex-wrap">
      {books.map((b) => (
        <BookCard key={b.id} book={b} categoryName={categoryName} />
      ))}
    </div>
  );
};

export default CategoryList;
