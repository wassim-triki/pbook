import React from 'react';
import { categories } from '../data';
import CategoryList from './CategoryList';
const capitalize = (str) => str[0].toUpperCase() + str.slice(1).toLowerCase();
const CategoryLists = ({ data }) => {
  return (
    <div className=" px-5 dark:text-white flex flex-col gap-6 items-center col-span-4">
      {categories.map(
        (categoryName) =>
          data[categoryName] && (
            <>
              <h2 className="font-extrabold text-bg-dark text-4xl lg:text-5xl  tracking-widest my-12  lg:self-start whitespace-nowrap dark:text-white font-main">
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
