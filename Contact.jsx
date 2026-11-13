import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import groupImage from "../../photos/group.jpeg";
import mountainImage from "../../photos/mountainduringsunset.jpeg";

import sagarPhoto from "../../photos/team/sagar.jpeg";
import ashwinPhoto from "../../photos/team/ashwin.jpeg";
import prakashPhoto from "../../photos/team/prakash.jpeg";
import danapatiPhoto from "../../photos/team/danapati.jpg";
import arjun from "../../photos/team/arjun.jpeg";
const team = [
  {
    number: "01",
    name: "Sagar Mani Paudel",
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
    name: "Prakash Paudel",
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
    name: "Arzoon Timilsina",
    role: "Trekking Counsellor",
    detail: "Trail support & Himalayan exploration",
  },
];

const faqs = [
  {
    q: "When is the best time to trek in Nepal?",
    a: "Autumn (October–November) and spring (March–May) are the most popular seasons, with clear skies and generally favourable trail conditions. Tell us your dates and we'll advise what works best for your route.",
  },
  {
    q: "Do I need previous trekking experience?",
    a: "Not necessarily. We offer routes for first-time walkers as well as experienced trekkers. Share your fitness level and expectations and we'll suggest a suitable journey.",
  },
  {
    q: "Can you design a custom journey?",
    a: "Yes. Choose 'Custom Plan' in the form and describe what you have in mind. We'll help shape an itinerary around your interests, dates and preferences.",
  },
];

const steps = [
  ["Share your idea", "Tell us your plans and dates in the form."],
  ["We reply personally", "Someone from our team will get back to you."],
  ["Shape the journey", "Together we'll refine the route and details."],
];

const initials = (name) =>
  name
    .split(" ")
    .map((word) => word[0])
    .slice(0, 2)
    .join("");

function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}

function ContactIcon({ type }) {
  const paths = {
    location: (
      <>
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    email: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2.5" />
        <path d="m4 7 8 6 8-6" />
      </>
    ),
    time: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
  };

  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[type]}
    </svg>
  );
}

