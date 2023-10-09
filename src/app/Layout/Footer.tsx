"use client";
import { AiFillGithub } from "react-icons/ai";
import { MdOutlineContactPage } from "react-icons/md";
import { Button } from "@nextui-org/react";
import { twMerge } from "tailwind-merge";

const socials = [
  {
    name: "GitHub",
    icon: AiFillGithub,
    link: "https://github.com/vladli/country-ranking",
    color: "#000",
  },
  {
    name: "vladli.dev",
    icon: MdOutlineContactPage,
    link: "https://vladli.dev/",
    color: "#000",
  },
];

function Footer({ className }: { className?: string }) {
  return (
    <div
      className={twMerge(
        "relative bottom-0 min-h-fit w-full select-none px-4 pb-4",
        className
      )}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="flex gap-2">
          {socials.map(({ name, icon: Icon, link, color }) => (
            <a
              className="rounded-full"
              href={link}
              key={link}
              target="_blank"
            >
              <Button
                startContent={
                  <Icon
                    color={color}
                    size="1.5rem"
                  />
                }
                variant="ghost"
              >
                {name}
              </Button>
            </a>
          ))}
        </div>
        <div className="text-center">
          This project was created for the vladli.dev portfolio.
        </div>
      </div>
    </div>
  );
}

export default Footer;
