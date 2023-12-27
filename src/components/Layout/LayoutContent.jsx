import "./LayoutContent.scss";
export default function LayoutContent(props) {
  const { children } = props;
  return <section className="layout-content">{children}</section>;
}
