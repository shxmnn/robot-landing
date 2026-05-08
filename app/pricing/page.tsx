import Link from "next/link";

const plans = [
  {
    period: "1개월",
    price: "50000원",
  },
  {
    period: "2개월",
    price: "100000원",
  },
  {
    period: "3개월",
    price: "150000원",
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-yellow-300 px-5 py-10 text-slate-950 sm:px-8">
      <nav className="mx-auto flex w-full max-w-5xl items-center justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label="VibeCoding">
          <span className="grid h-8 w-8 place-items-center rounded-full border border-amber-900/15 bg-yellow-50/80 shadow-sm">
            <span className="h-2.5 w-2.5 rounded-full bg-amber-950" />
          </span>
          <span className="text-sm font-semibold tracking-[0.18em] text-slate-950">
            VibeCoding
          </span>
        </Link>
        <Link
          href="/"
          className="rounded-full border border-amber-950/20 bg-yellow-50/80 px-4 py-2 text-sm font-semibold text-amber-950 shadow-sm transition hover:border-amber-950"
        >
          Back Home
        </Link>
      </nav>

      <section className="mx-auto flex min-h-[calc(100vh-7rem)] w-full max-w-5xl flex-col justify-center py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-900">
          Pricing
        </p>
        <h1 className="mt-5 text-5xl font-semibold tracking-normal text-slate-950 sm:text-7xl">
          Choose your access.
        </h1>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.period}
              className="rounded-lg border border-amber-950/12 bg-yellow-50/82 p-6 shadow-[0_24px_70px_rgba(120,53,15,0.12)]"
            >
              <p className="text-lg font-semibold text-amber-950">
                {plan.period}
              </p>
              <p className="mt-4 text-4xl font-semibold tracking-normal text-slate-950">
                {plan.price}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
