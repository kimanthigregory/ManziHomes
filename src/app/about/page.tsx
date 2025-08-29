import Reveal from "@/components/Reveal";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About ManziHomes",
  description:
    "Learn about ManziHomes, our mission to create inspiring and sustainable architecture, and the passionate team behind our designs.",
};

export default function AboutPage() {
  return (
    <div>
      {/* Page Header */}
      <header className="relative py-20 flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-brand-green  z-10"></div>
        <Image
          src="/images/about-hero.jpg"
          alt="Team collaboration over blueprints"
          fill
          style={{ objectFit: "cover" }}
          className="z-0"
          quality={85}
        />
        <div className="relative z-20 text-center p-4">
          <Reveal>
            <h1 className="text-5xl md:text-6xl">About ManziHomes</h1>
            <p className="mt-4 text-xl">
              Designing the future, building with integrity.
            </p>
          </Reveal>
        </div>
      </header>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Reveal>
              <h2 className="text-brand-green mb-6">Our Story</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                ManziHomes was born from a shared passion for transformative
                architecture. Our founders, a visionary architect and a seasoned
                builder, saw a need for a design-build firm in Kenya that truly
                listens to its clients. We set out to create a company that not
                only delivers stunning designs and robust construction but also
                builds lasting relationships based on trust, transparency, and a
                commitment to excellence.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-brand-off-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
          <Reveal>
            <h3 className="text-3xl font-serif text-brand-gold mb-4">
              Our Mission
            </h3>
            <p className="text-gray-700 leading-relaxed">
              To design and construct exceptional, sustainable, and personalized
              living spaces that enhance the quality of life for our clients and
              their communities. We are dedicated to innovative design, superior
              craftsmanship, and a client-focused process from start to finish.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <h3 className="text-3xl font-serif text-brand-gold mb-4">
              Our Vision
            </h3>
            <p className="text-gray-700 leading-relaxed">
              To be the leading architectural design and construction firm in
              East Africa, recognized for our creative excellence, unwavering
              commitment to quality, and positive impact on the built
              environment.
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
