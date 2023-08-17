import { AiFillGithub } from "react-icons/ai";
import { ImLinkedin } from "react-icons/im";
import { twMerge } from "tailwind-merge";

const socials = [
  {
    icon: AiFillGithub,
    link: "https://github.com/vladli",
    color: "#000",
  },
  {
    icon: ImLinkedin,
    link: "https://www.linkedin.com/in/vladislavli/",
    color: "#0077b5",
  },
];

function Footer({ className }: { className?: string }) {
  return (
    <div
      className={twMerge(
        "relative bottom-0 min-h-fit w-full select-none",
        className
      )}
    >
      <div className="flex gap-4 p-4">
        {socials.map(({ icon: Icon, link, color }) => (
          <a
            className="rounded-full bg-white"
            href={link}
            key={link}
            target="_blank"
          >
            <Icon
              color={color}
              size="1.5rem"
            />
          </a>
        ))}
      </div>
    </div>
  );
}

export default Footer;
