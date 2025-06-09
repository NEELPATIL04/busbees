import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Features from "./components/Features";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Features />
      {/* <Stats /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
