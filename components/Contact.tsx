import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const Contact = () => {
  return (
    <div
      id="contact"
      className="mx-auto mt-145 flex w-xs flex-col items-center gap-8 px-6 py-16 2xs:w-2xs xs:w-xs sm:w-lg sm:px-8 md:mt-130 md:w-full md:max-w-2xl md:flex-row md:items-stretch md:py-20 lg:mt-110 lg:max-w-3xl lg:px-12 xl:max-w-280"
    >
      <div className="flex flex-col gap-5 md:order-2">
        <h2 className="text-3xl font-semibold sm:text-4xl md:text-5xl lg:text-6xl">
          Hello!
        </h2>
        <p className="text-justify text-sm leading-relaxed text-black/75 dark:text-white/75 sm:text-base md:text-lg lg:text-xl">
          I&apos;m{" "}
          <span className="font-semibold text-black dark:text-white">
            Nikodem Karla, a 17-year-old full-stack developer{" "}
          </span>{" "}
          from
          <span className="font-semibold text-black dark:text-white"> Bielsko-Biała</span>. I
          specialize in clean, containerized web applications with a frontend
          focus. While balancing the{" "}
          <span className="font-semibold text-black dark:text-white">
            Private IT Technical School
          </span>{" "}
          and auditing CS courses at the{" "}
          <span className="font-semibold text-black dark:text-white">
            Higher School of Information Technology and Management
          </span>
          , I&apos;m developing a job board aggregator featuring background
          scraping and custom notifications.
        </p>
        <Link href="/" className="mt-4 w-full">
          <Button
            className="w-full rounded-xl bg-violet-600 text-white hover:bg-violet-700 dark:bg-violet-500 dark:hover:bg-violet-600"
            size="lg"
          >
            Send me a message
          </Button>
        </Link>
      </div>

      <div className="relative w-full shrink-0 sm:w-3/4 md:order-1 md:w-56 lg:w-64 min-h-87.5 md:min-h-full">
        <Image
          src="/contactPhoto.jpeg"
          fill
          alt="Image showing myself"
          className="rounded-lg object-cover"
        />
      </div>
    </div>
  )
}

export default Contact