import IconLink from "./ui/icon-link"

interface SocialsLinksProps {
  containerClassName: string
  linkClassName?: string
}

const SocialsLinks = ({
  containerClassName,
  linkClassName,
}: SocialsLinksProps) => {
  return (
    <div className={containerClassName}>
      <IconLink
        text="Linkedin"
        link="https://www.linkedin.com/in/nikodem-karla-b9b55a2a8/"
        icon="/socials_icons/linkedin.svg"
        alt="Linkedin link"
        classname={linkClassName}
      />
      <IconLink
        text="Instagram"
        link="https://www.instagram.com/niko_karlaa/"
        icon="/socials_icons/instagram.svg"
        alt="Instagram link"
        classname={linkClassName}
      />
      <IconLink
        text="Github"
        link="https://github.com/N1KO7839"
        icon="/socials_icons/github.svg"
        alt="Github link"
        classname={linkClassName}
      />
    </div>
  )
}

export default SocialsLinks
