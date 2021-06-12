import { coin_search, coin_input } from "./Search.module.css";

const SearchBar = ({ ...rest }) => {
  return (
    <div className={coin_search}>
      <input
        className={coin_input}
        type="text"
        placeholder="Search"
        {...rest}
      />
    </div>
  );
};

export default SearchBar;
