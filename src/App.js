import './app.scss';
// components
import { Navbar, Hero, Parallax } from './components';
function App() {
  return (
    <div>
      <section id='homepage'>
        <Navbar />
        <Hero />
      </section>
      <section id='services'>
        <Parallax type='services' />
      </section>
      <section>Parallex</section>
      <section id='portfolio'>
        <Parallax type='portfolio' />
      </section>
      <section id='contact'>Contact</section>
      <section>Parallax</section>
      <section>Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section>Contact</section>
    </div>
  );
}

export default App;
