import { useState } from "react";

const CategoryRow = ({ category, depth, expanded, toggleCategory }) => {
  const [isExpanded, setIsExpanded] = useState(expanded);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
    toggleCategory(category.id);
  };

  return (
    <>
      <tr
        className="bg-white border-b cursor-pointer"
        onClick={() => handleToggle()}
      >
        <td
          className={`px-${
            6 + depth * 2
          } py-5 font-medium text-gray-900 whitespace-nowrap flex gap-5 items-center`}
          colSpan={3}
        >
          <input
            id={`checkbox-table-search-${category.id}`}
            type="checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
          />
          <label
            htmlFor={`checkbox-table-search-${category.id}`}
            className="sr-only"
          >
            checkbox
          </label>
          {category.subcategories && category.subcategories.length > 0 && (
            <span
              className={`cursor-pointer` + (isExpanded ? " rotate-90" : "")}
              onClick={(e) => {
                e.stopPropagation();
                handleToggle();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-3 h-3 fill-gray-500"
              >
                <path
                  fillRule="evenodd"
                  d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          )}
          <img src={category.img} alt="category pic" />
          {category.name}
        </td>
        <td className="px-6 py-4">{category.amount}</td>
        <td className="px-6 py-4">
          <div className="flex flex-col">
            <a href="#" className="font-medium text-blue-600 hover:underline">
              Edit
            </a>
          </div>
        </td>
      </tr>
      {isExpanded &&
        category.subcategories?.map((subCategory) => (
          <CategoryRow
            key={subCategory.id}
            category={subCategory}
            depth={depth + 1}
            expanded={expanded}
            toggleCategory={toggleCategory}
          />
        ))}
    </>
  );
};

export default CategoryRow;
