"use client"
import { useState } from "react"
import { Calendar, ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { EXPERIENCES } from "@/app/constants"
import Image from "next/image"
import Link from "next/link"

export default function Experience() {
  const [expanded, setExpanded] = useState<Set<number>>(new Set())

  const toggle = (index: number) => {
    setExpanded((prev) => {
      const next = new Set(prev)
      if (next.has(index)) {
        next.delete(index)
      } else {
        next.add(index)
      }
      return next
    })
  }

  return (
    <div
      id="experience"
      className="mx-auto mt-40 w-xs px-6 py-10 2xs:w-2xs xs:w-xs sm:mt-60 sm:w-lg sm:py-12 md:mt-100 md:w-full md:max-w-2xl md:py-20 lg:mt-80 lg:max-w-3xl xl:max-w-260 xl:translate-x-16"
    >
      <div className="relative ml-4">
        <div className="absolute inset-y-0 left-0 border-l-2" />

        {EXPERIENCES.map(
          (
            { company, description, period, technologies, title, icon, link },
            index
          ) => (
            <div className="relative pb-12 pl-10 last:pb-0" key={index}>
              <div className="absolute left-px flex h-7 w-7 -translate-x-1/2 items-center justify-center rounded-full bg-accent ring-6 ring-background sm:h-9 sm:w-9 sm:ring-8">
                <Image
                  src={icon}
                  width={20}
                  height={20}
                  alt="Experience icon"
                  className="sm:h-6 sm:w-6 dark:invert"
                />
              </div>

              <div className="space-y-2 pt-2 sm:space-y-3 sm:pt-1">
                <div className="flex items-center gap-2">
                  <p className="text-base font-medium sm:text-lg">{company}</p>
                  <Link
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <ExternalLink className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </Link>
                </div>
                <div>
                  <h3 className="text-xl font-medium tracking-[-0.01em] sm:text-2xl">
                    {title}
                  </h3>
                  <div className="mt-1.5 flex items-center gap-1.5 text-sm sm:mt-2 sm:gap-2 sm:text-base">
                    <Calendar className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    <span>{period}</span>
                  </div>
                </div>
                <p
                  onClick={() => toggle(index)}
                  className={`cursor-pointer text-sm text-muted-foreground sm:text-base md:text-lg ${expanded.has(index) ? "text-pretty" : "line-clamp-2"}`}
                >
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
