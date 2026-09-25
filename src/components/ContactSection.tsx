import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  CheckCircle, 
  Linkedin, 
  Youtube, 
  Github, 
  Twitter, 
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { TARUN_PROFILE } from '../data/mockData.ts';

interface ContactSectionProps {
  onMessageSent: (name: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onMessageSent }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address.';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Please specify a subject.';
    if (!formData.message.trim() || formData.message.length < 10) {
      newErrors.message = 'Please write a message of at least 10 characters.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate real submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      onMessageSent(formData.name);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 600);
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info & Social Touchpoints */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-sky-400 mb-3">
                <span>09</span>
                <span className="text-slate-600">·</span>
                <span>GET IN TOUCH</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display mb-4">
                Let&apos;s Connect &amp; Learn Together
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Whether you have questions regarding specific course topics, want study advice, or wish to suggest new study notes, reach out anytime. Tarun reviews every academic inquiry.
              </p>
            </div>

            {/* Direct Email Card */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono text-slate-400 block mb-1">DIRECT INBOX</span>
                <a
                  href={`mailto:${TARUN_PROFILE.email}`}
                  className="text-base font-bold text-white hover:text-sky-300 transition-colors font-mono"
                >
                  {TARUN_PROFILE.email}
                </a>
                <p className="text-xs text-slate-400 mt-1">Average response time: &lt; 24 business hours</p>
              </div>
            </div>

            {/* Social Channels */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">
                Connect on Learning Platforms &amp; Socials
              </h3>
              <div className="flex items-center gap-3">
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-red-400 hover:border-red-400/40 hover:bg-red-500/10 flex items-center justify-center transition-all cursor-pointer"
                  title="YouTube Lectures"
                >
                  <Youtube className="w-5 h-5" />
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-sky-400 hover:border-sky-400/40 hover:bg-sky-500/10 flex items-center justify-center transition-all cursor-pointer"
                  title="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>

                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-600 hover:bg-slate-800 flex items-center justify-center transition-all cursor-pointer"
                  title="GitHub Projects & Code"
                >
                  <Github className="w-5 h-5" />
                </a>

                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-sky-400 hover:border-sky-400/40 hover:bg-sky-500/10 flex items-center justify-center transition-all cursor-pointer"
                  title="X (Twitter) Insights"
                >
                  <Twitter className="w-5 h-5" />
                </a>

                <a
                  href="#contact"
                  className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-indigo-400 hover:border-indigo-400/40 hover:bg-indigo-500/10 flex items-center justify-center transition-all cursor-pointer"
                  title="Student Study Group"
                >
                  <MessageSquare className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Mentorship Note */}
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 text-xs text-slate-400 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-sky-400 shrink-0" />
              <span>Are you preparing for an upcoming competitive exam? Mention your timeline in the message.</span>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-slate-900/90 border border-slate-800 rounded-3xl p-7 sm:p-9 shadow-2xl">
            {isSubmitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-14 h-14 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl flex items-center justify-center mx-auto text-emerald-400">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">Message Sent Successfully!</h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto">
                  Thank you for reaching out. Tarun has received your note and will review your question or request shortly.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider text-white bg-slate-800 hover:bg-slate-700 transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Send a Message to Tarun</h3>
                  <p className="text-xs text-slate-400">All fields are monitored directly.</p>
                </div>

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Your Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Maya Chen"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-950 border ${
                        errors.name ? 'border-rose-500' : 'border-slate-800'
                      } text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors`}
                    />
                    {errors.name && <p className="text-xs text-rose-400 mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Email Address <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. maya@example.com"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-950 border ${
                        errors.email ? 'border-rose-500' : 'border-slate-800'
                      } text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors`}
                    />
                    {errors.email && <p className="text-xs text-rose-400 mt-1">{errors.email}</p>}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                    Subject / Goal <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Calculus Doubt / Exam Preparation Roadmap"
                    className={`w-full px-4 py-3 rounded-xl bg-slate-950 border ${
                      errors.subject ? 'border-rose-500' : 'border-slate-800'
                    } text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors`}
                  />
                  {errors.subject && <p className="text-xs text-rose-400 mt-1">{errors.subject}</p>}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                    Message <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your study questions, target exams, or topic feedback..."
                    className={`w-full px-4 py-3 rounded-xl bg-slate-950 border ${
                      errors.message ? 'border-rose-500' : 'border-slate-800'
                    } text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors`}
                  />
                  {errors.message && <p className="text-xs text-rose-400 mt-1">{errors.message}</p>}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl text-sm font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:from-sky-400 hover:via-blue-500 hover:to-indigo-500 shadow-lg shadow-sky-500/25 transition-all duration-200 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Sending message...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
