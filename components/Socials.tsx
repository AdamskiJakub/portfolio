import Link from "next/link";
import { RiYoutubeLine, RiInstagramLine, RiFacebookLine } from "react-icons/ri";
import { FaLinkedin, FaGithub } from "react-icons/fa";

import { ReactElement } from "react";

interface SocialLink {
  href: string;
  icon: ReactElement;
  label: string;
}

const socialLinks: SocialLink[] = [
  {
    href: "https://www.youtube.com/",
    icon: <RiYoutubeLine />,
    label: "YouTube",
  },
  {
    href: "https://www.instagram.com/",
    icon: <RiInstagramLine />,
    label: "Instagram",
  },
  {
    href: "https://www.facebook.com/jakub.adamski.35513",
    icon: <RiFacebookLine />,
    label: "Facebook",
  },
  {
    href: "https://www.linkedin.com/in/jakub-adamski-35b489210/",
    icon: <FaLinkedin />,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/AdamskiJakub?tab=repositories",
    icon: <FaGithub />,
    label: "GitHub",
  },
];

const Socials = () => {
  return (
    <div className="item-center flex gap-x-5 text-lg">
      {socialLinks.map((social) => (
        <Link
          key={social.label}
          href={social.href}
          className="transition-all duration-300 hover:text-accent"
          aria-label={social.label}
          target="_blank"
          rel="noopener noreferrer"
        >
          {social.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
