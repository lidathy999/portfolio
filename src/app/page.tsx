import AboutMe from "@/components/AboutMe";
import LoadingScreen from "@/components/LoadingScreen";

const Home = () => {
  // return <LoadingScreen onFinish={() => {}} />;
  return (
    <div className="">
      <main className="min-h-">
        <AboutMe />
      </main>
      <footer>
        <div className="bg-primary-500 mt-8 h-[100px] p-4 text-center">
          <span>Power By LYDA THY@2025</span>
          <div className="flex gap-3 mt-2 justify-center">
            <a href="https://gitlab.com/Thylida">
              <img
                width={30}
                height={30}
                src="../../images/gitlab.png"
                alt="gitlab"
              />
            </a>
            <a href="https://www.linkedin.com/in/lyda-thy-475381229">
              <img
                width={30}
                height={30}
                src="../../images/linkedin.png"
                alt="linkedIn"
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Home;
