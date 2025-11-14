export default function CTA() {
  return (
    <section
      id="download"
      aria-label="Call to action"
      className="relative overflow-hidden bg-primary py-24 text-white"
    >
      <div className="absolute inset-0 -translate-x-1/2 rotate-[-24deg] rounded-[32px] bg-white/5 blur-[120px]" />

      <div className="relative mx-auto flex w-full max-w-[1200px] flex-col gap-10 px-6 md:flex-row md:items-center md:justify-between">
        <div className="w-full max-w-[520px]">
          <h4 className="font-display text-[3.3rem] font-semibold leading-[1.1] tracking-[-0.02em]">
            Be the Reason Someone Smiles Today!
          </h4>
          <p className="mt-6 font-display text-[1.15rem] leading-[1.9rem] text-white/85">
            Your encouragement can brighten someone’s day. Send a note, plan a
            meetup, or share a heartwarming story in seconds with MyBindle.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-5">
            <a
              href="#"
              className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-3 text-xs font-semibold text-primary shadow-[0_16px_32px_rgba(255,255,255,0.35)] transition hover:bg-[#ffeceb]"
            >
              App Store
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-3 rounded-full border border-white/70 px-8 py-3 text-xs font-semibold text-white transition hover:bg-white/10"
            >
              Google Play
            </a>
          </div>
        </div>

        <div className="relative w-full max-w-md">
          <div className="absolute -top-12 right-8 h-20 w-20 rounded-full bg-white/25 blur-[70px]" />
          <div className="relative flex flex-col gap-5 rounded-[28px] bg-white p-7 shadow-[0_24px_45px_rgba(31,31,53,0.18)]">
            <div className="flex items-start gap-3 rounded-2xl bg-[#FFF1EF] p-5">
              <div className="h-9 w-9 rounded-full bg-primary/20" />
              <div className="font-display text-[1.1rem] text-primary">
                Lina sent a heart to the “Weekend Brunch” plan.
              </div>
            </div>
            <div className="rounded-2xl bg-[#F7F7F9] p-5 font-display text-[1.05rem] leading-[1.8rem] text-[#525252]">
              “Thanks for making it so simple to stay in touch with everyone I
              love.”
            </div>
            <div className="flex items-center justify-between rounded-2xl bg-[#1F1F35] p-5 font-display text-white">
              <div>
                <p className="text-[0.65rem] uppercase tracking-[0.3em] text-white/70">
                  Daily Joy Meter
                </p>
                <p className="mt-1 text-xl font-semibold">87%</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-white/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
