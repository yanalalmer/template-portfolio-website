import './app.scss';
// components
import { Navbar, Hero } from './components';
function App() {
  return (
    <div>
      <section id='homepage'>
        <Navbar />
        <Hero />
      </section>
      <section id='services'>Parallex</section>
      <section>Parallex</section>
      <section id='portfolio'>portfolio</section>
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
