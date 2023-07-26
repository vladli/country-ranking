import Image from "next/image";
import { twMerge } from "tailwind-merge";

type Props = {
  image: string;
  className?: string;
};

const CardImage = ({ image, className, ...rest }: Props) => {
  return (
    <figure
      className={twMerge(
        "relative flex h-[15rem] w-full select-none rounded-t-box",
        className
      )}
    >
      <Image
        alt=""
        className="rounded-t-box w-full grow object-cover"
        src={image}
        {...rest}
        height={600}
        width={800}
      />
    </figure>
  );
};

export default CardImage;
