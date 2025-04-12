import { FaEnvelope, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

export const contactData = [
  {
    icon: <FaEnvelope className="w-10 h-10 text-[#00FFB2] drop-shadow-glow" />,
    title: "Email",
    text: "your-email@example.com",
    href: "mailto:your-email@example.com",
  },
  {
    icon: <FaLinkedin className="w-10 h-10 text-[#00FFB2] drop-shadow-glow" />,
    title: "LinkedIn",
    text: "Connect with me",
    href: "https://www.linkedin.com/in/your-linkedin",
  },
  {
    icon: <FaInstagram className="w-10 h-10 text-[#00FFB2] drop-shadow-glow" />,
    title: "Instagram",
    text: "Follow me",
    href: "https://www.instagram.com/your-instagram",
  },
  {
    icon: <FaGithub className="w-10 h-10 text-[#00FFB2] drop-shadow-glow" />,
    title: "GitHub",
    text: "Check out my projects",
    href: "https://github.com/your-github",
  },
];
