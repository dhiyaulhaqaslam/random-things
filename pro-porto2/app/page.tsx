import Image from "next/image";
import Hero from "./components/hero";

export default function Home() {
   return (
      <div className="grid gap-32">
         <div className="bg-blue-500 flex justify-center">
            <h2 className="text-xs lowercase">IKLAN DISINI</h2>
         </div>
         <div>
            <Hero />
         </div>
         <div>
            <h2>INI ABOUT</h2>
         </div>
         <div>
            <h2>INI PROJECTS</h2>
         </div>
         <div>
            <h2>INI CONTACT</h2>
         </div>
      </div>
   );
}
