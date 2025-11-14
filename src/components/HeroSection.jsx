const heroFeatures = [
  "Plan hangouts without the group chat chaos.",
  "Share the moments that brighten everyone’s day.",
  "Keep every conversation private and personal.",
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-primary text-white"
    >
      <div className="absolute inset-x-0 bottom-0 h-32 bg-white/10" />
      <div className="mx-auto flex w-full max-w-[1200px] flex-col-reverse gap-12 px-6 py-20 md:flex-row md:items-center md:justify-between md:gap-20 md:py-24">
        <div className="w-full max-w-[500px]">
          <span className="inline-flex items-center justify-center rounded-full bg-white/15 px-5 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-white/75">
            MyBindle
          </span>

          <h1 className="mt-8 text-[3.25rem] font-extrabold leading-[1.08] tracking-tight">
            Stay Connected
            <br />
            Stay Social
            <br />
            Stay You!
          </h1>

          <p className="mt-6 text-[1.05rem] leading-[1.8rem] text-white/85">
            Keep conversations glowing, make plans in seconds, and share every
            little win with the people who make you smile most.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#download"
              className="rounded-full bg-white px-8 py-3 text-xs font-semibold text-primary shadow-[0_16px_32px_rgba(255,255,255,0.35)] transition hover:bg-[#ffeceb]"
            >
              Download App
            </a>
            <a
              href="#features"
              className="rounded-full border border-white/70 px-8 py-3 text-xs font-semibold text-white transition hover:bg-white/10"
            >
              Explore Features
            </a>
          </div>

          <ul className="mt-10 space-y-3 text-[0.95rem] text-white/80">
            {heroFeatures.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/20 text-sm font-semibold">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap items-center gap-6 text-[0.9rem] text-white/75">
            <div className="flex -space-x-2">
              {[0, 1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="h-9 w-9 rounded-full border-2 border-primary bg-white/85"
                />
              ))}
            </div>
            <span>10K+ friends hang out on MyBindle daily</span>
          </div>
        </div>

        <div className="relative flex w-full items-center justify-center md:w-1/2">
          <div className="relative w-full max-w-[380px]">
            <div className="absolute -top-16 left-16 hidden rounded-2xl bg-white p-4 text-left text-xs text-slate-700 shadow-[0_22px_40px_rgba(0,0,0,0.2)] md:block">
              <p className="font-semibold text-primary">Group Vibes</p>
              <p className="mt-1 text-[0.75rem] text-slate-500">
                Taylor just dropped a new playlist.
              </p>
            </div>

            <div className="absolute -left-12 top-16 hidden h-16 w-16 rounded-full bg-white/25 blur-[60px] md:block" />
            <div className="absolute -right-10 bottom-6 hidden h-20 w-20 rounded-full bg-[#FFD4D1]/70 blur-[70px] md:block" />

            <div className="absolute bottom-6 right-10 hidden h-[420px] w-[200px] origin-bottom rotate-6 rounded-[28px] border border-white/20 bg-white/85 p-5 shadow-[0_24px_50px_rgba(0,0,0,0.18)] md:block">
              <div className="grid h-full place-content-center rounded-[20px] bg-gradient-to-br from-white via-[#FFE6E3] to-[#FFD1CC] text-center text-sm font-semibold text-primary/80">
                Share more smiles today!
              </div>
            </div>

            <div className="relative mx-auto h-[480px] w-[230px] origin-bottom -rotate-6 rounded-[32px] border border-white/30 bg-white p-5 shadow-[0_28px_50px_rgba(0,0,0,0.25)]">
              <div className="flex h-full flex-col justify-between rounded-[24px] bg-[#1F1F35] p-4 text-left text-white">
                <div className="rounded-[18px] bg-white p-5 text-slate-900">
                  <div className="text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-primary">
                    Today
                  </div>
                  <div className="mt-4 space-y-3">
                    <div>
                      <p className="text-[0.75rem] font-semibold text-slate-500">
                        Coffee Crew ☕
                      </p>
                      <p className="text-lg font-semibold text-[#1F1F35]">
                        Sunrise Meet-up
                      </p>
                    </div>
                    <div className="rounded-2xl bg-[#F7F7F9] p-3 text-xs text-slate-600">
                      “Catch you at the park in 20?”
                    </div>
                  </div>
                </div>

                <div className="space-y-3 rounded-[18px] bg-white p-5 text-[0.75rem] text-slate-500">
                  <div className="flex items-center justify-between">
                    <span>Replies</span>
                    <span className="font-semibold text-primary">
                      12 active
                    </span>
                  </div>
                  <div className="rounded-full bg-[#FCE9E8] px-4 py-2 text-primary">
                    Maya and 4 others sent a smile 😊
                  </div>
                  <button className="w-full rounded-full bg-primary px-4 py-2 text-xs font-semibold text-white shadow-sm">
                    Jump In
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
