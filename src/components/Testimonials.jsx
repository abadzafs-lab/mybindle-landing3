// src/components/Testimonials.jsx
const testimonials = [
  {
    name: "Emily R",
    location: "USA",
    text: "“MyBindle has become the easiest way for my family to stay in touch. One quick plan and everyone shows up.”",
    avatarColor: "#B5E4CA",
  },
  {
    name: "Javier L",
    location: "Spain",
    text: "“Our travel group plans every meetup here. The reminders and shared stories keep the vibe alive.”",
    avatarColor: "#CABDFF",
  },
  {
    name: "Patrick",
    location: "Product Designer at COVEO",
    text: "“From voice notes to quick polls, MyBindle helps our team collaborate without losing the personal touch.”",
    avatarColor: "#FFBC99",
  },
  {
    name: "Sophie M",
    location: "UK",
    text: "“The community suggestions are spot on. I’ve made real friendships through shared interests.”",
    avatarColor: "#FFBC99",
  },
  {
    name: "Amit K",
    location: "India",
    text: "“Smart notifications mean I only get the updates that matter. No more endless group chat scrolls.”",
    avatarColor: "#FFD88D",
  },
  {
    name: "Nora S",
    location: "Canada",
    text: "“As a host, I love how easy it is to organise events and capture the moments afterwards.”",
    avatarColor: "#B1E5FC",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-label="Testimonials"
      className="bg-neutralSoft py-28"
    >
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-14 px-6">
        <div className="flex flex-col items-center gap-5 text-center">
          <h3 className="font-display text-[3.3rem] font-semibold leading-[1.1] tracking-[-0.05em] text-neutralText">
            What Our Users Say
          </h3>
          <p className="max-w-4xl font-sans text-[1.05rem] leading-[1.8rem] text-[#828487]">
            Exercise may boost productivity, but heartfelt conversations keep
            communities thriving. Here’s how MyBindle sparks joy around the
            world.
          </p>
        </div>

        <div className="grid w-full gap-8 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="flex h-full flex-col gap-6 rounded-[32px] bg-neutralSoft px-7 py-9 shadow-[-4px_-4px_8px_#FFFFFF,4px_4px_8px_rgba(0,0,0,0.1)]"
            >
              <div className="font-display text-[1.15rem] leading-[1.9rem] text-[#212121]">
                {testimonial.text}
              </div>
              <div className="flex items-center gap-5">
                <div
                  className="h-14 w-14 rounded-full"
                  style={{ backgroundColor: testimonial.avatarColor }}
                />
                <div className="flex flex-col">
                  <span className="font-display text-[1.3rem] font-semibold text-[#212121]">
                    {testimonial.name}
                  </span>
                  <span className="font-sans text-[1rem] text-[#828487]">
                    {testimonial.location}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
