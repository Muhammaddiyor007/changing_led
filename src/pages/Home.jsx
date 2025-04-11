import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { turnOn, turnOff, toggle } from "../store/lightSlice";

const Home = () => {
  const isOn = useSelector((state) => state.light.isOn);
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 py-12 px-6">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
        Chiroq holati:
        <span className={isOn ? "text-green-600" : "text-red-600"}>
          {isOn ? " YONIQ ■" : " O‘CHIQ ■■"}
        </span>
      </h1>

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
        <button onClick={() => dispatch(turnOn())} className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg shadow-md transition duration-300">
          Yoqish
        </button>
        <button onClick={() => dispatch(turnOff())} className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg shadow-md transition duration-300">
          O‘chirish
        </button>
        <button onClick={() => dispatch(toggle())} className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg shadow-md transition duration-300" >
          Teskari qilish
        </button>
      </div>
    </div>
  );
};

export default Home;
