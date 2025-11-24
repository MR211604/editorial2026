import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
/**
 * Hook personalizado para manejar la búsqueda con debounce
 * @param {number} minChars - Número mínimo de caracteres para ejecutar la búsqueda (default: 3)
 * @param {Function} onSearch - Callback opcional que se ejecuta después de navegar
 * @returns {Object} { searchValue, setSearchValue, handleKeyDown }
 */
export const useSearch = ({ minChars = 3, onSearch } = {}) => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('');

  // Búsqueda manual con Enter
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && searchValue.trim().length >= minChars) {
      navigate(`/results?search=${encodeURIComponent(searchValue.trim())}`);
      setSearchValue('');

      // Llamar callback opcional después de la búsqueda
      if (onSearch) {
        onSearch();
      }
    }
  };

  return {
    searchValue,
    setSearchValue,
    handleKeyDown
  };
};
