import clsx from "clsx";

import CardAction from "./CardAction";
import CardBody from "./CardBody";
import CardHeader from "./CardHeader";
import CardImage from "./CardImage";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Card = ({ children, className }: Props) => {
  return (
    <div className={clsx("card", "bg-base-100 shadow-xl", className)}>
      {children}
    </div>
  );
};

Card.Action = CardAction;
Card.Body = CardBody;
Card.Header = CardHeader;
Card.Image = CardImage;

export default Card;
