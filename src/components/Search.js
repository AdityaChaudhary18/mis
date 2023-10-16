import React, { useState } from "react";
import { Input } from "reactstrap";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };
  return (
    <div>
      <span>
        <i className="fa fa-search" aria-hidden="true"></i>
      </span>
      <Input
        className="search-for-contact"
        type="search"
        value={searchValue}
        onChange={handleSearchChange}
        placeholder="Search for contact by name,number or email."
      />
    </div>
  );
};

export default Search;
