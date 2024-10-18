"use client";

import { useState } from "react";
import Image from "next/image";
export const runtime = "edge";

export default function Home() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [result, setResult] = useState<number | string | null>(null);

  const handleCalculation = (operation: "add" | "subtract" | "multiply" | "divide") => {
    const num1 = parseFloat(input1);
    const num2 = parseFloat(input2);

    if (isNaN(num1) || isNaN(num2)) {
      setResult("Invalid input");
      return;
    }

    switch (operation) {
      case "add":
        setResult(num1 + num2);
        break;
      case "subtract":
        setResult(num1 - num2);
        break;
      case "multiply":
        setResult(num1 * num2);
        break;
      case "divide":
        setResult(num2 !== 0 ? num1 / num2 : "Cannot divide by zero"); 
        break;
      default:
        setResult(null);
    }

    /* Ini Alternatif Pake If Else
    if (operation === "add") {
      setResult(num1 + num2);
    } else if (operation === "subtract") {
      setResult(num1 - num2);
    } else if (operation === "multiply") {
      setResult(num1 * num2);
    } else if (operation === "divide") {
      if (num2 !== 0) {
        setResult(num1 / num2);
      } else {
        setResult("Cannot divide by zero");
      }
    } else {
      setResult(null);
    }*/

  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">Tugas RPL Pertemuan ke-3</h1>
        <div className="flex items-center justify-center gap-4 mt-4">
          <span className="text-2xl font-semibold">MA Al-Jihad</span>
        </div>
      </header>

      <main className="flex flex-col items-center bg-gray-800 p-10 rounded-2xl shadow-2xl transform transition duration-500 hover:scale-105">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 drop-shadow-lg">
          Kalkulator Sederhana
        </h1>

        <div className="flex flex-col gap-4 mt-8 w-full max-w-md">
          <input
            type="number"
            placeholder="Masukkan angka pertama"
            value={input1}
            onChange={(e) => setInput1(e.target.value)}
            className="p-3 rounded-lg bg-gray-700 text-white text-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />
          <input
            type="number"
            placeholder="Masukkan angka kedua"
            value={input2}
            onChange={(e) => setInput2(e.target.value)}
            className="p-3 rounded-lg bg-gray-700 text-white text-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />

          <div className="grid grid-cols-4 gap-4 mt-4">
            <button
              onClick={() => handleCalculation("add")}
              className="bg-purple-500 hover:bg-purple-600 text-lg p-3 rounded-lg transition transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400"
            >
              +
            </button>
            <button
              onClick={() => handleCalculation("subtract")}
              className="bg-green-500 hover:bg-green-600 text-lg p-3 rounded-lg transition transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              -
            </button>
            <button
              onClick={() => handleCalculation("multiply")}
              className="bg-yellow-500 hover:bg-yellow-600 text-lg p-3 rounded-lg transition transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              *
            </button>
            <button
              onClick={() => handleCalculation("divide")}
              className="bg-red-500 hover:bg-red-600 text-lg p-3 rounded-lg transition transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-400"
            >
              ÷
            </button>
          </div>
          <div className="text-3xl font-bold text-center mt-6 p-4 bg-gray-700 rounded-lg shadow-md">
            {result !== null ? `${result}` : "Belum ada hasil"}
          </div>
        </div>
      </main>
    </div>
  );
}
