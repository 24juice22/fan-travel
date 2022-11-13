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
    <form onSubmit={keywordSubmit}>
        <div>
            <input type="text" className="form-control" id="keywordInput"/>
        </div>
        <button type="submit" className="btn btn-primary">Search</button>
    </form>
  )
}

export default SearchForm