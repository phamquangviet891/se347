import React, { useState } from "react";
import { Grid, Paper, List, ListItem, ListItemText } from "@mui/material";

const SelectCategorySeller = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [selectedChildCategory, setSelectedChildCategory] = useState(null);

  const categories = [
    {
      name: "Men's Fashion",
      subCategories: [
        {
          name: "Hoodie",
          childCategories: [
            "Hoodie A",
            "Hoodie B",
            "Hoodie C",
            "Hoodie D",
            "Hoodie E",
            "Hoodie F",
          ],
        },
        {
          name: "Suit",
          childCategories: [
            "Suit A",
            "Suit B",
            "Suit C",
            "Suit D",
            "Suit E",
            "Suit F",
          ],
        },
        {
          name: "Jacket",
          childCategories: [
            "Jacket A",
            "Jacket B",
            "Jacket C",
            "Jacket D",
            "Jacket E",
            "Jacket F",
          ],
        },
        {
          name: "Pant",
          childCategories: [
            "Trouser",
            "Long Pants",
            "Shorts",
            "Pant D",
            "Pant E",
            "Pant F",
          ],
        },
        {
          name: "Shirt",
          childCategories: [
            "Shirt A",
            "Shirt B",
            "Shirt C",
            "Shirt D",
            "Shirt E",
            "Shirt F",
          ],
        },
        {
          name: "Accessories",
          childCategories: [
            "Hat",
            "Belt",
            "Watch",
            "Accessories D",
            "Accessories E",
            "Accessories F",
          ],
        },
        {
          name: "Shoes",
          childCategories: [
            "Sneakers",
            "Formal Shoes",
            "Boots",
            "Shoes D",
            "Shoes E",
            "Shoes F",
          ],
        },
        {
          name: "Jeans",
          childCategories: [
            "Slim Fit",
            "Straight Fit",
            "Skinny Fit",
            "Jeans D",
            "Jeans E",
            "Jeans F",
          ],
        },
        {
          name: "T-Shirt",
          childCategories: [
            "V-Neck",
            "Round Neck",
            "Graphic Tees",
            "T-Shirt D",
            "T-Shirt E",
            "T-Shirt F",
          ],
        },
        {
          name: "Sweater",
          childCategories: [
            "Crewneck",
            "V-Neck",
            "Turtleneck",
            "Sweater D",
            "Sweater E",
            "Sweater F",
          ],
        },
      ],
    },
    {
      name: "Women's Fashion",
      subCategories: [
        {
          name: "Dress",
          childCategories: [
            "Dress A",
            "Dress B",
            "Dress C",
            "Dress D",
            "Dress E",
            "Dress F",
          ],
        },
        {
          name: "Skirt",
          childCategories: [
            "Skirt A",
            "Skirt B",
            "Skirt C",
            "Skirt D",
            "Skirt E",
            "Skirt F",
          ],
        },
        {
          name: "Blouse",
          childCategories: [
            "Blouse A",
            "Blouse B",
            "Blouse C",
            "Blouse D",
            "Blouse E",
            "Blouse F",
          ],
        },
        {
          name: "Shoes",
          childCategories: [
            "Heels",
            "Flats",
            "Sandals",
            "Shoes D",
            "Shoes E",
            "Shoes F",
          ],
        },
        {
          name: "Accessories",
          childCategories: [
            "Necklace",
            "Earrings",
            "Bracelet",
            "Accessories D",
            "Accessories E",
            "Accessories F",
          ],
        },
        {
          name: "Bags",
          childCategories: [
            "Handbags",
            "Clutches",
            "Backpacks",
            "Bags D",
            "Bags E",
            "Bags F",
          ],
        },
        {
          name: "Jeans",
          childCategories: [
            "Skinny Jeans",
            "Bootcut Jeans",
            "Wide-Leg Jeans",
            "Jeans D",
            "Jeans E",
            "Jeans F",
          ],
        },
        {
          name: "Tops",
          childCategories: [
            "Blouse",
            "Tunic",
            "Tank Tops",
            "Tops D",
            "Tops E",
            "Tops F",
          ],
        },
        {
          name: "Sweater",
          childCategories: [
            "Crewneck",
            "V-Neck",
            "Cardigan",
            "Sweater D",
            "Sweater E",
            "Sweater F",
          ],
        },
        {
          name: "Jewelry",
          childCategories: [
            "Rings",
            "Bracelets",
            "Earrings",
            "Jewelry D",
            "Jewelry E",
            "Jewelry F",
          ],
        },
      ],
    },
    {
      name: "Electronics",
      subCategories: [
        {
          name: "Laptops",
          childCategories: [
            "Gaming Laptops",
            "Ultrabooks",
            "Business Laptops",
            "Laptops D",
            "Laptops E",
            "Laptops F",
          ],
        },
        {
          name: "Smartphones",
          childCategories: [
            "iPhone",
            "Samsung",
            "Google Pixel",
            "Smartphones D",
            "Smartphones E",
            "Smartphones F",
          ],
        },
        {
          name: "Headphones",
          childCategories: [
            "Over-Ear",
            "In-Ear",
            "On-Ear",
            "Headphones D",
            "Headphones E",
            "Headphones F",
          ],
        },
        {
          name: "Cameras",
          childCategories: [
            "DSLR",
            "Mirrorless",
            "Point and Shoot",
            "Cameras D",
            "Cameras E",
            "Cameras F",
          ],
        },
        {
          name: "Speakers",
          childCategories: [
            "Bluetooth Speakers",
            "Bookshelf Speakers",
            "Soundbars",
            "Speakers D",
            "Speakers E",
            "Speakers F",
          ],
        },
        {
          name: "Wearables",
          childCategories: [
            "Smartwatches",
            "Fitness Trackers",
            "VR Headsets",
            "Wearables D",
            "Wearables E",
            "Wearables F",
          ],
        },
        {
          name: "Accessories",
          childCategories: [
            "Chargers",
            "Cables",
            "Power Banks",
            "Accessories D",
            "Accessories E",
            "Accessories F",
          ],
        },
        {
          name: "Gaming",
          childCategories: [
            "Gaming Laptops",
            "Gaming PCs",
            "Gaming Consoles",
            "Gaming D",
            "Gaming E",
            "Gaming F",
          ],
        },
        {
          name: "Home Appliances",
          childCategories: [
            "Refrigerators",
            "Washing Machines",
            "Microwaves",
            "Appliances D",
            "Appliances E",
            "Appliances F",
          ],
        },
        {
          name: "Drones",
          childCategories: [
            "Camera Drones",
            "Toy Drones",
            "FPV Drones",
            "Drones D",
            "Drones E",
            "Drones F",
          ],
        },
      ],
    },
    {
      name: "Electronics A",
      subCategories: [
        {
          name: "Laptops",
          childCategories: [
            "Gaming Laptops",
            "Ultrabooks",
            "Business Laptops",
            "Laptops D",
            "Laptops E",
            "Laptops F",
          ],
        },
        {
          name: "Smartphones",
          childCategories: [
            "iPhone",
            "Samsung",
            "Google Pixel",
            "Smartphones D",
            "Smartphones E",
            "Smartphones F",
          ],
        },
        {
          name: "Headphones",
          childCategories: [
            "Over-Ear",
            "In-Ear",
            "On-Ear",
            "Headphones D",
            "Headphones E",
            "Headphones F",
          ],
        },
        {
          name: "Cameras",
          childCategories: [
            "DSLR",
            "Mirrorless",
            "Point and Shoot",
            "Cameras D",
            "Cameras E",
            "Cameras F",
          ],
        },
        {
          name: "Speakers",
          childCategories: [
            "Bluetooth Speakers",
            "Bookshelf Speakers",
            "Soundbars",
            "Speakers D",
            "Speakers E",
            "Speakers F",
          ],
        },
        {
          name: "Wearables",
          childCategories: [
            "Smartwatches",
            "Fitness Trackers",
            "VR Headsets",
            "Wearables D",
            "Wearables E",
            "Wearables F",
          ],
        },
        {
          name: "Accessories",
          childCategories: [
            "Chargers",
            "Cables",
            "Power Banks",
            "Accessories D",
            "Accessories E",
            "Accessories F",
          ],
        },
        {
          name: "Gaming",
          childCategories: [
            "Gaming Laptops",
            "Gaming PCs",
            "Gaming Consoles",
            "Gaming D",
            "Gaming E",
            "Gaming F",
          ],
        },
        {
          name: "Home Appliances",
          childCategories: [
            "Refrigerators",
            "Washing Machines",
            "Microwaves",
            "Appliances D",
            "Appliances E",
            "Appliances F",
          ],
        },
        {
          name: "Drones",
          childCategories: [
            "Camera Drones",
            "Toy Drones",
            "FPV Drones",
            "Drones D",
            "Drones E",
            "Drones F",
          ],
        },
      ],
    },
    {
      name: "Electronics B",
      subCategories: [
        {
          name: "Laptops",
          childCategories: [
            "Gaming Laptops",
            "Ultrabooks",
            "Business Laptops",
            "Laptops D",
            "Laptops E",
            "Laptops F",
          ],
        },
        {
          name: "Smartphones",
          childCategories: [
            "iPhone",
            "Samsung",
            "Google Pixel",
            "Smartphones D",
            "Smartphones E",
            "Smartphones F",
          ],
        },
        {
          name: "Headphones",
          childCategories: [
            "Over-Ear",
            "In-Ear",
            "On-Ear",
            "Headphones D",
            "Headphones E",
            "Headphones F",
          ],
        },
        {
          name: "Cameras",
          childCategories: [
            "DSLR",
            "Mirrorless",
            "Point and Shoot",
            "Cameras D",
            "Cameras E",
            "Cameras F",
          ],
        },
        {
          name: "Speakers",
          childCategories: [
            "Bluetooth Speakers",
            "Bookshelf Speakers",
            "Soundbars",
            "Speakers D",
            "Speakers E",
            "Speakers F",
          ],
        },
        {
          name: "Wearables",
          childCategories: [
            "Smartwatches",
            "Fitness Trackers",
            "VR Headsets",
            "Wearables D",
            "Wearables E",
            "Wearables F",
          ],
        },
        {
          name: "Accessories",
          childCategories: [
            "Chargers",
            "Cables",
            "Power Banks",
            "Accessories D",
            "Accessories E",
            "Accessories F",
          ],
        },
        {
          name: "Gaming",
          childCategories: [
            "Gaming Laptops",
            "Gaming PCs",
            "Gaming Consoles",
            "Gaming D",
            "Gaming E",
            "Gaming F",
          ],
        },
        {
          name: "Home Appliances",
          childCategories: [
            "Refrigerators",
            "Washing Machines",
            "Microwaves",
            "Appliances D",
            "Appliances E",
            "Appliances F",
          ],
        },
        {
          name: "Drones",
          childCategories: [
            "Camera Drones",
            "Toy Drones",
            "FPV Drones",
            "Drones D",
            "Drones E",
            "Drones F",
          ],
        },
      ],
    },
    {
      name: "Electronics C",
      subCategories: [
        {
          name: "Laptops",
          childCategories: [
            "Gaming Laptops",
            "Ultrabooks",
            "Business Laptops",
            "Laptops D",
            "Laptops E",
            "Laptops F",
          ],
        },
        {
          name: "Smartphones",
          childCategories: [
            "iPhone",
            "Samsung",
            "Google Pixel",
            "Smartphones D",
            "Smartphones E",
            "Smartphones F",
          ],
        },
        {
          name: "Headphones",
          childCategories: [
            "Over-Ear",
            "In-Ear",
            "On-Ear",
            "Headphones D",
            "Headphones E",
            "Headphones F",
          ],
        },
        {
          name: "Cameras",
          childCategories: [
            "DSLR",
            "Mirrorless",
            "Point and Shoot",
            "Cameras D",
            "Cameras E",
            "Cameras F",
          ],
        },
        {
          name: "Speakers",
          childCategories: [
            "Bluetooth Speakers",
            "Bookshelf Speakers",
            "Soundbars",
            "Speakers D",
            "Speakers E",
            "Speakers F",
          ],
        },
        {
          name: "Wearables",
          childCategories: [
            "Smartwatches",
            "Fitness Trackers",
            "VR Headsets",
            "Wearables D",
            "Wearables E",
            "Wearables F",
          ],
        },
        {
          name: "Accessories",
          childCategories: [
            "Chargers",
            "Cables",
            "Power Banks",
            "Accessories D",
            "Accessories E",
            "Accessories F",
          ],
        },
        {
          name: "Gaming",
          childCategories: [
            "Gaming Laptops",
            "Gaming PCs",
            "Gaming Consoles",
            "Gaming D",
            "Gaming E",
            "Gaming F",
          ],
        },
        {
          name: "Home Appliances",
          childCategories: [
            "Refrigerators",
            "Washing Machines",
            "Microwaves",
            "Appliances D",
            "Appliances E",
            "Appliances F",
          ],
        },
        {
          name: "Drones",
          childCategories: [
            "Camera Drones",
            "Toy Drones",
            "FPV Drones",
            "Drones D",
            "Drones E",
            "Drones F",
          ],
        },
      ],
    },
    {
      name: "Electronics D",
      subCategories: [
        {
          name: "Laptops",
          childCategories: [
            "Gaming Laptops",
            "Ultrabooks",
            "Business Laptops",
            "Laptops D",
            "Laptops E",
            "Laptops F",
          ],
        },
        {
          name: "Smartphones",
          childCategories: [
            "iPhone",
            "Samsung",
            "Google Pixel",
            "Smartphones D",
            "Smartphones E",
            "Smartphones F",
          ],
        },
        {
          name: "Headphones",
          childCategories: [
            "Over-Ear",
            "In-Ear",
            "On-Ear",
            "Headphones D",
            "Headphones E",
            "Headphones F",
          ],
        },
        {
          name: "Cameras",
          childCategories: [
            "DSLR",
            "Mirrorless",
            "Point and Shoot",
            "Cameras D",
            "Cameras E",
            "Cameras F",
          ],
        },
        {
          name: "Speakers",
          childCategories: [
            "Bluetooth Speakers",
            "Bookshelf Speakers",
            "Soundbars",
            "Speakers D",
            "Speakers E",
            "Speakers F",
          ],
        },
        {
          name: "Wearables",
          childCategories: [
            "Smartwatches",
            "Fitness Trackers",
            "VR Headsets",
            "Wearables D",
            "Wearables E",
            "Wearables F",
          ],
        },
        {
          name: "Accessories",
          childCategories: [
            "Chargers",
            "Cables",
            "Power Banks",
            "Accessories D",
            "Accessories E",
            "Accessories F",
          ],
        },
        {
          name: "Gaming",
          childCategories: [
            "Gaming Laptops",
            "Gaming PCs",
            "Gaming Consoles",
            "Gaming D",
            "Gaming E",
            "Gaming F",
          ],
        },
        {
          name: "Home Appliances",
          childCategories: [
            "Refrigerators",
            "Washing Machines",
            "Microwaves",
            "Appliances D",
            "Appliances E",
            "Appliances F",
          ],
        },
        {
          name: "Drones",
          childCategories: [
            "Camera Drones",
            "Toy Drones",
            "FPV Drones",
            "Drones D",
            "Drones E",
            "Drones F",
          ],
        },
      ],
    },
    {
      name: "Electronics E",
      subCategories: [
        {
          name: "Laptops",
          childCategories: [
            "Gaming Laptops",
            "Ultrabooks",
            "Business Laptops",
            "Laptops D",
            "Laptops E",
            "Laptops F",
          ],
        },
        {
          name: "Smartphones",
          childCategories: [
            "iPhone",
            "Samsung",
            "Google Pixel",
            "Smartphones D",
            "Smartphones E",
            "Smartphones F",
          ],
        },
        {
          name: "Headphones",
          childCategories: [
            "Over-Ear",
            "In-Ear",
            "On-Ear",
            "Headphones D",
            "Headphones E",
            "Headphones F",
          ],
        },
        {
          name: "Cameras",
          childCategories: [
            "DSLR",
            "Mirrorless",
            "Point and Shoot",
            "Cameras D",
            "Cameras E",
            "Cameras F",
          ],
        },
        {
          name: "Speakers",
          childCategories: [
            "Bluetooth Speakers",
            "Bookshelf Speakers",
            "Soundbars",
            "Speakers D",
            "Speakers E",
            "Speakers F",
          ],
        },
        {
          name: "Wearables",
          childCategories: [
            "Smartwatches",
            "Fitness Trackers",
            "VR Headsets",
            "Wearables D",
            "Wearables E",
            "Wearables F",
          ],
        },
        {
          name: "Accessories",
          childCategories: [
            "Chargers",
            "Cables",
            "Power Banks",
            "Accessories D",
            "Accessories E",
            "Accessories F",
          ],
        },
        {
          name: "Gaming",
          childCategories: [
            "Gaming Laptops",
            "Gaming PCs",
            "Gaming Consoles",
            "Gaming D",
            "Gaming E",
            "Gaming F",
          ],
        },
        {
          name: "Home Appliances",
          childCategories: [
            "Refrigerators",
            "Washing Machines",
            "Microwaves",
            "Appliances D",
            "Appliances E",
            "Appliances F",
          ],
        },
        {
          name: "Drones",
          childCategories: [
            "Camera Drones",
            "Toy Drones",
            "FPV Drones",
            "Drones D",
            "Drones E",
            "Drones F",
          ],
        },
      ],
    },
  ];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedSubCategory(null);
    setSelectedChildCategory(null);
  };

  const handleSubCategoryClick = (subCategory) => {
    setSelectedSubCategory(subCategory);
    setSelectedChildCategory(null);
  };

  const handleChildCategoryClick = (childCategory) => {
    setSelectedChildCategory(childCategory);
  };

  return (
    <>
      <div className="bg-gray-100 mx-6 grid grid-cols-3 gap-3">
        <div>
          <div className="h-[300px] overflow-y-auto">
            <List>
              {categories.map((category) => (
                <ListItem
                  key={category.name}
                  role="button"
                  onClick={() => handleCategoryClick(category)}
                  style={{
                    color:
                      selectedCategory &&
                      selectedCategory.name === category.name
                        ? "blue"
                        : "inherit",
                  }}
                  className="hover:bg-gray-200"
                >
                  <ListItemText primary={category.name} />
                </ListItem>
              ))}
            </List>
          </div>
        </div>
        <div>
          <div className="h-[300px] overflow-y-auto">
            <List>
              {selectedCategory &&
                selectedCategory.subCategories.map((subCategory) => (
                  <ListItem
                    key={subCategory.name}
                    role="button"
                    onClick={() => handleSubCategoryClick(subCategory)}
                    style={{
                      color:
                        selectedSubCategory &&
                        selectedSubCategory.name === subCategory.name
                          ? "blue"
                          : "inherit",
                    }}
                    className="hover:bg-gray-200"
                  >
                    <ListItemText primary={subCategory.name} />
                  </ListItem>
                ))}
            </List>
          </div>
        </div>
        <div>
          <div className="h-[300px] overflow-y-auto">
            <List>
              {selectedSubCategory &&
                selectedSubCategory.childCategories.map((childCategory) => (
                  <ListItem
                    key={childCategory}
                    role="button"
                    onClick={() => handleChildCategoryClick(childCategory)}
                    style={{
                      color:
                        selectedChildCategory === childCategory
                          ? "blue"
                          : "inherit",
                    }}
                    className="hover:bg-gray-200"
                  >
                    <ListItemText primary={childCategory} />
                  </ListItem>
                ))}
            </List>
          </div>
        </div>
      </div>
      <div className="m-6">
        Choose:{" "}
        {selectedCategory && (
          <span className="font-semibold">
            {selectedCategory.name} {" > "}
            {selectedSubCategory && selectedSubCategory.name + " > "}
            {selectedChildCategory}
          </span>
        )}
      </div>
    </>
  );
};

export default SelectCategorySeller;
