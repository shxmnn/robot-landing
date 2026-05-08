import { ArrowRight, Play } from "lucide-react";

import { HeroSpline } from "@/components/hero-spline";
import { ParticleWord } from "@/components/particle-word";

const features = [
  "실시간 렌더링 피드백",
  "복잡한 인터랙션 자동 생성",
  "엔터프라이즈급 성능 최적화",
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-950">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/82 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#" className="flex items-center gap-3" aria-label="VibeCoding">
            <span className="grid h-8 w-8 place-items-center rounded-full border border-slate-200 bg-white shadow-sm">
              <span className="h-2.5 w-2.5 rounded-full bg-sky-500" />
            </span>
            <span className="text-sm font-semibold tracking-[0.18em] text-slate-950">
              VibeCoding
            </span>
          </a>

          <div className="hidden items-center gap-10 text-sm font-medium text-slate-500 md:flex">
            <a href="#features" className="transition-colors hover:text-slate-950">
              Features
            </a>
            <a href="#showcase" className="transition-colors hover:text-slate-950">
              Showcase
            </a>
            <a href="#pricing" className="transition-colors hover:text-slate-950">
              Pricing
            </a>
          </div>

          <a
            href="#pricing"
            className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-950 shadow-sm transition hover:border-slate-950"
          >
            Get Access
          </a>
        </nav>
      </header>

      <section className="relative mx-auto grid min-h-screen w-full max-w-7xl items-center overflow-hidden px-5 pb-12 pt-28 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10 lg:pb-0 lg:pt-16">
        <div className="relative z-10 max-w-3xl">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50/80 px-3 py-1.5 text-sm font-medium text-slate-700">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
            VibeCoding 2.0 is Here
          </div>

          <h1 className="text-[clamp(3rem,12vw,5.75rem)] font-semibold leading-[0.92] tracking-normal text-slate-950">
            <span className="block whitespace-nowrap">Code with your</span>
            <ParticleWord />
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
            구현은 에이전트에 맡기세요. 당신은 그저 상상하고, 원하는 감각을
            전달하세요. 아름답고 완벽한 코드를 즉시 만들어보세요.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#features"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-slate-950 px-6 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(15,23,42,0.18)] transition hover:bg-slate-800"
            >
              Start Vibe Coding
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#showcase"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 text-sm font-semibold text-slate-950 transition hover:border-slate-950"
            >
              <Play className="h-4 w-4 fill-slate-950" aria-hidden="true" />
              Watch the Demo
            </a>
          </div>

          <div className="mt-12 border-l border-slate-200 pl-5">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">
              A more native way to build in the AI era
            </p>
            <p className="mt-2 text-base text-slate-600">
              만드는 방식 자체를 AI에 맞게 다시 정의해보세요
            </p>
          </div>
        </div>

        <div className="relative z-0 mt-8 h-[420px] lg:mt-0 lg:h-auto">
          <HeroSpline />
        </div>
      </section>

      <section
        id="features"
        className="relative z-10 border-t border-slate-200 bg-slate-50/70 py-24 sm:py-32"
      >
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-600">
              Features
            </p>
            <h2 className="mt-5 max-w-2xl text-4xl font-semibold leading-tight tracking-normal text-slate-950 sm:text-5xl">
              생각의 속도, 그대로 화면에 구현되다.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              문법보다 의도와 느낌을 말하세요. AI 에이전트가 구조 설계,
              인터랙션, 성능 최적화처럼 복잡한 개발 과정을 대신 이어갑니다.
            </p>

            <div className="mt-10 grid gap-4">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-4 rounded-lg border border-slate-200 bg-white px-5 py-4 shadow-sm"
                >
                  <span className="h-2 w-2 rounded-full bg-sky-500" />
                  <span className="text-base font-medium text-slate-800">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div id="showcase" className="rounded-lg border border-slate-200 bg-white p-4 shadow-[0_30px_90px_rgba(15,23,42,0.08)]">
            <div className="flex items-center gap-2 border-b border-slate-200 px-3 pb-4 pt-2">
              <span className="h-3 w-3 rounded-full bg-slate-300" />
              <span className="h-3 w-3 rounded-full bg-sky-200" />
              <span className="h-3 w-3 rounded-full bg-slate-200" />
              <span className="ml-3 text-xs font-medium text-slate-400">
                intent.vibe.ts
              </span>
            </div>
            <pre className="overflow-x-auto px-3 py-6 text-sm leading-7 text-slate-700 sm:text-base">
              <code>{`// User Intent: "AI 시대에 맞는 근본적인 제작 경험"
Agent.generateInterface({
  direction: 'native AI workflow',
  tone: 'precise and premium',
  output: 'production-ready UI'
})`}</code>
            </pre>
          </div>
        </div>
      </section>

      <section id="pricing" className="bg-white px-5 py-20 text-center sm:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">
          Pricing
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-normal text-slate-950">
          Private access opens soon.
        </h2>
      </section>
    </main>
  );
}
