import React from 'react';
import BookCard from './BookCard';

const CategoryList = ({ categoryName, books }) => {
  return (
    <div className="lg:px-10 w-full flex flex-col items-center gap-14 lg:grid-cols-2 lg:grid xl:grid-cols-3 lg:gap-10">
      {books.map((b) => (
        <BookCard key={b.id} book={b} categoryName={categoryName} />
      ))}
    </div>
  );
};

export default CategoryList;
