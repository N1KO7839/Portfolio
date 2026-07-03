import Project from "./ui/project"
import { PROJECTS } from "@/app/constants"

const Projects = () => {
  return (
    <div
      id="projects"
      className="mx-auto mt-145 w-xs px-6  2xs:w-2xs xs:w-xs sm:w-lg md:mt-130 md:w-full md:max-w-2xl md:py-20 lg:mt-110 lg:max-w-3xl lg:translate-x-0 xl:max-w-260 xl:translate-x-16"
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
