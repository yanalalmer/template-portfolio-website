import './app.scss';
// components
import {
  Navbar,
  Hero,
  Parallax,
  Services,
  Portfolio,
  Contact,
} from './components';
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
      {/* <section>
        <Services />
      </section> */}
      <section id='portfolio'>
        <Parallax type='portfolio' />
      </section>
      {/* <Portfolio /> */}
      {/* <section id='contact'>
        <Contact />
      </section> */}
    </div>
  );
}

export default App;
