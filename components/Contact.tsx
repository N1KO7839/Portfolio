import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const Contact = () => {
  return (
    <div
      id="contact"
      className="mx-auto mt-40 flex w-xs flex-col items-center gap-6 px-6 py-12 sm:mt-60 sm:w-lg sm:gap-8 sm:px-8 md:mt-100 md:w-full md:max-w-2xl md:flex-row md:items-stretch md:py-20 lg:mt-60 lg:max-w-3xl lg:px-12 xl:max-w-240"
    >
      <div className="flex flex-col gap-4 sm:gap-5 md:order-2">
        <h2 className="text-2xl font-semibold sm:text-3xl md:text-4xl lg:text-5xl">
          Hello!
        </h2>
        <p className="text-justify text-sm leading-relaxed text-black/75 sm:text-base md:text-lg lg:text-xl dark:text-white/75">
          I&apos;m{" "}
          <span className="font-semibold text-black dark:text-white">
            Nikodem Karla, a 17-year-old full-stack developer{" "}
          </span>{" "}
          from
          <span className="font-semibold text-black dark:text-white">
            {" "}
            Bielsko-Biała
          </span>
          . I specialize in clean, containerized web applications with a
          frontend focus. While balancing the{" "}
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

      <div className="relative h-56 w-full shrink-0 sm:h-64 sm:w-3/4 md:order-1 md:h-auto md:w-56 lg:w-64">
        <Image
          src="/contactPhoto.jpeg"
          fill
          sizes="(max-width: 768px) 100vw, 256px"
          alt="Image showing myself"
          className="rounded-lg object-cover"
        />
      </div>
    </div>
  )
}

export default Contact
