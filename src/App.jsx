import { useState } from "react";

export default function App() {
  const [display, setDisplay] = useState("");

  const add = (value) => {
    setDisplay((prev) => prev + value);
  };

  const clear = () => {
    setDisplay("");
  };

  const calculate = async () => {
    if (!display) return;

    try {
      const res = await fetch(
        `https://api.mathjs.org/v4/?expr=${encodeURIComponent(display)}`
      );
      const result = await res.text();
      setDisplay(result);
    } catch {
      setDisplay("Error");
    }
  };

  const buttons = [
    "7","8","9","/",
    "4","5","6","*",
    "1","2","3","-",
    "0",".","+","=",
    "sin(","cos(","tan(","log(",
    "sqrt(","C"
  ];

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="bg-gray-800 p-6 rounded-2xl w-80 shadow-xl">

        <input
          value={display}
          readOnly
          className="w-full mb-4 p-3 text-right text-xl rounded bg-black text-green-400"
        />

        <div className="grid grid-cols-4 gap-3">
          {buttons.map((btn) => (
            <button
              key={btn}
              onClick={() =>
                btn === "="
                  ? calculate()
                  : btn === "C"
                  ? clear()
                  : add(btn)
              }
              className={`p-3 rounded text-white 
                ${btn === "=" ? "bg-green-600 col-span-2" : ""}
                ${btn === "C" ? "bg-red-600" : "bg-gray-700 hover:bg-gray-600"}
              `}
            >
              {btn}
            </button>
          ))}
        </div>

      </div>
    </div>
  );
}
