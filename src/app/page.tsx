import Image from "next/image";
import Hero from '@/components/sections/Hero'
import TestimonialsCarousel from '@/components/sections/Testimonials'

const testimonials = [
  {
    name: "Alex Turner",
    role: "Marketing Director @ PrintWorks Inc",
    image: "/images/boris_headshot.jpg",
    testimonial: "Times General Supplies delivered exactly\nwhat we needed for our print campaigns.\nTheir cutting-edge technology and attention\nto detail produced exceptional results\nfor our business."
  },
  {
    name: "Boris M",
    role: "Operations Manager @ MediaTech",
    image: "/images/boris_m_headshot.jpeg",
    testimonial: "The quality of printing services is outstanding.\nTheir professional team understood our needs\nand delivered beyond expectations. The final\nproducts showcase their commitment\nto excellence."
  },
  {
    name: "John Smith",
    role: "CEO @ Design Solutions",
    image: "/images/boris_headshot.jpg",
    testimonial: "Their attention to detail and commitment\nto quality is unmatched. We've been working\nwith Times General Supplies for years and\nthey never disappoint."
  },
  {
    name: "Emma Wilson",
    role: "Creative Director @ ArtCraft",
    image: "/images/boris_m_headshot.jpeg",
    testimonial: "Exceptional service and remarkable results.\nTheir team's expertise and innovative approach\nhas transformed our printing processes.\nHighly recommended!"
  }
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <TestimonialsCarousel testimonials={testimonials} />
    </main>
  )
}
