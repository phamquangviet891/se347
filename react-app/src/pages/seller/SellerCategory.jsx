import { useState } from "react";
import AddCategoryModal from "../../components/AddCategoryModal";
import food_pic from "../../assets/pictures/food-pic.png";
import drink_pic from "../../assets/pictures/drink-pic.png";
import Card from "@mui/material/Card";
import CategoryRow from "../../components/SellerCategoryRow";
import categories from "../../assets/fake-data/sellerCategory";

const SellerCategory = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [expandedCategories, setExpandedCategories] = useState([]);

  const toggleCategory = (categoryId) => {
    setExpandedCategories((prevExpanded) =>
      prevExpanded.includes(categoryId)
        ? prevExpanded.filter((id) => id !== categoryId)
        : [...prevExpanded, categoryId]
    );
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {isModalOpen && <AddCategoryModal handleCloseModal={handleCloseModal} />}
      <div className="p-4 h-full flex flex-col">
        <Card className="p-4 mb-4 h-[100px] shadow-lg shadow-black-500/50">
          <h1>Category / Shop Categories</h1>
          <div className="flex items-center justify-between">
            <h1 className=" text-2xl font-medium" style={{ color: "#1A88F7" }}>
              Shop Categories
            </h1>
          </div>
        </Card>
        <div className="bg-white grid grid-cols-10 p-8 shadow-lg shadow-black-500/50 h-full overflow-scroll no-scrollbar">
          <div className="grid grid-cols-10 col-span-10">
            <div className="col-span-4 w-[290px]">
              <span>Shop: </span>
              <select
                className="text-black w-[200px] bg-white inline-flex items-center border border-gray-400 hover:bg-gray-100 rounded-md text-base px-1 py-1"
                type="button"
              >
                <option value="Family Shop">Family Shop</option>
                <option value="Shop A">Shop A</option>
                <option value="Shop B">Shop B</option>
                <option value="Shop X">Shop X</option>
              </select>
            </div>
            <div className="relative grid grid-cols-6 col-span-6">
              <div className="col-span-3 relative w-[370px] mr-5">
                <div className="absolute inset-y-0 right-0 flex mt-3 items-start pr-3 pointer-events-none">
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  id="simple-search"
                  className="px-1.5 py-2 bg-gray-50 w-[370px] border-2 border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 hover:bg-gray-100 block"
                  placeholder="Search branch name..."
                  required
                />
              </div>
              <div className="col-span-3 flex justify-around items-start ml-4">
                <button
                  type="submit"
                  className="py-[6px] w-[150px] px-1.5 font-medium text-white bg-blue-700 rounded-md border border-blue-700 hover:bg-blue-800 focus:ring-1 focus:outline-none focus:ring-blue-300"
                >
                  Search
                </button>
                <button className="py-[6px] w-[150px] rounded-md border-2 border-gray-300 hover:bg-gray-50">
                  Reset
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-between col-span-10 mt-8">
            <div className=" text-blue-500 font-semibold text-2xl">
              10 Categories
            </div>
            <div className="ml-4">
              <button
                className="py-2 w-[200px] px-1.5 font-medium text-white bg-blue-700 rounded-md border border-blue-700 hover:bg-blue-800 focus:ring-1 focus:outline-none focus:ring-blue-300"
                onClick={() => {
                  setIsModalOpen(true);
                }}
              >
                Add new category
              </button>
            </div>
          </div>
          <div className="col-span-10  mt-10 h-full">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-sm text-gray-700 bg-gray-200 ">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Category Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Product Amount
                    </th>
                    <th scope="col" className="px-6 py-3 w-24">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="font-semibold text-base max-h-[1rem] overflow-y-scroll">
                  {categories.map((category) => (
                    <CategoryRow
                      key={category.id}
                      category={category}
                      depth={0}
                      expanded={expandedCategories.includes(category.id)}
                      toggleCategory={toggleCategory}
                    />
                  ))}

                  <tr className="bg-white">
                    <td></td>
                    <td></td>
                    <td>
                      <nav
                        aria-label="Page navigation example"
                        className="py-5"
                      >
                        <ul className="flex items-center h-8 text-sm justify-end mr-6">
                          <li>
                            <a
                              href="#"
                              className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white rounded-s-lg hover:bg-gray-100 hover:text-gray-700 "
                            >
                              <svg
                                className="w-2.5 h-2.5 rtl:rotate-180"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 6 10"
                              >
                                <path
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M5 1 1 5l4 4"
                                />
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="flex items-center justify-center px-3 h-8 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700"
                            >
                              1
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
                            >
                              2
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="z-10 flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                            >
                              3
                            </a>
                          </li>

                          <li>
                            <a
                              href="#"
                              className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                            >
                              <span className="sr-only">Next</span>
                              <svg
                                className="w-2.5 h-2.5 rtl:rotate-180"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 6 10"
                              >
                                <path
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="m1 9 4-4-4-4"
                                />
                              </svg>
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-span-10 flex justify-end items-center gap-4 mt-5">
              <div>2 products selected</div>
              <button className="w-[150px] py-[6px] rounded-md border-2 border-blue-500 text-blue-500 hover:bg-blue-50">
                Hide
              </button>
              <button className="w-[150px] py-[6px] rounded-md border-2 border-red-500 bg-red-500 text-white hover:bg-red-600">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SellerCategory;
