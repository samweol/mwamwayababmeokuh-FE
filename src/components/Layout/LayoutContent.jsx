import "./LayoutContent.scss";
export default function LayoutContent(props) {
  const { children, padding } = props;
  return (
    <section className={`layout-content ${padding && "padding"}`}>
      {children}
    </section>
  );
}
