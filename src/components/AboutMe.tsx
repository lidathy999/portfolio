import Image from "next/image";

const AboutMe = ()=> {

  return (
    <div className="flex flex-col bg-background text-white text-black global-padding-t p-14 px-10 xl:px-40">
      <div className="text-lg leading-8">
        <Image
          src="/images/profile.jpg"
          alt="profile"
          width={300}
          height={400}
          className="float-left w-full m-0 sm:m-5 h-[300px] sm:h-[300px] sm:w-[300px] border-[2px] border-secondary object-cover rounded-xl"
        />
      <h1 data-aos="flip-up" className="text-xl font-bold gradient-text">Hello, I&apos;m Lyda!</h1>
      <p className="text-2xl font-semibold">
        <span>I&apos;m a </span>
        <span className="text-4xl slideUp">
          Senior Front-End Engineer
        </span>
      </p>
        <p className="pt-5">
          I&apos;m a Senior Front-End Engineer with over 8+ years of experience building modern, responsive, and high-performance web applications. I specialize in creating intuitive user experiences with a strong focus on clean architecture, performance optimization, accessibility, and cross-browser compatibility. I enjoy turning complex business requirements into elegant, user-friendly solutions.<br />
        </p>
        
        <p className="pt-5">
          Currently, I work as a <strong>Chief Client Engineer</strong> <strong>at Mobile C&C Cambodia</strong>, where I lead front-end development for enterprise banking solutions. I collaborate closely with designers, project managers, engineers, and clients to gather requirements, refine user experiences, and deliver reliable, scalable products that meet business objectives.<br />
        </p>

        <p className="pt-5">
          Throughout my career, I&apos;ve contributed to a variety of projects, including digital banking platforms, educational applications, home service mini apps, corporate websites, and e-menu systems. These experiences have strengthened my ability to adapt quickly, solve challenging problems, and deliver high-quality software across different industries.<br />
        </p>

        <p className="pt-5">
          I enjoy working both independently and as part of a collaborative team. I&apos;m passionate about continuous learning, embracing new technologies, and building products that make a meaningful impact.<br />
        </p>

        <p className="pt-5">
          Outside of work, I enjoy listening to music, traveling, and spending quality time with my family.
        </p>
        </div>
    </div>
  );
}

export default AboutMe;
