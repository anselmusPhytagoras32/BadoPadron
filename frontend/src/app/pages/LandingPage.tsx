import { useState } from "react";
import { Link } from "react-router";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ImageWithFallback } from "../components/ImageWithFallback";

const SERVICES = [
  {
    number: "1",
    title: "Custom Suits",
    description: "Clothes made to fit your exact body. We measure you carefully so your suit feels comfortable and looks perfect.",
  },
  {
    number: "2",
    title: "Custom Shirts",
    description: "Everyday shirts made from the best fabrics. Designed to fit your neck, arms, and body just right.",
  },
  {
    number: "3",
    title: "Alterations & Fixes",
    description: "We can fix, adjust, or change clothes you already own so they fit you better.",
  },
];

const GALLERY = [
  { id: 1, category: "Suits", title: "Dark Grey Suit", year: "2023", src: "https://images.unsplash.com/photo-1676278746065-487aa8848410?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW5zJTIwc3VpdCUyMHRhaWxvcnxlbnwxfHx8fDE3NzQ0NDk0NTV8MA&ixlib=rb-4.1.0&q=80&w=1080", alt: "Grey custom suit" },
  { id: 2, category: "Dresses", title: "Evening Dress", year: "2024", src: "https://images.unsplash.com/photo-1763336016192-c7b62602e993?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZXZlbmluZyUyMGRyZXNzfGVufDF8fHx8MTc3NDM5MTk5MHww&ixlib=rb-4.1.0&q=80&w=1080", alt: "Elegant evening gown" },
  { id: 3, category: "Shirts", title: "White Cotton Shirts", year: "2023", src: "https://images.unsplash.com/photo-1772290660319-ed78b7a2b469?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW5zJTIwZHJlc3MlMjBzaGlydHMlMjBmb2xkZWR8ZW58MXx8fHwxNzc0NDQ5NDU2fDA&ixlib=rb-4.1.0&q=80&w=1080", alt: "Folded bespoke shirts" },
  { id: 4, category: "Ties", title: "Silk Ties", year: "Past Work", src: "https://images.unsplash.com/photo-1724318497004-084cece3e7ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW5zJTIwdGllJTIwYWNjZXNzb3JpZXN8ZW58MXx8fHwxNzc0NDQ5NDU1fDA&ixlib=rb-4.1.0&q=80&w=1080", alt: "Silk ties collection" },
];

const CATEGORIES = ["ALL", "SUITS", "DRESSES", "SHIRTS", "TIES"];

export function LandingPage() {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const filteredGallery = GALLERY.filter(
    (item) => activeCategory === "ALL" || item.category.toUpperCase() === activeCategory
  );

  return (
    <div className="min-h-screen bg-[#FBFBF9] text-stone-900 font-sans selection:bg-stone-900 selection:text-[#FBFBF9]">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <p className="text-xs font-bold tracking-[0.3em] text-stone-500 uppercase mb-6 border-b border-stone-300 pb-2">
            Tailor Shop
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-stone-900 tracking-tight leading-[1.1] max-w-4xl">
            Beautiful Clothes, <br/><i className="font-light text-stone-600">Made Just For You.</i>
          </h1>
        </div>

        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] bg-stone-200 overflow-hidden">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1761333482894-700fc6aebd47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWlsb3IlMjBzaG9wJTIwaW5zaWRlfGVufDF8fHx8MTc3NDQ0OTQ1NXww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Inside our tailor shop"
            className="w-full h-full object-cover grayscale-[20%] contrast-125"
          />
        </div>
        <div className="flex justify-between items-start mt-6 text-xs font-bold text-stone-500 tracking-widest uppercase">
          <span>Our Shop Space</span>
          <span>Open since 1924</span>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 md:py-32 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-20 gap-12">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-5xl font-serif mb-6">Our Work</h2>
              <p className="text-stone-500 leading-relaxed text-lg">
                Look at the clothes we have made for other people. Click the words below to sort by type.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-6 md:gap-8 border-l border-stone-200 pl-6 md:pl-10">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-xs font-bold tracking-[0.2em] transition-all pb-1 border-b ${
                    activeCategory === cat
                      ? "text-stone-900 border-stone-900"
                      : "text-stone-400 border-transparent hover:text-stone-600"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
            {filteredGallery.map((item, index) => (
              <div
                key={item.id}
                className={`group flex flex-col ${index % 2 === 0 ? '' : 'md:mt-32'}`}
              >
                <div className="aspect-[3/4] w-full overflow-hidden bg-stone-100 mb-6 p-4 md:p-8">
                  <div className="w-full h-full relative shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
                    <ImageWithFallback
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                  </div>
                </div>
                {/* Museum Plaque */}
                <div className="border-t border-stone-200 pt-4 flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-serif text-stone-900 mb-1">{item.title}</h3>
                    <span className="text-xs font-bold text-stone-500 tracking-[0.2em] uppercase">{item.category}</span>
                  </div>
                  <span className="text-xs text-stone-400 font-serif italic">{item.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 md:py-32 px-6 lg:px-12 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-serif mb-16 text-center">What We Do</h2>
        <div className="divide-y divide-stone-200 border-t border-b border-stone-200">
          {SERVICES.map((service, index) => (
            <div key={index} className="py-12 md:py-16 flex flex-col md:flex-row gap-8 md:gap-16 items-start">
              <div className="text-stone-300 font-serif text-3xl italic">
                No. {service.number}
              </div>
              <div className="flex-1 md:pr-12">
                <h3 className="text-2xl font-serif text-stone-900 mb-4">{service.title}</h3>
                <p className="text-stone-600 leading-relaxed text-lg max-w-2xl">{service.description}</p>
              </div>
              <div className="hidden md:block w-32 border-b border-stone-300 mt-6"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Appointment CTA */}
      <section className="py-32 bg-stone-900 text-[#FBFBF9] px-6 lg:px-12 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-[0.3em] text-stone-400 uppercase mb-8">
            Get Started
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-12 leading-tight">
            Book a Visit or Check Your Orders
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              to="/login"
              className="px-10 py-5 bg-[#FBFBF9] text-stone-900 text-xs font-bold uppercase tracking-[0.2em] hover:bg-stone-200 transition-colors"
            >
              Log In to Your Account
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}