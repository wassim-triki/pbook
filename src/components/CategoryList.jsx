import React from 'react';
import BookCard from './BookCard';
const CategoryList = ({ categoryName, books }) => {
  return (
    <div className="lg:px-10 w-full flex items-center flex-col gap-5 md:grid md:grid-cols-2 xl:grid-cols-3 xl:place-items-center 3xl:grid-cols-4">
      {books.map((b) => (
        <BookCard key={b.id} book={b} categoryName={categoryName} />
      ))}
    </div>
  );
};

export default CategoryList;
