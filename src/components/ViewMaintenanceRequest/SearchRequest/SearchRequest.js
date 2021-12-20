import React, { useState } from "react";
import { useAsyncDebounce } from "react-table";
import styles from "./SearchRequest.module.css";

export const SearchRequest = ({ filter, setFilter }) => {
  const [value, setValue] = useState(filter);
  const onChange = useAsyncDebounce(value => {
    setFilter(value || undefined);
  }, 100);

  return (
    <div className={styles.SearchRequest}>
      <input
        className={styles.inp}
        placeholder="Search"
        value={value || ""}
        onChange={e => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
      />
    </div>
  );
};
