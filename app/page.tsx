"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Wrench,
  ShieldCheck,
  Tag,
  Headphones,
  MapPin,
  Clock,
  Phone,
  MessageSquare,
  ExternalLink,
  ChevronRight,
  PackageCheck,
  CheckCircle2,
  Truck,
  Sparkles,
} from "lucide-react";

import tukImage from "../public/tuk.png";
import tukImage2 from "../public/tuk_tuk.png";
import tuk_engine from "../public/engine.jpeg";
import lights from "../public/lights.webp";
import filters from "../public/filters.jpg";
import gear from "../public/gear.jpg";
import tyre from "../public/tyre.jpg";
import brakes_suspension from "../public/brakes_suspension.jpg";
import quality from "../public/best.avif";
import fair_price from "../public/fair_price.jpg";
import mechanic from "../public/mechanic.avif";
import MapViewSection from "./components/mapview";

export default function BajwaEnterprises() {
  const [inquiryText, setInquiryText] = useState("");
  const whatsappNumber = "254745131313";

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (inquiryText.length < 10) return;
    const encodedText = encodeURIComponent(
      `Hello Bajwa Enterprises, I have a quick inquiry:\n\n${inquiryText}`
    );
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodedText}`,
      "_blank"
    );
  };

  // Category data with curated motorcycle and tuk-tuk relevant Unsplash images
  const categories = [
    {
      title: "Engine & Clutch",
      items: "Plates • Bearings • Rings • Gaskets",
      icon: <Wrench className="w-6 h-6 text-white" />,
      bgImage: tuk_engine,
      color: "from-[#0d2a28]/85 via-[#18534d]/80 to-[#206E66]/75",
    },
    {
      title: "Brakes & Suspension",
      items: "Shoes • Pads • Shocks • Springs",
      icon: <ShieldCheck className="w-6 h-6 text-white" />,
      bgImage: brakes_suspension,
      color: "from-[#0f212d]/85 via-[#163a4d]/80 to-[#206E66]/75",
    },
    {
      title: "Electrical",
      items: "Bulbs • Switches • Wiring Sets",
      icon: <PackageCheck className="w-6 h-6 text-white" />,
      bgImage: lights,
      color: "from-[#0a2323]/85 via-[#134945]/80 to-[#206E66]/75",
    },
    {
      title: "Filters & Air Cleaners",
      items: "Oil • Air • Fuel • Rubber Hoses",
      icon: <Wrench className="w-6 h-6 text-white" />,
      bgImage: filters,
      color: "from-[#142328]/85 via-[#1b4348]/80 to-[#206E66]/75",
    },
    {
      title: "Transmission & Gears",
      items: "Chains • Sprockets • Shafts • Bearings",
      icon: <ShieldCheck className="w-6 h-6 text-white" />,
      bgImage: gear,
      color: "from-[#112526]/85 via-[#1c4d4a]/80 to-[#206E66]/75",
    },
    {
      title: "Tyres & Lubricants",
      items: "Tyres • Tubes • Grease • Oils",
      icon: <PackageCheck className="w-6 h-6 text-white" />,
      bgImage: tyre,
      color: "from-[#0b2426]/85 via-[#154648]/80 to-[#206E66]/75",
    },
  ];

  const whyUsItems = [
    {
      title: "Genuine Parts",
      description:
        "Imported directly from trusted partners in India, Pakistan & China to guarantee optimal durability.",
      icon: quality,
    },
    {
      title: "Fair Pricing",
      description:
        "Competitive wholesale & retail rates with consistent stock availability year-round.",
      icon: fair_price,
    },
    {
      title: "Expert Support",
      description:
        "A technical team that deeply understands tuk-tuk engine and drive-train mechanics.",
      icon: mechanic,
    },
  ];

  return (
    <div className="bg-[#FEFEFE] text-gray-900 min-h-screen font-sans selection:bg-[#206E66] selection:text-[#FEFEFE]">



      {/* ===== NAVIGATION ===== */}
      <header className="sticky top-0 z-50 bg-[#FEFEFE]/95 backdrop-blur-md border-b border-gray-100/80 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#206E66] text-[#FEFEFE] font-black text-xl rounded-xl flex items-center justify-center shadow-md shadow-[#206E66]/20">
              B
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight text-gray-900 block leading-none">
                BAJWA<span className="text-[#206E66]">.</span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#67777E]">
                Enterprises
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8 text-sm font-semibold text-[#67777E]">
            <a href="#about" className="hover:text-[#206E66] transition-colors relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#206E66] transition-all group-hover:w-full"></span>
            </a>
            <a href="#products" className="hover:text-[#206E66] transition-colors relative group">
              Products
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#206E66] transition-all group-hover:w-full"></span>
            </a>
            <a href="#why-us" className="hover:text-[#206E66] transition-colors relative group">
              Why Us
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#206E66] transition-all group-hover:w-full"></span>
            </a>
            <a href="#contact" className="hover:text-[#206E66] transition-colors relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#206E66] transition-all group-hover:w-full"></span>
            </a>
          </nav>

          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#206E66] hover:bg-[#18534d] text-[#FEFEFE] px-5 py-2.5 rounded-xl font-bold text-sm shadow-md shadow-[#206E66]/20 hover:shadow-lg transition-all hover:-translate-y-0.5"
          >
            <MessageSquare className="w-4 h-4 fill-current" /> WhatsApp
          </a>
        </div>
      </header>

      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Hero Background Image - Tuk-tuk / Auto Rickshaw */}
        <div className="absolute inset-0 z-0">
          <Image
            src={tukImage}
            alt="Tuk-tuk on the road in Mombasa"
            className="object-cover"
            height={750}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1a1a]/90 via-[#0a1a1a]/70 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#FEFEFE]/5 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#206E66]/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wide mb-6 border border-[#206E66]/20 text-[#FEFEFE]">
              <Truck className="w-3.5 h-3.5" /> Tuk-tuk & Three-Wheeler Spares • Mombasa
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-[#FEFEFE] tracking-tight leading-[1.1] mb-6">
              Genuine Tuk-tuk
              <span className="text-[#206E66] block">Spare Parts.</span>
            </h1>
            <p className="text-lg md:text-xl text-[#D1D5DB] leading-relaxed mb-8 max-w-xl">
              We stock high-quality, durable parts for{" "}
              <strong className="text-white">Piaggio Ape</strong>,{" "}
              <strong className="text-white">TVS King</strong>,{" "}
              <strong className="text-white">Bajaj RE</strong> &{" "}
              <strong className="text-white">Atul Elite</strong>.
              Visit us on Mwabundu Rd or message us for instant pricing.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#206E66] hover:bg-[#18534d] text-[#FEFEFE] px-8 py-4 rounded-xl font-bold text-base shadow-lg shadow-[#206E66]/30 transition-all hover:-translate-y-0.5 hover:shadow-[#206E66]/40"
              >
                <MessageSquare className="w-5 h-5 fill-current" /> WhatsApp Community
              </a>
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-base transition-all"
              >
                Browse Products <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            {/* Hero Metrics */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10 max-w-lg">
              <div>
                <span className="text-3xl font-black text-[#206E66] block">1000+</span>
                <span className="text-sm font-semibold text-[#D1D5DB]">Parts in Stock</span>
              </div>
              <div>
                <span className="text-3xl font-black text-[#206E66] block">4+</span>
                <span className="text-sm font-semibold text-[#D1D5DB]">Brands Covered</span>
              </div>
              <div>
                <span className="text-3xl font-black text-[#206E66] block">Fast</span>
                <span className="text-sm font-semibold text-[#D1D5DB]">Dispatch</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section id="about" className="py-24 bg-[#FEFEFE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* About Image - Motorcycle / Tuk-tuk Workshop */}
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[#206E66]/10">
                <Image
                  src={tukImage2}
                  alt="Bajwa Enterprises spare parts store with motorcycle and tuk-tuk parts"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#206E66]/10 to-transparent"></div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-[#206E66] text-white px-6 py-4 rounded-2xl shadow-lg shadow-[#206E66]/30">
                <span className="text-2xl font-black block leading-none">10+</span>
                <span className="text-xs font-medium opacity-80">Years Experience</span>
              </div>
            </div>

            {/* About Content */}
            <div className="space-y-6 order-1 lg:order-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#206E66] bg-[#206E66]/10 px-4 py-1.5 rounded-full inline-block">
                About Bajwa Enterprises
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
                Your trusted single-source spare parts hub in Mombasa.
              </h2>
              <p className="text-[#67777E] leading-relaxed text-lg">
                We are a specialist tuk-tuk & three-wheeler spare parts store serving
                mechanics, drivers, and fleet owners across Mombasa and Kenya. We focus
                on genuine, durable components with competitive pricing and fast,
                friendly support.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100">
                  <Clock className="w-6 h-6 text-[#206E66] mb-3" />
                  <h4 className="font-bold text-gray-900 text-sm">Open Hours</h4>
                  <p className="text-[#67777E] text-sm">Mon–Sat • 8:00–18:00</p>
                  <p className="text-xs font-semibold text-[#206E66] mt-1">Sunday Closed</p>
                </div>
                <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100">
                  <Tag className="w-6 h-6 text-[#206E66] mb-3" />
                  <h4 className="font-bold text-gray-900 text-sm">Wholesale & Retail</h4>
                  <p className="text-[#67777E] text-sm">Bulk orders welcome</p>
                  <p className="text-xs font-semibold text-[#206E66] mt-1">Consistent supply</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {["Piaggio Ape", "TVS King", "Bajaj RE", "Atul Elite"].map((model) => (
                  <span
                    key={model}
                    className="inline-flex items-center gap-1.5 bg-[#FEFEFE] border border-gray-200 px-3 py-1.5 rounded-lg text-sm font-semibold text-gray-800 shadow-sm hover:border-[#206E66] transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#206E66]" /> {model}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PRODUCTS / CATEGORIES ===== */}
      <section id="products" className="py-24 bg-gray-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#206E66] bg-[#206E66]/10 px-4 py-1.5 rounded-full inline-block mb-3">
              Our Inventory
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Popular Categories
            </h2>
            <p className="text-[#67777E] mt-3">
              Ask us on WhatsApp for specific part numbers or availability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Category Background Image */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={cat.bgImage}
                    alt={cat.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${cat.color}`}></div>
                </div>

                <div className="relative z-10 p-8 min-h-[220px] flex flex-col justify-between text-white">
                  <div>
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-5 shadow-lg">
                      {cat.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2 tracking-tight">{cat.title}</h3>
                    <p className="text-white/80 text-sm leading-relaxed">{cat.items}</p>
                  </div>

                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                      `Hi Bajwa Enterprises, I am inquiring about parts in your category: ${cat.title}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-white/90 hover:text-white transition-colors pt-4 mt-4 border-t border-white/20 group-hover:border-white/40"
                  >
                    Order on WhatsApp <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section id="why-us" className="py-24 bg-[#FEFEFE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#206E66] bg-[#206E66]/10 px-4 py-1.5 rounded-full inline-block mb-3 border border-[#206E66]/15">
              Why Bajwa
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Why Choose Us
            </h2>
            <p className="text-[#67777E] mt-3 text-base">
              Built on quality, trust, and deep technical understanding.
            </p>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {whyUsItems.map((item, idx) => (
              <div
                key={idx}
                className="group text-center p-8 rounded-3xl bg-white border border-gray-100/80 shadow-sm hover:shadow-xl hover:border-[#206E66]/20 transition-all duration-300 hover:-translate-y-1.5"
              >
                {/* Clean White Image Wrapper (No Background / No Hover Filter Impact) */}
                <div className="w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={70}
                    height={70}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-[#67777E] text-sm leading-relaxed max-w-xs mx-auto">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Brand Trust Banner */}
          <div className="mt-16 bg-[#206E66]/5 rounded-3xl p-8 border border-[#206E66]/15 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#206E66] text-white rounded-2xl flex items-center justify-center shadow-md shadow-[#206E66]/20 shrink-0">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <span className="text-sm font-bold text-gray-900 block">
                  100% Genuine Parts Guarantee
                </span>
                <span className="text-xs text-[#67777E] font-medium">
                  Sourced directly from trusted global suppliers
                </span>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2 text-sm font-semibold text-gray-800">
                <CheckCircle2 className="w-5 h-5 text-[#206E66]" /> Wholesale & Retail
              </span>
              <span className="flex items-center gap-2 text-sm font-semibold text-gray-800">
                <CheckCircle2 className="w-5 h-5 text-[#206E66]" /> Fast Dispatch
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="px-10 lg:px-20 ">
        <div className="lg:col-span-7">
          <div className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-lg shadow-gray-100/50">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-[#206E66]/10 rounded-2xl flex items-center justify-center shrink-0">
                <MessageSquare className="w-6 h-6 text-[#206E66]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Quick Enquiry</h3>
                <p className="text-[#67777E] text-sm">
                  Send your part number, model, and quantity. We'll reply via WhatsApp immediately.
                </p>
              </div>
            </div>

            <form onSubmit={handleWhatsAppSend} className="space-y-4">
              <div>
                <textarea
                  rows={4}
                  value={inquiryText}
                  onChange={(e) => setInquiryText(e.target.value)}
                  placeholder="Example: I need clutch plates and front brake shoes for a TVS King 2021 model."
                  className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#206E66] focus:border-transparent text-sm resize-none"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#206E66] hover:bg-[#18534d] text-white py-4 rounded-2xl font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 fill-current" /> Send Enquiry via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>


      {/* mapview section */}
      <MapViewSection />

      {/* ===== FOOTER ===== */}
      <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <span className="text-lg font-black text-white tracking-tight">
              BAJWA<span className="text-[#206E66]">.</span> Enterprises
            </span>
            <p className="text-xs text-gray-500 mt-1">
              © {new Date().getFullYear()} Bajwa Enterprises. All rights reserved.
            </p>
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#products" className="hover:text-white transition-colors">Products</a>
            <a href="#why-us" className="hover:text-white transition-colors">Why Us</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}