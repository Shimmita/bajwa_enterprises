"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ShieldCheck,
  Award,
  Layers,
  HeartHandshake,
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  Smile,
  Truck,
  CheckCircle,
} from "lucide-react";

import tukImage from "../public/tuk.png";
import tukImage2 from "../public/tuk_tuk.png";
import tuk_engine from "../public/engine.jpeg";
import lights from "../public/lights.webp";
import filters from "../public/filters.jpg";
import gear from "../public/gear.jpg";
import tyre from "../public/tyre.jpg";
import brakes_suspension from "../public/brakes_suspension.jpg";
import logo from "../public/logo.jpeg";
import MapViewSection from "./components/mapview";

// Inline brand SVGs to prevent dependency issues
function FacebookIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

export default function BajwaEnterprises() {
  const [inquiryText, setInquiryText] = useState("");
  const whatsappNumber = "254745131313";

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (inquiryText.length < 10) return;
    const encodedText = encodeURIComponent(
      `Hello Bajwa Enterprises, I have an inquiry:\n\n${inquiryText}`
    );
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodedText}`,
      "_blank"
    );
  };

  const whyChooseUsData = [
    {
      title: "QUALITY",
      description: "We provide genuine and high-quality spares.",
      icon: <Award className="w-8 h-8 text-[#E11D23]" />,
    },
    {
      title: "RELIABILITY",
      description: "Always dependable, always on time.",
      icon: <ShieldCheck className="w-8 h-8 text-[#E11D23]" />,
    },
    {
      title: "WIDE RANGE",
      description: "Huge selection of parts for all tuk tuk models.",
      icon: <Layers className="w-8 h-8 text-[#E11D23]" />,
    },
    {
      title: "TRUST",
      description: "Building strong relationships with our valued partners.",
      icon: <HeartHandshake className="w-8 h-8 text-[#E11D23]" />,
    },
  ];

  const topCategories = [
    { name: "ENGINE PARTS", image: tuk_engine },
    { name: "SUSPENSION PARTS", image: brakes_suspension },
    { name: "BRAKE PARTS", image: gear },
    { name: "ELECTRICAL PARTS", image: lights },
    { name: "BODY PARTS", image: tyre },
  ];

  const stats = [
    {
      icon: <Layers className="w-7 h-7 text-[#E11D23]" />,
      value: "500+",
      label: "Products",
    },
    {
      icon: <Smile className="w-7 h-7 text-[#E11D23]" />,
      value: "50+",
      label: "Happy Dealers",
    },
    {
      icon: <Truck className="w-7 h-7 text-[#E11D23]" />,
      value: "10+",
      label: "Brands",
    },
    {
      icon: <CheckCircle className="w-7 h-7 text-[#E11D23]" />,
      value: "100%",
      label: "Customer Satisfaction",
    },
  ];

  return (
    <div className="bg-[#FFFFFF] text-gray-900 min-h-screen font-sans selection:bg-[#E11D23] selection:text-white">
      {/* ===== HEADER & NAVBAR ===== */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-lg overflow-hidden flex items-center justify-center border border-gray-100 shadow-sm">
              <Image
                src={logo}
                alt="Bajwa Enterprises Logo"
                width={44}
                height={44}
                className="object-cover"
              />
            </div>
            <div>
              <span className="text-xl font-black tracking-tight text-gray-900 block leading-none">
                BAJWA<span className="text-[#E11D23]">.</span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#E11D23]">
                — ENTERPRISES —
              </span>
            </div>
          </div>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center space-x-7 text-xs font-bold uppercase tracking-wider text-gray-700">
            <a href="#" className="text-[#E11D23] transition-colors font-extrabold">
              Home
            </a>
            <a href="#about" className="hover:text-[#E11D23] transition-colors">
              About Us
            </a>
            <a href="#categories" className="hover:text-[#E11D23] transition-colors">
              Products
            </a>
            <a href="#brands" className="hover:text-[#E11D23] transition-colors">
              Brands
            </a>
            <a href="#why-us" className="hover:text-[#E11D23] transition-colors">
              Services
            </a>
            <a href="#contact" className="hover:text-[#E11D23] transition-colors">
              Contact
            </a>
          </nav>

          {/* Direct Call Action */}
          <a
            href="tel:+254745131313"
            className="flex items-center gap-2 text-sm font-bold text-gray-900 hover:text-[#E11D23] transition-colors"
          >
            <Phone className="w-4 h-4 text-[#E11D23]" />
            <span>0745 131313</span>
          </a>
        </div>
      </header>

      {/* ===== HERO SECTION WITH RED ACCENTS ===== */}
      <section className="relative overflow-hidden bg-white py-16 md:py-24 border-b border-gray-100">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full lg:w-2/3 h-full pointer-events-none -z-0 opacity-15 overflow-hidden">
          <div className="absolute right-[-10%] top-[-20%] w-[650px] h-[650px] rounded-full border-[60px] border-[#E11D23]" />
          <div className="absolute right-[10%] bottom-[-10%] w-[450px] h-[450px] rounded-full border-[30px] border-[#E11D23]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-6 space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.08] tracking-tight">
                QUALITY SPARES. <br />
                <span className="text-[#E11D23]">TRUSTED BRANDS.</span> <br />
                ALWAYS READY.
              </h1>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Dealers in all tuk tuk parts. <br />
                <span className="text-gray-900 font-bold">Your Partner in Reliability.</span>
              </p>

              <div className="pt-2">
                <a
                  href="#categories"
                  className="inline-flex items-center justify-center bg-[#E11D23] hover:bg-[#b81419] text-white px-8 py-3.5 rounded font-bold text-xs uppercase tracking-widest shadow-md hover:shadow-lg transition-all"
                >
                  Explore Products
                </a>
              </div>
            </div>

            {/* Right Hero Tuk-tuk Image */}
            <div className="lg:col-span-6 flex justify-center relative">
              <div className="relative w-full max-w-lg aspect-[4/3]">
                <Image
                  src={tukImage}
                  alt="Bajwa Enterprises Tuk-Tuk Parts"
                  fill
                  priority
                  className="object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section id="why-us" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-12">
            <h2 className="text-2xl font-black tracking-wider uppercase text-gray-900">
              Why Choose Us
            </h2>
            <div className="w-10 h-1 bg-[#E11D23] mx-auto mt-2 rounded-full" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUsData.map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center flex flex-col items-center justify-center space-y-3"
              >
                <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-1">
                  {item.icon}
                </div>
                <h3 className="text-xs font-black tracking-wider text-gray-900 uppercase">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== OUR TOP CATEGORIES ===== */}
      <section id="categories" className="py-20 bg-gray-50/70 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-12">
            <h2 className="text-2xl font-black tracking-wider uppercase text-gray-900">
              Our Top Categories
            </h2>
            <div className="w-10 h-1 bg-[#E11D23] mx-auto mt-2 rounded-full" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
            {topCategories.map((cat, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all group flex flex-col items-center"
              >
                <div className="relative w-full h-32 mb-3 overflow-hidden rounded-lg bg-gray-50 flex items-center justify-center">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-[11px] font-bold uppercase tracking-wider text-gray-800 text-center">
                  {cat.name}
                </h3>
              </div>
            ))}
          </div>

          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
              "Hello Bajwa Enterprises, I would like to see your complete spare parts catalog."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[#E11D23] hover:bg-[#b81419] text-white px-8 py-3 rounded font-bold text-xs uppercase tracking-widest shadow-md transition-colors"
          >
            View All Products
          </a>
        </div>
      </section>

      {/* ===== ABOUT US (ANGLED BANNER LAYOUT) ===== */}
      <section id="about" className="relative bg-[#1A1F24] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 min-h-[420px]">
          {/* Text Side */}
          <div className="lg:col-span-6 p-8 sm:p-12 lg:p-16 flex flex-col justify-center space-y-6 relative z-10 bg-[#1A1F24]">
            <h2 className="text-2xl sm:text-3xl font-black tracking-wider uppercase text-white">
              About Us
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Bajwa Enterprises is committed to supplying top-quality tuk tuk parts to dealers and workshops across Mombasa and Kenya. Our mission is to ensure your vehicles stay on the road with reliability and performance.
            </p>

            <div>
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-gray-900 px-6 py-2.5 rounded font-bold text-xs uppercase tracking-wider transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Image Side */}
          <div className="lg:col-span-6 relative min-h-[300px] lg:min-h-full">
            <Image
              src={tukImage2}
              alt="Bajwa Enterprises Workshop and Warehouse"
              fill
              className="object-cover"
            />
            <div
              className="hidden lg:block absolute inset-y-0 left-0 w-24 bg-[#1A1F24]"
              style={{
                clipPath: "polygon(0 0, 0 100%, 100% 100%)",
              }}
            />
          </div>
        </div>
      </section>

      {/* ===== METRICS / STATS BAR ===== */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center space-y-2">
                <div className="p-3 bg-red-50 rounded-full">{stat.icon}</div>
                <span className="text-3xl font-black text-gray-900 tracking-tight">
                  {stat.value}
                </span>
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== QUICK ENQUIRY SECTION ===== */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 p-8 sm:p-10 rounded-2xl border border-gray-200 shadow-sm">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center shrink-0">
                <MessageSquare className="w-6 h-6 text-[#E11D23]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Quick Enquiry</h3>
                <p className="text-gray-500 text-sm">
                  Send your part number, model, and quantity. We will reply via WhatsApp immediately.
                </p>
              </div>
            </div>

            <form onSubmit={handleWhatsAppSend} className="space-y-4">
              <div>
                <textarea
                  rows={4}
                  value={inquiryText}
                  onChange={(e) => setInquiryText(e.target.value)}
                  placeholder="Example: Need clutch plate set for Bajaj RE, 3 units..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E11D23] focus:border-transparent text-sm resize-none bg-white"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#E11D23] hover:bg-[#b81419] text-white py-3.5 rounded-xl font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 fill-current" /> Send Enquiry via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ===== MAP LOCATION ===== */}
      <MapViewSection />

      {/* ===== FOOTER ===== */}
      <footer className="bg-white text-gray-800 pt-16 pb-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Col 1: Brand Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center border border-gray-200 shadow-sm">
                  <Image
                    src={logo}
                    alt="Bajwa Enterprises Logo"
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
                <div>
                  <span className="text-xl font-black tracking-tight text-gray-900 block leading-none">
                    BAJWA<span className="text-[#E11D23]">.</span>
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#E11D23]">
                    — ENTERPRISES —
                  </span>
                </div>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">
                Your premier source for high-quality, genuine tuk-tuk spare parts in Mombasa and Kenya.
              </p>
            </div>

            {/* Col 2: Quick Links */}
            <div className="space-y-3">
              <h4 className="text-xs font-black uppercase tracking-wider text-gray-900">
                Quick Links
              </h4>
              <ul className="space-y-2 text-xs font-medium text-gray-600">
                <li>
                  <a href="#" className="hover:text-[#E11D23] transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-[#E11D23] transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#categories" className="hover:text-[#E11D23] transition-colors">
                    Products
                  </a>
                </li>
                <li>
                  <a href="#brands" className="hover:text-[#E11D23] transition-colors">
                    Brands
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-[#E11D23] transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: Products */}
            <div className="space-y-3">
              <h4 className="text-xs font-black uppercase tracking-wider text-gray-900">
                Products
              </h4>
              <ul className="space-y-2 text-xs font-medium text-gray-600">
                <li>Engine Parts</li>
                <li>Suspension Parts</li>
                <li>Brake Parts</li>
                <li>Electrical Parts</li>
                <li>Body Parts</li>
              </ul>
            </div>

            {/* Col 4: Contact Us */}
            <div className="space-y-3">
              <h4 className="text-xs font-black uppercase tracking-wider text-gray-900">
                Contact Us
              </h4>
              <ul className="space-y-2 text-xs text-gray-600">
                <li className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#E11D23]" />
                  <span>0745 131313</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#E11D23]" />
                  <span>info@bajwaenterprises.co.ke</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#E11D23] shrink-0 mt-0.5" />
                  <span>Mombasa, Kenya</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Sub-Footer */}
          <div className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
            <p>© 2026 Bajwa Enterprises. All Rights Reserved.</p>
            <div className="flex items-center gap-4 text-gray-600">
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#E11D23] hover:text-white transition-colors"
              >
                <MessageSquare className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#E11D23] hover:text-white transition-colors"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#E11D23] hover:text-white transition-colors"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}