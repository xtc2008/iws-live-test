import React from "react";

export default function SearchForm() {
  return (
    <div>
      <form action="">
        <div>
          <label htmlFor="search"></label>
          <input id="search" type="search" />
        </div>
        <div>
          <button>Search</button>
        </div>
      </form>
    </div>
  );
}
