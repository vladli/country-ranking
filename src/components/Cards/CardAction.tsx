import Divider from "../Divider";

type Props = {
  children: React.ReactNode;
};

const CardAction = ({ children }: Props) => {
  return (
    <>
      <Divider />
      <div className="card-actions">{children}</div>
    </>
  );
};

export default CardAction;
