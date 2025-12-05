"use client";

import { useRef, useEffect, useState } from "react";
import {
  Palette,
  Video,
  Camera,
  TrendingUp,
  Smartphone,
  Code,
  Cloud,
  Cpu,
} from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: "branding",
    title: "Branding",
    icon: Palette,
    description: "Brand that stands out",
    details: "We make brands that connect emotionally.",
    image: "https://images.pexels.com/photos/7147454/pexels-photo-7147454.jpeg",
    video: "https://ik.imagekit.io/ff5bkg98p/framer-website-assets/Videos/branding-bg.webm/ik-video.mp4",
  },
  {
    id: "filming",
    title: "Filming",
    icon: Video,
    description: "Shoots with precision",
    details: "Filming with experienced cinematographers.",
    image: "https://images.pexels.com/photos/7147454/pexels-photo-7147454.jpeg",
    video: ["https://www.pexels.com/download/video/2836305/"],
  },
  {
    id: "production",
    title: "Production",
    icon: Camera,
    description: "Full-scale production",
    details: "From concept to final cut.",
    image: "https://images.pexels.com/photos/7147454/pexels-photo-7147454.jpeg",
    video: ["https://www.pexels.com/download/video/3917519/"],
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    icon: TrendingUp,
    description: "Data-driven marketing",
    details: "SEO, Social Media, Performance Marketing.",
    image: "https://images.pexels.com/photos/7147454/pexels-photo-7147454.jpeg",
    video: ["https://www.pexels.com/download/video/2836305/"],
  },
  {
    id: "ui-ux",
    title: "UI/UX Design",
    icon: Smartphone,
    description: "User-centered design",
    details: "Beautiful interfaces that users love.",
    image: "https://images.pexels.com/photos/7147454/pexels-photo-7147454.jpeg",
    video: ["https://www.pexels.com/download/video/8632596/"],
  },
  {
    id: "development",
    title: "Software Development",
    icon: Code,
    description: "Custom software solutions",
    details: "Web & App development tailored to business needs.",
    image: "https://images.pexels.com/photos/7147454/pexels-photo-7147454.jpeg",
    video: ["https://www.pexels.com/download/video/2516159/"],
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    icon: Cloud,
    description: "Scalable infrastructure",
    details: "Cloud & DevOps architecture.",
    image: "https://images.pexels.com/photos/7147454/pexels-photo-7147454.jpeg",
    video: ["https://www.pexels.com/download/video/3129957/"],
  },
  {
    id: "ai-ml",
    title: "AI/ML Solutions",
    icon: Cpu,
    description: "Intelligent automation",
    details: "AI-powered solutions.",
    image: "https://images.pexels.com/photos/7147454/pexels-photo-7147454.jpeg",
    video: ["https://www.pexels.com/download/video/2792370/"],
  },
];

