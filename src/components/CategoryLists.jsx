import React from 'react';
import { categories } from '../data';
import CategoryList from './CategoryList';
const capitalize = (str) => str[0].toUpperCase() + str.slice(1).toLowerCase();
const CategoryLists = ({ data }) => {
  return (
    <div className="lg:mt-14 dark:text-white flex flex-col gap-6 items-center">
      {categories.map(
        (categoryName) =>
          data[categoryName] && (
            <>
              <h2 className="font-extrabold text-bg-dark text-4xl lg:text-5xl  tracking-widest my-12 text-center whitespace-nowrap dark:text-white">
                {capitalize(categoryName)}
              </h2>
              <CategoryList
                key={categoryName}
                categoryName={categoryName}
                books={data[categoryName]}
              />
            </>
          )
      )}
    </div>
  );
};

export default CategoryLists;
