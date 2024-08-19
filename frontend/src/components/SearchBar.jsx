import styles from './SearchBar.module.css';
import { LuSearch } from "react-icons/lu";

const SearchBar = () => {
  return (
    <div className={styles.searchBar}>
      <input type="text" className={styles.searchInput} placeholder="Search..." />
      <button className={styles.searchIcon}>
      <LuSearch />
      </button>
    </div>
  );
};

export default SearchBar;