import AboutMe from "@/components/AboutMe";
import AOSInit from "@/components/AOSInit";
import Footer from "@/components/Footer";
import { Projects } from "@/components/Projects";
import TopMenu from "@/components/TopMenu";

const Home = () => {

  return (
    <div className="" id="home">
      <AOSInit />
      <main className="grid gap-10">
        <div className="hidden sm:block"> 
          <TopMenu direction="row"/>
        </div>
        <AboutMe/>
        <Projects />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
export default Home;
