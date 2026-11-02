import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import groupImage from "../../photos/group.jpeg";
import mountainImage from "../../photos/mountainduringsunset.jpeg";

const team = [
  {
    number: "01",
    name: "Sagar Mani Poudel",
    role: "Managing Director",
    detail: "Strategic leadership & responsible tourism",
  },
  {
    number: "02",
    name: "Ashwin Poudel",
    role: "Administration & Booking",
    detail: "Guest relations, planning & coordination",
  },
  {
    number: "03",
    name: "Prakash Subedi",
    role: "Trekking Guide",
    detail: "Mountain trails & local experiences",
  },
  {
    number: "04",
    name: "Danapati Poudel",
    role: "Trekking Guide",
    detail: "Trekking experiences & route guidance",
  },
  {
    number: "05",
    name: "Ramanath Poudel",
    role: "Trekking Guide",
    detail: "Trail support & Himalayan exploration",
  },
];

const destinations = [
  "Everest Base Camp",
  "Annapurna Circuit",
  "Poon Hill",
  "Mardi Himal",
  "Langtang Valley",
  "Upper Mustang",
  "Manaslu Circuit",
  "Pokhara Valley",
];

const faqs = [
  {
    q: "When is the best time to trek in Nepal?",
    a: "Autumn (October–November) and spring (March–May) are the most popular seasons, with clear skies and stable trail conditions. Tell us your dates and we'll advise what works best for your route.",
  },
  {
    q: "Do I need previous trekking experience?",
    a: "Not necessarily. We offer routes for first-time walkers as well as seasoned trekkers. Share your fitness level and expectations and we'll suggest something suitable.",
  },
  {
    q: "Can you design a custom journey?",
    a: "Yes. Choose 'Custom Plan' in the form and describe what you have in mind: destinations, duration, pace, interests. We'll shape the itinerary around you.",
  },
  {
    q: "What happens after I send my inquiry?",
    a: "Our team reads every message personally and replies by email with ideas, questions and next steps. There is no obligation at this stage.",
  },
];

/* Fade-up on scroll */
function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}

