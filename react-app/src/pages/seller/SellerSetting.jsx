import React, { useState, useRef } from "react";
import { Box, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import { CiCamera } from "react-icons/ci";
const SellerSetting = () => {
  const [image, setImage] = useState("https://via.placeholder.com/150"); // Sample image URL
  const handleImageUpload = (e) => {
    const selectedImage = e.target.files[0];

    if (selectedImage) {
      const reader = new FileReader();

      reader.onload = (event) => {
        setImage(event.target.result);
      };

      reader.readAsDataURL(selectedImage);
    }
  };
  const fileInputRef = useRef(null);

  return (
    <div
      className="flex w-full h-full bg-white p-4 flex-col"
      style={{ backgroundColor: "#EEF1FC" }}
    >
      <Card className=" w-full h-fit px-4 py-6 shadow-lg">
        <Typography variant="subtitle2" color="#808089" sx={{ mb: "5px" }}>
          Setting / <span style={{ color: "#000000" }}>My Products</span>
        </Typography>
        <Typography variant="h6" color="#1A88F7" fontWeight="bold">
          Account
        </Typography>
      </Card>
      <div style={{ height: 30 }} />
      <Card className="w-full h-fit px-4 py-6 shadow-lg flex items-center justify-center">
        <div className=" w-fit flex flex-col items-end">
          <form className=" items-center flex w-fit gap-4 my-2 ">
            <label>Full Name</label>
            <TextField label="Full Name" type="text" className=" w-96" />
          </form>
          <form className=" items-center flex w-fit gap-4 my-2 ">
            <label>User Name</label>
            <TextField label="Username" type="text" className=" w-96" />
          </form>
          <form className=" items-center flex gap-4 my-2">
            <label>Email</label>
            <TextField label="Email" type="email" className="w-96" />
          </form>
          <form className=" items-center flex gap-4 my-2">
            <label>Phone Number</label>
            <TextField label="Username" type="text" className="w-96" />
          </form>
          <button
            className=" w-28 py-2"
            style={{ backgroundColor: "#1A88F7", color: "white" }}
          >
            Save
          </button>
        </div>
        <div className="flex-col justify-center items-center p-4 my-10 w-1/4 flex   ">
          <img
            src={image}
            alt="Uploaded"
            className="w-48 h-48 mb-4 object-cover rounded-full"
          />
          <button
            onClick={() => {
              fileInputRef.current.click();
              console.log("input click");
            }}
            className=" text-white w-10 h-10 justify-center items-center flex rounded-full cursor-pointer"
            style={{
              backgroundColor: "#EEEEEE",
              marginTop: -40,
              marginLeft: 100,
            }}
          >
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleImageUpload}
              className="mb-4"
              style={{ display: "none" }}
            />
            <CiCamera size={20} fill="#B5B5B5" />
          </button>
          <h1 className=" text-xl font-bold mb-2">vankhanh</h1>
          <h1 className=" text-sm">vankhanh123.seller</h1>
        </div>
      </Card>
    </div>
  );
};

export default SellerSetting;
