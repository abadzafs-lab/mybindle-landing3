// src/components/FeaturesSection.jsx
const featureRows = [
  [
    {
      title: "🔥 Seamless Connections",
      text: "Stay in touch with friends, family, and like-minded people with just a tap.",
    },
    {
      title: "📸 Share Your Story",
      text: "Upload photos, videos, and updates to let everyone feel part of your world.",
    },
    {
      title: "💬 Real-Time Chat",
      text: "Whether it’s a DM or a group conversation, connect instantly with lightning-fast messaging.",
    },
  ],
  [
    {
      title: "🔒 Privacy First",
      text: "Your data, your control. We prioritise your privacy with world-class security.",
    },
    {
      title: "🌎 Discover & Explore",
      text: "Find trending content, join new communities, and explore what inspires you.",
    },
    {
      title: "💼 Grow Your Business",
      text: "Showcase your brand, connect with customers, and build lasting relationships.",
    },
  ],
];

export default function FeaturesSection() {
  return (
    <section
      id="features"
      aria-label="Features"
      className="bg-neutralSoft py-24"
    >
      <div className="mx-auto max-w-[1200px] px-6 text-center">
        <div className="flex flex-col items-center gap-6">
          <h2 className="font-display text-[3.3rem] font-semibold leading-[1.08] tracking-[-0.05em] text-neutralText">
            Features That Keep You Hooked!
          </h2>
          <p className="max-w-3xl font-display text-[1.2rem] font-semibold text-neutralText">
            Meet, Chat, Share – Anytime, Anywhere!
          </p>
        </div>

        <div className="mt-14 flex flex-col gap-8">
          {featureRows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex flex-col gap-6 md:flex-row md:items-stretch md:justify-center"
            >
              {row.map((feature) => (
                <article
                  key={feature.title}
                  className="mx-auto flex w-full max-w-xs flex-col items-center rounded-[21px] bg-neutralSoft px-8 py-10 text-center shadow-[5px_5px_10px_rgba(0,0,0,0.1),-3px_-3px_10px_#FFFFFF]"
                >
                  <div className="flex flex-col items-center gap-4">
                    <h3 className="font-display text-[1.6rem] font-semibold tracking-[-0.04em] text-[#1A293C]">
                      {feature.title}
                    </h3>
                    <p className="font-display text-[1.1rem] leading-[1.8rem] text-neutralText">
                      {feature.text}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
