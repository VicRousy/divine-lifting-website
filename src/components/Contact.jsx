import { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageCircle, CheckCircle } from "lucide-react";
import { getSupabase } from "../supabaseClient";
const schoolImg = "/images/default-hero.jpg";

const PAGE_LOAD = Date.now()

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    message: '',
    _honeypot: '',
    _t: PAGE_LOAD,
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const contactInfo = [
    { icon: MapPin, title: "Address", details: "13, Temidayo Street, New Era Estate, Parafa, Ikorodu, Lagos State", color: "#1e3a8a" },
    { icon: Phone, title: "Phone & WhatsApp", details: "07030136929", color: "#10b981" },
    { icon: Mail, title: "School Email", details: "divineliftingintlschl@gmail.com", color: "#f97316" },
    { icon: Mail, title: "Owner Email", details: "stellaokoko3@gmail.com", color: "#7c3aed" },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (formData._honeypot) return

    setSubmitting(true)
    setError('')

    try {
      const { error: insertError } = await getSupabase()
        .from('contact_messages')
        .insert([{
          name: formData.name,
          email: formData.email,
          phone: formData.phone || null,
          program: formData.program || null,
          message: formData.message
        }])

      if (insertError) throw insertError

      fetch('/api/contact-notify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      }).catch(() => {})

      setSubmitted(true)
      setFormData({ name: '', email: '', phone: '', program: '', message: '' })
    } catch (err) {
      console.error('Error submitting contact form:', err)
      setError('Failed to send message. Please try again or contact us directly.')
    } finally {
      setSubmitting(false)
    }
  }

  const inputClass = "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1e3a8a] transition-colors"

  return (
    <section className="relative">
      <div className="absolute inset-0 z-0" style={{ backgroundImage: `url(${schoolImg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
        <div className="absolute inset-0 bg-[#1f2937]/50"></div>
      </div>

      <div className="relative z-10 py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">Have questions? We'd love to hear from you. Reach out to us anytime.</p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {contactInfo.map((info, idx) => {
            const Icon = info.icon;
            return (
              <div key={idx} className="rounded-3xl shadow-lg p-6 text-center text-white" style={{ backgroundColor: info.color }}>
                <Icon size={24} className="mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-1">{info.title}</h3>
                <p className="text-sm opacity-90 break-words">{info.details}</p>
              </div>
            );
          })}
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-12 max-w-3xl mx-auto">
          {submitted ? (
            <div className="text-center py-8">
              <CheckCircle size={64} className="mx-auto text-green-500 mb-4" />
              <h3 className="text-2xl font-bold text-[#1f2937] mb-2">Message Sent!</h3>
              <p className="text-gray-600">Thank you for reaching out. We'll get back to you shortly.</p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 text-[#1e3a8a] font-semibold hover:underline"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div style={{ position: 'absolute', left: '-9999px' }} aria-hidden="true">
                <input type="text" name="_honeypot" value={formData._honeypot} onChange={handleChange} tabIndex={-1} autoComplete="off" />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-[#1f2937] mb-2">Full Name *</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required className={inputClass} placeholder="Your full name" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#1f2937] mb-2">Email Address *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required className={inputClass} placeholder="your@email.com" />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-[#1f2937] mb-2">Phone Number</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className={inputClass} placeholder="07030136929" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#1f2937] mb-2">Program Interest *</label>
                  <select name="program" value={formData.program} onChange={handleChange} required className={inputClass}>
                    <option value="">Select a program</option>
                    <option value="kindergarten">Kindergarten</option>
                    <option value="primary">Primary School</option>
                    <option value="secondary">Secondary School</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-bold text-[#1f2937] mb-2">Message *</label>
                <textarea name="message" value={formData.message} onChange={handleChange} required rows="5" className={`${inputClass} resize-none`} placeholder="Tell us about your inquiry..."></textarea>
              </div>

              {error && (
                <p className="text-red-600 text-sm text-center bg-red-50 p-3 rounded-lg">{error}</p>
              )}
              
              <button type="submit" disabled={submitting} className="w-full bg-[#1e3a8a] hover:bg-[#1e40af] disabled:bg-gray-400 text-white font-bold py-4 rounded-lg transition-all flex items-center justify-center gap-2 shadow-md">
                <Send size={20} /> {submitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/2347030136929"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:scale-110 transition-transform flex items-center gap-2"
      >
        <MessageCircle size={32} />
        <span className="font-bold hidden md:inline">Chat with us</span>
      </a>
    </section>
  );
}