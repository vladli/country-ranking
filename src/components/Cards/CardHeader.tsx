type Props = {
  children: React.ReactNode;
};

const CardHeader = ({ children }: Props) => {
  return <div className="card-title">{children}</div>;
};

export default CardHeader;
