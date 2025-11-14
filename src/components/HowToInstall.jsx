// src/components/HowToInstall.jsx
const steps = [
  {
    id: "01",
    title: "Download",
    desc: "Open Play Store or App Store and search for MyBindle.",
    highlight: true,
  },
  {
    id: "02",
    title: "Install App",
    desc: "Tap install and let MyBindle set itself up automatically.",
  },
  {
    id: "03",
    title: "Ready to Use",
    desc: "Sign up or log in to explore joyful connections instantly.",
  },
];

export default function InstallSteps() {
  return (
    <section
      id="install"
      aria-label="How it works"
      className="relative bg-neutralSoft py-24"
    >
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-14 px-6">
        <div className="flex flex-col items-center gap-6 text-center">
          <h3 className="font-display text-[3.3rem] font-semibold leading-[1.08] tracking-[-0.05em] text-neutralText">
            How to Install Our App
          </h3>
          <p className="max-w-3xl font-display text-[1.1rem] font-semibold leading-[1.8rem] text-neutralText">
            Getting started is quick and easy! Follow these simple steps to
            install and start using MyBindle today.
          </p>
        </div>

        <div className="relative flex w-full items-center justify-between md:px-10">
          <div className="absolute left-[18%] right-[18%] top-[2.6rem] hidden h-[1.2px] bg-[#8F8F8F] md:block" />
          {steps.map((step) => (
            <div
              key={step.id}
              className="flex flex-col items-center text-center"
            >
              <span
                className={`font-display text-[2.6rem] font-semibold tracking-[-0.04em] ${
                  step.highlight ? "text-[#FF5349]" : "text-neutralText"
                }`}
              >
                {step.id}
              </span>
            </div>
          ))}
        </div>

        <div className="grid w-full gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.id}
              className="flex flex-col items-center gap-4 rounded-[18px] bg-neutralSoft px-8 py-10 text-center shadow-[-3px_-3px_10px_#FFFFFF,5px_5px_10px_rgba(0,0,0,0.1)]"
            >
              <h4 className="font-display text-[1.6rem] font-semibold tracking-[-0.04em] text-neutralText">
                {step.title}
              </h4>
              <p className="font-display text-[1.05rem] leading-[1.8rem] text-neutralText/90">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
