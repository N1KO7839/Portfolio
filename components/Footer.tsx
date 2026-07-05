"use client"

import BlurText from "./animate-ui/primitives/texts/blur"

const Footer = () => {
  return (
    <div className="my-20 flex items-center justify-center px-6">
      <BlurText
        text="© 2026 Nikodem Karla. All rights reserved."
        className="text-sm text-black/60 sm:text-base dark:text-white/60"
        animateBy="words"
        direction="bottom"
        delay={100}
        stepDuration={0.2}
      />
    </div>
  )
}

export default Footer
