import "./app.css";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Home from "./components/home";
import Nav from "./components/nav";
import Portfolio from "./components/portfolio";
import Resume from "./components/resume";

function app() {
  const about = {
    marginLeft: 0,
  };

  return (
    <section id="main">
      <section id="navBar">
        <Nav></Nav>
      </section>

      <section id="contact" className="section">
        <div id="contactTab" className="tab"></div>
        <div id="contactLine" className="line"></div>
        <Contact></Contact>
      </section>

      <section id="resume" className="section">
        <div id="resumeTab" className="tab"></div>
        <div id="resumeLine" className="line"></div>

        <Resume></Resume>
      </section>

      <section id="portfolio" className="section">
        <div id="portfolioTab" className="tab"></div>
        <div id="portfolioLine" className="line"></div>
        <Portfolio></Portfolio>
      </section>

      <section id="about" className="section" style={about}>
        <div id="aboutTab" className="tab"></div>
        <div id="aboutLine" className="line"></div>
        <Home></Home>
      </section>

      <section id="footer">
        <Footer></Footer>
      </section>
    </section>
  );
}

export default app;
