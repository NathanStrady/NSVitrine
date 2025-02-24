import Sections from "@/app/components/Sections/Sections";
import TopBackground from "@/app/components/Presentation/TopBackground";

export default function Home() {
  return (
  <div className="relative overflow-clip" id="Home">
    <TopBackground />
    <Sections/>
  </div>
  );
}
