import Image from "next/image";

const AboutMe = ()=> {

  return (
    <div className="flex flex-col bg-[#1C1C1C] text-white text-black global-padding-t p-14 px-40">
      <div className="flex gap-8">
        <Image
          src="/images/profile.jpg"
          alt="profile"
          width={300}
          height={400}
          className="w-[45%] lg:w-[30%] h-auto border-[2px] border-secondary object-cover rounded-xl"
        />
        <div>
          <div className="mb-10">
            <h1 data-aos="flip-up" className="text-xl font-bold gradient-text">Hello, I&apos;m Lyda!</h1>
            <p className="text-2xl font-semibold">
              I&apos;m a
              <span className="text-primary-500 text-4xl slideUp">
               Senior Front-End Engineer
              </span>
            </p>
            <div className="flex flex-col gap-4 pt-8 text-lg">
              <div>
                I&apos;m a Senior Front-End Engineer with over 8+ years of experience building modern, responsive, and high-performance web applications. I specialize in creating intuitive user experiences with a strong focus on clean architecture, performance optimization, accessibility, and cross-browser compatibility. I enjoy turning complex business requirements into elegant, user-friendly solutions.<br />
              </div>
              <div>
                Currently, I work as a <strong>Chief Client Engineer</strong> <strong>at Mobile C&C Cambodia</strong>, where I lead front-end development for enterprise banking solutions. I collaborate closely with designers, project managers, engineers, and clients to gather requirements, refine user experiences, and deliver reliable, scalable products that meet business objectives.<br />
              </div>
              <div>
                Throughout my career, I&apos;ve contributed to a variety of projects, including digital banking platforms, educational applications, home service mini apps, corporate websites, and e-menu systems. These experiences have strengthened my ability to adapt quickly, solve challenging problems, and deliver high-quality software across different industries.<br />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 pt-8 text-lg">
        <div>
          I enjoy working both independently and as part of a collaborative team. I&apos;m passionate about continuous learning, embracing new technologies, and building products that make a meaningful impact.<br />
        </div>
        <div>
          Outside of work, I enjoy listening to music, traveling, and spending quality time with my family.
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
