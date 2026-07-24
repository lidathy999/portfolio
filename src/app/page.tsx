import AboutMe from "@/components/AboutMe";
import AOSInit from "@/components/AOSInit";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import { Projects } from "@/components/Projects";
import TopMenu from "@/components/TopMenu";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const Home = () => {

  return (
    <div>
      <AOSInit/>
      <main className="grid gap-10 px-10 pt-10">
        <div className="pb-10 justify-center mx-auto">
          <div className="flex overflow-scroll mb-6 justify-between flex-col">
            <TopMenu />
            <AboutMe />
          </div>
           <div className="flex mt-6">
          <ArrowDownwardIcon className="animate-bounce text-primary-500 border border-secondary rounded-full mx-auto" fontSize="large" />
        </div>
        </div>
       
        <Projects />
        <ContactUs />      
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
export default Home;
