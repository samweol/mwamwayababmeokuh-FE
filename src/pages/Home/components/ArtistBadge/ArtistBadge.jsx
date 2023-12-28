import "./ArtistBadge.scss";
export default function ArtistBadge(props) {
  const { artist } = props;
  return (
    <section className="badge-cont">
      <button className="badge">{artist}</button>
    </section>
  );
}