export default function Contact() {
  const formRef = useRef(null);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
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

  const inputClass =
    "w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 hover:border-green-300 focus:border-green-600 focus:ring-4 focus:ring-green-100";

  const labelClass = "mb-2 block text-sm font-semibold text-gray-700";

  return (
    <main className="overflow-hidden bg-white text-gray-800">
      {/* HERO */}
      <section className="bg-[#F4F8F3]">
        <div className="mx-auto grid max-w-7xl items-center gap-9 px-5 py-12 md:px-8 md:py-16 lg:grid-cols-[1fr_0.95fr] lg:gap-16">
          <div className="max-w-2xl">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-green-800 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-green-600" />
              Contact Trail Trantra
            </p>

            <h1 className="text-4xl font-bold leading-tight text-green-950 md:text-5xl lg:text-[3.5rem]">
              Let's plan your next Himalayan adventure.
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-gray-600 md:text-lg">
              Have a question or a trek in mind? Talk to our local team in
              Pokhara. We'll help you find the right route and plan the details
              of your journey.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#inquiry"
                className="inline-flex items-center justify-center rounded-full bg-green-700 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-green-800"
              >
                Send an Inquiry <span className="ml-2">→</span>
              </a>
              <a
                href="#people"
                className="inline-flex items-center justify-center rounded-full border border-green-200 bg-white px-7 py-3.5 text-sm font-semibold text-green-800 transition hover:bg-green-50"
              >
                Meet Our Team
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600">
              <span className="flex items-center gap-2">
                <span className="text-green-700">✓</span> Local knowledge
              </span>
              <span className="flex items-center gap-2">
                <span className="text-green-700">✓</span> Personal planning
              </span>
            </div>
          </div>

          <div className="relative">
            <img
              src={mountainImage}
              alt="Himalayan mountain landscape at sunset"
              className="h-[280px] w-full rounded-2xl object-cover shadow-md md:h-[410px]"
            />
            <div className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-xl border border-green-100 bg-white p-3 shadow-lg md:-left-5 md:p-4">
              <img
                src={groupImage}
                alt="Himalayan Treks team"
                className="h-12 w-12 rounded-lg object-cover"
              />
              <div>
                <p className="text-sm font-bold text-green-900">
                  Your local trekking team
                </p>
                <p className="mt-0.5 text-xs text-gray-500">
                  Pokhara, Nepal
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT DETAILS */}
      <section className="mx-auto max-w-7xl px-5 pt-16 md:px-8 md:pt-20">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              type: "location",
              label: "Visit Us",
              title: "Lakeside, Pokhara",
              description: "Gandaki Province, Nepal",
            },
            {
              type: "email",
              label: "Email Us",
              title: "trailtantra@gmail.com",
              description: "We welcome your questions",
              href: "mailto:trailtantra@gmail.com",
            },
            {
              type: "time",
              label: "Office Hours",
              title: "Sunday – Friday",
              description: "9:00 AM – 6:00 PM Nepal Time",
            },
          ].map((item, index) => {
            const Wrapper = item.href ? "a" : "div";

            return (
              <Reveal key={item.label} delay={index * 70}>
                <Wrapper
                  href={item.href}
                  className="flex h-full items-start gap-4 rounded-2xl border border-green-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-700">
                    <ContactIcon type={item.type} />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-green-700">
                      {item.label}
                    </p>
                    <p className="mt-2 text-lg font-bold text-gray-900">
                      {item.title}
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      {item.description}
                    </p>
                  </div>
                </Wrapper>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* INQUIRY */}
      <section id="inquiry" className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl rounded-3xl bg-[#F4F8F3] p-5 md:p-10 lg:p-12">
          <div className="grid gap-9 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <Reveal>
                <p className="text-xs font-bold uppercase tracking-wider text-green-700">
                  Start Planning
                </p>
                <h2 className="mt-3 text-3xl font-bold leading-tight text-green-950 md:text-4xl">
                  Tell us about the journey you're imagining.
                </h2>
                <p className="mt-4 max-w-md text-sm leading-7 text-gray-600 md:text-base">
                  Share a few details and our team will get back to you to
                  discuss destinations, dates and the kind of experience
                  you're looking for.
                </p>
              </Reveal>

              <Reveal delay={100}>
                <ol className="mt-9 space-y-6">
                  {steps.map(([title, description], index) => (
                    <li key={title} className="flex gap-4">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-700 text-sm font-bold text-white">
                        {index + 1}
                      </span>
                      <div>
                        <p className="font-bold text-green-950">{title}</p>
                        <p className="mt-1 text-sm leading-6 text-gray-600">
                          {description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </Reveal>

              <div className="mt-9 hidden overflow-hidden rounded-2xl md:block">
                <img
                  src={groupImage}
                  alt="Himalayan Treks team"
                  className="h-48 w-full object-cover"
                />
              </div>
            </div>

            <Reveal delay={100}>
              <div className="rounded-2xl bg-white p-5 shadow-sm md:p-9">
                <div className="mb-7 border-b border-gray-100 pb-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-green-700">
                    Travel Enquiry
                  </p>
                  <h3 className="mt-2 text-2xl font-bold text-green-950 md:text-3xl">
                    Plan Your Journey
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Fields marked with * are required.
                  </p>
                </div>

                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className={labelClass}>Full Name *</label>
                      <input
                        name="name"
                        type="text"
                        required
                        placeholder="Your name"
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label className={labelClass}>Email Address *</label>
                      <input
                        name="email"
                        type="email"
                        required
                        placeholder="Your email address"
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label className={labelClass}>Phone Number</label>
                      <input
                        name="phone"
                        type="tel"
                        placeholder="+977"
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label className={labelClass}>Interested In *</label>
                      <select
                        name="service"
                        required
                        defaultValue=""
                        className={inputClass}
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
                      <label className={labelClass}>Travel Date</label>
                      <input
                        name="travel_date"
                        type="date"
                        min={new Date().toISOString().split("T")[0]}
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label className={labelClass}>
                        Number of Travellers
                      </label>
                      <input
                        name="group_size"
                        type="number"
                        min="1"
                        placeholder="e.g. 2"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>Your Message *</label>
                    <textarea
                      name="message"
                      rows="4"
                      required
                      placeholder="Tell us about your plans, preferred destinations or anything you would like us to know..."
                      className={`${inputClass} resize-y`}
                    />
                  </div>

                  {status === "success" && (
                    <div
                      role="status"
                      className="rounded-xl border border-green-200 bg-green-50 p-4 text-sm leading-6 text-green-900"
                    >
                      <p className="font-bold">
                        ✓ Your inquiry has been sent successfully!
                      </p>
                      <p className="mt-1">
                        Thank you for reaching out. Our team will get back to
                        you shortly.
                      </p>
                    </div>
                  )}

                  {status === "error" && (
                    <div
                      role="alert"
                      className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm leading-6 text-red-700"
                    >
                      Something went wrong while sending your inquiry. Please
                      try again or contact us by email.
                    </div>
                  )}

                  <div className="flex flex-col items-start justify-between gap-4 border-t border-gray-100 pt-5 sm:flex-row sm:items-center">
                    <p className="max-w-xs text-xs leading-5 text-gray-500">
                      Your information will be used only to respond to your
                      travel enquiry.
                    </p>
                    <button
                      type="submit"
                      disabled={sending}
                      className="w-full rounded-full bg-green-700 px-8 py-3.5 text-sm font-bold text-white transition hover:bg-green-800 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                    >
                      {sending ? "Sending..." : "Send Your Inquiry"}
                      {!sending && <span className="ml-2">→</span>}
                    </button>
                  </div>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section
        id="people"
        className="mx-auto max-w-7xl px-5 pb-16 md:px-8 md:pb-24"
      >
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-wider text-green-700">
              The People Behind the Journey
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-green-950 md:text-4xl">
              Meet the team behind your adventure.
            </h2>
            <p className="mt-4 text-sm leading-7 text-gray-600 md:text-base">
              From your first enquiry to the final steps of your journey, our
              team works together to make your experience welcoming,
              thoughtful and memorable.
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="group relative mt-10 overflow-hidden rounded-2xl">
            <img
              src={groupImage}
              alt="Himalayan Treks team in Nepal"
              className="h-56 w-full object-cover transition duration-700 group-hover:scale-[1.02] md:h-[380px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-green-950/50 via-transparent to-transparent" />
            <p className="absolute bottom-5 left-5 text-sm font-semibold text-white md:bottom-7 md:left-7">
              Our team in Nepal
            </p>
          </div>
        </Reveal>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {team.map((member, index) => (
            <Reveal key={member.number} delay={index * 60}>
              <div className="h-full rounded-2xl border border-green-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-green-50 text-base font-bold text-green-800">
                    {initials(member.name)}
                  </span>
                  <span className="text-xs font-bold tracking-wider text-green-600">
                    {member.number}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-bold leading-snug text-gray-900">
                  {member.name}
                </h3>
                <p className="mt-2 text-xs font-bold uppercase tracking-wider text-green-700">
                  {member.role}
                </p>
                <p className="mt-3 text-sm leading-6 text-gray-500">
                  {member.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
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
          ].map(([eyebrow, title, description]) => (
            <div key={title} className="rounded-2xl bg-[#F4F8F3] p-7 md:p-8">
              <p className="text-xs font-bold uppercase tracking-wider text-green-700">
                {eyebrow}
              </p>
              <h3 className="mt-3 text-xl font-bold text-green-950">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-600">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-5 pb-16 md:px-8 md:pb-24">
        <Reveal>
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-wider text-green-700">
              Before You Write
            </p>
            <h2 className="mt-3 text-3xl font-bold text-green-950 md:text-4xl">
              Questions travellers often ask
            </h2>
          </div>

          <div className="mt-8 space-y-3">
            {faqs.map((faq, index) => (
              <details
                key={faq.q}
                open={index === 0}
                className="group rounded-2xl border border-green-100 bg-white px-5 py-4 shadow-sm"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-semibold text-gray-800 [&::-webkit-details-marker]:hidden">
                  <span>{faq.q}</span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-50 text-lg text-green-700 transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 border-t border-gray-100 pt-4 text-sm leading-7 text-gray-600">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </Reveal>
      </section>

      {/* FINAL CTA */}
      <section className="px-5 pb-12 md:px-8 md:pb-20">
        <Reveal>
          <div className="mx-auto grid max-w-7xl overflow-hidden rounded-3xl bg-[#F4F8F3] md:grid-cols-2">
            <div className="flex flex-col items-start justify-center p-7 md:p-12 lg:p-16">
              <p className="text-xs font-bold uppercase tracking-wider text-green-700">
                Nepal is waiting
              </p>
              <h2 className="mt-3 text-3xl font-bold leading-tight text-green-950 md:text-4xl">
                Let's make your next journey memorable.
              </h2>
              <p className="mt-4 max-w-md text-sm leading-7 text-gray-600 md:text-base">
                Tell us where you would like to go. We'd love to help you plan
                your Himalayan adventure.
              </p>
              <a
                href="#inquiry"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-green-700 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-green-800"
              >
                Let's Plan Together <span>→</span>
              </a>
            </div>
            <img
              src={mountainImage}
              alt="Himalayan mountains at sunset"
              className="h-64 w-full object-cover md:h-full md:min-h-[360px]"
            />
          </div>
        </Reveal>
      </section>
    </main>
  );
}
