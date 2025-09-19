"use client";
import Image from "next/image";
import { useState } from "react";
import type { FormEvent } from "react";

export default function Home() {
  const [email, setEmail] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      setIsLoading(false);
      return;
    }
    
    try {
      // Simulate API call
      await new Promise<void>((resolve) => setTimeout(resolve, 1500));
      
      setIsSubmitted(true);
      setIsLoading(false);
      setEmail("");
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err) {
      setError("Something went wrong. Please try again.");
      setIsLoading(false);
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (error) setError(null);
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute top-40 left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12 sm:px-6 lg:px-8">
          {/* Main Content */}
          <div className="max-w-md w-full space-y-8 text-center">
            {/* Logo/Brand Section */}
            <div className="space-y-4">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg">
                <svg 
                  className="w-10 h-10 text-blue-600" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={1.5} 
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="space-y-2">
                <h1 className="text-4xl font-bold text-gray-900">
                  PhysioCrew
                </h1>
                <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
              </div>
            </div>

            {/* Main Message */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-700">
                Coming Soon
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We're working hard to bring you an exceptional physiotherapy experience. 
                Your journey to better health and wellness is almost here.
              </p>
            </div>

            {/* Email Signup */}
            <div className="space-y-4">
              <p className="text-sm font-medium text-gray-600">
                Be the first to know when we launch
              </p>
              
              {/* <form onSubmit={handleSubmit} className="relative" noValidate>
                <div className="flex space-x-2">
                  <input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                    placeholder="Enter your email"
                    aria-label="Email address"
                    className={`
                      flex-1 px-4 py-3 text-base border rounded-lg transition-all duration-200 placeholder-gray-500
                      focus:ring-2 focus:ring-blue-500 focus:border-transparent
                      ${error ? 'border-red-300 focus:ring-red-500' : 'border-gray-300'}
                      ${isSubmitted || isLoading ? 'bg-gray-50 cursor-not-allowed' : ''}
                    `}
                    disabled={isSubmitted || isLoading}
                  />
                  <button
                    type="submit"
                    disabled={isSubmitted || isLoading || !email}
                    aria-label={isLoading ? "Submitting..." : isSubmitted ? "Submitted" : "Subscribe to notifications"}
                    className={`
                      px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 flex items-center justify-center
                      ${isLoading || isSubmitted
                        ? 'bg-gray-300 cursor-not-allowed'
                        : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl'
                      }
                      ${isSubmitted ? 'animate-pulse' : ''}
                    `}
                  >
                    {isLoading ? (
                      <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                    ) : isSubmitted ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <span className="whitespace-nowrap">Notify Me</span>
                    )}
                  </button>
                </div>
                
                {error && (
                  <p className="mt-2 text-sm text-red-600 animate-fade-in" role="alert">
                    {error}
                  </p>
                )}
                
                {isSubmitted && (
                  <p className="mt-2 text-sm text-green-600 animate-fade-in" role="status">
                    Thank you! We'll notify you when we launch.
                  </p>
                )}
              </form> */}
            </div>

            {/* Progress Indicator */}
            <div className="space-y-2">
              <div className="flex justify-center space-x-1">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" aria-hidden="true"></div>
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}} aria-hidden="true"></div>
                <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}} aria-hidden="true"></div>
              </div>
              <p className="text-xs text-gray-500">Getting ready for you...</p>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-4 pt-6">
              <a
                href="#"
                className="group p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                aria-label="Follow us on Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors duration-200" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="#"
                className="group p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                aria-label="Follow us on Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-6 h-6 text-gray-600 group-hover:text-pink-600 transition-colors duration-200" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <circle cx="12" cy="12" r="4"></circle>
                  <circle cx="18" cy="6" r="1"></circle>
                </svg>
              </a>
              <a
                href="#"
                className="group p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                aria-label="Follow us on Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-6 h-6 text-gray-600 group-hover:text-blue-500 transition-colors duration-200" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>

            {/* Footer */}
            <div className="pt-8 border-t border-gray-200">
              <p className="text-xs text-gray-500">
                © 2025 PhysioCrew. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </>
  );
}