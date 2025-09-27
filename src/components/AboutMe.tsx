import Image from "next/image";

function AboutMe() {

  return (
    <div className="mt-[60px] text-white text-black global-padding-t" id="aboutMe">
      <div className="flex gap-5 ">
        <Image
          src="../../images/profile.jpg"
          alt="profile"
          className="w-[30%] h-[400px] object-cover rounded-md drop-shadow-md"
        />
        <div className="text-justify">
          <div>
            <h1 className="text-xl font-bold">Hello, I&apos;m Lyda!</h1>
            <p className="text-xl">
              I&apos;m a{" "}
              <span className="text-primary-500 text-2xl">
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
          {/* <div className="global-padding-b text-lg">
            Hello again! Thanks for scrolling this far! 🤗 Just a heads up, my
            portfolio is a little outdated at the moment. I haven’t had time to
            update it, but I’m keeping it up for now, and I hope it gives you
            some inspiration!
          </div>  
          <div className="text-lg">
            Other than coding, I spend most of my free time playing Animal
            Crossing (add me!) or any other video games. 🤓 I've also been
            trying to read more so feel free to reach out to me with any book
            recommendations!
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
