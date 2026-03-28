import { useState } from 'react';

const SearchPanel = ({onSearchChange}) => {
  const [term, setTerm] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setTerm(value);
    onSearchChange(value);
  }

  return(
    <input 
    id="search"
    value={term} 
    className="form-control" 
    placeholder="Что-нибудь найти" 
    onChange={handleChange}
    />
  );
}

export default SearchPanel;