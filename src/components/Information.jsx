import React from "react";

export default function Information({ name, age, status }) {
   return (
      <h1 className="text-lg font-semibold">
         Halo, <span className="text-fuchsia-500">{name}</span>! Umur kamu{" "}
         <span className="text-fuchsia-500">{age}</span>. Saya seorang{" "}
         <span className="text-fuchsia-500">{status}</span>.
      </h1>
   );
}
