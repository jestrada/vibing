import React from "react";
import EggPriceTracker from "./components/EggPriceTracker";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-900">
        🥚 Egg Price Tracker 🥚
      </h1>
      <EggPriceTracker />
    </div>
  );
}

export default App;
