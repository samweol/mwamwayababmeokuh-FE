import "./SearchBar.scss";
export default function SearchBar(props) {
  const { keyword, onChangeHandler } = props;
  return (
    <div className="searchbar-cont">
      <input
        className="searchbar-input"
        type="text"
        onChange={onChangeHandler}
      />
      <button
        className="searchbar-btn"
        onClick={() => {
          console.log(keyword);
        }}
      >
        🔍
      </button>
    </div>
  );
}
