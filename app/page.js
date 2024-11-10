import Header from "./components/Header.tsx";
import Hero from "./components/Visualization/Hero.tsx";
import NavTabs from "./components/NavTabs.tsx";
import Footer from "./components/Footer.tsx";

export default function Home() {
  return (
    <>
      <Header />
      <main className="workoutbg bg-no-repeat bg-center bg-cover relative">
        <NavTabs />
        <Hero />
      </main>
      <Footer />
    </>
  );
}
