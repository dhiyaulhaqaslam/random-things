import { useState } from "react";

export default function Counter() {
   const [count, setCount] = useState(0);

   return (
      <div className="flex flex-col items-center gap-4 z-10">
         <h1 className="text-2xl font-bold">Count: {count}</h1>
         <button
            onClick={() => setCount(count + 1)}
            className="px-4 py-2 bg-fuchsia-500 text-white rounded-lg"
         >
            Tambah
         </button>
         <button
            onClick={() => setCount(count - 1)}
            className="px-4 py-2 bg-indigo-500 text-white rounded-lg"
         >
            Kurang
         </button>
         <button
            onClick={() => setCount(0)}
            className="px-4 py-2 bg-gray-500 text-white rounded-lg"
         >
            Reset
         </button>
      </div>
   );
}
