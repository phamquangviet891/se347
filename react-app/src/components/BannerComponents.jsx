import React, { useEffect, useState } from "react";
const banners = [
  "https://cf.shopee.vn/file/vn-50009109-3b4844af326ff3b9c1e1793d0dbda9f3_xxhdpi",
  "https://cf.shopee.vn/file/vn-50009109-ffd0c3daa878c6985cbf4a43e0ea2019_xxhdpi",
  "https://cf.shopee.vn/file/vn-50009109-0940e0b9e249c5995b138e307cc0ccf2_xxhdpi",
  "https://cf.shopee.vn/file/vn-50009109-763640c1eef79fed084642adbdc63bd1_xxhdpi",
  "https://cf.shopee.vn/file/vn-50009109-8ca9bf4fc1fa258468ba3a4f95cd0781_xxhdpi",
  "https://cf.shopee.vn/file/vn-50009109-b4d23d40639a94b3f06d9fca0ccd4aa1_xxhdpi",
  "https://cf.shopee.vn/file/vn-50009109-ffd0c3daa878c6985cbf4a43e0ea2019_xxhdpi",
];
const BannerComponents = () => {
  const [currentImage, setCurrentImage] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      if (currentImage === banners.length - 1) setCurrentImage(0);
      else setCurrentImage(currentImage + 1);
    }, 4000);
  }, [currentImage]);
  return (
    <img
      className="row-span-2 col-span-2 bg-contain"
      src={banners[currentImage]}
    ></img>
  );
};

export default BannerComponents;
