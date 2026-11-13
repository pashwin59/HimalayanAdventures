import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import groupImage from "../../photos/group.jpeg";
import mountainImage from "../../photos/mountainduringsunset.jpeg";

import sagarPhoto from "../../photos/team/sagar.jpeg";
import ashwinPhoto from "../../photos/team/ashwin.jpeg";
import prakashPhoto from "../../photos/team/prakash.jpeg";
import danapatiPhoto from "../../photos/team/dhanapati.jpg";
import arjunPhoto from "../../photos/team/arjun.jpeg";
import sahansil from "../../photos/team/sah.jpeg";
const team = [
  {
    number: "01",
    name: "Sagar Mani Poudel",
    role: "Managing Director",
    detail: "Strategic leadership & responsible tourism",
    photo: sagarPhoto,
  },
  {
    number: "02",
    name: "Ashwin Poudel",
    role: "Administration & Booking",
    detail: "Guest relations, planning & coordination",
    photo: ashwinPhoto,
  }, {
    number: "03",
    name: " Sahanshil Baral",
    role: "Trekking guide since 2018",
    detail: "Mountain trails & local experiences",
    photo: sahansil,
  },

  {
    number: "04",
    name: "Prakash Subedi",
    role: "Trekking Guide",
    detail: "Mountain trails & local experiences",
    photo: prakashPhoto,
  },
  {
    number: "05",
    name: "Danapati Poudel",
    role: "Trekking Guide",
    detail: "Trekking experiences & route guidance",
    photo: danapatiPhoto,
  },
  {
    number: "06",
    name: "Arzoon Timilsina",
    role: "Trekking Counselor",
    detail: "Trail support & Himalayan exploration",
    photo: arjunPhoto,
  },
];

const [lead, ...crew] = team;

const faqs = [
  {
    q: "When is the best time to trek in Nepal?",
    a: "Autumn (October–November) and spring (March–May) are the most popular seasons, with clear skies and stable trails. Tell us your dates and we'll advise what works best for your route.",
  },
  {
    q: "Do I need previous trekking experience?",
    a: "Not necessarily. We offer routes for first-time walkers as well as seasoned trekkers. Share your fitness level and expectations and we'll suggest something suitable.",
  },
  {
    q: "Can you design a custom journey?",
    a: "Yes. Choose 'Custom Plan' in the form and describe what you have in mind. We'll shape the itinerary around you.",
  },
];

const steps = [
  ["Share your idea", "Tell us your plans and dates in the form."],
  ["We reply personally", "Someone from our team writes back by email."],
  ["Shape the journey", "Together we refine the route and details."],
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
      { threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}

/* Topographic contour lines – subtle background texture */
function Contours({ className = "" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 800 600"
      fill="none"
      className={`pointer-events-none absolute ${className}`}
    >
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <path
          key={i}
          d={`M-50 ${330 + i * 6} C 100 ${180 - i * 14}, 260 ${
            430 + i * 10
          }, 420 ${260 - i * 12} S 700 ${160 + i * 14}, 860 ${300 + i * 8}`}
          stroke="#b8985a"
          strokeOpacity={0.28 - i * 0.025}
          strokeWidth="1"
        />
      ))}
    </svg>
  );
}

const Icon = ({ d }) => (
  <svg
    viewBox="0 0 24 24"
    className="h-5 w-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {d}
  </svg>
);

