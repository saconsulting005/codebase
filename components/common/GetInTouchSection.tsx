'use client';

import React from 'react';
import Image from 'next/image';
import { useForm, SubmitHandler } from 'react-hook-form';

type FormInputs = {
  name: string;
  email: string;
  phoneNumber: string;
  subject: string;
  message: string;
};

const GetInTouchSection: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    // Log form data to console for debugging
    console.log("Form Data:", data);

    const apiUrl = 'https://audit-admin-theta.vercel.app/api/contactus';

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to send message');
      }

      reset();
      alert('Message sent successfully!');
    } catch (error: unknown) {
      if (error instanceof Error) {
        alert(error.message || 'Something went wrong');
      } else {
        alert('An unexpected error occurred');
      }
    }
  };

  return (
    <section className="bg-[#F8F8F8] py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 lg:mb-8">
          <h2 className="text-[#009CDE] text-xl sm:text-2xl lg:text-3xl font-semibold leading-tight mb-2">
            Let&apos;s talk about audit and assurance
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[rgba(0,13,81,0.6)] leading-relaxed">
            Want to add credibility to your financial reporting? We can help.
            Provide us with some information, and we will get back to you soon.
          </p>
          <div className="h-1 w-24 sm:w-40 bg-[#FF5900] mx-auto mt-4"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-8">
          <div className="hidden lg:block flex-shrink-0">
            <Image
              src="/assets/contact-image.png"
              alt="Contact us"
              width={400}
              height={500}
              className="rounded-lg shadow-lg object-cover"
              priority
            />
          </div>

          <div className="bg-white rounded-xl shadow-md md:h-[530px] xl:h-[530px] w-full lg:max-w-[740px] p-6 sm:p-8">
            <div className="mb-6">
              <h3 className="text-[#FF5900] text-xs sm:text-sm font-semibold uppercase mb-2">
                Business Consulting
              </h3>
              <h2 className="text-[#009CDE] text-lg sm:text-xl font-semibold leading-tight">
                Get in touch
              </h2>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-4">
              {/* Name and Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your name"
                  className={`w-full p-3 sm:p-4 border rounded-full text-sm ${
                    errors.name ? 'border-red-500' : 'focus:ring-2 focus:ring-[#009CDE]'
                  }`}
                  {...register('name', { required: 'Name is required' })}
                />
                {errors.name && (
                  <span className="text-red-500 text-xs mt-1">{errors.name.message}</span>
                )}
                <input
                  type="email"
                  placeholder="Your Email"
                  className={`w-full p-3 sm:p-4 border rounded-full text-sm ${
                    errors.email ? 'border-red-500' : 'focus:ring-2 focus:ring-[#009CDE]'
                  }`}
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: 'Enter a valid email address',
                    },
                  })}
                />
                {errors.email && (
                  <span className="text-red-500 text-xs mt-1">{errors.email.message}</span>
                )}
              </div>

              {/* Phone and Subject */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Phone"
                  className={`w-full p-3 sm:p-4 border rounded-full text-sm ${
                    errors.phoneNumber ? 'border-red-500' : 'focus:ring-2 focus:ring-[#009CDE]'
                  }`}
                  {...register('phoneNumber', { required: 'Phone number is required' })}
                />
                {errors.phoneNumber && (
                  <span className="text-red-500 text-xs mt-1">{errors.phoneNumber.message}</span>
                )}
                <input
                  type="text"
                  placeholder="Subject"
                  className={`w-full p-3 sm:p-4 border rounded-full text-sm ${
                    errors.subject ? 'border-red-500' : 'focus:ring-2 focus:ring-[#009CDE]'
                  }`}
                  {...register('subject', { required: 'Subject is required' })}
                />
                {errors.subject && (
                  <span className="text-red-500 text-xs mt-1">{errors.subject.message}</span>
                )}
              </div>

              {/* Message */}
              <textarea
                placeholder="Your message"
                rows={4}
                className={`w-full p-3 sm:p-4 border rounded-lg text-sm ${
                  errors.message ? 'border-red-500' : 'focus:ring-2 focus:ring-[#009CDE]'
                }`}
                {...register('message', { required: 'Message is required' })}
              ></textarea>
              {errors.message && (
                <span className="text-red-500 text-xs mt-1">{errors.message.message}</span>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#009CDE] text-white text-sm sm:text-base font-semibold py-3 rounded-full hover:bg-[#007bbd] transition-all duration-300"
              >
                {isSubmitting ? 'Sending...' : 'Send message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouchSection;
