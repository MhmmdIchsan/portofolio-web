import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-[#0D1B1E]/80 backdrop-blur-md shadow-md fixed w-full top-0 z-50 border-b border-[#00FFB2]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo / Your Name */}
          <div className="text-2xl font-bold text-[#00FFB2] tracking-wider drop-shadow-[0_0_5px_#00FFB2]">
            Muhammad Ichsan
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-4">
            {[
              { name: 'About', href: '#about' },
              { name: 'Project', href: '#project' },
              { name: 'Skills', href: '#skills' },
              { name: 'Contact', href: '#contact' },
            ].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[#E6FFF9] hover:text-[#00FFB2] transition duration-300 px-3 py-2 rounded-md text-sm font-medium hover:drop-shadow-[0_0_10px_#00FFB2]"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
