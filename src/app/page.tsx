import AboutMe from "@/components/AboutMe";
import AOSInit from "@/components/AOSInit";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import { Projects } from "@/components/Projects";
import TopMenu from "@/components/TopMenu";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const Home = () => {

  return (
    <div className="min-w-[600px] overflow-auto">
      <AOSInit />
      <main className="grid gap-10 px-10 pt-4 pb-0">
      
        <TopMenu />
        <AboutMe />
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
