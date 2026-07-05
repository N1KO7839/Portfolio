import Project from "./ui/project"
import { PROJECTS } from "@/app/constants"

const Projects = () => {
  return (
    <div
      id="projects"
      className="mx-auto mt-40 w-xs px-6 2xs:w-2xs xs:w-xs sm:mt-60 sm:w-lg md:w-full md:max-w-2xl md:mt-100 md:py-20 lg:mt-80 lg:max-w-4xl xl:max-w-260 xl:translate-x-16"
    >
      {PROJECTS.map(
        ({ index, logo, title, description, techstack, link, created, imageClassName }) => (
          <Project
            key={title + index}
            logo={logo}
            index={index}
            title={title}
            description={description}
            tech_stack={techstack}
            link={link}
            created={created}
            imageClassName={imageClassName}
          />
        )
      )}
    </div>
  )
}

export default Projects
