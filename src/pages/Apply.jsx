import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Send, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { supabase } from '../supabaseClient'
import schoolImg from '../assets/school3.jpg.jpeg'

const PAGE_LOAD = Date.now()

export default function Apply() {
  const [formData, setFormData] = useState({
    student_first_name: '',
    student_last_name: '',
    student_dob: '',
    student_gender: '',
    class_applying_for: '',
    previous_school: '',
    father_name: '',
    father_phone: '',
    father_email: '',
    mother_name: '',
    mother_phone: '',
    mother_email: '',
    address: '',
    emergency_contact_name: '',
    emergency_contact_phone: '',
    medical_notes: '',
    how_heard: '',
    siblings_enrolled: false,
    _honeypot: '',
    _t: PAGE_LOAD,
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [appNumber, setAppNumber] = useState('')
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (formData._honeypot) return

    setSubmitting(true)
    setError('')

    try {
      const { data: seqData, error: seqError } = await supabase.rpc('next_application_number')
      let application_number
      if (seqError || !seqData) {
        const year = new Date().getFullYear()
        const random = Math.floor(1000 + Math.random() * 9000)
        application_number = `APP-${year}-${random}`
      } else {
        application_number = `APP-${new Date().getFullYear()}-${String(seqData).padStart(4, '0')}`
      }

      const { error: insertError } = await supabase
        .from('applications')
        .insert([{ ...formData, application_number }])

      if (insertError) throw insertError

      fetch('/api/application-notify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, application_number }),
      }).catch(() => {})

      setAppNumber(application_number)
      setSubmitted(true)
    } catch (err) {
      console.error('Error submitting application:', err)
      setError('Failed to submit application. Please try again or contact us directly.')
    } finally {
      setSubmitting(false)
    }
  }

  const inputClass = "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all text-sm"
  const labelClass = "block text-sm font-bold text-primary mb-1.5"
  const sectionClass = "bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100"

  return (
    <div className="bg-gray-50 min-h-screen">
      <Helmet>
        <title>Apply for Admission</title>
        <meta name="description" content="Apply online for admission to Divine Lifting International School. Submit your application for Nursery, Primary, or Secondary School." />
      </Helmet>

      <section className="relative py-32 flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={schoolImg} alt="School" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/80"></div>
        </div>
        <div className="relative z-10 px-4">
          <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Apply for Admission
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-lg text-gray-300 max-w-xl mx-auto">
            Complete the form below to begin your child's journey at Divine Lifting International School
          </motion.p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20 pb-20">
        <Link to="/admissions" className="inline-flex items-center gap-2 text-primary font-bold mb-6 hover:text-secondary transition-colors bg-white px-4 py-2 rounded-lg shadow-sm">
          <ArrowLeft size={20} /> Back to Admissions
        </Link>

        {submitted ? (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-white rounded-3xl shadow-lg p-8 md:p-16 text-center border border-gray-100">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={48} className="text-green-600" />
            </div>
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">Application Submitted!</h2>
            <p className="text-gray-600 mb-2 text-lg">Your application number is:</p>
            <p className="text-3xl font-bold text-secondary mb-6 bg-secondary/5 px-6 py-3 rounded-xl inline-block border border-secondary/20">{appNumber}</p>
            <p className="text-gray-500 mb-8 max-w-md mx-auto">Please save this number. We will contact you within 2 weeks regarding the next steps.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/" className="bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-primary/90 transition-colors">Back to Home</Link>
              <Link to="/admissions" className="bg-secondary text-white px-8 py-3 rounded-lg font-bold hover:bg-secondary/90 transition-colors">Admissions Info</Link>
            </div>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            <div style={{ position: 'absolute', left: '-9999px' }} aria-hidden="true">
              <input type="text" name="_honeypot" value={formData._honeypot} onChange={handleChange} tabIndex={-1} autoComplete="off" />
            </div>
            <div className={sectionClass}>
              <h3 className="text-xl font-serif font-bold text-primary mb-6 pb-4 border-b border-gray-100">Student Information</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className={labelClass}>First Name *</label>
                  <input type="text" name="student_first_name" value={formData.student_first_name} onChange={handleChange} required className={inputClass} placeholder="Child's first name" />
                </div>
                <div>
                  <label className={labelClass}>Last Name *</label>
                  <input type="text" name="student_last_name" value={formData.student_last_name} onChange={handleChange} required className={inputClass} placeholder="Child's last name" />
                </div>
                <div>
                  <label className={labelClass}>Date of Birth *</label>
                  <input type="date" name="student_dob" value={formData.student_dob} onChange={handleChange} required className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Gender *</label>
                  <select name="student_gender" value={formData.student_gender} onChange={handleChange} required className={inputClass}>
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Class Applying For *</label>
                  <select name="class_applying_for" value={formData.class_applying_for} onChange={handleChange} required className={inputClass}>
                    <option value="">Select class</option>
                    <option value="kindergarten">Kindergarten</option>
                    <option value="primary">Primary School</option>
                    <option value="secondary">Secondary School</option>
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Previous School</label>
                  <input type="text" name="previous_school" value={formData.previous_school} onChange={handleChange} className={inputClass} placeholder="Name of previous school (if any)" />
                </div>
              </div>
            </div>

            <div className={sectionClass}>
              <h3 className="text-xl font-serif font-bold text-primary mb-6 pb-4 border-b border-gray-100">Parent / Guardian Information</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <h4 className="text-sm font-bold text-primary/70 uppercase tracking-wider mb-4">Father's Details</h4>
                </div>
                <div>
                  <label className={labelClass}>Father's Full Name</label>
                  <input type="text" name="father_name" value={formData.father_name} onChange={handleChange} className={inputClass} placeholder="Father's full name" />
                </div>
                <div>
                  <label className={labelClass}>Father's Phone</label>
                  <input type="tel" name="father_phone" value={formData.father_phone} onChange={handleChange} className={inputClass} placeholder="Phone number" />
                </div>
                <div>
                  <label className={labelClass}>Father's Email</label>
                  <input type="email" name="father_email" value={formData.father_email} onChange={handleChange} className={inputClass} placeholder="Email address" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mt-6 pt-6 border-t border-gray-100">
                <div className="md:col-span-2">
                  <h4 className="text-sm font-bold text-primary/70 uppercase tracking-wider mb-4">Mother's Details</h4>
                </div>
                <div>
                  <label className={labelClass}>Mother's Full Name</label>
                  <input type="text" name="mother_name" value={formData.mother_name} onChange={handleChange} className={inputClass} placeholder="Mother's full name" />
                </div>
                <div>
                  <label className={labelClass}>Mother's Phone</label>
                  <input type="tel" name="mother_phone" value={formData.mother_phone} onChange={handleChange} className={inputClass} placeholder="Phone number" />
                </div>
                <div>
                  <label className={labelClass}>Mother's Email</label>
                  <input type="email" name="mother_email" value={formData.mother_email} onChange={handleChange} className={inputClass} placeholder="Email address" />
                </div>
              </div>
            </div>

            <div className={sectionClass}>
              <h3 className="text-xl font-serif font-bold text-primary mb-6 pb-4 border-b border-gray-100">Contact & Additional Information</h3>
              <div className="space-y-6">
                <div>
                  <label className={labelClass}>Home Address *</label>
                  <textarea name="address" value={formData.address} onChange={handleChange} required rows="2" className={inputClass} placeholder="Full home address"></textarea>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className={labelClass}>Emergency Contact Name *</label>
                    <input type="text" name="emergency_contact_name" value={formData.emergency_contact_name} onChange={handleChange} required className={inputClass} placeholder="Emergency contact person" />
                  </div>
                  <div>
                    <label className={labelClass}>Emergency Contact Phone *</label>
                    <input type="tel" name="emergency_contact_phone" value={formData.emergency_contact_phone} onChange={handleChange} required className={inputClass} placeholder="Emergency phone number" />
                  </div>
                </div>
                <div>
                  <label className={labelClass}>Medical Notes (allergies, conditions, etc.)</label>
                  <textarea name="medical_notes" value={formData.medical_notes} onChange={handleChange} rows="2" className={inputClass} placeholder="Any medical information we should know..."></textarea>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className={labelClass}>How did you hear about us?</label>
                    <select name="how_heard" value={formData.how_heard} onChange={handleChange} className={inputClass}>
                      <option value="">Select an option</option>
                      <option value="social_media">Social Media</option>
                      <option value="referral">Referral from a friend</option>
                      <option value="search_engine">Search Engine (Google, etc.)</option>
                      <option value="school_visit">School Visit</option>
                      <option value="advertisement">Advertisement</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="flex items-center pt-7">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" name="siblings_enrolled" checked={formData.siblings_enrolled} onChange={handleChange} className="w-5 h-5 rounded border-gray-300 text-secondary focus:ring-secondary" />
                      <span className="text-sm text-primary font-medium">I have other children enrolled at this school</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-xl text-sm font-medium">{error}</div>
            )}

            <button type="submit" disabled={submitting} className="w-full bg-secondary hover:bg-secondary/90 disabled:bg-gray-300 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-md text-lg">
              <Send size={20} /> {submitting ? 'Submitting Application...' : 'Submit Application'}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
