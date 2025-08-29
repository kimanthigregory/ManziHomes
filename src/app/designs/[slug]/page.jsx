import { designs } from "@/data/designs";
import { notFound } from "next/navigation";
import Image from "next/image";
import Button from "@/components/Button";
import { BedDouble, Bath, Square, Layers } from "lucide-react";

// For generating static pages at build time
export async function generateStaticParams() {
  return designs.map((design) => ({ slug: design.slug }));
}

// For generating metadata dynamically
export async function generateMetadata({ params }) {
  // Await the params object
  const resolvedParams = await params;
  const design = designs.find((d) => d.slug === resolvedParams.slug);

  if (!design) {
    return {
      title: "Design Not Found | ManziHomes",
      description: "The requested architectural design could not be found.",
    };
  }
  return {
    title: `${design.title} | ManziHomes`,
    description: design.description,
  };
}

// MAKE THIS COMPONENT ASYNC
export default async function DesignDetailPage({ params }) {
  // Await the params object
  const resolvedParams = await params;
  const design = designs.find((d) => d.slug === resolvedParams.slug);

  if (!design) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 mt-20">
      {" "}
      {/* Added mt-20 for spacing */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        <div className="lg:col-span-3">
          <Image
            src={design.image}
            alt={design.title}
            width={1200}
            height={800}
            className="w-full h-auto object-cover mb-4 rounded-lg shadow-lg"
            priority
          />
          {/* You can map over design.images here for a gallery */}
        </div>

        <div className="lg:col-span-2">
          <p className="text-brand-gold mb-2 font-semibold tracking-wider">
            {design.category.toUpperCase()}
          </p>
          <h1 className="text-brand-green mb-6">{design.title}</h1>
          <p className="text-gray-600 leading-relaxed mb-8">
            {design.description}
          </p>

          <div className="border-t border-b border-gray-200 py-6 mb-8">
            <h3 className="text-2xl font-serif text-brand-dark mb-4">
              Specifications
            </h3>
            <div className="grid grid-cols-2 gap-4 text-gray-700">
              <div className="flex items-center">
                <BedDouble className="w-5 h-5 mr-3 text-brand-green" />{" "}
                {design.specs.bedrooms} Bedrooms
              </div>
              <div className="flex items-center">
                <Bath className="w-5 h-5 mr-3 text-brand-green" />{" "}
                {design.specs.bathrooms} Bathrooms
              </div>
              <div className="flex items-center">
                <Square className="w-5 h-5 mr-3 text-brand-green" />{" "}
                {design.specs.area} m²
              </div>
              <div className="flex items-center">
                <Layers className="w-5 h-5 mr-3 text-brand-green" />{" "}
                {design.specs.floors} Floor(s)
              </div>
            </div>
          </div>

          <Button href="/contact">Inquire About This Design</Button>
        </div>
      </div>
    </div>
  );
}
