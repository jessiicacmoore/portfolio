import { useEffect } from 'react';
import { Gradient } from '@/utils/gradient';
import Button from '@/components/ui/Button';

import style from '@/components/Header.module.css';

const Header = () => {
  useEffect(() => {
    const gradient = new Gradient();
    gradient.initGradient('#gradient-canvas');
  }, []);
  return (
    <header role="banner" className="px-5 py-32 relative">
      <div className="container relative z-10 mx-auto">
        <h1 className="text-8xl font-black">
          Jessica Moore.{' '}
          <span className="text-6xl block">Frontend Developer.</span>
        </h1>
        <p className="my-6">
          Frontend developer blending creativity with tech to make things work
          beautifully.
        </p>
        <div className="cta-buttons flex flex-wrap gap-2">
          <Button href="https://linkedin.com/in/jesscodes" target="_blank">
            Let's connect!
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
