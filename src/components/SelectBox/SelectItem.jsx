import "./SelectItem.scss";
export default function SelectItem(props) {
  const { artist, onSelectHandler } = props;
  return (
    <li className="select-item">
      <button
        className="select-item-btn"
        onClick={() => {
          onSelectHandler("레드벨벳");
        }}
      >
        {artist}
      </button>
    </li>
  );
}
