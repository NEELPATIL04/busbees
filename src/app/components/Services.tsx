// components/Services.tsx
import React, { useState, ChangeEvent, FormEvent } from "react";
import {
  Building2,
  GraduationCap,
  Clock,
  Shield,
  Users,
  CheckCircle,
} from "lucide-react";
// Import your form data interfaces
import { CommercialFormData, StudentFormData } from "../utils/types"; // Adjust path based on where you put types.ts

const Services = () => {
  const [commercialForm, setCommercialForm] = useState<CommercialFormData>({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    mobile: "",
    pickupLocation: "",
    officeAddress: "",
    officeStartTime: "",
    officeEndTime: "",
  });

  const [studentForm, setStudentForm] = useState<StudentFormData>({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    mobile: "",
    schoolName: "",
    schoolStartTime: "",
    schoolEndTime: "",
    pickupLocation: "",
  });

  const [isSubmitting, setIsSubmitting] = useState<{
    commercial: boolean;
    student: boolean;
  }>({
    commercial: false,
    student: false,
  });

  const handleCommercialChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCommercialForm({ ...commercialForm, [e.target.name]: e.target.value });
  };

  const handleStudentChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStudentForm({ ...studentForm, [e.target.name]: e.target.value });
  };

  const handleCommercialSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting({ ...isSubmitting, commercial: true });

    try {
      // Send to the new commercial inquiry API route
      const response = await fetch("/api/commercial-inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(commercialForm),
      });

      const data: { message: string } = await response.json();

      if (response.ok) {
        alert(data.message);
        setCommercialForm({
          firstName: "",
          middleName: "",
          lastName: "",
          email: "",
          mobile: "",
          pickupLocation: "",
          officeAddress: "",
          officeStartTime: "",
          officeEndTime: "",
        });
      } else {
        alert(
          data.message ||
            "Failed to submit commercial inquiry. Please try again."
        );
      }
    } catch (error) {
      console.error("Error submitting commercial form:", error);
      alert("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting({ ...isSubmitting, commercial: false });
    }
  };

  const handleStudentSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting({ ...isSubmitting, student: true });

    try {
      // Send to the new student inquiry API route
      const response = await fetch("/api/student-inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(studentForm),
      });

      const data: { message: string } = await response.json();

      if (response.ok) {
        alert(data.message);
        setStudentForm({
          firstName: "",
          middleName: "",
          lastName: "",
          email: "",
          mobile: "",
          schoolName: "",
          schoolStartTime: "",
          schoolEndTime: "",
          pickupLocation: "",
        });
      } else {
        alert(
          data.message ||
            "Failed to submit school bus inquiry. Please try again."
        );
      }
    } catch (error) {
      console.error("Error submitting student form:", error);
      alert("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting({ ...isSubmitting, student: false });
    }
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Our Services
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Comprehensive transportation solutions tailored for your specific
            needs
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
                  <h4 className="text-xl font-semibold mb-2">
                    Shortest Travel Time
                  </h4>
                  <p className="text-white">
                    Optimized routes and real-time traffic monitoring for
                    fastest commutes
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-white mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-semibold mb-2">
                    Clean & Premium Buses
                  </h4>
                  <p className="text-white">
                    Luxury interiors with air conditioning and comfortable
                    seating
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Shield className="h-6 w-6 text-white mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-semibold mb-2">
                    Verified Drivers
                  </h4>
                  <p className="text-white">
                    Professional, licensed, and background-verified drivers
                  </p>
                </div>
              </div>
            </div>

            <form onSubmit={handleCommercialSubmit} className="space-y-4">
              <h4 className="text-xl font-semibold mb-4">
                Get Commercial Quote
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={commercialForm.firstName}
                  onChange={handleCommercialChange}
                  className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/70 focus:outline-none focus:border-white"
                  required
                />
                <input
                  type="text"
                  name="middleName"
                  placeholder="Middle Name (Optional)"
                  value={commercialForm.middleName}
                  onChange={handleCommercialChange}
                  className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/70 focus:outline-none focus:border-white"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={commercialForm.lastName}
                  onChange={handleCommercialChange}
                  className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/70 focus:outline-none focus:border-white"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={commercialForm.email}
                  onChange={handleCommercialChange}
                  className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/70 focus:outline-none focus:border-white"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Mobile Number"
                  value={commercialForm.mobile}
                  onChange={handleCommercialChange}
                  className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/70 focus:outline-none focus:border-white"
                  required
                />
                <input
                  type="text"
                  name="pickupLocation"
                  placeholder="Pickup Location"
                  value={commercialForm.pickupLocation}
                  onChange={handleCommercialChange}
                  className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/70 focus:outline-none focus:border-white"
                  required
                />
              </div>

              <input
                type="text"
                name="officeAddress"
                placeholder="Office Address"
                value={commercialForm.officeAddress}
                onChange={handleCommercialChange}
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/70 focus:outline-none focus:border-white"
                required
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <label className="block text-white/70 text-sm mb-1">Office Start Time</label>
                  <input
                    type="time"
                    name="officeStartTime"
                    value={commercialForm.officeStartTime}
                    onChange={handleCommercialChange}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert"
                    required
                  />
                </div>
                <div className="relative">
                  <label className="block text-white/70 text-sm mb-1">Office End Time</label>
                  <input
                    type="time"
                    name="officeEndTime"
                    value={commercialForm.officeEndTime}
                    onChange={handleCommercialChange}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting.commercial}
                className="w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-black hover:text-white border-2 border-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting.commercial
                  ? "Submitting..."
                  : "Request Commercial Quote"}
              </button>
            </form>
          </div>

          {/* Student Transportation */}
          <div className="bg-white border-2 border-black p-8 rounded-3xl">
            <div className="flex items-center mb-6">
              <GraduationCap className="h-12 w-12 text-black mr-4" />
              <h3 className="text-3xl font-bold text-black">
                School Bus Services
              </h3>
            </div>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <Shield className="h-6 w-6 text-black mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-black">
                    Verified Drivers
                  </h4>
                  <p className="text-black">
                    Experienced, licensed drivers with clean backgrounds
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Users className="h-6 w-6 text-black mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-black">
                    Verified Lady Attendants
                  </h4>
                  <p className="text-black">
                    Trained female attendants for student safety and care
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Clock className="h-6 w-6 text-black mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-black">
                    Shortest Travel Time
                  </h4>
                  <p className="text-black">
                    Efficient routes ensuring students reach school on time
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-black mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-black">
                    Government Approved Safe Buses
                  </h4>
                  <p className="text-black">
                    All vehicles meet government safety standards
                  </p>
                </div>
              </div>
            </div>

            <form onSubmit={handleStudentSubmit} className="space-y-4">
              <h4 className="text-xl font-semibold mb-4 text-black">
                Get School Bus Quote
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={studentForm.firstName}
                  onChange={handleStudentChange}
                  className="bg-white border border-black rounded-lg px-4 py-3 text-black placeholder-black/70 focus:outline-none focus:border-black focus:ring-2 focus:ring-black"
                  required
                />
                <input
                  type="text"
                  name="middleName"
                  placeholder="Middle Name (Optional)"
                  value={studentForm.middleName}
                  onChange={handleStudentChange}
                  className="bg-white border border-black rounded-lg px-4 py-3 text-black placeholder-black/70 focus:outline-none focus:border-black focus:ring-2 focus:ring-black"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={studentForm.lastName}
                  onChange={handleStudentChange}
                  className="bg-white border border-black rounded-lg px-4 py-3 text-black placeholder-black/70 focus:outline-none focus:border-black focus:ring-2 focus:ring-black"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={studentForm.email}
                  onChange={handleStudentChange}
                  className="bg-white border border-black rounded-lg px-4 py-3 text-black placeholder-black/70 focus:outline-none focus:border-black focus:ring-2 focus:ring-black"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Mobile Number"
                  value={studentForm.mobile}
                  onChange={handleStudentChange}
                  className="bg-white border border-black rounded-lg px-4 py-3 text-black placeholder-black/70 focus:outline-none focus:border-black focus:ring-2 focus:ring-black"
                  required
                />
                <input
                  type="text"
                  name="schoolName"
                  placeholder="School Name"
                  value={studentForm.schoolName}
                  onChange={handleStudentChange}
                  className="bg-white border border-black rounded-lg px-4 py-3 text-black placeholder-black/70 focus:outline-none focus:border-black focus:ring-2 focus:ring-black"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <label className="block text-black/70 text-sm mb-1">School Start Time</label>
                  <input
                    type="time"
                    name="schoolStartTime"
                    value={studentForm.schoolStartTime}
                    onChange={handleStudentChange}
                    className="w-full bg-white border border-black rounded-lg px-4 py-3 text-black focus:outline-none focus:border-black focus:ring-2 focus:ring-black"
                    required
                  />
                </div>
                <div className="relative">
                  <label className="block text-black/70 text-sm mb-1">School End Time</label>
                  <input
                    type="time"
                    name="schoolEndTime"
                    value={studentForm.schoolEndTime}
                    onChange={handleStudentChange}
                    className="w-full bg-white border border-black rounded-lg px-4 py-3 text-black focus:outline-none focus:border-black focus:ring-2 focus:ring-black"
                    required
                  />
                </div>
              </div>

              <input
                type="text"
                name="pickupLocation"
                placeholder="Pickup Location"
                value={studentForm.pickupLocation}
                onChange={handleStudentChange}
                className="w-full bg-white border border-black rounded-lg px-4 py-3 text-black placeholder-black/70 focus:outline-none focus:border-black focus:ring-2 focus:ring-black"
                required
              />

              <button
                type="submit"
                disabled={isSubmitting.student}
                className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-white hover:text-black border-2 border-black transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting.student
                  ? "Submitting..."
                  : "Request School Bus Quote"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;