import React, { useState } from 'react';
import { Building2, GraduationCap, Clock, Shield, Users, CheckCircle } from 'lucide-react';
import { sendEmail, generateCommercialEmailTemplate, generateStudentEmailTemplate } from '../utils/emailService';

const Services = () => {
  const [commercialForm, setCommercialForm] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    mobile: '',
    pickupLocation: '',
    officeAddress: '',
    officeStartTime: '',
    officeEndTime: ''
  });

  const [studentForm, setStudentForm] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    mobile: '',
    schoolName: '',
    schoolStartTime: '',
    schoolEndTime: '',
    pickupLocation: ''
  });

  const [isSubmitting, setIsSubmitting] = useState({
    commercial: false,
    student: false
  });

  const handleCommercialSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting({ ...isSubmitting, commercial: true });

    try {
      const emailHtml = generateCommercialEmailTemplate(commercialForm);
      const success = await sendEmail({
        from: commercialForm.email, // ✅ Using sender's email
        to: 'busbees1@gmail.com', // ✅ Fixed: Changed from info@busbees.com
        subject: 'New Commercial Transportation Inquiry',
        html: emailHtml
      });

      if (success) {
        alert('Commercial inquiry submitted successfully! We will contact you shortly.');
        setCommercialForm({ 
          firstName: '', 
          middleName: '', 
          lastName: '', 
          email: '', 
          mobile: '', 
          pickupLocation: '', 
          officeAddress: '', 
          officeStartTime: '', 
          officeEndTime: '' 
        });
      } else {
        alert('Failed to submit inquiry. Please try again or contact us directly.');
      }
    } catch (error) {
      console.error('Error submitting commercial form:', error);
      alert('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting({ ...isSubmitting, commercial: false });
    }
  };

  const handleStudentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting({ ...isSubmitting, student: true });

    try {
      const emailHtml = generateStudentEmailTemplate(studentForm);
      const success = await sendEmail({
        from: studentForm.email, // ✅ Using sender's email
        to: 'busbees1@gmail.com', // ✅ Fixed: Changed from info@busbees.com
        subject: 'New School Bus Service Inquiry',
        html: emailHtml
      });

      if (success) {
        alert('School bus inquiry submitted successfully! We will contact you shortly.');
        setStudentForm({ 
          firstName: '', 
          middleName: '', 
          lastName: '', 
          email: '', 
          mobile: '', 
          schoolName: '', 
          schoolStartTime: '', 
          schoolEndTime: '', 
          pickupLocation: '' 
        });
      } else {
        alert('Failed to submit inquiry. Please try again or contact us directly.');
      }
    } catch (error) {
      console.error('Error submitting student form:', error);
      alert('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting({ ...isSubmitting, student: false });
    }
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Our Services</h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Comprehensive transportation solutions tailored for your specific needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Commercial Transportation */}
          <div className="bg-black p-8 rounded-3xl text-white">
            <div className="flex items-center mb-6">
              <Building2 className="h-12 w-12 text-white mr-4" />
              <h3 className="text-3xl font-bold">Commercial Transportation</h3>
            </div>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <Clock className="h-6 w-6 text-white mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-semibold mb-2">Shortest Travel Time</h4>
                  <p className="text-white">Optimized routes and real-time traffic monitoring for fastest commutes</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-white mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-semibold mb-2">Clean & Premium Buses</h4>
                  <p className="text-white">Luxury interiors with air conditioning and comfortable seating</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Shield className="h-6 w-6 text-white mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-semibold mb-2">Verified Drivers</h4>
                  <p className="text-white">Professional, licensed, and background-verified drivers</p>
                </div>
              </div>
            </div>

            <form onSubmit={handleCommercialSubmit} className="space-y-4">
              <h4 className="text-xl font-semibold mb-4">Get Commercial Quote</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  value={commercialForm.firstName}
                  onChange={(e) => setCommercialForm({...commercialForm, firstName: e.target.value})}
                  className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/70 focus:outline-none focus:border-white"
                  required
                />
                <input
                  type="text"
                  placeholder="Middle Name (Optional)"
                  value={commercialForm.middleName}
                  onChange={(e) => setCommercialForm({...commercialForm, middleName: e.target.value})}
                  className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/70 focus:outline-none focus:border-white"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Last Name"
                  value={commercialForm.lastName}
                  onChange={(e) => setCommercialForm({...commercialForm, lastName: e.target.value})}
                  className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/70 focus:outline-none focus:border-white"
                  required
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={commercialForm.email}
                  onChange={(e) => setCommercialForm({...commercialForm, email: e.target.value})}
                  className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/70 focus:outline-none focus:border-white"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="tel"
                  placeholder="Mobile Number"
                  value={commercialForm.mobile}
                  onChange={(e) => setCommercialForm({...commercialForm, mobile: e.target.value})}
                  className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/70 focus:outline-none focus:border-white"
                  required
                />
                <input
                  type="text"
                  placeholder="Pickup Location"
                  value={commercialForm.pickupLocation}
                  onChange={(e) => setCommercialForm({...commercialForm, pickupLocation: e.target.value})}
                  className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/70 focus:outline-none focus:border-white"
                  required
                />
              </div>

              <input
                type="text"
                placeholder="Office Address"
                value={commercialForm.officeAddress}
                onChange={(e) => setCommercialForm({...commercialForm, officeAddress: e.target.value})}
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/70 focus:outline-none focus:border-white"
                required
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="time"
                  placeholder="Office Start Time"
                  value={commercialForm.officeStartTime}
                  onChange={(e) => setCommercialForm({...commercialForm, officeStartTime: e.target.value})}
                  className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/70 focus:outline-none focus:border-white"
                  required
                />
                <input
                  type="time"
                  placeholder="Office End Time"
                  value={commercialForm.officeEndTime}
                  onChange={(e) => setCommercialForm({...commercialForm, officeEndTime: e.target.value})}
                  className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/70 focus:outline-none focus:border-white"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting.commercial}
                className="w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-black hover:text-white border-2 border-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting.commercial ? 'Submitting...' : 'Request Commercial Quote'}
              </button>
            </form>
          </div>

          {/* Student Transportation */}
          <div className="bg-white border-2 border-black p-8 rounded-3xl">
            <div className="flex items-center mb-6">
              <GraduationCap className="h-12 w-12 text-black mr-4" />
              <h3 className="text-3xl font-bold text-black">School Bus Services</h3>
            </div>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <Shield className="h-6 w-6 text-black mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-black">Verified Drivers</h4>
                  <p className="text-black">Experienced, licensed drivers with clean backgrounds</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Users className="h-6 w-6 text-black mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-black">Verified Lady Attendants</h4>
                  <p className="text-black">Trained female attendants for student safety and care</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Clock className="h-6 w-6 text-black mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-black">Shortest Travel Time</h4>
                  <p className="text-black">Efficient routes ensuring students reach school on time</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-black mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-black">Government Approved Safe Buses</h4>
                  <p className="text-black">All vehicles meet government safety standards</p>
                </div>
              </div>
            </div>

            <form onSubmit={handleStudentSubmit} className="space-y-4">
              <h4 className="text-xl font-semibold mb-4 text-black">Get School Bus Quote</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  value={studentForm.firstName}
                  onChange={(e) => setStudentForm({...studentForm, firstName: e.target.value})}
                  className="bg-white border border-black rounded-lg px-4 py-3 text-black placeholder-black/70 focus:outline-none focus:border-black focus:ring-2 focus:ring-black"
                  required
                />
                <input
                  type="text"
                  placeholder="Middle Name (Optional)"
                  value={studentForm.middleName}
                  onChange={(e) => setStudentForm({...studentForm, middleName: e.target.value})}
                  className="bg-white border border-black rounded-lg px-4 py-3 text-black placeholder-black/70 focus:outline-none focus:border-black focus:ring-2 focus:ring-black"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Last Name"
                  value={studentForm.lastName}
                  onChange={(e) => setStudentForm({...studentForm, lastName: e.target.value})}
                  className="bg-white border border-black rounded-lg px-4 py-3 text-black placeholder-black/70 focus:outline-none focus:border-black focus:ring-2 focus:ring-black"
                  required
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={studentForm.email}
                  onChange={(e) => setStudentForm({...studentForm, email: e.target.value})}
                  className="bg-white border border-black rounded-lg px-4 py-3 text-black placeholder-black/70 focus:outline-none focus:border-black focus:ring-2 focus:ring-black"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="tel"
                  placeholder="Mobile Number"
                  value={studentForm.mobile}
                  onChange={(e) => setStudentForm({...studentForm, mobile: e.target.value})}
                  className="bg-white border border-black rounded-lg px-4 py-3 text-black placeholder-black/70 focus:outline-none focus:border-black focus:ring-2 focus:ring-black"
                  required
                />
                <input
                  type="text"
                  placeholder="School Name"
                  value={studentForm.schoolName}
                  onChange={(e) => setStudentForm({...studentForm, schoolName: e.target.value})}
                  className="bg-white border border-black rounded-lg px-4 py-3 text-black placeholder-black/70 focus:outline-none focus:border-black focus:ring-2 focus:ring-black"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="time"
                  placeholder="School Start Time"
                  value={studentForm.schoolStartTime}
                  onChange={(e) => setStudentForm({...studentForm, schoolStartTime: e.target.value})}
                  className="bg-white border border-black rounded-lg px-4 py-3 text-black placeholder-black/70 focus:outline-none focus:border-black focus:ring-2 focus:ring-black"
                  required
                />
                <input
                  type="time"
                  placeholder="School End Time"
                  value={studentForm.schoolEndTime}
                  onChange={(e) => setStudentForm({...studentForm, schoolEndTime: e.target.value})}
                  className="bg-white border border-black rounded-lg px-4 py-3 text-black placeholder-black/70 focus:outline-none focus:border-black focus:ring-2 focus:ring-black"
                  required
                />
              </div>

              <input
                type="text"
                placeholder="Pickup Location"
                value={studentForm.pickupLocation}
                onChange={(e) => setStudentForm({...studentForm, pickupLocation: e.target.value})}
                className="w-full bg-white border border-black rounded-lg px-4 py-3 text-black placeholder-black/70 focus:outline-none focus:border-black focus:ring-2 focus:ring-black"
                required
              />

              <button
                type="submit"
                disabled={isSubmitting.student}
                className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-white hover:text-black border-2 border-black transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting.student ? 'Submitting...' : 'Request School Bus Quote'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;