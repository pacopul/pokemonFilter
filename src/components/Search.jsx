import { FaSearch } from "react-icons/fa";
import './Search.css';

const Search = ({ onSearch }) => {
    /* Maneja el cambio en el input 
    y llama a onSearch que es la función 
    que recibe el componente como parámetro
    para pasarle el valor del input (query) */

    const handleInputChange = (e) => {
        onSearch(e.target.value);
    };

    return (
        <div class="d-flex align-items-center border rounded-pill px-3 py-1">
            <span className="icon">
                <FaSearch />
            </span>
            <input
                type="search"
                placeholder="Buscar..."
                onChange={handleInputChange}
                className="boxsearch"
            />
        </div>
    );
};

export default Search;