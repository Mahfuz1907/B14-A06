import Banner from "@/Components/Banner/Banner";
import Workouts from "@/Components/Workouts/Workouts";


export default function Home() {
  return (
    <div>
      <Banner />
      <div id="library">
        <Workouts />
      </div>
    </div>
  );
}
