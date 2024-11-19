import { useEffect } from "react";
import { SiLinkedin } from "react-icons/si";
import { Gradient } from "@/utils/gradient";
import Button from "@/components/ui/Button";

import style from "@/components/Header.module.css";

const Header = () => {
  useEffect(() => {
    const gradient = new Gradient();
    gradient.initGradient("#gradient-canvas");
  }, []);
  return (
    <header role="banner" className="relative py-32">
      <div className="container relative z-10 mx-auto text-center">
        <h1 className="text-7xl font-black text-gray-800 sm:text-8xl">
          Jessica Moore{" "}
          <span className="mt-6 block text-5xl sm:text-6xl">
            Fullstack Developer
          </span>
        </h1>
        <p className="my-8 text-xl font-medium sm:text-2xl">
          I like to blend creativity with tech to make things work beautifully.
        </p>
        <div className="cta-buttons flex flex-wrap justify-center gap-2">
          <Button href="https://linkedin.com/in/jesscodes" target="_blank">
            <SiLinkedin className="mb-1 mr-1 inline-block" /> Let's connect!
          </Button>
          <Button
            href="https://linkedin.com/in/jesscodes"
            target="_blank"
            btnStyle="ghost"
          >
            Download my resume
          </Button>
        </div>
      </div>
      <canvas id="gradient-canvas" className={style.gradientCanvas} />
      <span className={style.angledBorderBottom}></span>
    </header>
  );
};

export default Header;
