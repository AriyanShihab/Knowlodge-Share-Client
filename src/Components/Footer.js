import React, { useContext } from "react";
import { userContext } from "../Context/AuthContext";

const Footer = () => {
  const { name } = useContext(userContext);
  return (
    <div className="py-20 bg-slate-800 text-center text-green-500 text-xl">
      <h1>Hello {name}</h1>
    </div>
  );
};

export default Footer;
