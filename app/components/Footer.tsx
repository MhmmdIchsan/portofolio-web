"use client";

export default function Footer() {
  return (
    <footer className="bg-[#0D1B1E] text-[#C1FCEA] py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm text-center md:text-left gap-4">
        <p className="text-[#E6FFF9]">&copy; {new Date().getFullYear()} Muhammad Ichsan. All rights reserved.</p>

        <div className="flex space-x-4">
          <a
            href="#"
            className="text-[#00FFB2] hover:underline transition duration-300"
          >
            Privacy
          </a>
          <a
            href="#"
            className="text-[#00FFB2] hover:underline transition duration-300"
          >
            Terms
          </a>
          <a
            href="#contact"
            className="text-[#00FFB2] hover:underline transition duration-300"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
