import "./App.css";
import NexusOrbSup from "./components/Nexusorbsup";
import Information from "./components/Information";
import Counter from "./components/Counter";

function App() {

   return (
      <div className="flex-col lg:flex-row flex justify-center items-center h-screen">
         <NexusOrbSup />
         <Information
            name="Lazark Kertia"
            age="22 Years old"
            status="FullStack Web Developer"
         />
         <Counter />
      </div>
   );
}

export default App;
