import React from "react";
import Svg from "../assets/image.png";

const Home = ({ startTest }) => {
  return (
    <div className="w-full mt-10 h-full flex flex-col justify-center items-center pt-10">
      <div>
        <img src={Svg} alt="Sentence construction logo" className="h-[50px] mb-8" />
      </div>

      <div className="flex flex-col gap-3 w-full max-w-[600px] justify-center items-center px-4">
        <div className="text-3xl font-semibold text-center">
          Sentence Construction
        </div>
        <div className="text-gray-400 text-center">
          Select the correct words to complete the sentence by arranging the
          provided options in the right order.
        </div>

        <div className="flex gap-5 mt-10 justify-center flex-wrap w-full">
          <div className="flex flex-col text-center p-4">
            <h1 className="font-semibold text-lg">Time per Question</h1>
            <p className="text-gray-400 p-2">30 sec</p>
          </div>

          <div className="flex flex-col text-center p-4 border-l-2 border-r-2 border-gray-100">
            <h1 className="font-semibold text-lg">Total Questions</h1>
            <p className="text-gray-400 p-2">10</p>
          </div>

          <div className="flex flex-col text-center p-4">
            <h1 className="font-semibold text-lg">Coins</h1>
            <p className="text-gray-600 p-2 flex items-center justify-center gap-1">
              <span className="h-[10px] w-[10px] rounded-full bg-amber-400 inline-block"></span>
              0
            </p>
          </div>
        </div>

        <div className="flex gap-5 w-full py-10 justify-center">
          <button className="p-2 border w-[40%] sm:w-[30%] border-purple-800 text-purple-800 rounded hover:bg-purple-50">
            Back
          </button>
          <button
            className="p-2 border w-[40%] sm:w-[30%] border-purple-800 bg-blue-700 text-white rounded hover:bg-blue-800"
            onClick={startTest}
          >
            Start
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
