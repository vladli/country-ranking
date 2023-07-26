type Props = {
  children: React.ReactNode;
};
const CardBody = ({ children }: Props) => {
  return <div className="card-body">{children}</div>;
};

export default CardBody;
