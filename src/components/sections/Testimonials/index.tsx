"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useAnimationControls } from 'framer-motion';

interface Testimonial {
  name: string;
  role: string;
  image: string;
  testimonial: string;
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
}

const TestimonialsCarousel: React.FC<TestimonialsCarouselProps> = ({ testimonials }) => {
  const controls = useAnimationControls();
  const [isHovered, setIsHovered] = useState<boolean>(false);

  React.useEffect(() => {
    if (isHovered) {
      controls.stop();
    } else {
      controls.start({
        x: [0, -1600],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        },
      });
    }
  }, [isHovered, controls]);

  return (
    <section className="py-20 bg-gradient-to-b from-[#f8f9fa] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-[#333333] text-5xl font-bold mb-6"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Client <span className="text-[#FF4500]">Testimonials</span>
          </h2>
          <p className="text-[#666666] text-xl max-w-2xl mx-auto">
            Discover why our clients trust us with their business needs
          </p>
        </div>

        <motion.div 
          className="overflow-hidden rounded-xl"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div
            className="flex gap-6"
            animate={controls}
          >
            {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[450px] bg-white rounded-xl p-8 transform transition-transform duration-300 hover:shadow-lg"
                style={{
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
                }}
              >
                <div className="flex items-center gap-4 mb-6 border-b border-gray-100 pb-4">
                  <div className="relative w-12 h-12">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-[#333333] text-lg font-semibold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {testimonial.name}
                    </h4>
                    <p className="text-[#666666] text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <p className="text-[#444444] text-center leading-relaxed max-w-[350px] mx-auto whitespace-pre-line">
                  {testimonial.testimonial}
                </p>
                <div className="mt-6 text-center">
                  <button className="inline-flex items-center text-[#006400] hover:text-[#FF4500] transition-all duration-300 text-sm font-medium group">
                    View Project
                  </button>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;