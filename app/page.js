import BeatCurrent from "./components/BeatCurrent";
import EduCard from "./components/EduCard";
import ExpCard from "./components/ExpCard";
import Header from "./components/Header";
import LinkCard from "./components/LinkCard";
import NeilCard from "./components/NeilCard";
import NightSparrowCard from "./components/NightSparrowCard";
import TechCard from "./components/TechCard";

export default function Home() {
  return (
    <div className="">
      <Header />
      <main className="px-8 flex justify-center mb-8">
        <div className="grid grid-cols-2 auto-rows-auto lg:grid-rows-[repeat(2,120px)_repeat(2,240px)] lg:grid-cols-[repeat(5,240px)] gap-6 mt-24">
          <ExpCard />
          <LinkCard />
          <NeilCard />
          <NightSparrowCard />
          <TechCard />
          <EduCard />
          <BeatCurrent />
        </div>
      </main>
    </div>
  );
}
