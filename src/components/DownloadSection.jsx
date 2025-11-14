import React from "react";

const DownloadSection = () => {
  return (
    <section className="relative overflow-hidden bg-primary py-24 text-white">
      <div className="absolute -right-24 top-0 h-72 w-72 rounded-full bg-white/15 blur-3xl" />
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-10 px-6 text-center md:flex-row md:items-center md:justify-between md:text-left">
        <div className="max-w-[520px]">
          <h2 className="font-display text-[3.3rem] font-semibold leading-[1.1] tracking-[-0.02em]">
            Join the Fun – Download MyBindle Now!
          </h2>
          <p className="mt-4 font-display text-[1.15rem] leading-[1.9rem] text-white/85">
            Your social network, your way. Download MyBindle now and become part
            of a community that’s always evolving!
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-5">
          <button className="rounded-full bg-white px-8 py-3 font-display text-xs font-semibold text-primary shadow-[0_16px_32px_rgba(255,255,255,0.35)] transition hover:bg-[#ffeceb]">
            App Store
          </button>
          <button className="rounded-full border border-white/70 px-8 py-3 font-display text-xs font-semibold text-white transition hover:bg-white/10">
            Google Play
          </button>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
