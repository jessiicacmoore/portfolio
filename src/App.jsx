import Header from '@/components/Header';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

function App() {
  return (
    <>
      <Header></Header>
      <main role="main">
        <About />
        <Skills />
        <Projects />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}

export default App;
