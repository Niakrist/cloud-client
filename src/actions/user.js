import axios from "axios";

export const registration = async (email, password) => {
  try {
    const respone = await axios.post(
      "http://localhost:4000/api/user/registration",
      {
        email,
        password,
      }
    );
    alert(respone.data.message);
  } catch (error) {
    alert(error.message);
  }
};

// export const login = async (email, password) => {
//   try {
//     const response = await axios.post("http://localhost:4000/api/user/login", {
//       email,
//       password,
//     });
//     console.log();
//   } catch (error) {
//     console.log("ERROR: ", error);
//   }
// };
