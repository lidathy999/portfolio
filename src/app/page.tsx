import AboutMe from "@/components/AboutMe";
import AOSInit from "@/components/AOSInit";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import { Projects } from "@/components/Projects";
import TopMenu from "@/components/TopMenu";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const Home = () => {

  return (
    <div className="">
      <AOSInit/>
      <main className="grid gap-10 px-10 py-5">
        <div className="pb-10 justify-center mx-auto">
          <div className="flex overflow-scroll mb-6 justify-between flex-col">
            <TopMenu />
            <AboutMe />
          </div>
        </div>
        <div className="flex mt-10">
          <ArrowDownwardIcon className="animate-bounce text-primary-500 border rounded-full mx-auto" fontSize="large" />
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
