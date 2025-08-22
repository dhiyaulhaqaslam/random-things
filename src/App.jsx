import { useState } from "react";
import "./App.css";
import NexusOrbSup from "./components/Nexusorbsup";
import Footer from "./components/Footer";

function App(props) {
   const [count, setCount] = useState(0);

   return (
      <div className="flex justify-center items-center h-screen">
         <NexusOrbSup />
         <Footer
            name="Lazark Kertia"
            age="22 Years old"
            status="FullStack Web Developer"
         />
      </div>
   );
}

export default App;
