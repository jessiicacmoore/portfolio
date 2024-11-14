import { SiLinkedin, SiGithub, SiX } from "react-icons/si";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer role="contentinfo" className="bg-gray-800 py-8 text-white">
      <div className="container mx-auto flex max-w-screen-lg flex-col flex-wrap items-center justify-between sm:flex-row">
        <p className="m-6 font-bold">&copy; {currentYear} Jessica Moore</p>
        <ul className="social-links flex flex-wrap gap-4 leading-none">
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/jesscodes/"
              className="text-white"
            >
              <SiLinkedin />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://github.com/jessiicacmoore"
              className="text-white"
            >
              <SiGithub />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://x.com/jessiicatweets"
              className="text-white"
            >
              <SiX />
            </a>
          </li>
          <li>
            <a href="mailto:hello@jessicacmoore.com" className="text-white">
              <IoMdMail />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