function Contact() {
  const formRef = useRef(null);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");
  const [scrollY, setScrollY] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setStatus("");

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus("success");
      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
    } finally {
      setSending(false);
    }
  };

  const inputStyle =
    "peer w-full border-0 border-b border-[#cfc9b8] bg-transparent px-0 py-3 text-[15px] text-[#14251e] outline-none transition placeholder:text-[#b3ad9c] focus:border-[#a58b58]";

  const labelStyle =
    "mb-1 block text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8a8472] transition peer-focus:text-[#a58b58]";

  return (
    <main className="overflow-x-hidden bg-[#0f1f18] text-[#14251e]">
      <style>{`
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes floaty { 0%,100% { transform: translateY(0); } 50% { transform: translateY(10px); } }
        @keyframes lineGrow { from { transform: scaleY(0); } to { transform: scaleY(1); } }
        .marquee-track { animation: marquee 40s linear infinite; }
        .marquee-track:hover { animation-play-state: paused; }
        .floaty { animation: floaty 2.4s ease-in-out infinite; }
        .grain::after { content:""; position:absolute; inset:0; pointer-events:none; opacity:.07;
          background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>"); }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track, .floaty { animation: none; }
        }
      `}</style>

      {/* ───────── HERO ───────── */}
      <section className="grain relative flex min-h-[100svh] items-end overflow-hidden">
        <img
          src={mountainImage}
          alt="Himalayan mountains at sunset"
          style={{ transform: `translateY(${scrollY * 0.25}px) scale(1.1)` }}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f1f18]/70 via-[#0f1f18]/30 to-[#0f1f18]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f1f18]/70 via-transparent to-transparent" />

        <div className="relative mx-auto w-full max-w-7xl px-6 pb-16 pt-40 md:px-12 md:pb-20">
          <p className="mb-6 flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#c7ae7b]">
            <span className="h-px w-12 bg-[#c7ae7b]" />
            Contact · Pokhara, Nepal
          </p>

          <h1 className="max-w-5xl font-serif text-5xl leading-[1.02] text-white md:text-8xl">
            Your Himalayan
            <br />
            story starts with{" "}
            <em className="font-serif italic text-[#c7ae7b]">hello.</em>
          </h1>

          <p className="mt-8 max-w-xl text-base leading-8 text-white/75 md:text-lg">
            Tell us what you have in mind and our team will help you plan a
            memorable journey through Nepal.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-6">
            <a
              href="#inquiry"
              className="group inline-flex items-center gap-4 bg-[#c7ae7b] px-8 py-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#0f1f18] transition hover:bg-white"
            >
              Start Your Inquiry
              <span className="transition group-hover:translate-x-2">→</span>
            </a>
            <a
              href="#people"
              className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/80 underline decoration-[#c7ae7b] decoration-1 underline-offset-8 transition hover:text-white"
            >
              Meet the team
            </a>
          </div>

          {/* glass info strip */}
          <div className="mt-16 grid gap-px overflow-hidden border border-white/15 bg-white/10 backdrop-blur-md sm:grid-cols-3">
            {[
              ["Find Us", "Lakeside, Pokhara", "Gandaki Province, Nepal"],
              ["Write To Us", "info@yourdomain.com", "We welcome your questions"],
              ["Office Hours", "Sunday – Friday", "9:00 AM – 6:00 PM Nepal Time"],
            ].map(([label, main, sub]) => (
              <div key={label} className="bg-[#0f1f18]/50 p-6 md:p-7">
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#c7ae7b]">
                  {label}
                </p>
                {label === "Write To Us" ? (
                  <a
                    href="mailto:info@yourdomain.com"
                    className="mt-3 block font-serif text-xl text-white transition hover:text-[#c7ae7b]"
                  >
                    {main}
                  </a>
                ) : (
                  <p className="mt-3 font-serif text-xl text-white">{main}</p>
                )}
                <p className="mt-1 text-sm text-white/55">{sub}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="floaty absolute bottom-6 left-1/2 hidden -translate-x-1/2 md:block">
          <div className="mx-auto h-10 w-px bg-gradient-to-b from-[#c7ae7b] to-transparent" />
        </div>
      </section>

      {/* ───────── MARQUEE ───────── */}
      <section className="border-y border-white/10 bg-[#0f1f18] py-6">
        <div className="flex overflow-hidden">
          <div className="marquee-track flex shrink-0 whitespace-nowrap">
            {[...destinations, ...destinations].map((d, i) => (
              <span
                key={i}
                className="flex items-center font-serif text-2xl italic text-white/40 md:text-3xl"
              >
                <span className="px-8">{d}</span>
                <span className="text-sm not-italic text-[#c7ae7b]">✦</span>
              </span>
            ))}
          </div>
          <div
            aria-hidden="true"
            className="marquee-track flex shrink-0 whitespace-nowrap"
          >
            {[...destinations, ...destinations].map((d, i) => (
              <span
                key={i}
                className="flex items-center font-serif text-2xl italic text-white/40 md:text-3xl"
              >
                <span className="px-8">{d}</span>
                <span className="text-sm not-italic text-[#c7ae7b]">✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── INQUIRY ───────── */}
      <section
        id="inquiry"
        className="relative bg-[#0f1f18] py-24 md:py-36"
      >
        <div className="mx-auto grid max-w-7xl gap-16 px-6 md:px-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          {/* left – sticky intro */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#c7ae7b]">
                Your Himalayan Experience
              </p>
              <h2 className="mt-6 font-serif text-4xl leading-[1.1] text-white md:text-6xl">
                Tell us what you are{" "}
                <em className="italic text-[#c7ae7b]">dreaming</em> of.
              </h2>
              <p className="mt-6 max-w-md text-[15px] leading-8 text-white/60">
                Every traveller has a different idea of the perfect adventure.
                Share yours with us, and let's start planning.
              </p>
            </Reveal>

            <Reveal delay={150}>
              <ol className="mt-14 space-y-8 border-l border-white/15 pl-8">
                {[
                  ["Share your idea", "Fill in the form with your plans and dates."],
                  ["We get back to you", "A real person from our team replies by email."],
                  ["Shape the journey", "Together we refine the route, pace and details."],
                ].map(([t, d], i) => (
                  <li key={t} className="relative">
                    <span className="absolute -left-[41px] top-1 flex h-5 w-5 items-center justify-center rounded-full border border-[#c7ae7b] bg-[#0f1f18] text-[9px] text-[#c7ae7b]">
                      {i + 1}
                    </span>
                    <p className="font-serif text-xl text-white">{t}</p>
                    <p className="mt-1 text-sm leading-7 text-white/50">{d}</p>
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal delay={250}>
              <div className="relative mt-14 hidden h-56 overflow-hidden lg:block">
                <img
                  src={groupImage}
                  alt="Our trekking team in Nepal"
                  className="h-full w-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1f18] to-transparent" />
                <p className="absolute bottom-4 left-4 text-[10px] uppercase tracking-[0.25em] text-white/80">
                  Your journey. Our experience.
                </p>
              </div>
            </Reveal>
          </div>

          {/* right – form card */}
          <Reveal delay={100}>
            <div className="relative bg-[#f6f2e9] p-7 shadow-[0_40px_120px_-30px_rgba(0,0,0,0.7)] md:p-14">
              <div className="absolute -right-3 -top-3 hidden h-24 w-24 border-r border-t border-[#c7ae7b] md:block" />
              <div className="absolute -bottom-3 -left-3 hidden h-24 w-24 border-b border-l border-[#c7ae7b] md:block" />

              <div className="mb-12 flex items-end justify-between border-b border-[#ddd6c3] pb-6">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#a58b58]">
                    Travel Enquiry
                  </p>
                  <h3 className="mt-2 font-serif text-3xl md:text-4xl">
                    Plan Your Journey
                  </h3>
                </div>
                <span className="hidden font-serif text-5xl italic text-[#d9ccaa] sm:block">
                  ✦
                </span>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-10">
                <div className="grid gap-x-10 gap-y-9 sm:grid-cols-2">
                  <div className="flex flex-col-reverse">
                    <input
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      className={inputStyle}
                    />
                    <label className={labelStyle}>Full Name *</label>
                  </div>

                  <div className="flex flex-col-reverse">
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="Your email address"
                      className={inputStyle}
                    />
                    <label className={labelStyle}>Email Address *</label>
                  </div>

                  <div className="flex flex-col-reverse">
                    <input
                      name="phone"
                      type="tel"
                      placeholder="+977"
                      className={inputStyle}
                    />
                    <label className={labelStyle}>Phone Number</label>
                  </div>

                  <div className="flex flex-col-reverse">
                    <select
                      name="service"
                      required
                      defaultValue=""
                      className={inputStyle}
                    >
                      <option value="" disabled>
                        Select an experience
                      </option>
                      <option value="Trekking">Trekking</option>
                      <option value="Sightseeing">Sightseeing</option>
                      <option value="Hiking">Hiking</option>
                      <option value="Cycling">Cycling</option>
                      <option value="Camping">Camping</option>
                      <option value="Custom Plan">Custom Plan</option>
                    </select>
                    <label className={labelStyle}>Interested In *</label>
                  </div>

                  <div className="flex flex-col-reverse">
                    <input
                      name="travel_date"
                      type="date"
                      min={new Date().toISOString().split("T")[0]}
                      className={inputStyle}
                    />
                    <label className={labelStyle}>Travel Date</label>
                  </div>

                  <div className="flex flex-col-reverse">
                    <input
                      name="group_size"
                      type="number"
                      min="1"
                      placeholder="e.g. 2"
                      className={inputStyle}
                    />
                    <label className={labelStyle}>Number Of Travellers</label>
                  </div>
                </div>

                <div className="flex flex-col-reverse">
                  <textarea
                    name="message"
                    rows="4"
                    required
                    placeholder="Tell us about your plans, preferred destinations or anything you would like us to know..."
                    className={`${inputStyle} resize-y`}
                  />
                  <label className={labelStyle}>Your Message *</label>
                </div>

                {status === "success" && (
                  <div
                    role="status"
                    className="border border-[#b7c9b7] bg-[#edf3eb] p-5 text-sm leading-7 text-[#263e32]"
                  >
                    <p className="font-semibold">
                      ✓ Your inquiry has been successfully sent to our team!
                    </p>
                    <p>
                      Thank you for reaching out. We'll get back to you shortly.
                    </p>
                  </div>
                )}

                {status === "error" && (
                  <div
                    role="alert"
                    className="border border-red-200 bg-red-50 p-5 text-sm leading-7 text-red-700"
                  >
                    Something went wrong while sending your inquiry. Please try
                    again or contact us by email.
                  </div>
                )}

                <div className="flex flex-col items-start justify-between gap-6 border-t border-[#ddd6c3] pt-8 sm:flex-row sm:items-center">
                  <p className="max-w-xs text-xs leading-6 text-[#8a8472]">
                    Your information will be used only to respond to your
                    travel enquiry.
                  </p>

                  <button
                    type="submit"
                    disabled={sending}
                    className="group w-full bg-[#0f1f18] px-10 py-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-[#a58b58] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                  >
                    {sending ? "Sending..." : "Send Your Inquiry"}
                    {!sending && (
                      <span className="ml-5 inline-block transition group-hover:translate-x-2">
                        →
                      </span>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────── PEOPLE ───────── */}
      <section id="people" className="bg-[#f6f2e9] py-24 md:py-36">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <Reveal>
            <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#a58b58]">
                  The People Behind The Journey
                </p>
                <h2 className="mt-6 max-w-2xl font-serif text-4xl leading-[1.1] md:text-6xl">
                  Good journeys begin with{" "}
                  <em className="italic text-[#a58b58]">good people.</em>
                </h2>
              </div>
              <p className="max-w-sm text-[15px] leading-8 text-[#6f6b5d]">
                From the first message you send to the final steps of your
                adventure, our team works together to make your experience
                thoughtful, welcoming and memorable.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
            <Reveal>
              <div className="group relative overflow-hidden">
                <img
                  src={groupImage}
                  alt="Our team"
                  className="h-[420px] w-full object-cover transition duration-[1400ms] group-hover:scale-105 md:h-[640px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1f18]/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 text-white md:p-10">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-[#d5bd8a]">
                    Our team in Nepal
                  </p>
                  <p className="mt-3 max-w-xs font-serif text-2xl italic leading-snug md:text-3xl">
                    Local roots. Mountain experience. Genuine care.
                  </p>
                </div>
              </div>
            </Reveal>

            <div>
              {team.map((member, i) => (
                <Reveal key={member.number} delay={i * 80}>
                  <div className="group flex cursor-default items-start gap-6 border-b border-[#ddd6c3] py-8 transition-all duration-500 hover:pl-4 first:border-t">
                    <span className="pt-2 font-serif text-sm tracking-widest text-[#b19a6d]">
                      {member.number}
                    </span>

                    <div className="flex-1">
                      <h3 className="font-serif text-2xl transition group-hover:text-[#a58b58] md:text-3xl">
                        {member.name}
                      </h3>
                      <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#a58b58]">
                        {member.role}
                      </p>
                      <p className="mt-3 max-w-md text-sm leading-7 text-[#7b7767]">
                        {member.detail}
                      </p>
                    </div>

                    <span className="pt-2 text-xl text-[#a58b58] opacity-0 transition duration-500 group-hover:translate-x-2 group-hover:opacity-100">
                      →
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="mt-24 grid gap-px overflow-hidden border border-[#ddd6c3] bg-[#ddd6c3] md:grid-cols-2">
            {[
              [
                "Behind Every Adventure",
                "A team beyond the trail.",
                "Our wider support crew helps with trip coordination, local arrangements, equipment and the practical details that make a journey run smoothly.",
              ],
              [
                "Thoughtful Planning",
                "Your experience matters.",
                "We pay attention to route conditions, altitude, preparation and the needs of each traveller when planning an adventure.",
              ],
            ].map(([eyebrow, title, text]) => (
              <div key={title} className="bg-[#f6f2e9] p-9 md:p-12">
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#a58b58]">
                  {eyebrow}
                </p>
                <h3 className="mt-4 font-serif text-3xl">{title}</h3>
                <p className="mt-4 max-w-lg text-sm leading-8 text-[#77735f]">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── FAQ ───────── */}
      <section className="bg-[#eae4d4] py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 md:px-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#a58b58]">
              Before You Write
            </p>
            <h2 className="mt-6 font-serif text-4xl leading-[1.1] md:text-5xl">
              Questions travellers often ask.
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <div className="border-t border-[#cfc6ae]">
              {faqs.map((f, i) => {
                const open = openFaq === i;
                return (
                  <div key={f.q} className="border-b border-[#cfc6ae]">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(open ? -1 : i)}
                      aria-expanded={open}
                      className="flex w-full items-center justify-between gap-6 py-7 text-left"
                    >
                      <span className="font-serif text-xl md:text-2xl">
                        {f.q}
                      </span>
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center border border-[#a58b58] text-lg text-[#a58b58] transition duration-500 ${
                          open ? "rotate-45 bg-[#a58b58] text-white" : ""
                        }`}
                      >
                        +
                      </span>
                    </button>
                    <div
                      className={`grid transition-all duration-500 ease-out ${
                        open ? "grid-rows-[1fr] pb-7" : "grid-rows-[0fr]"
                      }`}
                    >
                      <p className="max-w-xl overflow-hidden text-sm leading-8 text-[#6f6b5d]">
                        {f.a}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────── CLOSING ───────── */}
      <section className="grain relative overflow-hidden px-6 py-32 text-center md:py-44">
        <img
          src={mountainImage}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0f1f18]/80" />

        <Reveal className="relative">
          <p className="text-[11px] uppercase tracking-[0.4em] text-[#c7ae7b]">
            Nepal Is Waiting
          </p>

          <h2 className="mx-auto mt-8 max-w-4xl font-serif text-5xl leading-[1.05] text-white md:text-7xl">
            Some journeys stay with you{" "}
            <em className="italic text-[#c7ae7b]">forever.</em>
          </h2>

          <p className="mx-auto mt-8 max-w-xl text-[15px] leading-8 text-white/65">
            Tell us where you would like to go. We would love to help you get
            there.
          </p>

          <a
            href="#inquiry"
            className="group mt-12 inline-flex items-center gap-4 border border-[#c7ae7b] px-10 py-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-[#c7ae7b] hover:text-[#0f1f18]"
          >
            Let's Plan Together
            <span className="transition group-hover:translate-x-2">→</span>
          </a>
        </Reveal>
      </section>
    </main>
  );
}

export default Contact;
