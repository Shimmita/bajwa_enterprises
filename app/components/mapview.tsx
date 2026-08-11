"use client";

import React from "react";
import { MapPin, Phone, Clock, ExternalLink, Navigation } from "lucide-react";

export default function MapViewSection() {
  const googleMapsDirectionsUrl =
    "https://www.google.com/maps/dir//Bajwa+Enterprises+Tuktuk+Spare+Parts,+Mwabundu+Rd,+Mombasa/@-4.0511452,39.6827742,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x184012cffa86c035:0x390f1a2339edee0c!2m2!1d39.6616395!2d-4.0518939?entry=ttu";

  const mapEmbedUrl =
    "https://maps.google.com/maps?q=-4.0518939,39.6616395&hl=en&z=16&output=embed";

  return (
    <section id="location" className="py-20 bg-gray-50/70 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block">
            <h2 className="text-2xl font-black tracking-wider uppercase text-gray-900">
              Visit Our Store
            </h2>
            <div className="w-10 h-1 bg-[#E11D23] mx-auto mt-2 rounded-full" />
          </div>
          <p className="text-gray-500 mt-3 text-xs sm:text-sm max-w-xl mx-auto">
            Located along Mwabundu Road, Mombasa. Stop by for direct spare parts pickup or technical consultations.
          </p>
        </div>

        {/* Map & Location Card Container */}
        <div className="grid lg:grid-cols-12 gap-6 items-stretch">
          {/* Location Info Card */}
          <div className="lg:col-span-4 bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-6 border-b border-gray-100">
                <div className="w-12 h-12 rounded-xl bg-red-50 text-[#E11D23] flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-black text-gray-900 text-base uppercase tracking-tight">
                    Bajwa Enterprises
                  </h3>
                  <p className="text-[11px] font-bold text-[#E11D23] uppercase tracking-wider">
                    Tuk-Tuk & Three-Wheeler Spares
                  </p>
                </div>
              </div>

              {/* Address Details */}
              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#E11D23] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-900 block uppercase tracking-wider text-[11px]">
                      Physical Address
                    </span>
                    <p className="text-gray-600 mt-0.5">
                      WMX6+6MR, Mwabundu Rd, <br />
                      Mombasa, Kenya
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Navigation className="w-4 h-4 text-[#E11D23] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-900 block uppercase tracking-wider text-[11px]">
                      Postal Address
                    </span>
                    <p className="text-gray-600 mt-0.5">P.O. Box 87353 – 80100 Mombasa</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#E11D23] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-900 block uppercase tracking-wider text-[11px]">
                      Opening Hours
                    </span>
                    <p className="text-gray-600 mt-0.5">Mon – Sat: 8:00 AM – 6:00 PM</p>
                    <p className="text-[11px] font-bold text-[#E11D23] mt-0.5">Sunday Closed</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#E11D23] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-900 block uppercase tracking-wider text-[11px]">
                      Call / WhatsApp
                    </span>
                    <p className="text-gray-900 font-bold mt-0.5">+254 745 131 313</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 border-t border-gray-100 mt-6 space-y-2.5">
              <a
                href={googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#E11D23] hover:bg-[#b81419] text-white px-5 py-3 rounded-xl font-bold text-xs uppercase tracking-wider shadow-sm transition-all"
              >
                <Navigation className="w-3.5 h-3.5 fill-current" /> Get Directions
              </a>
              <a
                href={googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-700 px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors border border-gray-200"
              >
                Open in Maps <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Embedded Google Map Frame */}
          <div className="lg:col-span-8 relative min-h-[380px] lg:min-h-full rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-gray-100">
            <iframe
              title="Bajwa Enterprises Tuktuk Spare Parts Map"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "380px" }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={mapEmbedUrl}
            />
          </div>
        </div>
      </div>
    </section>
  );
}