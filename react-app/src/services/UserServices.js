import axios from "axios";
import FormData from "form-data";

const getUserData = async () => {
  const userID = localStorage.getItem("id-user");
  const res = await axios.get(
    `http://localhost:7777/api/User/get-info?user_Id=${userID}`
  );
  if (res && res.data) {
    return res.data;
  }
};

const postRegisterUser = async (userName, email, phoneNumber, password) => {
  //console.log(email);
  console.log(">> check data:", userName, email, phoneNumber, password);
  return axios.post("http://localhost:7777/api/User/register", {
    userName,
    email,
    phoneNumber,
    password,
  });
};

const postLoginUser = (userName, password) => {
  let username = userName;
  return axios.post("http://localhost:7777/api/User/login", {
    username,
    password,
  });
};

const checkExistUser = async (id) => {
  return await axios
    .get(`http://localhost:7777/api/User/get-info?user_Id=${id}`)
    .then((rs) => {
      return true;
    })
    .catch((err) => {
      return false;
    });
};

const updateUserProfile = async (user, avatar) => {
  console.log(user);
  // const userID = localStorage.getItem("id-user");
  // let formData = new FormData();
  // formData.append("customFile", avatar);
  // console.log(">>> check user:", {
  //   user_id: +userID,
  //   ...user,
  //   form_files: avatar,
  // });

  // const res = await axios.put(
  //   `http://192.168.28.81:5000/api/User/update-info?user_Id=${userID}`,
  //   {
  //     user_id: userID,
  //     ...user,
  //     form_files: formData,
  //   },
  //   {
  //     headers: {
  //       "Content-Type": "multipart/form-data",
  //     },
  //   }
  // );
  // if (res && res.data) {
  //   toast.success("Update profile success");

  //   return res.data;
  // }
};

export {
  postLoginUser,
  postRegisterUser,
  checkExistUser,
  getUserData,
  updateUserProfile,
};
