"use client";
import React from "react";

interface ButtonPropType {
  hamza: string;
  greetings?: boolean;
  bio: {
    id: string;
    address: string;
    phoneNumber: number;
  };
}

// type Gender = "Male" | "female";

// const fahad: Gender = "Male"


const Button = ({ hamza, greetings, bio }: ButtonPropType) => {
  console.log("hamza ==>", hamza);
  console.log("bio ", bio);
  return <div>{hamza}</div>;
};

export default Button;
