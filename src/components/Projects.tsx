"use client";
import React from "react";
import Image from "next/image";
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

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

  const [mouseOver, setMouseOver] = React.useState<number | null>(null);

  const projectDescription = (project: ProjectTypes) => {
    if (mouseOver !== project.id) return null;
    const { name, title, description, gitlab_url, project_url } = project;
    
    return (
      <div className="absolute bg-black/60 top-0 left-0 right-0 bottom-0 rounded-[8px] p-4 text-white flex flex-col backdrop-blur-xs">

        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold pb-2">{name}</h3>
          <div>
            {gitlab_url && (
              <div className="text-md">
                <a href={gitlab_url}>
                  <GitHubIcon fontSize='large' />
                </a>
              </div>
            )}
            {project_url && (
              <div className="text-md border rounded-sm">
                <a
                  href={project_url}
                  className="text-primary-500"
                  target="_blank"
                >
                  <ArrowOutwardIcon />
                </a>
              </div>
            )}
          </div>
        </div>

        {title && (
          <div className="text-lg font-semibold pb-2">{title}</div>
        )}

        {description && <div className="text-md pb-4">{description}</div>}
      </div>
    )
  };

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {PROJECTS.map((project: ProjectTypes) => (
            <div
              key={project.id}
              data-aos="fade-up"
              data-aos-delay="200"
              className="relative"
              onMouseOver={() => {
                setMouseOver(project.id);
              }}
              onMouseOut={() => {
                setMouseOver(null);
              }}
            >
              <div
                className={`h-[350px] font-bold !text-xl bg-white rounded-[8px] ${project.className}`}
                key={project.name}
              >
                {project.cover && (
                  <Image
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    src={project.cover}
                    alt="portfolio"
                    className=" m-auto object-cover h-full inset-shadow-2xs p-1"
                  />
                )}
              </div>

              {projectDescription(project)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
