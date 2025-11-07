import { useState } from "react";
import Button from "./components/Button";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex">
      <div className="w-1/4">
        <div className="rounded-xl m-3 p-6 shadow space-y-3 bg-linear-to-br from-green-50 to-orange-50">
          <div className="font-medium">SEKAI Counter</div>
          <div className="text-sm">
            <div>Hello, SEKAI!</div>
            <div>You've clicked the button for {count} times!</div>
          </div>
          <div className="flex space-x-1">
            <Button onClick={() => setCount((prev) => prev + 1)}>
              Increase
            </Button>
            <Button onClick={() => setCount((prev) => prev - 1)}>
              Decrease
            </Button>
            <Button onClick={() => setCount(() => 0)}>Reset</Button>
          </div>
        </div>
        <div className="rounded-xl m-3 p-6 shadow space-y-3 bg-linear-to-br from-pink-50 to-sky-50">
          <div className="font-medium text-center">
            The SEKAI of ResetPower26
          </div>
          <div className="text-sm text-center">SEKAI Information</div>
          <div className="text-sm text-gray-500">
            This SEKAI is created on 7 November 2025.
          </div>
          <div className="text-sm text-center">SEKAI Options</div>
          <div className="font-medium text-gray-800">Home</div>
          <div className="text-gray-500">Articles</div>
          <div className="text-gray-500">Categories</div>
          <div className="text-gray-500">About</div>
        </div>
      </div>
      <div className="grow">
        <div className="rounded-full mt-3 mr-3 py-2 px-5 text-sm shadow bg-linear-to-r from-indigo-50 to-red-50">
          The Home of SEKAI
        </div>
        <div className="p-3">
          Hello, world! This page is under construction.
        </div>
      </div>
    </div>
  );
}
