"use client";

import { useState, useEffect } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showCookiePopup, setShowCookiePopup] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      setShowCookiePopup(true);
    }
  }, []);

  const handleCookieConsent = () => {
    localStorage.setItem("cookieConsent", "true");
    setShowCookiePopup(false);
  };

  const handleCookieDeny = () => {
    localStorage.setItem("cookieConsent", "denied");
    setShowCookiePopup(false);
  };

  return (
    <div className="font-sans min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Sticky Header */}
      <header className="sticky top-0 bg-gray-900 bg-opacity-80 backdrop-blur-md py-2 px-6 flex justify-between items-center shadow-md">
        <div className="text-lg font-bold">Affiliate</div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded transition-all hover:scale-105">
          Get Started
        </button>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen text-center px-4 bg-gradient-to-b from-gray-900 to-gray-800">
        <h1 className="text-5xl sm:text-7xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          Welcome to Your Affiliate Opportunity
        </h1>
        <p className="text-lg sm:text-xl mb-8 text-gray-300">
          Maximize your earnings with our exclusive offers.
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-full transition-all hover:scale-110 shadow-lg">
          Claim Offer
        </button>
      </section>

      {/* Features/Benefits Section */}
      <section className="px-8 py-16 bg-gradient-to-b from-gray-800 to-gray-700 text-center">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-12">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h3 className="text-xl font-semibold mb-4 text-blue-400">Fast Delivery</h3>
            <p className="text-gray-300">Get your products delivered quickly and efficiently.</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h3 className="text-xl font-semibold mb-4 text-blue-400">24/7 Support</h3>
            <p className="text-gray-300">Our team is here to assist you anytime, anywhere.</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h3 className="text-xl font-semibold mb-4 text-blue-400">Exclusive Offers</h3>
            <p className="text-gray-300">Access deals and discounts you won’t find elsewhere.</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h3 className="text-xl font-semibold mb-4 text-blue-400">Trusted by Thousands</h3>
            <p className="text-gray-300">Join a community of satisfied customers worldwide.</p>
          </div>
        </div>
      </section>

      {/* Product/Offer Highlight Section */}
      <section className="px-8 py-16 bg-gradient-to-b from-gray-700 to-gray-600 text-center">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 mb-8">
          Featured Product
        </h2>
        <p className="text-lg mb-8 text-gray-300">
          Discover the best affiliate product to boost your earnings.
        </p>
        <div className="flex flex-col items-center">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-4">
            <h3 className="text-xl font-semibold mb-2 text-yellow-400">Product Name</h3>
            <p className="text-sm mb-2 text-gray-300">A brief description of the product and its benefits.</p>
            <div className="flex items-center justify-center mb-2">
              <span className="text-yellow-400">★★★★★</span>
              <span className="text-sm ml-2 text-gray-300">4.8/5</span>
            </div>
            <p className="italic text-sm text-gray-400">"This product changed my life! Highly recommend."</p>
          </div>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-6 rounded-full transition-all hover:scale-110 shadow-lg">
            Learn More
          </button>
        </div>
      </section>

      {/* About/Trust Section */}
      <section className="px-8 py-16 bg-gradient-to-b from-gray-600 to-gray-500 text-center">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500 mb-12">
          Why Trust Us?
        </h2>
        <ul className="list-none text-lg space-y-6 text-gray-300">
          <li className="flex items-center justify-center gap-4">
            <span className="text-blue-500">✔</span>
            Fast and reliable delivery services.
          </li>
          <li className="flex items-center justify-center gap-4">
            <span className="text-blue-500">✔</span>
            24/7 customer support for all your needs.
          </li>
          <li className="flex items-center justify-center gap-4">
            <span className="text-blue-500">✔</span>
            Exclusive offers tailored just for you.
          </li>
          <li className="flex items-center justify-center gap-4">
            <span className="text-blue-500">✔</span>
            Trusted by thousands of satisfied customers worldwide.
          </li>
        </ul>
      </section>

      {/* FAQ Section */}
      <section className="px-8 py-16 bg-gradient-to-b from-gray-500 to-gray-400 text-center">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 mb-12">
          Frequently Asked Questions
        </h2>
        <div className="max-w-2xl mx-auto space-y-6">
          {faqItems.map((item, index) => (
            <FAQItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <footer className="px-8 py-8 bg-gradient-to-b from-gray-400 to-gray-300 text-center">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-8">
          {/* Support Section */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-blue-500">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-700 hover:underline">Support ticket</a></li>
              <li><a href="#" className="text-gray-700 hover:underline">Knowledgebase</a></li>
              <li><a href="#" className="text-gray-700 hover:underline">Blogs</a></li>
            </ul>
          </div>

          {/* Clients Section */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-blue-500">Clients</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-700 hover:underline">Contact us</a></li>
              <li><a href="#" className="text-gray-700 hover:underline">About us</a></li>
              <li><a href="#" className="text-gray-700 hover:underline">Testimonials</a></li>
              <li><a href="#" className="text-gray-700 hover:underline">Case Studies</a></li>
              <li><a href="#" className="text-gray-700 hover:underline">Partners</a></li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-blue-500">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/terms-of-service" className="text-gray-700 hover:underline">Terms of Service</Link></li>
              <li><Link href="/privacy-policy" className="text-gray-700 hover:underline">Privacy Policy</Link></li>
              <li><Link href="/cookie-policy" className="text-gray-700 hover:underline">Cookie Policy</Link></li>
            </ul>
          </div>

          {/* Social Section */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-blue-500">Social</h3>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-blue-500 hover:scale-110 transition-transform">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-blue-500 hover:scale-110 transition-transform">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-blue-500 hover:scale-110 transition-transform">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-blue-500 hover:scale-110 transition-transform">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Affiliate Disclosure Button */}
        <button
          className="mt-6 text-blue-500 hover:underline"
          onClick={toggleModal}
        >
          Affiliate Disclosure
        </button>

        {/* Disclaimer Text */}
        <p className="text-sm text-gray-700 mt-4">
          Disclaimer: Some links on this site are affiliate links. If you make a purchase through them, I may earn a small commission—at no extra cost to you. I only recommend what I truly believe in. Thank you for your support!
        </p>

        <p className="text-sm text-gray-700 mt-8">© 2025 Affiliate. All rights reserved.</p>

        {/* Modal Popup */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg max-w-md w-full">
              <h3 className="text-lg font-bold mb-4">Affiliate Disclosure</h3>
              <p className="text-sm mb-4">
                Some of the links on this site are affiliate links. This means that if you click on the link and make a purchase, I may earn a small commission at no extra cost to you. I only recommend products and services that I personally use, trust, or believe will add value to my readers.
              </p>
              <p className="text-sm mb-4">
                This helps support the work I do and allows me to continue providing helpful content for free. Your support is always appreciated!
              </p>
              <p className="text-sm mb-4">
                Transparency matters—and I want you to feel confident in every decision you make based on the information provided here.
              </p>
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition-all"
                onClick={toggleModal}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </footer>

      {/* Cookie Consent Popup */}
      {showCookiePopup && (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 shadow-lg flex justify-between items-center animate-slide-up">
          <p className="text-sm">
            We use cookies to improve your experience on our site. By using our site, you consent to cookies.
          </p>
          <div className="flex space-x-4">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition-all"
              onClick={handleCookieConsent}
            >
              Accept
            </button>
            <button
              className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded transition-all"
              onClick={handleCookieDeny}
            >
              Deny
            </button>
          </div>
        </div>
      )}

      {/* Placeholder for other sections */}
      {/* ...existing code... */}
    </div>
  );
}

const faqItems = [
  { question: "What is an affiliate program?", answer: "An affiliate program allows you to earn commissions by promoting products or services." },
  { question: "How do I get started?", answer: "Sign up for our affiliate program and start sharing your unique referral link." },
  { question: "When do I get paid?", answer: "Payments are made monthly once you reach the minimum payout threshold." },
];

interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-600 rounded-lg">
      <button
        className="w-full text-left px-3 py-2 bg-gray-700 text-white font-bold text-lg rounded-t-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
      </button>
      {isOpen && (
        <div className="px-3 py-2 bg-gray-600 text-white rounded-b-lg">
          {answer}
        </div>
      )}
    </div>
  );
}
