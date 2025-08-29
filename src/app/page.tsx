import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import Image from "next/image";
import { designs } from "@/data/designs";
import Link from "next/link";
import { FaPenRuler } from "react-icons/fa6";
import { ArrowRight, Landmark, Users, Star } from "lucide-react";

export default function HomePage() {
  const featuredDesigns = designs.slice(0, 3);

  return (
    <div className="bg-brand-off-white">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <Image
          src="/hero-background.jpg"
          alt="Modern architectural home"
          fill
          style={{ objectFit: "cover" }}
          className="z-0"
          quality={90}
          priority
        />
        <div className="relative z-20 text-center p-4">
          <h1 className="text-4xl md:text-7xl font-serif text-white mb-4">
            Architecture That Inspires
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 font-light">
            ManziHomes brings your vision to life with bespoke architectural
            designs and expert construction services that blend elegance with
            functionality.
          </p>
          <div className="flex justify-center gap-4">
            <Button href="/designs">Explore Designs</Button>
            <Button href="/services" variant="secondary">
              Our Services
            </Button>
          </div>
        </div>
      </section>

      {/* About Us Snippet */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <Image
              src="/about-snippet.jpg"
              alt="Blueprint and tools"
              width={800}
              height={600}
              className="rounded-sm"
            />
          </Reveal>
          <Reveal>
            <h2 className="text-brand-green mb-4">Welcome to ManziHomes</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              At ManziHomes, we believe that great architecture has the power to
              shape lives. Founded on the principles of innovation, integrity,
              and sustainability, we are a team of passionate architects and
              builders dedicated to creating spaces that are not only beautiful
              but also deeply personal and enduring.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center text-brand-green font-bold group"
            >
              Learn More About Us
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Featured Designs Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-center text-brand-green mb-4">
              Featured Designs
            </h2>
            <p className="text-center max-w-2xl mx-auto mb-12 text-gray-600">
              Discover a selection of our most popular and innovative
              architectural plans, crafted with precision and creativity.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDesigns.map((design, index) => (
              <Reveal key={design.id} delay={index * 0.1}>
                <Link
                  href={`/designs/${design.slug}`}
                  className="group block bg-white shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="overflow-hidden">
                    <Image
                      src={design.image}
                      alt={design.title}
                      width={800}
                      height={600}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-brand-gold font-semibold tracking-wider">
                      {design.category.toUpperCase()}
                    </p>
                    <h3 className="text-xl font-serif mt-2 text-brand-dark group-hover:text-brand-green transition-colors">
                      {design.title}
                    </h3>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-center text-brand-green mb-12">
              Why Partner With Us?
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <Reveal delay={0.1} className="text-center">
              <div className="inline-block p-4 bg-brand-gold/10 rounded-full mb-4">
                <FaPenRuler className="w-8 h-8 text-brand-gold" />
              </div>
              <h3 className="text-xl font-serif mb-2">Bespoke Designs</h3>
              <p className="text-gray-600">
                Every plan is tailored to your unique lifestyle, preferences,
                and the specific character of your site.
              </p>
            </Reveal>
            <Reveal delay={0.2} className="text-center">
              <div className="inline-block p-4 bg-brand-green/10 rounded-full mb-4">
                <Landmark className="w-8 h-8 text-brand-green" />
              </div>
              <h3 className="text-xl font-serif mb-2">Full-Service Firm</h3>
              <p className="text-gray-600">
                From initial surveys to final construction, we offer a seamless,
                integrated process under one roof.
              </p>
            </Reveal>
            <Reveal delay={0.3} className="text-center">
              <div className="inline-block p-4 bg-brand-gold/10 rounded-full mb-4">
                <Users className="w-8 h-8 text-brand-gold" />
              </div>
              <h3 className="text-xl font-serif mb-2">
                Client-Centric Approach
              </h3>
              <p className="text-gray-600">
                Your vision is our blueprint. We collaborate closely with you at
                every stage to ensure your dream is realized.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-brand-green text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-center text-white mb-12">
              What Our Clients Say
            </h2>
          </Reveal>
          <Reveal>
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-brand-gold fill-current"
                  />
                ))}
              </div>
              <blockquote className="text-2xl font-serif italic mb-6">
                "Working with ManziHomes was an absolute pleasure. They
                transformed our vague ideas into a stunning, functional home
                that exceeded all our expectations. The attention to detail was
                remarkable."
              </blockquote>
              <p className="font-bold tracking-wider">- The Omondi Family</p>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
