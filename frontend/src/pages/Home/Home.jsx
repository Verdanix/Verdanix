import Navbar from '../../components/navbar/Navbar.jsx';
import './Home.scss';

function HeroSection() {
  return (
    <section id="hero">
      <h1>
        Driven by <strong>passion.</strong>
        <br />
        Fueled by <strong>purpose.</strong>
        <br />
        Ready to make an <strong>impact.</strong>
        <br />
      </h1>
    </section>
  );
}

function Section2() {
  return (
    <section id="section2">
      <div className="text">
        <h2>Hello World</h2>
        <p>
          I'm Mason Root, a fullstack software engineer, aspiring entrepreneur, and Eagle Scout with
          over 5 years of experience.
        </p>
        <div className="buttons">
          <a className="button" href="/about">
            More
          </a>
          <a className="button empty" href="/resume">
            Resume
          </a>
        </div>
      </div>
      <img src="/images/portfolio.png" alt="portfolio image of me" />
    </section>
  );
}

export default function Home() {
  return (
    <>
      <div id="home">
        <div className="background">
          <Navbar activeName="home" />
          <HeroSection />
          <Section2 />
        </div>
      </div>
    </>
  );
}
