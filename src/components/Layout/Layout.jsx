import "./Layout.scss";

export default function Layout(props) {
  const { children } = props;
  return <section className="layout">{children}</section>;
}
