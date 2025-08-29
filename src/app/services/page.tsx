import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import { FaPenRuler } from "react-icons/fa6";
import { Landmark, ClipboardCheck, Construction } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore our comprehensive architectural and construction services, from initial land surveying and bespoke design to project management and final construction.",
};

const services = [
  {
    icon: FaPenRuler,
    title: "Architectural Design",
    description:
      "We craft bespoke architectural plans for apartments, bungalows, and villas. Our design philosophy balances aesthetic appeal with structural integrity and functionality, ensuring your space is both beautiful and livable.",
  },
  {
    icon: Landmark,
    title: "Land Surveying",
    description:
      "Precision is key. Our expert surveyors use state-of-the-art equipment to provide accurate topographical and boundary surveys, laying a solid foundation for any successful construction project.",
  },
  {
    icon: ClipboardCheck,
    title: "Project Management",
    description:
      "Let us handle the complexities. We oversee your project from conception to completion, managing timelines, budgets, and contractors to ensure a smooth and transparent process.",
  },
  {
    icon: Construction,
    title: "Construction Services",
    description:
      "Our skilled construction team brings architectural visions to life. We are committed to quality craftsmanship, using premium materials and adhering to the highest standards of safety and excellence.",
  },
];

export default function ServicesPage() {
  return (
    <div>
      {/* Page Header */}
      <header className="bg-brand-green text-white py-20 text-center">
        <Reveal>
          <h1 className="text-5xl">Our Services</h1>
          <p className="max-w-2xl mx-auto mt-4 text-lg">
            Comprehensive solutions for every step of your project.
          </p>
        </Reveal>
      </header>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <Reveal key={index} delay={index * 0.1}>
                <div className="flex">
                  <div className="mr-6">
                    <service.icon className="w-12 h-12 text-brand-gold" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif text-brand-dark mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-off-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="text-brand-green mb-4">
              Ready to Build Your Dream?
            </h2>
            <p className="max-w-xl mx-auto text-gray-700 mb-8">
              Let&apos;s discuss how our expertise can bring your architectural
              vision to life.
            </p>
            <Button href="/contact">Start a Project</Button>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
