import { Link } from "react-router-dom";

interface Props {
  to: string;
  title: string;
}

export default function TabButton(props: Props) {
  const { to, title } = props;
  return <Link to={to}>{title}</Link>;
}
