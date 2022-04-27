import React from "react";

export default function SearchForm({setValue, setList, getValue}) {

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const handleClick = (event) => {
    event.preventDefault();
    fetch(`https://api.github.com/search/repositories?q=${getValue}&page=1`)
    .then(response => response.json())
    .then(listData => {
      setList(listData.items)
    });
  }

  
  return (
    <div>
      <form action="" onSubmit={handleClick}>
        <div>
          <label htmlFor="search"></label>
          <input id="search" type="search" onChange={handleChange}/>
        </div>
        <div>
          <button>Search</button>
        </div>
      </form>
    </div>
  );
}
