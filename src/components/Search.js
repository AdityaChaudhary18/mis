import React, { useState } from "react";
import { Input } from "reactstrap";

const Search = ({ contactData, setContactData }) => {
  const [searchValue, setSearchValue] = useState("");
  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);

    const res = contactData.filter((el) => {
      return (
        !!el.name.match(new RegExp(event.target.value, "gi")) ||
        el.emailList.findIndex((element) =>
          element.includes(event.target.value)
        ) !== -1 ||
        el.phoneNumberList.findIndex((element) =>
          element.includes(event.target.value)
        ) !== -1
      );
    });

    setContactData(res);
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
