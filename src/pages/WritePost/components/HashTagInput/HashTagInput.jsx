import "./HashTagInput.scss";

export default function HashTagInput(props) {
  const { value, searchResultList, onAddHashTag, onChangeHandler } = props;
  return (
    <div className="hashtag-cont">
      <label className="hashtag-label" htmlFor="hashtag">
        HashTag
      </label>
      <div className="hashtag-input-cont">
        <input
          value={value}
          className="hashtag-input"
          type="text"
          id="hashtag"
          onChange={onChangeHandler}
        />
        <button onClick={onAddHashTag}>+</button>
      </div>

      <ul className="search-list">
        <li className="search-item">#뫄뫄야_밥먹자</li>
        <li className="search-item">#뫄뫄야_밥먹자</li>
        <li className="search-item">#뫄뫄야_밥먹자</li>
        <li className="search-item">#뫄뫄야_밥먹자</li>
        <li className="search-item">#뫄뫄야_밥먹자</li>
        <li className="search-item">#뫄뫄야_밥먹자</li>
        <li className="search-item">#뫄뫄야_밥먹자</li>
      </ul>
    </div>
  );
}
