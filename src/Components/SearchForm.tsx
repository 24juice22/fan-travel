import React, { FormEvent, ChangeEvent, SyntheticEvent } from 'react'

interface SearchFormProps {
    setKeyword: (value: string) => void;
}

const SearchForm = ({ setKeyword }: SearchFormProps) => {
  

  const keywordSubmit= (event: SyntheticEvent) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      keywordInput: { value: string };
    };
    const keywordValue = target.keywordInput.value; 
    setKeyword(keywordValue)
  }

  return (
    <form className="search-form" onSubmit={keywordSubmit}>
        <div>
            <input type="text" className="form-control" id="keywordInput" placeholder="Enter keyword here..."/>
        </div>
        <button type="submit" className="btn button-primary">Search</button>
    </form>
  )
}

export default SearchForm