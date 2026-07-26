import AboutMe from "@/components/AboutMe";
import AOSInit from "@/components/AOSInit";
import Footer from "@/components/Footer";
import { Projects } from "@/components/Projects";
import TopMenu from "@/components/TopMenu";

const Home = () => {

  return (
    <div className="min-w-[600px] overflow-auto">
      <AOSInit />
      <main className="grid gap-10">
        <TopMenu />
        <AboutMe />
        <Projects />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
export default Home;
