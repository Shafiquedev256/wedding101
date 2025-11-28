"use client";
import { useState, FormEvent } from "react";
export default function RSVP() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    guests: "1",
    dietary: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    try {
      const formBody = new URLSearchParams({
        fullName: formData.fullName,
        email: formData.email,
        guests: formData.guests,
        dietary: formData.dietary,
      }).toString();
      const response = await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formBody,
      });
      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ fullName: "", email: "", guests: "1", dietary: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section id='rsvp' className='py-24 bg-[#F5F1EC]'>
      <div className='max-w-7xl flex flex-col mx-auto items-center md:flex-row md:space-x-4 md:justify-between px-8'>
        <div className='grid grid-cols-5 gap-12 items-center'>
          {/* LEFT SIDE
- FORM */}
          <div className='col-span-3'>
            <h2
              className='font-serif text-5xl text-[#3E2723] mb-4'
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Join Our Celebration
            </h2>
            <p className='text-[#C17B5C] mb-12 text-sm tracking-[2px] uppercase'>
              Please respond by May 15, 2025
            </p>
            <form
              onSubmit={handleSubmit}
              className='space-y-8'
              data-readdy-form
            >
              <div>
                <input
                  type='text'
                  name='fullName'
                  placeholder='Full Name'
                  required
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  className='w-full bg-transparent border-b-2 border-[#D4A89A] focus:border-[#C17B5C] outline-none py-3 text-[#3E2723] placeholder-[#D4A89A] transition-colors duration-300'
                />
              </div>
              <div>
                <input
                  type='email'
                  name='email'
                  placeholder='Email Address'
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className='w-full bg-transparent border-b-2 border-[#D4A89A] focus:border-[#C17B5C] outline-none py-3 text-[#3E2723] placeholder-[#D4A89A] transition-colors duration-300'
                />
              </div>
              <div>
                <select
                  name='guests'
                  required
                  value={formData.guests}
                  onChange={(e) =>
                    setFormData({ ...formData, guests: e.target.value })
                  }
                  className='w-full bg-transparent border-b-2 border-[#D4A89A] focus:border-[#C17B5C] outline-none py-3 text-[#3E2723] cursor-pointer transition-colors duration-300'
                >
                  <option value='1'>1 Guest</option>
                  <option value='2'>2 Guests</option>
                  <option value='3'>3 Guests</option>
                  <option value='4'>4 Guests</option>
                  <option value='5'>5+ Guests</option>
                </select>
              </div>
              <div>
                <textarea
                  name='dietary'
                  placeholder='Dietary Restrictions (Optional)'
                  maxLength={500}
                  value={formData.dietary}
                  onChange={(e) =>
                    setFormData({ ...formData, dietary: e.target.value })
                  }
                  rows={3}
                  className='w-full bg-transparent border-b-2 border-[#D4A89A] focus:border-[#C17B5C] outline-none py-3 text-[#3E2723] placeholder-[#D4A89A] resize-none transition-colors duration-300'
                ></textarea>
                <p className='text-xs text-[#D4A89A] mt-1'>
                  {formData.dietary.length}/500 characters
                </p>
              </div>
              <button
                type='submit'
                disabled={isSubmitting}
                className='px-12 py-4 bg-[#C17B5C] text-white text-sm tracking-[2px] uppercase rounded-full hover:bg-[#A86A4F] transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer'
              >
                {isSubmitting ? "Submitting..." : "Submit RSVP"}
              </button>
              {submitStatus === "success" && (
                <div className='mt-4 p-4 bg-[#C17B5C]/10 border border-[#C17B5C] rounded-lg'>
                  <p className='text-[#C17B5C] text-sm'>
                    Thank you for your RSVP! We can't wait to celebrate with
                    you.
                  </p>
                </div>
              )}
              {submitStatus === "error" && (
                <div className='mt-4 p-4 bg-red-50 border border-red-300 rounded-lg'>
                  <p className='text-red-600 text-sm'>
                    Something went wrong. Please try again or contact us
                    directly.
                  </p>
                </div>
              )}
            </form>
          </div>
          {/* RIGHT SIDE
- CIRCULAR COUPLE IMAGE */}
          <div className='col-span-2 flex justify-center'>
            <div className='w-[400px] h-[400px] rounded-full overflow-hidden shadow-2xl'>
              <img
                src='/img2.jpg'
                alt='Sophia and Alexander'
                className='w-full h-full object-cover object-top'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
