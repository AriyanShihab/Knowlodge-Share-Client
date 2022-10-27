import React, { useContext } from "react";
import { toast } from "react-toastify";
import { UserContext } from "../../Context/AuthContext";

const PasswordReset = () => {
  const { resetPassword } = useContext(UserContext);
  const handelSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    console.log(email);
    resetPassword(email)
      .then(() => {
        toast.success(
          "Password reset Email has been Sent, please check your email",
          { autoClose: 1200 }
        );
      })
      .catch((err) => {
        toast.error(err.message, { autoClose: 1200 });
      });
  };
  return (
    <div className="min-h-screen grid place-items-center">
      <div className="shadow-2xl rounded p-4 md:w-[500px] h-96 m-4 flex flex-col justify-center min:w-full">
        <form onSubmit={handelSubmit}>
          <p className="mb-3">
            Enter Your emal adress where we will send an password reset email
          </p>
          <input
            className="block w-full px-2 py-3 bg-slate-800 border border-slate-100 border-opacity-20 rounded"
            type="email"
            name="email"
            id="email"
            placeholder="Enter your Email Address"
          />
          <button
            type="submit"
            className="bg-[#f66962] px-4 py-3 rounded text-white font-bold  mt-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default PasswordReset;
