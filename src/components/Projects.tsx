"use client";
import Image from "next/image";
// import { useState } from "react";

type ProjectTypes = {
  id: number;
  name: string;
  cover: string;
  gitlab_url: string;
  className?: string;
  project_url?: string;
  title?: string;
  description?: string;
};
export function Projects() {
  // const [mouseOver, setMouseOver] = useState<number | null>(null);
  const projects: ProjectTypes[] = [
    {
      id: 1,
      name: "Portfolio",
      cover: "/images/portfolio_cover.png",
      gitlab_url: "https://gitlab.com/Thylida/thylida",
      title: "",
      description: "",
    },
    {
      id: 2,
      name: "Todo List",
      cover: "/images/todo-project.png",
      gitlab_url: "",
      title: "",
      description: "",
    },
    {
      id: 3,
      name: "Orkun Admin",
      cover: "/images/orkun-portal.png",
      gitlab_url: "",
      title: "",
      description: "",
    },
    {
      id: 4,
      name: "Camemis App",
      cover: "/images/camemis-app.png",
      gitlab_url: "",
      className: "bg-sky-100",
      project_url:
        "https://play.google.com/store/apps/details?id=com.camis.camemis_student_application&hl=en",
      description: "",
    },
    {
      id: 5,
      name: "Camemis Library",
      cover: "/images/camemis-e-library.webp",
      gitlab_url: "",
      className: "bg-sky-100",
      description: "",
    },
    {
      id: 6,
      name: "UNT Wholesale",
      cover: "/images/unt-wholesale.png",
      gitlab_url: "https://www.untwholesale.com/",
      project_url: "https://www.untwholesale.com/",
      description: "",
    },
    {
      id: 7,
      name: "EMenu",
      cover: "/images/unt-wholesale.png",
      gitlab_url: "https://www.untwholesale.com/",
      project_url: "https://www.untwholesale.com/",
      description: "",
    },
  ];

  return (
    <div className="">
      <div className="bg-primary-500 h-[400px]" id="projects">
        <div className="h-full flex flex-col py-8 items-center">
          <h2 className="text-3xl text-center font-bold text-white global-padding-b">
            A collection of projects I&apos;ve worked on
          </h2>
          <div className="text-lg text-center w-1/2">
            Below is a list of projects I&apos;ve worked on, including both personal
            initiatives and professional experiences from my previous work.
          </div>
        </div>
      </div>

      <div className="mx-auto w-full sm:w-[80%] mt-[-200px] global-padding-t bg-primary-50 p-6 rounded-t-lg">
        <div className="grid grid-cols-1 gap-6">
          {projects.map((project: ProjectTypes) => (
            <div className="grid grid-cols-2 gap-4" key={project.id}>
              <div
                className="relative"
                // onMouseOver={() => {
                //   setMouseOver(project.id);
                // }}
                // onMouseOut={() => {
                //   setMouseOver(null);
                // }}
              >
                <div
                  className={`h-[300px] font-bold !text-xl bg-white rounded-[8px] relative ${project.className}`}
                  key={project.name}
                >
                  {project.cover && (
                    <Image
                      width={400}
                      height={400}
                      src={project.cover}
                      alt="portfolio"
                      className="relative m-auto object-cover h-full inset-shadow-2xs p-1"
                    />
                  )}
                </div>
                {/* {mouseOver === project.id && (
                  <div className="z-[888] absolute top-0 bottom-0 left-0 right-0 rounded-[8px] bg-[rgba(0,0,0,0.8)] bg-opacity-7 z-20  justify-center items-center">
                    <div className="flex flex-col text-white justify-center items-center h-full">
                      <div className="text-2xl pb-3">{project.name}</div>
                      {project?.project_url && (
                        <div>
                          Project URL:{" "}
                          <a
                            href={project?.project_url}
                            className="text-primary-500"
                            target="_blank"
                          >
                            {project?.project_url}
                          </a>
                        </div>
                      )}
                      <div>Technologies: React, Next.js, TailwindCSS</div>
                    </div>
                  </div>
                )} */}
              </div>
              <div>jjjj</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
