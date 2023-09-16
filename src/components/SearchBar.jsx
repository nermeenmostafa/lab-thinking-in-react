import { useState } from "react";

function SearchBar(props) {
  const {search, onSearch} = props

function handleSubmit(e){
  event.preventDefaul()
}

  return (

    <div>

      <form onSubmit={handleSubmit}>

        <input

          type="text"

          placeholder="Search.."

          name="search"

          value={search}

          onChange={onSearch}

        />

        <button type="submit">Submit</button>

      </form>

    </div>

  );

}




export default SearchBar