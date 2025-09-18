import AboutMe from "@/components/AboutMe";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import { Projects } from "@/components/Projects";
import TopMenu from "@/components/TopMenu";
import Button from "@mui/material/Button";
import LoadingScreen from "@/components/LoadingScreen";

const Home = () => {
  // return <LoadingScreen onFinish={() => {}} />;
  return (
    <div className="">
      <main className="">
        <div className="w-[90%] pb-10 justify-center mx-auto">
          <div className="flex overflow-scroll mb-6 justify-between flex-col h-[100%]">
            <TopMenu />
            <AboutMe />
            {/* <div className="flex flex-col h-[100%] self-center justify-center items-center">
            <div className="flex flex-col items-center scale-up-center mb-8">
              <div className="w-[150px] h-[150px]">
                <img
                  className="rounded-full"
                  src="../../images/profile.jpg"
                  alt="profile"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold text-center">Hello, I'm Lyda!</h1>
                <p className="text-xl">
                  I'm a{" "}
                  <span className="text-primary-500 text-2xl">
                    Front-end Developer
                  </span>
                </p>
              </div>
            </div>
            <div className="text-center text-lg leading-8 shadow-drop-center fade-in w-1/2">
              A highly experienced Front-End Web Developer with over 6 years of
              expertise in creating responsive, user-friendly websites with
              optimized performance and cross-browser compatibility. Skilled in
              UI design with responsive, testing, and debugging, I excel both
              independently and in team collaborations. I love to challenge and
              drive innovation.
            </div>
          </div> */}
            {/* <div className="mb-2">
            <KeyboardDoubleArrowDownIcon className="text-primary-500 animate-bounce justify-center" />
          </div> */}
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
