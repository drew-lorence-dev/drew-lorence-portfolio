"use client";

import { useState } from "react";
import { Mail, Send, CheckCircle } from "lucide-react";
import { LinkedInIcon } from "@/components/Icons";

interface FormState {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Placeholder submit — wire up to a real endpoint (Resend, Formspree, etc.)
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-14 px-6 scroll-mt-20"
      style={{
        background:
          "linear-gradient(to bottom, #07070f 0%, #0a0a18 50%, #07070f 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="font-mono text-accent text-sm tracking-widest uppercase mb-3">
            04. Contact
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Say Hello
          </h2>
          <p className="mt-4 text-muted max-w-lg">
            Find me on LinkedIn or drop me a message here.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <div className="p-8 rounded-2xl border border-white/8 bg-surface">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-64 gap-4 text-center">
                <CheckCircle size={48} className="text-accent-3" />
                <h3 className="text-xl font-bold text-white">
                  Message sent!
                </h3>
                <p className="text-muted text-sm">
                  Thanks for reaching out. I&apos;ll get back to you soon.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: "", email: "", message: "" });
                  }}
                  className="text-sm font-mono text-accent hover:underline mt-2"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-mono text-muted uppercase tracking-widest mb-2"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-lg bg-page border border-white/10 text-slate-200 placeholder:text-muted/50 focus:outline-none focus:border-accent/50 transition-colors font-sans text-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-mono text-muted uppercase tracking-widest mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-lg bg-page border border-white/10 text-slate-200 placeholder:text-muted/50 focus:outline-none focus:border-accent/50 transition-colors font-sans text-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-mono text-muted uppercase tracking-widest mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="What's on your mind?"
                    className="w-full px-4 py-3 rounded-lg bg-page border border-white/10 text-slate-200 placeholder:text-muted/50 focus:outline-none focus:border-accent/50 transition-colors font-sans text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-accent text-page font-semibold font-mono text-sm hover:opacity-90 transition-all disabled:opacity-60"
                  style={{ boxShadow: "0 0 20px rgba(0,212,255,0.2)" }}
                >
                  {loading ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send size={15} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className="space-y-6">
            <p className="text-slate-400 leading-relaxed">
              Always happy to connect with other builders, share notes, or
              just say hi. This site is a living record of my work — check
              back as it grows.
            </p>

            <div className="space-y-4 pt-4">
              <a
                href="mailto:drew.lorence.dev@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl border border-white/8 bg-surface hover:border-accent/30 hover:bg-surface-2 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-accent/10 border border-accent/20 group-hover:bg-accent/20 transition-colors">
                  <Mail size={18} className="text-accent" />
                </div>
                <div>
                  <p className="text-xs font-mono text-muted uppercase tracking-wide">
                    Email
                  </p>
                  <p className="text-slate-200 text-sm">
                    drew.lorence.dev@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/drew-lorence-8aa99184/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-white/8 bg-surface hover:border-accent/30 hover:bg-surface-2 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-accent/10 border border-accent/20 group-hover:bg-accent/20 transition-colors">
                  <LinkedInIcon size={18} />
                </div>
                <div>
                  <p className="text-xs font-mono text-muted uppercase tracking-wide">
                    LinkedIn
                  </p>
                  <p className="text-slate-200 text-sm">
                    linkedin.com/in/drew-lorence
                  </p>
                </div>
              </a>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
