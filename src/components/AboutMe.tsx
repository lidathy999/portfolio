import Image from "next/image";

function AboutMe() {

  return (
    <div className="mt-[60px] text-white text-black global-padding-t" id="aboutMe">
      <div className="flex gap-5 ">
        <Image
          src="/images/profile.jpg"
          alt="profile"
          width={300}
          height={300}
          className="w-[30%] h-[400px] object-cover rounded-md drop-shadow-md"
        />
        <div className="text-justify">
          <div className="mb-10">
            <h1 data-aos="flip-up" className="text-xl font-bold gradient-text">Hello, I&apos;m Lyda!</h1>
            <p className="text-2xl font-semibold">
              I&apos;m a{" "}
              <span className="text-primary-500 text-4xl slideUp">
                Front-end Developer
              </span>
            </p>
          </div>
          <div className="text-lg leading-8 shadow-drop-center fade-in">
            A highly experienced Front-End Web Developer with over 6 years of
            expertise in creating responsive, user-friendly websites with
            optimized performance and cross-browser compatibility. Skilled in UI
            design with responsive, testing, and debugging, I excel both
            independently and in team collaborations. I love to challenge and
            drive innovation.
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
