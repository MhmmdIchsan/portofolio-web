'use client';

import Image from 'next/image';

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-[#0D1B1E] text-[#E6FFF9]"
    >
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-16">
        {/* Image Section */}
        <div className="flex justify-center">
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <Image
              src="/image/pic1.jpeg"
              alt="Personal Illustration"
              fill
              className="object-contain drop-shadow-[0_0_20px_#00FFB2]"
            />
          </div>
        </div>

        {/* Text Section */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#00FFB2] mb-6 drop-shadow-[0_0_12px_#00FFB2]">
            About Me
          </h2>
          <p className="text-lg mb-4 leading-relaxed text-[#C1FCEA]">
            Hi, I’m <span className="font-semibold">Muhammad Ichsan</span>, a passionate Software Developer who loves turning complex problems into simple, elegant solutions.
          </p>
          <p className="text-lg mb-4 leading-relaxed text-[#C1FCEA]">
            I specialize in <span className="font-semibold text-[#00FFB2]">Web Development</span>, <span className="font-semibold text-[#00FFB2]">Mobile Development</span>, <span className="font-semibold text-[#00FFB2]">API Development</span>, and <span className="font-semibold text-[#00FFB2]">Python</span>.
          </p>
          <p className="text-lg text-[#C1FCEA]">
            Outside of coding, I enjoy following tech trends, contributing to open source, and sipping coffee ☕.
          </p>
        </div>
      </div>
    </section>
  );
}
