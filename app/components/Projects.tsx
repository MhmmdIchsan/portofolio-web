"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import Image from "next/image";
import { projects } from "./data/projectData"

export default function Projects() {
  return (
    <section id="projects" className="py-52 flex items-center justify-center bg-[#0D1B1E]">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        {/* Left Side: Carousel */}
        <div className="md:w-1/2 w-full">
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 30,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            modules={[EffectCoverflow, Autoplay]}
            className="w-full h-96"
          >
            {projects.map((project) => (
              <SwiperSlide
                key={project.id}
                className="bg-[#132B2F] rounded-2xl overflow-hidden shadow-xl border border-[#00FFB2]/30"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Right Side: Project Details */}
        <div className="md:w-1/2 w-full text-center md:text-left">
          <Swiper
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="w-full"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <h2 className="text-3xl md:text-4xl font-bold text-[#00FFB2]  mb-4">
                  {project.title}
                </h2>
                <p className="text-[#C1FCEA] text-base md:text-lg mb-6">{project.description}</p>
                <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-6">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-[#00FFB2]/10 text-[#00FFB2] border border-[#00FFB2]/30 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  <a
                    href={project.docsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#00FFB2] text-[#0D1B1E] font-semibold px-5 py-2 rounded-lg shadow hover:bg-[#00e8a2] transition duration-300"
                  >
                    View Docs
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-transparent border border-[#00FFB2] text-[#00FFB2] px-5 py-2 rounded-lg hover:bg-[#00FFB2] hover:text-[#0D1B1E] transition duration-300"
                  >
                    GitHub Repo
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
