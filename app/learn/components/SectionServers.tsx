"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp } from "@/app/components/ui/MotionSection";

// Local Section 4 device visual for the "Servers where it matters" section
const SERVERS_DEVICE_IMAGE = "/images/iphone-server.png";

export default function SectionServers() {
  return (
    <section
      id="learn-section-4"
      className="border-t border-zinc-100 bg-white px-6 py-24 md:py-32 min-h-[80vh] flex items-center"
    >
      {/* Grid layout mirrors Section 2, but with device on the left and text on the right */}
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        {/* Left column – servers device visual (no surrounding box/shadow) */}
        <motion.div
          className="flex justify-center md:justify-start"
          variants={fadeInUp}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          <Image
            src={SERVERS_DEVICE_IMAGE}
            alt="Phone showing Cowvert server locations and connection strength"
            width={470}
            height={950}
            className="h-auto w-auto max-w-xs md:max-w-sm lg:max-w-md object-contain transform origin-center scale-[0.8]"
          />
        </motion.div>

        {/* Right column – copy from the Figma design */}
        <div className="flex flex-col gap-6 text-right items-end">
          {/* Overline label */}
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
            Fast. Global. Honest.
          </p>

          {/* Main heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900">
            Servers where it matters — not everywhere just to look impressive.
          </h2>

          {/* Supporting paragraph */}
          <p className="max-w-xl text-base md:text-lg text-zinc-600">
            Cowvert connects you through trusted, performance-focused regions —
            no filler locations, no shady middlemen. <br /> Just fast, secure
            routing with zero tracking.
          </p>
        </div>
      </div>
    </section>
  );
}
