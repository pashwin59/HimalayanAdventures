
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import mountainImage from "../../photos/mountainduringsunset.jpeg";
import groupImage from "../../photos/group.jpeg";

export default function PlanYourTrek() {
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
    <main className="overflow-hidden bg-white text-[#1f3a2e]">

      {/* HERO */}
      <section className="relative bg-[#f3f7f3] px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#b8985a]">
              Your Himalayan Experience
            </p>

            <h1 className="mt-6 text-5xl font-bold leading-tight md:text-6xl">
              Let's Plan Your
              <span className="block text-[#28734d]">
                Next Adventure.
              </span>
            </h1>

            <p className="mt-7 max-w-lg text-base leading-8 text-[#647268]">
              Whether you dream of trekking through the Himalayas,
              exploring Nepal's beautiful landscapes, cycling mountain
              trails or camping under the stars, we are here to help.
            </p>

            <a
              href="#inquiry"
              className="mt-9 inline-block rounded-full bg-[#194536] px-8 py-4 font-semibold text-white transition hover:bg-[#28734d]"
            >
              Start Planning →
            </a>
          </div>

          <div className="relative">
            <img
              src={mountainImage}
              alt="Himalayan mountain landscape"
              className="h-[350px] w-full rounded-[2rem] object-cover shadow-xl md:h-[480px]"
            />

            <div className="absolute -bottom-7 -left-5 hidden w-48 overflow-hidden rounded-2xl border-4 border-white shadow-xl md:block">
              <img
                src={groupImage}
                alt="Our trekking team"
                className="h-36 w-full object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* INQUIRY FORM */}
      <section id="inquiry" className="scroll-mt-24 px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-[0.75fr_1.25fr]">

          {/* LEFT CONTENT */}
          <div className="pt-5">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b8985a]">
              Travel Enquiry
            </p>

            <h2 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">
              Tell Us About Your
              <span className="block text-[#28734d]">
                Dream Journey.
              </span>
            </h2>

            <p className="mt-6 max-w-md leading-8 text-[#68766c]">
              Share your travel plans with us. Our team will get in
              touch to discuss your preferences and help create
              an unforgettable experience in Nepal.
            </p>

            <div className="mt-10 space-y-7">
              {[
                ["01", "Share your plans", "Tell us your preferred destination and travel dates."],
                ["02", "We contact you", "Our team will review your inquiry and respond."],
                ["03", "Plan your adventure", "Together, we will shape your journey."]
              ].map(([number, title, description]) => (
                <div key={number} className="flex gap-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e9f0e5] font-semibold text-[#28734d]">
                    {number}
                  </span>

                  <div>
                    <h3 className="font-bold">{title}</h3>
                    <p className="mt-1 text-sm leading-6 text-[#788278]">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FORM */}
          <div className="rounded-[2rem] border border-[#ece9df] bg-white p-6 shadow-[0_25px_70px_-35px_rgba(31,58,46,0.3)] md:p-10">

            <div className="mb-9">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b8985a]">
                Let's Get Started
              </p>

              <h3 className="mt-3 text-3xl font-bold">
                Plan Your Journey
              </h3>

              <p className="mt-3 text-sm text-[#7d7968]">
                Fill in the details below and we'll get back to you.
              </p>
            </div>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-6"
            >

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
                  rows="5"
                  required
                  placeholder="Tell us about your preferred destination, travel plans, requirements or anything else..."
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
                    Thank you for reaching out. We'll get back to you shortly.
                  </p>
                </div>
              )}

              {status === "error" && (
                <div
                  role="alert"
                  className="rounded-2xl border border-red-200 bg-red-50 p-5 text-sm leading-7 text-red-700"
                >
                  Something went wrong while sending your inquiry.
                  Please try again or contact us by email.
                </div>
              )}

              <div className="flex flex-col items-start justify-between gap-5 pt-3 sm:flex-row sm:items-center">
                <p className="max-w-xs text-xs leading-6 text-[#8a8672]">
                  Your information will only be used to respond to your travel enquiry.
                </p>

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full rounded-full bg-[#194536] px-9 py-4 font-semibold text-white transition hover:bg-[#28734d] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                >
                  {sending ? "Sending..." : "Send Your Inquiry →"}
                </button>
              </div>

            </form>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-[#194536] px-6 py-16 text-center text-white">
        <h2 className="text-3xl font-bold md:text-4xl">
          Your Nepal Adventure Starts Here.
        </h2>
        <p className="mx-auto mt-4 max-w-xl leading-7 text-white/75">
          Have questions? Send us your inquiry and let's make your
          Himalayan journey memorable.
        </p>
      </section>

    </main>
  );
}
