import React from "react";

const validate = (email, password, fullname) => {
  const isEmailValid = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    const isNameValid = /^[A-Za-z\s\-.']{2,}$/.test(fullname);


  if (!isEmailValid) {
    return "Email ID is not valid";
  }
  if (!isPasswordValid) {
    return "Password is not valid";
  }

  if (!isNameValid) {
    return "Name is not Valid";
  }

  return null; //no error
};

export default validate;
