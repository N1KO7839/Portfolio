"use client"
import { Calendar, ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { experiences } from "@/app/constants"
import Image from "next/image"
import Link from "next/link"

export default function Experience() {
  return (
    <div id="experience" className="mx-auto mt-145 w-xs 2xs:w-2xs xs:w-xs sm:w-lg md:w-full md:max-w-xl md:translate-x-16 md:mt-130 lg:mt-110 lg:max-w-2xl lg:translate-x-0 xl:max-w-3xl px-6 py-12 md:py-20">
      <div className="relative ml-4">
        <div className="absolute inset-y-0 left-0 border-l-2" />

        {experiences.map(
          (
            { company, description, period, technologies, title, icon, link },
            index
          ) => (
            <div className="relative pb-12 pl-10 last:pb-0" key={index}>
              <div className="absolute left-px flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full bg-accent ring-8 ring-background">
                <Image
                  src={icon}
                  width={24}
                  height={24}
                  alt="Experience icon"
                  className="dark:invert"
                />
              </div>

              <div className="space-y-3 pt-2 sm:pt-1">
                <div className="flex items-center gap-2">
                  <p className="text-base font-medium">{company}</p>
                  <Link
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                </div>
                <div>
                  <h3 className="text-xl font-medium tracking-[-0.01em]">
                    {title}
                  </h3>
                  <div className="mt-2 flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4" />
                    <span>{period}</span>
                  </div>
                </div>
                <p className="text-sm text-pretty text-muted-foreground sm:text-base">
                  {description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <Badge
                      className="rounded-full"
                      key={tech}
                      variant="secondary"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  )
}
