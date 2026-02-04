"use client";

import Image from "./components/Image";
import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function OurStoryPage() {

  const root = document.getElementById('root');
  const images = {
    tennisCourt: root?.dataset.imageTennisCourt || '',
    grips: root?.dataset.imageGrips || '',
    founder1: root?.dataset.imageFounder1 || '',
    founder2: root?.dataset.imageFounder2 || '',
  };

  return (
    <main className="min-h-screen bg-[#FFFFFF] text-[#333333] overflow-hidden">
      {/* Hero Section - Full bleed with editorial typography */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      <Image
          src={images.tennisCourt}
          alt="Luxury tennis court at golden hour"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-[#F9F4EB]/90" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-10 text-center"
        >
          <p className="text-xs tracking-[0.5em] uppercase text-white/80 mb-6">
            The Court is Her Runway
          </p>
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl tracking-wide text-white">
            Our Story
          </h1>
        </motion.div>
        
        {/* Decorative gold line */}
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-[2px] bg-[#C8A974]"
        />
      </section>

      {/* Why Tessi Section */}
      <section className="py-24 md:py-32 bg-[#F9F4EB]">
        {/* Opening Statement with decorative element */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-20 md:mb-28"
        >
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-[1px] bg-[#C8A974]" />
            <p className="text-xs tracking-[0.4em] uppercase text-[#C8A974] font-medium">
              Why Tessi
            </p>
          </div>
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.1] max-w-5xl text-[#333333]">
            The answer to a question the sports industry{" "}
            <span className="italic text-[#D4A5A5]">stopped asking.</span>
          </h2>
        </motion.div>

        {/* Image + Text Asymmetric Layout */}
        <div className="relative px-6 md:px-0">
          {/* Large Image with gold border accent */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-2/3 lg:w-[55%] relative z-10 md:ml-12 lg:ml-24"
          >
            <div className="relative">
              {/* Gold accent frame */}
              <div className="absolute -top-4 -left-4 w-32 h-32 border-t-2 border-l-2 border-[#C8A974] z-20" />
              <div className="relative aspect-[4/5] md:aspect-[3/4]">
              <Image
                src={images.tennisCourt}
                alt="Luxury tennis court at golden hour"
                fill
                className="object-cover"
                priority
              />
            </div>
            </div>
          </motion.div>

          {/* Overlapping Text Block */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative md:absolute md:right-6 lg:right-24 md:top-1/2 md:-translate-y-1/2 md:w-[45%] lg:w-[40%] z-20 bg-[#FFFFFF] p-8 md:p-12 lg:p-16 -mt-20 md:mt-0 mx-6 md:mx-0 shadow-xl"
          >
            <p className="text-lg md:text-xl leading-relaxed text-[#666666] mb-6">
              Most brands treat women&apos;s sports equipment as an
              afterthought—or worse, they just{" "}
              <span className="text-[#333333] font-medium">&quot;shrink it and pink it.&quot;</span>
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-[#666666] mb-6">
              Tessi is different. We are the first brand to approach tennis gear
              as <span className="text-[#333333] font-serif italic">couture accessories</span>{" "}
              rather than just utility items.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-[#666666]">
              We blend high-fashion aesthetics with pro-grade performance. We
              curate collections inspired by luxury fashion houses, designed for
              the modern woman who views the court as her runway.
            </p>
          </motion.div>
        </div>

        {/* Brand Pillars - Card style with hover effects */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="mt-32 md:mt-40 px-6 md:px-12 lg:px-24"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  num: "01",
                  title: "Fashion-First",
                  desc: "We believe your grip should match your fit, not clash with it.",
                  bg: "#FBE8E8"
                },
                {
                  num: "02",
                  title: "Uncompromising",
                  desc: "We use tacky, absorbent, pro-comfort materials because looking good shouldn't mean playing bad.",
                  bg: "#FFFFFF"
                },
                {
                  num: "03",
                  title: "Modern Athlete",
                  desc: "We are redefining femininity in sports, proving that you can be powerful and pretty.",
                  bg: "#F9F4EB"
                }
              ].map((pillar) => (
                <motion.div
                  key={pillar.num}
                  variants={fadeIn}
                  className="group p-10 md:p-12 transition-all duration-500 hover:shadow-lg cursor-default"
                  style={{ backgroundColor: pillar.bg }}
                >
                  <span className="text-[#C8A974] text-sm tracking-[0.3em] font-medium">
                    {pillar.num}
                  </span>
                  <h3 className="font-serif text-3xl md:text-4xl mt-6 mb-6 text-[#333333] group-hover:text-[#C8A974] transition-colors duration-300">
                    {pillar.title}
                  </h3>
                  <p className="text-[#666666] leading-relaxed">
                    {pillar.desc}
                  </p>
                  <div className="w-8 h-[2px] bg-[#C8A974] mt-8 group-hover:w-16 transition-all duration-500" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Meet the Founder Section */}
      <section className="py-24 md:py-32 bg-[#FFFFFF]">
        <div className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-20"
          >
            <div className="w-12 h-[1px] bg-[#C8A974]" />
            <p className="text-xs tracking-[0.4em] uppercase text-[#C8A974] font-medium">
              Meet the Founder
            </p>
          </motion.div>

          {/* First Block: Text Left, Image Right */}
          <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center mb-10 md:mb-20">
            {/* Text - order-2 on mobile, order-1 on desktop */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 md:order-1 md:flex-1"
            >
              <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl mb-4 text-[#333333]">
                Hi, I&apos;m Liv.
              </h2>
              <div className="w-16 h-[2px] bg-[#C8A974] mb-8" />
              <p className="font-serif text-xl md:text-2xl text-[#D4A5A5] italic mb-10">
                23 years old. Former collegiate athlete. Founder of Tessi.
              </p>
              <div className="space-y-6 text-[#666666] leading-relaxed text-lg">
                <p>
                  My journey didn&apos;t start in a boardroom; it started on a
                  tennis court. I was a student-athlete playing college tennis,
                  spending hours perfecting my game. I loved the sport, and I loved
                  the fashion that came with it—the skirts, the dresses, the style.
                </p>
                <p>But every time I looked down at my racket, I saw a disconnect.</p>
                <p>
                  I realized that for decades, women in tennis have been handed the
                  same equipment designed for men. While fashion on the court had
                  evolved, the accessories had remained stuck in the past.
                </p>
              </div>
            </motion.div>

            {/* Image - order-1 on mobile, order-2 on desktop */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="order-1 md:order-2 md:flex-1 w-full"
            >
              <div className="relative">
                {/* Gold accent frame */}
                <div className="absolute -bottom-4 -right-4 w-32 h-32 border-b-2 border-r-2 border-[#C8A974] z-0" />
                <div className="relative aspect-[4/5] w-full z-10">
                <Image
                  src={images.grips}
                  alt="Tessi luxury tennis grips collection"
                  fill
                  className="object-cover"
                />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Quote Callout - Elevated design */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative py-16 md:py-24 my-10 md:my-20"
          >
            {/* Decorative quotes */}
            <span className="absolute top-0 left-0 md:left-12 text-[120px] md:text-[200px] font-serif text-[#FBE8E8] leading-none select-none">
              &ldquo;
            </span>
            <div className="relative z-10 max-w-4xl mx-auto text-center px-8">
              <p className="font-serif text-3xl md:text-5xl lg:text-6xl italic leading-tight text-[#333333]">
                The outfit was cute.
                <br />
                <span className="text-[#D4A5A5]">The racket was dull.</span>
              </p>
            </div>
            <div className="w-24 h-[2px] bg-[#C8A974] mx-auto mt-12" />
          </motion.div>

          {/* Second Block: Image Left, Text Right */}
          <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:flex-1 w-full"
            >
              <div className="relative">
                {/* Gold accent frame */}
                <div className="absolute -top-4 -left-4 w-32 h-32 border-t-2 border-l-2 border-[#C8A974] z-0" />
                <div className="relative aspect-[4/5] w-full z-10">
                <Image
                  src={images.grips}
                  alt="Tessi luxury tennis grips collection"
                  fill
                  className="object-cover"
                />
                </div>
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="md:flex-1 space-y-6 text-[#666666] leading-relaxed text-lg"
            >
              <p>
                During a two-week Christmas break, I taught myself everything from
                product design to supply chain management via YouTube. I designed
                my first patterns, used my iPhone and a Walgreens posterboard to
                take my first product photos, and poured my life savings into my
                first inventory run.
              </p>
              <p>
                I quit the corporate job. I traveled the world. And I came back
                with a singular vision: to build something bigger than just a
                &quot;cute grip.&quot; I wanted to build a{" "}
                <span className="text-[#333333] italic">legacy brand</span>.
              </p>

              <div className="pt-10 border-t border-[#F9F4EB] mt-10">
                <p className="font-serif text-xl text-[#333333]">See you on the court,</p>
                <p className="font-serif text-4xl mt-4 text-[#C8A974] italic">Liv</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Bigger Mission Section */}
      <section className="py-28 md:py-36 px-6 md:px-12 lg:px-24 bg-[#FBE8E8]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="w-12 h-[1px] bg-[#C8A974]" />
            <p className="text-xs tracking-[0.4em] uppercase text-[#C8A974] font-medium">
              The Bigger Mission
            </p>
            <div className="w-12 h-[1px] bg-[#C8A974]" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-14 text-[#333333]">
            More than a brand.
            <br />
            <span className="italic text-[#D4A5A5]">A roadmap.</span>
          </h2>
          <div className="space-y-6 text-lg md:text-xl leading-relaxed text-[#666666]">
            <p>
              I want Tessi to be a roadmap for other young women who dream of
              building something of their own.
            </p>
            <p>
              I quit the &quot;safe&quot; corporate path to solo-build this
              company from scratch, and I&apos;m documenting the entire journey
              to show you that{" "}
              <span className="text-[#333333] font-medium">it&apos;s possible</span>.
            </p>
            <p>
              I want this brand to inspire you to take up space, trust your
              vision, and feel empowered to start your own company—whether
              that&apos;s in sports, fashion, or beyond.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-20 relative"
          >
            <div className="w-16 h-[2px] bg-[#C8A974] mx-auto mb-10" />
            <p className="font-serif text-2xl md:text-3xl italic text-[#333333] leading-snug">
              &quot;Take up space. Trust your vision. Build your legacy.&quot;
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 md:py-32 px-6 bg-[#FFFFFF]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="font-serif text-3xl md:text-4xl mb-10 text-[#333333]">
            Ready to elevate your game?
          </p>
          <a
            href="/"
            className="inline-block bg-[#C8A974] text-white px-14 py-5 text-sm tracking-[0.25em] uppercase hover:bg-[#B89A64] transition-colors duration-300"
          >
            Join the Waitlist
          </a>
        </motion.div>
      </section>
    </main>
  );
}
