"use client";

import React from "react";
import { MapPin, Phone, Clock, ExternalLink, Navigation } from "lucide-react";

export default function MapViewSection() {
  const googleMapsDirectionsUrl =
    "https://www.google.com/maps/dir//Bajwa+Enterprises+Tuktuk+Spare+Parts,+Mwabundu+Rd,+Mombasa/@-4.0511452,39.6827742,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x184012cffa86c035:0x390f1a2339edee0c!2m2!1d39.6616395!2d-4.0518939?entry=ttu";

  const mapEmbedUrl =
    "https://maps.google.com/maps?q=-4.0518939,39.6616395&hl=en&z=16&output=embed";

  return (
    <section id="location" className="py-24 bg-[#FEFEFE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#206E66] bg-[#206E66]/10 px-4 py-1.5 rounded-full inline-block mb-3 border border-[#206E66]/15">
            Visit Our Store
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Find Us in Mombasa
          </h2>
          <p className="text-[#67777E] mt-3 text-base">
            Located along Mwabundu Road. Stop by for direct spare parts pickup or technical consultations.
          </p>
        </div>

        {/* Map & Location Card Container */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Location Info Card */}
          <div className="lg:col-span-4 bg-white p-8 rounded-3xl border border-gray-100 shadow-lg shadow-gray-100/60 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-6 border-b border-gray-100">
                <div className="w-12 h-12 rounded-2xl bg-[#206E66]/10 text-[#206E66] flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-extrabold text-gray-900 text-lg">
                    Bajwa Enterprises
                  </h3>
                  <p className="text-xs font-semibold text-[#206E66]">
                    Tuktuk & Three-Wheeler Spares
                  </p>
                </div>
              </div>

              {/* Address Details */}
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#206E66] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-900 block">Physical Address</span>
                    <p className="text-[#67777E]">
                      WMX6+6MR, Mwabundu Rd,<br />
                      Mombasa, Kenya
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Navigation className="w-5 h-5 text-[#206E66] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-900 block">Postal Address</span>
                    <p className="text-[#67777E]">P.O. Box 87353 – 80100 Mombasa</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#206E66] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-900 block">Opening Hours</span>
                    <p className="text-[#67777E]">Monday – Saturday: 8:00 AM – 6:00 PM</p>
                    <p className="text-xs font-semibold text-red-500 mt-0.5">Sunday Closed</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#206E66] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-900 block">Call / WhatsApp</span>
                    <p className="text-[#206E66] font-bold">+254 745 131 313</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-8 border-t border-gray-100 mt-6 space-y-3">
              <a
                href={googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#206E66] hover:bg-[#18534d] text-white px-6 py-3.5 rounded-2xl font-bold text-sm shadow-md shadow-[#206E66]/20 transition-all hover:-translate-y-0.5"
              >
                <Navigation className="w-4 h-4 fill-current" /> Get Directions
              </a>
              <a
                href={googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-gray-50 hover:bg-gray-100 text-gray-800 px-6 py-3 rounded-2xl font-semibold text-xs transition-colors border border-gray-200/80"
              >
                Open in Google Maps <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Embedded Google Map Frame */}
          <div className="lg:col-span-8 relative min-h-[420px] rounded-3xl overflow-hidden border border-gray-200/80 shadow-lg shadow-gray-100/60 bg-gray-100">
            <iframe
              title="Bajwa Enterprises Tuktuk Spare Parts Map"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "420px" }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={mapEmbedUrl}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}