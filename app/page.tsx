"use client"
import ThemedDotGrid from "@/components/ThemedDotGrid"
import Overlay from "@/components/Overlay"
import MainText from "@/components/MainText"
import Experience from "@/components/Experience"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"
import SmoothScroll from "@/components/SmoothScroll"
import Footer from "@/components/Footer"

export default function Page() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Nikodem Karla",
    jobTitle: "Fullstack & Frontend Developer",
    url: "https://nkarla.dev",
    image: "https://nkarla.dev/contactPhoto.jpeg",
    email: "nikodemkarla@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bielsko-Biala",
      addressCountry: "PL",
    },
    sameAs: [
      "https://www.linkedin.com/in/nikodem-karla-b9b55a2a8/",
      "https://github.com/N1KO7839",
      "https://www.instagram.com/niko_karlaa/",
    ],
   knowsAbout: [
      "Next.js",
      "React",
      "TypeScript",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Docker",
      "Tailwind CSS",
      "Full-stack Development",
      "Front-end Development",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Private IT Technical School (Prywatne Technikum Informatyczne)",
    },
    hasOccupation: {
      "@type": "Occupation",
      name: "Fullstack Developer",
      occupationLocation: {
        "@type": "City",
        name: "Bielsko-Biala",
      },
    },
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Nikodem Karla - Portfolio",
    url: "https://nkarla.dev",
    description:
      "Portfolio of Nikodem Karla, a 17-year-old fullstack developer from Bielsko-Biala, Poland.",
    author: {
      "@type": "Person",
      name: "Nikodem Karla",
    },
  }

  return (
    <section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <SmoothScroll />
      <div className="fixed inset-0 z-0">
        <ThemedDotGrid
          dotSize={3}
          gap={40}
          activeColor="#5227FF"
          proximity={80}
          shockRadius={0}
          shockStrength={0}
          resistance={750}
          returnDuration={1.5}
        />
      </div>
      <div className="pointer-events-none fixed inset-0 z-10 scrollbar-thumb-mauve-800 scrollbar-track-zinc-300/75 dark:scrollbar-thumb-mauve-400 dark:scrollbar-track-zinc-900">
        <div className="pointer-events-auto h-full overflow-y-auto scroll-smooth!">
          <Overlay />
          <MainText />
          <Experience />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </div>
    </section>
  )
}
