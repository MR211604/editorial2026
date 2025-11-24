import { useSearch } from '../hooks/useSearch';

export default function SearchInput({
  id = 'search-input',
  placeholder = '¿Qué estás buscando?',
  className = '',
  onSearch,
  delay = 500,
  minChars = 3
}) {
  const { searchValue, setSearchValue, handleKeyDown } = useSearch({
    delay,
    minChars,
    onSearch
  });

  return (
    <input
      type="search"
      id={id}
      placeholder={placeholder}
      className={className}
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
      onKeyDown={handleKeyDown}
    />
  );
}
