import React from "react";
import { useSelector } from "react-redux";

const NewPage = () => {
  const isOn = useSelector((state) => state.light.isOn);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white py-12 px-6">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
        Yangi sahifa
      </h2>
      <p className="text-xl text-gray-700">
        Chiroq holati:{" "}
        <span className={isOn ? "text-green-600" : "text-red-600"}>
          {isOn ? " YONIQ ■" : " O‘CHIQ ■■"}
        </span>
      </p>
    </div>
  );
};

export default NewPage;
