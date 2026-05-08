"use client";

import { useEffect, useState } from "react";

import { SplineScene } from "@/components/ui/splite";

const SCENE_URL = "https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode";

export function HeroSpline() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const sync = () => setIsDesktop(mediaQuery.matches);

    sync();
    mediaQuery.addEventListener("change", sync);

    return () => mediaQuery.removeEventListener("change", sync);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 lg:pointer-events-auto lg:relative lg:inset-auto lg:h-[720px]">
      <div className="absolute right-[-22%] top-[10%] h-[620px] w-[520px] opacity-[0.08] lg:hidden">
        <div className="absolute left-1/2 top-0 h-40 w-36 -translate-x-1/2 rounded-[45%] border border-slate-950 bg-slate-950" />
        <div className="absolute left-1/2 top-32 h-64 w-56 -translate-x-1/2 rounded-[45%_45%_34%_34%] bg-slate-950" />
        <div className="absolute left-8 top-48 h-52 w-20 -rotate-12 rounded-full bg-slate-950" />
        <div className="absolute right-8 top-48 h-52 w-20 rotate-12 rounded-full bg-slate-950" />
      </div>
      {isDesktop ? (
        <div className="absolute inset-[-8%_-16%_-12%_-8%] opacity-100">
          <SplineScene scene={SCENE_URL} className="h-full w-full" />
        </div>
      ) : null}
    </div>
  );
}
