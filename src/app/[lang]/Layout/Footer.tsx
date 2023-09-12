import { AiFillGithub } from "react-icons/ai";
import { ImLinkedin } from "react-icons/im";
import { twMerge } from "tailwind-merge";

function Footer({ className }: { className?: string }) {
  return (
    <div
      className={twMerge(
        "relative bottom-0 min-h-fit w-full select-none",
        className
      )}
    >
      footer
    </div>
  );
}

export default Footer;
