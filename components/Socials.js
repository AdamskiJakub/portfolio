import Link from "next/link";

import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiPinterestLine,
} from "react-icons/ri";

import { FaLinkedin, FaGithub } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="flex item-center gap-x-5 text-lg">
      <Link
        href="https://www.youtube.com/"
        className="hover:text-accent transition-all duration-300"
      >
        <RiYoutubeLine />
      </Link>
      <Link
        href="https://www.instagram.com/"
        className="hover:text-accent transition-all duration-300"
      >
        <RiInstagramLine />
      </Link>
      <Link
        href="https://www.facebook.com/jakub.adamski.35513"
        className="hover:text-accent transition-all duration-300"
      >
        <RiFacebookLine />
      </Link>
      <Link
        href="https://www.linkedin.com/in/jakub-adamski-35b489210/"
        className="hover:text-accent transition-all duration-300"
      >
        <FaLinkedin />
      </Link>
      <Link
        href="https://github.com/AdamskiJakub?tab=repositories"
        className="hover:text-accent transition-all duration-300"
      >
        <FaGithub />
      </Link>
    </div>
  );
};

export default Socials;
