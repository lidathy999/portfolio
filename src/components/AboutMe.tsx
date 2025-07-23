function AboutMe() {
  return (
    <div className=" bg-amber-50 global-padding-t" id="aboutMe">
      <div className="flex gap-5 ">
        <div className="text-justify">
          <h2 className="text-3xl font-bold text-primary-500 global-padding-b">
            About Me 🌸
          </h2>
          <div className="global-padding-b text-lg">
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
          </div>
        </div>

        <img
          src="../../images/profile.jpg"
          alt="profile"
          className="w-[30%] h-[400px] object-cover rounded-md drop-shadow-md"
        />
      </div>
    </div>
  );
}

export default AboutMe;
