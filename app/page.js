"use client";
import { useState } from "react";

import BeatCurrent from "./components/BeatCurrent";
import JapanCard from "./components/JapanCard";
import ExpCard from "./components/ExpCard";
import Header from "./components/Header";
import LinkCard from "./components/LinkCard";
import NeilCard from "./components/NeilCard";
import NightSparrowCard from "./components/NightSparrowCard";
import TechCard from "./components/TechCard";
import PortfolioPortalCard from "./components/PortfolioPortalCard";

export default function Home() {
  const [headerValue, setHeaderValue] = useState(0);
  return (
    <div className="">
      <Header headerValue={headerValue} setHeaderValue={setHeaderValue} />
      <main className="px-8 flex justify-center mb-8">
        <div className="grid grid-cols-2 auto-rows-auto lg:grid-rows-[repeat(2,120px)_repeat(2,240px)] lg:grid-cols-[repeat(5,240px)] gap-6 mt-24">
          <ExpCard headerValue={headerValue} />
          <LinkCard headerValue={headerValue} />
          <NeilCard headerValue={headerValue} />
          <PortfolioPortalCard headerValue={headerValue} />
          <TechCard headerValue={headerValue} />
          <JapanCard headerValue={headerValue} />
          <BeatCurrent headerValue={headerValue} />
        </div>
      </main>
    </div>
  );
}