export default function ServicesScrollShowcase() {
  const wrapperRef = useRef(null);
  const stickyRef = useRef(null);
  const [active, setActive] = useState(services[0].id);

  useEffect(() => {
    const mm = gsap.matchMedia();
    
    mm.add("(min-width: 768px)", () => {
      ScrollTrigger.create({
        trigger: wrapperRef.current,
        start: "top+=450 center",
        end: "bottom center",
        pin: stickyRef.current,
        pinSpacing: false,
      });

      services.forEach((item) => {
        ScrollTrigger.create({
          trigger: `#service-${item.id}`,
          start: "center center",
          end: "center center",
          onEnter: () => setActive(item.id),
          onEnterBack: () => setActive(item.id),
        });
      });
    });

    return () => mm.revert();
  }, []);

  const mobileContainerRef = useRef(null);
  const mobileCardsRef = useRef([]);

  const addToMobileRefs = (el) => {
    if (el && !mobileCardsRef.current.includes(el)) {
      mobileCardsRef.current.push(el);
    }
  };

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      
      mm.add("(max-width: 767px)", () => {
        const cards = mobileCardsRef.current;

        cards.forEach((card, index) => {
          if (index < cards.length - 1) {
            ScrollTrigger.create({
              trigger: card,
              start: "top top",
              end: "bottom top",
              pin: true,
              pinSpacing: false,
            });
          }
        });
      });
      
      return () => mm.revert();
    },
    { scope: mobileContainerRef, dependencies: [] }
  );

  return (
    <section className="w-full relative min-h-screen overflow-hidden bg-black text-white">
      {services.map((service) =>
        active === service.id ? (
          <video
            key={service.id}
            src={Array.isArray(service.video) ? service.video[0] : service.video}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover opacity-50"
          />
        ) : null
      )}
      <div className="md:flex hidden lg:block flex-col justify-center">
        <div ref={wrapperRef} className="flex justify-evenly w-full gap-10 relative">
          <div className="space-y-14 pb-[60vh] pt-[10vh]">
            <div className="mb-16">
              <p className="text-orange-500 text-sm uppercase tracking-wider mb-4">
                What We Do
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-4xl font-bold mb-6">
                Curated services for your needs
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl">
                We provide solutions from A–Z, your all-in-one hub for Creative
                Brand Building with Quality Production.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <button className="border border-white/20 hover:border-orange-500 text-white px-6 py-2 rounded-full text-sm transition-all duration-200">
                  connect with us
                </button>
                <button className="text-gray-400 hover:text-white px-6 py-2 text-sm transition-colors duration-200">
                  Explore All Services
                </button>
              </div>
            </div>

            {services.map((service) => (
              <div key={service.id} id={`service-${service.id}`} className="pt-10">
                <h4 className={`font-medium text-6xl cursor-pointer transition-all duration-300 ${
                  active === service.id ? "text-white" : "text-white/20"
                }`}>
                  {service.title}
                </h4>
              </div>
            ))}
          </div>

          <div className="pt-[10vh]">
            <div ref={stickyRef}>
              {services.map((service) => (
                <div key={service.id} className={`transition-all duration-500 ${
                  active === service.id ? "block opacity-100" : "hidden opacity-0"
                }`}>
                  <div className="h-[500px] border border-gray-700 mb-8 rounded-xl overflow-hidden">
                    <video
                      src={Array.isArray(service.video) ? service.video[0] : service.video}
                      width={900}
                      height={500}
                      loop
                      muted
                      playsInline
                      preload="metadata"
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div ref={mobileContainerRef} className="relative md:hidden w-full bg-black text-white">
        <div className="px-5 pt-16 pb-12">
          <h2 className="text-3xl font-bold mb-4">
            Generative workflows that scale.
          </h2>
          <p className="text-gray-400 text-base mb-6">
            Codify your creative process into repeatable blueprints.
          </p>
          <button className="text-white text-sm underline underline-offset-4">
            See all workflows
          </button>
        </div>

        <div className="relative">
          {services.map((service, index) => (
            <div
              key={service.id}
              ref={addToMobileRefs}
              className="w-full min-h-screen relative rounded-t-2xl border-t-4 border-orange-500 mb-10 overflow-hidden"
              style={{ zIndex: index + 1 }}
            >
              <div className="w-full min-h-full relative overflow-hidden">
                <video
                  src={Array.isArray(service.video) ? service.video[0] : service.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="absolute inset-0 object-cover w-full h-full"
                />
                
                <div className="absolute inset-0 bg-black/40" />

                <div className="relative z-10 flex flex-col min-h-full px-4 pt-16 pb-8">
                  <h3 className="text-3xl font-light tracking-tight text-white mb-6">
                    {service.title}
                  </h3>

                  <div className="flex-1 flex items-center justify-center py-4">
                    <div className="w-full max-w-[340px] aspect-[4/3] rounded-2xl overflow-hidden bg-[#1a1a1a] border border-white/10 shadow-2xl">
                      <video
                        src={Array.isArray(service.video) ? service.video[0] : service.video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="metadata"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="mt-auto">
                    <h4 className="text-xl font-semibold text-white mb-2">
                      {service.description}
                    </h4>
                    <p className="text-gray-400 text-sm mb-5">
                      {service.details}
                    </p>
                    <button className="px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium hover:bg-white/20 transition-all duration-300">
                      Explore this Flow
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
