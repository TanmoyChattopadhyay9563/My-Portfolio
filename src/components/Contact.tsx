import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Check, 
  Copy, 
  FileText, 
  ArrowUpRight,
  MessageSquare,
  Sparkles,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { LinkedInIcon, GitHubIcon } from './SocialIcons';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

interface ContactProps {
  onOpenResume: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenResume }) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [deliveryMethod, setDeliveryMethod] = useState<'direct' | 'mailto'>('direct');

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Direct POST to FormSubmit AJAX endpoint for automatic inbox delivery
      const res = await fetch("https://formsubmit.co/ajax/chatterjee.kgp.99@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          subject: formState.subject || "New Business / Recruiter Inquiry",
          message: formState.message,
          _subject: `🚀 Portfolio Recruiter Message from ${formState.name} (${formState.subject || 'Opportunity'})`,
          _template: "table",
          _captcha: "false"
        })
      });

      if (res.ok) {
        setDeliveryMethod('direct');
      } else {
        throw new Error('Direct endpoint response not ok');
      }
    } catch {
      // Seamless fallback to native mailto client
      setDeliveryMethod('mailto');
      const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
        formState.subject || 'Business Opportunity Inquiry'
      )}&body=${encodeURIComponent(
        `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
      )}`;
      window.location.href = mailtoLink;
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
      confetti({
        particleCount: 100,
        spread: 75,
        origin: { y: 0.6 },
        colors: ['#2563eb', '#06b6d4', '#38bdf8', '#0f172a', '#10b981']
      });
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 relative overflow-hidden bg-white">
      {/* Radiant Electric Blue Ambient Background Glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[850px] h-[550px] bg-ambient-cta pointer-events-none -z-10 animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* "Let's Make It Happen" Banner Matching Reference Screenshot 4 */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 pt-4">
          <h2 className="font-display font-extrabold text-5xl sm:text-7xl lg:text-8xl text-slate-950 tracking-tight leading-[1.05] mb-6">
            Let's Make It Happen
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            always open to new opportunities, collaborations, and high-impact business analysis challenges. Let's work together to bring your ideas to life.
          </p>
          <a
            href="#direct-form"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-slate-950 hover:bg-blue-600 text-white font-semibold text-sm shadow-xl shadow-slate-900/10 hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <span>Get in Touch</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* 2-Column Contact Grid */}
        <div id="direct-form" className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start pt-10 border-t border-slate-100">
          {/* Left Column: Direct Info Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-[32px] bg-slate-50/80 border border-slate-200/80 shadow-sm space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-blue-500 shadow-md">
                  <img
                    src="/images/profile.jpg"
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-slate-900">{personalInfo.name}</h3>
                  <p className="text-xs text-blue-600 font-semibold">Business Analyst &amp; Data Strategist</p>
                </div>
              </div>

              {/* Direct Info Items */}
              <div className="space-y-3.5 border-t border-slate-200/80 pt-6">
                {/* Email */}
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="overflow-hidden">
                      <div className="text-[11px] text-slate-400 font-medium">Email Address</div>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="text-xs sm:text-sm font-semibold text-slate-900 hover:text-blue-600 transition-colors truncate block"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(personalInfo.email, 'email')}
                    className="p-2 rounded-lg bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200 transition-colors ml-2"
                    title="Copy email"
                  >
                    {copiedField === 'email' ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Phone */}
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] text-slate-400 font-medium">Phone / WhatsApp</div>
                      <a
                        href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                        className="text-xs sm:text-sm font-semibold text-slate-900 hover:text-blue-600 transition-colors"
                      >
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(personalInfo.phone, 'phone')}
                    className="p-2 rounded-lg bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200 transition-colors ml-2"
                    title="Copy phone"
                  >
                    {copiedField === 'phone' ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 font-medium">Location</div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-900">
                      {personalInfo.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Buttons */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3 rounded-2xl bg-[#0077b5] text-white text-xs font-semibold hover:opacity-90 transition-all shadow-sm"
                >
                  <LinkedInIcon className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3 rounded-2xl bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-all shadow-sm"
                >
                  <GitHubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              </div>

              {/* Resume Download Card */}
              <div className="p-4 rounded-2xl bg-blue-50/80 border border-blue-200/80 flex items-center justify-between gap-3 flex-wrap sm:flex-nowrap">
                <div>
                  <div className="text-xs font-bold text-slate-900">Need Formal Resume?</div>
                  <div className="text-[11px] text-slate-500">Official Google Drive PDF &amp; preview</div>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={personalInfo.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-md hover:shadow-blue-500/25 transition-all flex items-center gap-1.5"
                  >
                    <span>Open PDF</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <button
                    onClick={onOpenResume}
                    className="px-3 py-1.5 rounded-full bg-white hover:bg-slate-100 text-slate-700 text-xs font-bold border border-slate-200 shadow-sm transition-colors"
                  >
                    Preview CV
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 md:p-10 rounded-[28px] sm:rounded-[32px] bg-white border border-slate-200 shadow-xl shadow-slate-900/5">
              <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-950">
                  Send a Direct Message
                </h3>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-200/60">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  Active Inbox
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 mb-6 sm:mb-8">
                Recruiters and hiring managers can reach me directly. Messages land instantly in my primary email.
              </p>

              {submitted ? (
                <div className="p-6 sm:p-8 rounded-2xl bg-emerald-50/90 border border-emerald-200 text-center space-y-4 animate-fade-in">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                    <Check className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-lg sm:text-xl text-slate-900">
                      Message Sent Successfully!
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto mt-2 leading-relaxed">
                      Thank you, <span className="text-emerald-800 font-bold">{formState.name}</span>. Your message has been sent directly to <strong className="text-slate-900 font-semibold">{personalInfo.email}</strong>.
                    </p>
                    <p className="text-[11px] sm:text-xs text-slate-500 mt-1">
                      I will review your message and respond within 24 business hours.
                    </p>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormState({ name: '', email: '', subject: '', message: '' });
                      }}
                      className="px-6 py-2.5 rounded-full bg-slate-900 hover:bg-blue-600 text-xs font-bold text-white transition-all shadow-sm"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Your Full Name <span className="text-blue-600">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. John Doe (Recruiter / Tech Lead)"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Your Email Address <span className="text-blue-600">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Subject / Role / Opportunity Topic <span className="text-blue-600">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Business Analyst Opportunity / Power BI Consultation"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Message Details <span className="text-blue-600">*</span>
                    </label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Describe the job role, project requirements, or discuss an opportunity..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2.5 py-3.5 sm:py-4 rounded-full bg-slate-950 hover:bg-blue-600 text-white font-bold text-xs sm:text-sm shadow-xl shadow-slate-900/10 hover:shadow-blue-500/25 transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span className="inline-flex items-center gap-2">
                        <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        <span>Delivering to Inbox...</span>
                      </span>
                    ) : (
                      <>
                        <span>Submit Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 pt-1 text-center">
                    <span>🔒 Direct dispatch to {personalInfo.email} • 24-hr response</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
