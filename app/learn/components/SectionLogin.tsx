"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp } from "@/app/components/ui/MotionSection";

// Local device/login visual for Section 2
const LOGIN_DEVICE_IMAGE = "/images/iphone-logins.png";

export default function SectionLogin() {
  return (
    <section
      id="learn-section-2"
      className="border-t border-zinc-100 bg-white px-6 py-24 md:py-32 min-h-[80vh] flex items-center"
    >
      {/* Use a responsive grid: text on the left, device visual on the right */}
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        {/* Left column – copy from the Figma design */}
        <div className="flex flex-col gap-6">
          {/* Overline label */}
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
            No accounts. No friction.
          </p>

          {/* Main heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900">
            Login only if you want to.
          </h2>

          {/* Supporting paragraph */}
          <p className="max-w-xl text-base md:text-lg text-zinc-600">
            Cowvert works without sign-ups — but if you prefer to sync settings
            or unlock the lifetime plan across devices, you can use a
            lightweight login. <br /> No tracking. No data selling. Ever.
          </p>
        </div>

        {/* Right column – phone/login device visual without extra box/shadow */}
        <motion.div
          className="flex justify-center md:justify-end"
          variants={fadeInUp}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          <Image
            src={LOGIN_DEVICE_IMAGE}
            alt="Phone showing Cowvert login screen"
            width={452}
            height={914}
            className="h-auto w-auto max-w-xs md:max-w-sm lg:max-w-md object-contain transform origin-center scale-[0.8]"
          />
        </motion.div>
      </div>
    </section>
  );
}
