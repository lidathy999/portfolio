import AboutMe from "@/components/AboutMe";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import { Projects } from "@/components/Projects";
import TopMenu from "@/components/TopMenu";

const Home = () => {
 
  return (
    <div className="">
      <main className="">
        <div className="w-[90%] pb-10 justify-center mx-auto">
          <div className="flex overflow-scroll mb-6 justify-between flex-col h-[100%]">
            <TopMenu />
            <AboutMe />
          </div>
        </div>
        <Projects />
        <ContactUs />‍
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
export default Home;
