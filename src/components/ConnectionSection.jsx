/* src/components/ConnectionSection.jsx */
const connectionHighlights = [
  {
    title: "🎥 Short Videos & Reels",
    text: "Share engaging, bite-sized content that keeps every connection entertained.",
  },
  {
    title: "🔔 Smart Notifications",
    text: "Stay updated on what matters without the noise.",
  },
  {
    title: "👥 Interest-Based Communities",
    text: "Join groups and discussions that match your passions.",
  },
];

export default function ConnectionSection() {
  return (
    <section aria-label="Connection" className="bg-neutralSoft py-24">
      <div className="mx-auto grid w-full max-w-[1200px] items-center gap-16 px-6 md:grid-cols-[1.05fr,0.95fr]">
        <div className="relative mx-auto flex w-full max-w-[420px] justify-center">
          <div className="absolute -left-16 top-16 hidden h-40 w-40 rounded-full bg-primary/25 blur-[110px] md:block" />
          <div className="absolute -right-14 bottom-8 hidden h-32 w-32 rounded-full bg-[#FFD4D1]/70 blur-[90px] md:block" />

          <div className="relative w-full max-w-[320px]">
            <div className="absolute bottom-4 right-10 hidden h-[360px] w-[170px] origin-bottom rotate-6 rounded-[24px] border border-white/20 bg-white/85 p-4 shadow-[0_20px_40px_rgba(0,0,0,0.18)] md:block">
              <div className="grid h-full place-content-center rounded-[18px] bg-gradient-to-br from-white via-[#FFE6E3] to-[#FFD1CC] text-center text-sm font-semibold text-primary/80">
                Share more smiles today!
              </div>
            </div>

            <div className="relative mx-auto h-[440px] w-[210px] origin-bottom -rotate-6 rounded-[28px] border border-white/30 bg-white p-5 shadow-[0_24px_45px_rgba(0,0,0,0.25)]">
              <div className="flex h-full flex-col justify-between rounded-[22px] bg-[#1F1F35] p-4 text-left text-white">
                <div className="rounded-[16px] bg-white p-5 text-slate-900">
                  <div className="text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-primary">
                    Today
                  </div>
                  <div className="mt-4 space-y-3">
                    <div>
                      <p className="text-[0.75rem] font-semibold text-slate-500">
                        Coffee Crew ☕
                      </p>
                      <p className="text-[1.1rem] font-semibold text-[#1F1F35]">
                        Sunrise Meet-up
                      </p>
                    </div>
                    <div className="rounded-2xl bg-[#F7F7F9] p-3 text-xs text-slate-600">
                      “Catch you at the park in 20?”
                    </div>
                  </div>
                </div>

                <div className="space-y-3 rounded-[16px] bg-white p-5 text-xs text-slate-500">
                  <div className="flex items-center justify-between">
                    <span>Replies</span>
                    <span className="font-semibold text-primary">
                      12 active
                    </span>
                  </div>
                  <div className="rounded-full bg-[#FCE9E8] px-4 py-2 text-primary">
                    Maya and 4 others sent a smile 😊
                  </div>
                  <button className="w-full rounded-full bg-primary px-4 py-2 text-[0.65rem] font-semibold text-white shadow-sm">
                    Jump In
                  </button>
                </div>
              </div>
            </div>

            <div className="absolute -top-14 left-12 hidden rounded-2xl bg-white p-3 text-left text-[0.75rem] text-slate-700 shadow-[0_18px_34px_rgba(0,0,0,0.18)] md:block">
              <p className="font-semibold text-primary">Group Vibes</p>
              <p className="mt-1 text-xs text-slate-500">
                Taylor just dropped a new playlist.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-5">
            <h2 className="font-display text-[3.3rem] font-semibold leading-[1.08] tracking-[-0.05em] text-neutralText">
              Where Every Click Sparks a Connection!
            </h2>
            <p className="font-sans text-[1.1rem] leading-[1.8rem] text-[#525252]">
              A small act of kindness today can create a lifetime of impact for
              someone in need. Give from the heart and change a life!
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {connectionHighlights.map((highlight) => (
              <div
                key={highlight.title}
                className="flex flex-col gap-3 rounded-[18px] bg-neutralSoft px-8 py-6 shadow-[-3px_-3px_10px_#FFFFFF,5px_5px_10px_rgba(0,0,0,0.1)]"
              >
                <h3 className="font-display text-[1.6rem] font-semibold tracking-[-0.04em] text-neutralText">
                  {highlight.title}
                </h3>
                <p className="font-display text-[1.1rem] leading-[1.8rem] text-[#525252]">
                  {highlight.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
