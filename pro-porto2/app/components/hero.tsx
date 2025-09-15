import Image from "next/image";
import React from "react";

const Hero = () => {
   return (
      <div>
         <div>
            <div>
               <h1>NAMA SAYA</h1>
               <p>Deskripsi saya</p>
            </div>
            <div>
               <a href="">CV saya</a>
               <a href="">Project Saya</a>
            </div>
         </div>
         <div>
            <Image src={"https://placehold.co/600x400"} alt="" width={600} height={600}></Image>
         </div>
      </div>
   );
};

export default Hero;
