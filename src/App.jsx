import { useState } from "react";
import "./App.css";
import NexusOrbSup from "./components/Nexusorbsup";
import Information from "./components/Information";

function App(props) {
   const [count, setCount] = useState(0);

   return (
      <div className="flex justify-center items-center h-screen">
         <NexusOrbSup />
         <Information
            name="Lazark Kertia"
            age="22 Years old"
            status="FullStack Web Developer"
         />
      </div>
   );
}

export default App;
