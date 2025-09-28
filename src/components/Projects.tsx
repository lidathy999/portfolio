"use client";
import Image from "next/image";

import { PROJECTS } from "@/config";

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

  return (
    <div className="slideUp">
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

      <div className="mx-auto w-full mt-[-200px] global-padding-t bg-primary-50 rounded-t-lg">
        <div className="grid grid-cols-1 gap-5">
          {PROJECTS.map((project: ProjectTypes) => (
            <div className="grid grid-cols-2 gap-6" key={project.id}>
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
                      width={300}
                      height={300}
                      src={project.cover}
                      alt="portfolio"
                      className="relative m-auto object-cover h-full inset-shadow-2xs p-1"
                    />
                  )}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold pb-2">{project.name}</h3>
                {project?.title && (
                  <div className="text-lg font-semibold pb-2">{project.title}</div>
                )}
                <div className="text-md pb-4">{project.description}</div>
                {project?.gitlab_url && (
                  <div className="text-md">
                    GitLab URL:{" "}
                    <a
                      href={project.gitlab_url}
                      className="text-primary-500"
                      target="_blank"
                    >
                      {project.gitlab_url}
                    </a>
                  </div>
                )}
                {project?.project_url && (
                  <div className="text-md">
                    Project URL:{" "}
                    <a
                      href={project.project_url}
                      className="text-primary-500"
                      target="_blank"
                    >
                      {project.project_url}
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
