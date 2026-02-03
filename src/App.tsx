import { motion } from "framer-motion";
import Image from "./components/Image";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
};

export default function OurStoryPage() {
  // Get images from data attributes
  const root = document.getElementById('root');
  const images = {
    tennisCourt: root?.dataset.imageTennisCourt || '',
    grips: root?.dataset.imageGrips || '',
    founder1: root?.dataset.imageFounder1 || '',
    founder2: root?.dataset.imageFounder2 || '',
  };

  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end justify-start overflow-hidden">
        <Image
          src={images.tennisCourt}
          alt="Luxury tennis court at golden hour"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 px-6 md:px-12 lg:px-24 pb-12 md:pb-16"
        >
          <p className="text-xs tracking-[0.4em] uppercase text-white/70 mb-3">
            The Court is Her Runway
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-wide text-white">
            Our Story
          </h1>
        </motion.div>
      </section>

      {/* Why Tessi Section */}
      <section className="py-20 md:py-28">
        {/* Opening Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-16 md:mb-24"
        >
          <p className="text-md tracking-[0.4em] uppercase text-accent mb-8">
            Why Tessi
          </p>
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.1] max-w-5xl">
            The answer to a question the sports industry{" "}
            <span className="italic text-muted-foreground">stopped asking.</span>
          </h2>
        </motion.div>

        {/* Image + Text Overlap Layout */}
        <div className="relative">
          {/* Large Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-2/3 lg:w-1/2 relative z-10"
          >
            <div className="relative aspect-[4/5] md:aspect-[3/4]">
              <Image
                src={images.grips}
                alt="Tessi luxury tennis grips collection"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Overlapping Text Block */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 md:w-1/2 lg:w-[45%] z-20 bg-background p-8 md:p-12 lg:p-16 -mt-16 md:mt-0 mx-6 md:mx-0 shadow-sm"
          >
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground mb-6">
              Most brands treat women&apos;s sports equipment as an
              afterthought—or worse, they just{" "}
              <span className="text-foreground">&quot;shrink it and pink it.&quot;</span>
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground mb-6">
              Tessi is different. We are the first brand to approach tennis gear
              as <span className="text-foreground font-serif italic">couture accessories</span>{" "}
              rather than just utility items.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
              We blend high-fashion aesthetics with pro-grade performance. We
              curate collections inspired by luxury fashion houses, designed for
              the modern woman who views the court as her runway.
            </p>
          </motion.div>
        </div>

        {/* Brand Pillars */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-24 md:mt-32 px-6 md:px-12 lg:px-24"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-0 border-t border-border">
              <motion.div
                variants={fadeIn}
                className="py-10 md:py-14 md:pr-10 border-b md:border-b-0 md:border-r border-border"
              >
                <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
                  01
                </span>
                <h3 className="font-serif text-3xl md:text-4xl mt-4 mb-4">
                  Fashion-First
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We believe your grip should match your fit, not clash with it.
                </p>
              </motion.div>
              <motion.div
                variants={fadeIn}
                className="py-10 md:py-14 md:px-10 border-b md:border-b-0 md:border-r border-border"
              >
                <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
                  02
                </span>
                <h3 className="font-serif text-3xl md:text-4xl mt-4 mb-4">
                  Uncompromising
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We use tacky, absorbent, pro-comfort materials because looking
                  good shouldn&apos;t mean playing bad.
                </p>
              </motion.div>
              <motion.div variants={fadeIn} className="py-10 md:py-14 md:pl-10">
                <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
                  03
                </span>
                <h3 className="font-serif text-3xl md:text-4xl mt-4 mb-4">
                  Modern Athlete
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We are redefining femininity in sports, proving that you can be
                  powerful and pretty.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Meet the Founder Section */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs tracking-[0.4em] uppercase text-accent mb-16"
          >
            Meet the Founder
          </motion.p>

          {/* First Block: Text Left, Image Right */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center mb-8 md:mb-16">
            {/* Text - order-2 on mobile, order-1 on desktop */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 md:order-1 md:flex-1"
            >
              <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl mb-6">
                Hi, I&apos;m Liv.
              </h2>
              <p className="font-serif text-xl md:text-2xl text-muted-foreground italic mb-8">
                23 years old. Former collegiate athlete. Founder of Tessi.
              </p>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
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
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src={images.tennisCourt}
                  alt="Liv, founder of Tessi"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* Quote Callout */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="py-12 md:py-16 border-y border-border my-8 md:my-16"
          >
            <p className="font-serif text-3xl md:text-5xl lg:text-6xl text-center italic leading-tight text-balance">
              &quot;The outfit was cute.<br className="hidden md:block" /> The racket was dull.&quot;
            </p>
          </motion.div>

          {/* Second Block: Image Left, Text Right */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:flex-1 w-full"
            >
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src={images.tennisCourt}
                  alt="Liv playing tennis"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="md:flex-1 space-y-6 text-muted-foreground leading-relaxed"
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
                <span className="text-foreground italic">legacy brand</span>.
              </p>

              <div className="pt-8">
                <p className="font-serif text-xl text-foreground">See you on the court,</p>
                <p className="font-serif text-4xl mt-3 italic">Liv</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Bigger Mission Section */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-xs tracking-[0.4em] uppercase text-accent mb-8">
            The Bigger Mission
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-12">
            More than a brand.
            <br />
            <span className="italic text-muted-foreground">A roadmap.</span>
          </h2>
          <div className="space-y-6 text-lg md:text-xl leading-relaxed text-muted-foreground">
            <p>
              I want Tessi to be a roadmap for other young women who dream of
              building something of their own.
            </p>
            <p>
              I quit the &quot;safe&quot; corporate path to solo-build this
              company from scratch, and I&apos;m documenting the entire journey
              to show you that{" "}
              <span className="text-foreground">it&apos;s possible</span>.
            </p>
            <p>
              I want this brand to inspire you to take up space, trust your
              vision, and feel empowered to start your own company—whether
              that&apos;s in sports, fashion, or beyond.
            </p>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="font-serif text-2xl md:text-3xl italic text-foreground leading-snug mt-16"
          >
            &quot;Take up space. Trust your vision. Build your legacy.&quot;
          </motion.p>
        </motion.div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 md:py-28 px-6 bg-secondary">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="font-serif text-3xl md:text-4xl mb-8">
            Ready to elevate your game?
          </p>
          <a
            href="/"
            className="inline-block border border-foreground px-12 py-5 text-sm tracking-[0.25em] uppercase hover:bg-foreground hover:text-background transition-colors duration-300"
          >
            Join the Waitlist
          </a>
        </motion.div>
      </section>
    </main>
  );
}