function Contact() {
  const formRef = useRef(null);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");

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
    "w-full rounded-2xl border border-transparent bg-[#f5f2ea] px-5 py-4 text-[15px] text-[#1f3a2e] outline-none transition placeholder:text-[#a9a594] hover:bg-[#f1ede2] focus:border-[#b8985a] focus:bg-white focus:shadow-[0_0_0_4px_rgba(184,152,90,0.15)]";

  const labelStyle =
    "mb-2 block pl-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7d7968]";

  return (
    <main className="overflow-x-hidden bg-white text-[#1f3a2e]">
      <style>{`
        @keyframes spin-slow { to { transform: rotate(360deg); } }
        @keyframes bob { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
        .spin-slow { animation: spin-slow 22s linear infinite; }
        .bob { animation: bob 5s ease-in-out infinite; }
        details > summary { list-style: none; }
        details > summary::-webkit-details-marker { display: none; }
        details[open] .faq-plus { transform: rotate(45deg); background:#1f3a2e; color:#fff; }
        @media (prefers-reduced-motion: reduce) { .spin-slow, .bob { animation: none; } }
      `}</style>

      {/* ───────── HERO ───────── */}
      <section className="relative">
        <Contours className="-left-32 top-10 w-[900px] max-w-none" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 pb-20 pt-32 md:px-12 md:pb-28 md:pt-40 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="inline-flex items-center gap-3 rounded-full border border-[#e3dcc8] bg-white/70 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8a7142]">
              <span className="h-2 w-2 rounded-full bg-[#b8985a]" />
              Let's plan your journey
            </p>

            <h1 className="mt-8 font-serif text-5xl leading-[1.05] md:text-7xl">
              Say{" "}
              <span className="relative inline-block italic text-[#b8985a]">
                namaste
                <svg
                  aria-hidden="true"
                  viewBox="0 0 200 12"
                  className="absolute -bottom-2 left-0 w-full"
                  fill="none"
                >
                  <path
                    d="M2 8 Q 50 0 100 6 T 198 4"
                    stroke="#b8985a"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <br />
              to your next adventure.
            </h1>

            <p className="mt-8 max-w-lg text-base leading-8 text-[#5f6b62] md:text-lg">
              Every great adventure begins with a conversation. Tell us what
              you have in mind, and let our team help you plan a memorable
              journey through Nepal.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-5">
              <a
                href="#inquiry"
                className="group inline-flex items-center gap-3 rounded-full bg-[#1f3a2e] px-8 py-4 text-sm font-medium text-white shadow-[0_12px_30px_-10px_rgba(31,58,46,0.6)] transition hover:-translate-y-0.5 hover:bg-[#2c5240]"
              >
                Start Your Inquiry
                <span className="transition group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#people"
                className="text-sm font-medium text-[#1f3a2e] underline decoration-[#b8985a] decoration-2 underline-offset-8 transition hover:text-[#b8985a]"
              >
                Meet our team
              </a>
            </div>
          </div>

          {/* arch images */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative ml-auto w-[82%]">
              <img
                src={mountainImage}
                alt="Himalayan mountain landscape at sunset"
                className="h-[420px] w-full rounded-t-[999px] rounded-b-[2rem] object-cover shadow-[0_30px_60px_-25px_rgba(31,58,46,0.5)] md:h-[540px]"
              />
              <div className="absolute inset-0 rounded-t-[999px] rounded-b-[2rem] ring-1 ring-inset ring-white/30" />
            </div>

            <img
              src={groupImage}
              alt="Our trekking team in Nepal"
              className="bob absolute -bottom-8 left-0 h-44 w-36 rounded-t-[999px] rounded-b-2xl border-[6px] border-white object-cover shadow-xl md:h-56 md:w-44"
            />

            {/* rotating badge */}
            <div className="absolute -right-2 top-6 hidden h-32 w-32 items-center justify-center rounded-full bg-[#f1e7d2] md:flex">
              <svg
                viewBox="0 0 120 120"
                className="spin-slow absolute inset-0 h-full w-full"
              >
                <defs>
                  <path
                    id="circ"
                    d="M60 60 m-44 0 a44 44 0 1 1 88 0 a44 44 0 1 1 -88 0"
                  />
                </defs>
                <text
                  fontSize="10.5"
                  letterSpacing="3.2"
                  fill="#8a7142"
                  style={{ textTransform: "uppercase" }}
                >
                  <textPath href="#circ">
                    Pokhara · Nepal · Himalaya ·
                  </textPath>
                </text>
              </svg>
              <span className="font-serif text-3xl text-[#b8985a]">✦</span>
            </div>

            <div className="absolute right-0 top-[58%] hidden rounded-2xl bg-white/90 px-5 py-4 shadow-lg backdrop-blur md:block">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#b8985a]">
                Base camp
              </p>
              <p className="mt-1 font-serif text-lg">Pokhara · 822 m</p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── INFO CARDS ───────── */}
      <section className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            {
              label: "Find Us",
              main: "Lakeside, Pokhara",
              sub: "Gandaki Province, Nepal",
              icon: (
                <>
                  <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z" />
                  <circle cx="12" cy="9.5" r="2.5" />
                </>
              ),
            },
            {
              label: "Write To Us",
              main: "trialtantra@gmail.com",
              sub: "We welcome your questions",
              href: "trialtantra@gmail.com",
              icon: (
                <>
                  <rect x="3" y="5" width="18" height="14" rx="3" />
                  <path d="m4 7 8 6 8-6" />
                </>
              ),
            },
            {
              label: "When To Reach Us",
              main: "Sunday – Friday",
              sub: "9:00 AM – 6:00 PM Nepal Time",
              icon: (
                <>
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 2" />
                </>
              ),
            },
          ].map((c, i) => {
            const Wrapper = c.href ? "a" : "div";
            return (
              <Reveal key={c.label} delay={i * 100}>
                <Wrapper
                  href={c.href}
                  className="group flex h-full items-start gap-5 rounded-3xl border border-[#ece6d6] bg-white p-7 transition duration-500 hover:-translate-y-1 hover:shadow-[0_24px_50px_-28px_rgba(31,58,46,0.35)]"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#eef3ea] text-[#2c5240] transition group-hover:bg-[#1f3a2e] group-hover:text-white">
                    <Icon d={c.icon} />
                  </span>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#b8985a]">
                      {c.label}
                    </p>
                    <p className="mt-2 font-serif text-xl">{c.main}</p>
                    <p className="mt-1 text-sm text-[#7d7968]">{c.sub}</p>
                  </div>
                </Wrapper>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ───────── INQUIRY ───────── */}
      <section id="inquiry" className="relative px-4 py-24 md:px-8 md:py-32">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-[#e9f0e5] px-6 py-16 md:px-14 md:py-20">
          <Contours className="-right-40 -top-20 w-[900px] max-w-none opacity-80" />

          <div className="relative grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            {/* intro */}
            <div className="lg:sticky lg:top-28 lg:self-start">
              <Reveal>
                <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#8a7142]">
                  Your Himalayan Experience
                </p>
                <h2 className="mt-5 font-serif text-4xl leading-[1.1] md:text-5xl">
                  Tell us what you are{" "}
                  <span className="italic text-[#b8985a]">dreaming</span> of.
                </h2>
                <p className="mt-5 max-w-sm text-[15px] leading-8 text-[#55655a]">
                  Every traveller has a different idea of the perfect
                  adventure. Share yours with us, and let's start planning.
                </p>
              </Reveal>

              <Reveal delay={150}>
                <ol className="relative mt-12 space-y-8">
                  <span
                    aria-hidden="true"
                    className="absolute left-[15px] top-3 h-[calc(100%-1.5rem)] border-l-2 border-dashed border-[#b8985a]/50"
                  />
                  {steps.map(([t, d], i) => (
                    <li key={t} className="relative flex gap-5">
                      <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-xs font-semibold text-[#8a7142] shadow-sm ring-1 ring-[#b8985a]/40">
                        {i + 1}
                      </span>
                      <div>
                        <p className="font-serif text-lg">{t}</p>
                        <p className="mt-0.5 text-sm leading-6 text-[#62705f]">
                          {d}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </Reveal>
            </div>

            {/* form card */}
            <Reveal delay={100}>
              <div className="rounded-[2rem] bg-white p-7 shadow-[0_40px_80px_-40px_rgba(31,58,46,0.35)] md:p-12">
                <div className="mb-10 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#b8985a]">
                      Travel Enquiry
                    </p>
                    <h3 className="mt-2 font-serif text-3xl">
                      Plan Your Journey
                    </h3>
                  </div>
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f1e7d2] text-xl text-[#b8985a]">
                    ✦
                  </span>
                </div>

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label className={labelStyle}>Full Name *</label>
                      <input
                        name="name"
                        type="text"
                        required
                        placeholder="Your name"
                        className={inputStyle}
                      />
                    </div>

                    <div>
                      <label className={labelStyle}>Email Address *</label>
                      <input
                        name="email"
                        type="email"
                        required
                        placeholder="Your email address"
                        className={inputStyle}
                      />
                    </div>

                    <div>
                      <label className={labelStyle}>Phone Number</label>
                      <input
                        name="phone"
                        type="tel"
                        placeholder="+977"
                        className={inputStyle}
                      />
                    </div>

                    <div>
                      <label className={labelStyle}>Interested In *</label>
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
                    </div>

                    <div>
                      <label className={labelStyle}>Travel Date</label>
                      <input
                        name="travel_date"
                        type="date"
                        min={new Date().toISOString().split("T")[0]}
                        className={inputStyle}
                      />
                    </div>

                    <div>
                      <label className={labelStyle}>Number Of Travellers</label>
                      <input
                        name="group_size"
                        type="number"
                        min="1"
                        placeholder="e.g. 2"
                        className={inputStyle}
                      />
                    </div>
                  </div>

                  <div>
                    <label className={labelStyle}>Your Message *</label>
                    <textarea
                      name="message"
                      rows="4"
                      required
                      placeholder="Tell us about your plans, preferred destinations or anything you would like us to know..."
                      className={`${inputStyle} resize-y`}
                    />
                  </div>

                  {status === "success" && (
                    <div
                      role="status"
                      className="rounded-2xl border border-[#b7c9b7] bg-[#edf3eb] p-5 text-sm leading-7 text-[#263e32]"
                    >
                      <p className="font-semibold">
                        ✓ Your inquiry has been successfully sent to our team!
                      </p>
                      <p>
                        Thank you for reaching out. We'll get back to you
                        shortly.
                      </p>
                    </div>
                  )}

                  {status === "error" && (
                    <div
                      role="alert"
                      className="rounded-2xl border border-red-200 bg-red-50 p-5 text-sm leading-7 text-red-700"
                    >
                      Something went wrong while sending your inquiry. Please
                      try again or contact us by email.
                    </div>
                  )}

                  <div className="flex flex-col items-start justify-between gap-5 pt-4 sm:flex-row sm:items-center">
                    <p className="max-w-xs text-xs leading-6 text-[#8a8672]">
                      Your information will be used only to respond to your
                      travel enquiry.
                    </p>

                    <button
                      type="submit"
                      disabled={sending}
                      className="group w-full rounded-full bg-[#1f3a2e] px-9 py-4 text-sm font-medium text-white shadow-[0_12px_30px_-10px_rgba(31,58,46,0.6)] transition hover:-translate-y-0.5 hover:bg-[#2c5240] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 sm:w-auto"
                    >
                      {sending ? "Sending..." : "Send Your Inquiry"}
                      {!sending && (
                        <span className="ml-3 inline-block transition group-hover:translate-x-1">
                          →
                        </span>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ───────── PEOPLE ───────── */}
      <section id="people" className="mx-auto max-w-7xl px-6 pb-24 md:px-12 md:pb-32">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#8a7142]">
              The People Behind The Journey
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-[1.1] md:text-5xl">
              Good journeys begin with{" "}
              <span className="italic text-[#b8985a]">good people.</span>
            </h2>
            <p className="mt-5 text-[15px] leading-8 text-[#5f6b62]">
              From the first message you send to the final steps of your
              adventure, our team works together to make your experience
              thoughtful, welcoming and memorable.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="group relative mt-14 overflow-hidden rounded-[2rem]">
            <img
              src={groupImage}
              alt="Our team"
              className="h-[260px] w-full object-cover transition duration-[1400ms] group-hover:scale-105 md:h-[420px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1f3a2e]/60 via-transparent to-transparent" />
            <p className="absolute bottom-6 left-7 text-[11px] uppercase tracking-[0.25em] text-white/90">
              Our team in Nepal
            </p>
          </div>
        </Reveal>

        {/* Lead – featured card */}
        <Reveal delay={100}>
          <div className="group mt-8 grid overflow-hidden rounded-[2rem] border border-[#ece6d6] bg-white transition duration-500 hover:shadow-[0_28px_60px_-30px_rgba(31,58,46,0.4)] md:grid-cols-[0.8fr_1.2fr]">
            <div className="relative h-96 overflow-hidden md:h-full md:min-h-[400px]">
              <img
                src={lead.photo}
                alt={`${lead.name} - ${lead.role}`}
                loading="lazy"
                className="h-full w-full object-cover object-[50%_20%] transition duration-[1200ms] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1f3a2e]/40 via-transparent to-transparent" />
            </div>

            <div className="relative flex flex-col justify-center overflow-hidden bg-[#f8f4e9] p-8 md:p-14">
              <Contours className="-right-40 -top-10 w-[600px] max-w-none opacity-70" />
              <span className="relative font-serif text-6xl text-[#e3d6b4] md:text-7xl">
                {lead.number}
              </span>
              <p className="relative mt-4 inline-flex w-fit items-center gap-2 rounded-full border border-[#e3dcc8] bg-white px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8a7142]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#b8985a]" />
                {lead.role}
              </p>
              <h3 className="relative mt-5 font-serif text-3xl leading-tight md:text-4xl">
                {lead.name}
              </h3>
              <span className="relative mt-5 h-[2px] w-14 bg-[#b8985a] transition-all duration-500 group-hover:w-28" />
              <p className="relative mt-5 max-w-md text-[15px] leading-8 text-[#6d6a58]">
                {lead.detail}
              </p>
            </div>
          </div>
        </Reveal>

        {/* Crew */}
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {crew.map((m, i) => (
            <Reveal key={m.number} delay={i * 80}>
              <div className="group h-full rounded-3xl border border-[#ece6d6] bg-white p-3 transition duration-500 hover:-translate-y-1.5 hover:border-[#b8985a]/50 hover:shadow-[0_28px_50px_-28px_rgba(31,58,46,0.4)]">
                <div className="relative mx-auto aspect-[3/4] w-full max-w-[260px] overflow-hidden rounded-t-[999px] rounded-b-2xl sm:aspect-auto sm:h-72 sm:max-w-none">
                  <img
                    src={m.photo}
                    alt={`${m.name} - ${m.role}`}
                    loading="lazy"
                    className="h-full w-full object-cover object-[50%_20%] transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1f3a2e]/50 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                  <span className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-white/90 px-3 py-1 font-serif text-xs tracking-widest text-[#8a7142] backdrop-blur">
                    {m.number}
                  </span>
                </div>

                <div className="px-4 pb-5 pt-6 text-center">
                  <h3 className="font-serif text-xl">{m.name}</h3>
                  <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#b8985a]">
                    {m.role}
                  </p>
                  <span className="mx-auto mt-4 block h-[2px] w-8 bg-[#b8985a]/60 transition-all duration-500 group-hover:w-16" />
                  <p className="mt-4 text-sm leading-7 text-[#7d7968]">
                    {m.detail}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
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
            <div key={title} className="rounded-3xl bg-[#f3ecda] p-9">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8a7142]">
                {eyebrow}
              </p>
              <h3 className="mt-3 font-serif text-2xl">{title}</h3>
              <p className="mt-3 text-sm leading-8 text-[#6d6a58]">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ───────── FAQ ───────── */}
      <section className="mx-auto max-w-3xl px-6 pb-24 md:pb-32">
        <Reveal>
          <p className="text-center text-[11px] font-semibold uppercase tracking-[0.25em] text-[#8a7142]">
            Before You Write
          </p>
          <h2 className="mt-4 text-center font-serif text-3xl md:text-4xl">
            Questions travellers often ask
          </h2>

          <div className="mt-10 space-y-3">
            {faqs.map((f, i) => (
              <details
                key={f.q}
                open={i === 0}
                className="rounded-2xl border border-[#ece6d6] bg-white px-6 py-5"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-6">
                  <span className="font-serif text-lg">{f.q}</span>
                  <span className="faq-plus flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#eef3ea] text-lg text-[#2c5240] transition duration-300">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-8 text-[#6a7068]">{f.a}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ───────── CLOSING ───────── */}
      <section className="px-4 pb-16 md:px-8 md:pb-24">
        <Reveal>
          <div className="relative mx-auto grid max-w-7xl overflow-hidden rounded-[2.5rem] bg-[#f3ecda] md:grid-cols-2">
            <Contours className="-left-40 top-0 w-[700px] max-w-none" />
            <div className="relative p-10 md:p-16">
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#8a7142]">
                Nepal Is Waiting
              </p>
              <h2 className="mt-5 font-serif text-4xl leading-[1.1] md:text-5xl">
                Some journeys stay with you{" "}
                <span className="italic text-[#b8985a]">forever.</span>
              </h2>
              <p className="mt-5 max-w-md text-[15px] leading-8 text-[#5f6350]">
                Tell us where you would like to go. We would love to help you
                get there.
              </p>
              <a
                href="#inquiry"
                className="group mt-9 inline-flex items-center gap-3 rounded-full bg-[#1f3a2e] px-8 py-4 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-[#2c5240]"
              >
                Let's Plan Together
                <span className="transition group-hover:translate-x-1">→</span>
              </a>
            </div>
            <img
              src={mountainImage}
              alt="Himalayan mountains at sunset"
              className="h-72 w-full object-cover md:h-full"
            />
          </div>
        </Reveal>
      </section>
    </main>
  );
}

export default Contact;