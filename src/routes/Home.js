import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://www.intepat.com/wp-content/uploads/2020/12/section-462-of-the-Indian-Patents-Act-1970.png"
        title="SKDPATENT"
        buttonText="Get Started"
        url="/"
        btnClass="show"
      />
    </>
  );
}

export default Home;
