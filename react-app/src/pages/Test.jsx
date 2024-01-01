import React from "react";
import axios from "axios";

export const Test = () => {
  let res = axios.get("http://localhost:5000/product/list");
  console.log(res);
  return <div>aaaa</div>;
};
