import CarouselCards from "./components/enhanced-carousel";
import GridBackgroundView from "./components/moving-grid";

export default function Home() {
   return (
      <>
         <GridBackgroundView />
         <div className="max-w-4xl mx-auto">
            <CarouselCards />
         </div>
      </>
   );
}
