import "./PageMainHeader.scss";

export default function PageMainHeader(props) {
  const { children } = props;
  return <h1 className="signin-header">{children}</h1>;
}
