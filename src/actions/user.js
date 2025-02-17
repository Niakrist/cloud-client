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
    console.log("respone.data: ", respone.data);
    alert(respone.data.message);
  } catch (error) {
    console.log(error.respone.data.message);
  }
};
