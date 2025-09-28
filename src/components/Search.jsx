import { FaSearch } from "react-icons/fa";

const Search = ({ onSearch }) => {
    /* Estilos en línea para el input y el icon */
    const inputStyle = {
        width: "100%",
        fontSize: "1.3rem",
        padding: "8px",
        border: "none",
    };
    const iconStyle = {
        fontSize: "2rem",
        color: "#888",
        marginRight: "8px"
    };
    /* Maneja el cambio en el input 
    y llama a onSearch que es la función 
    que recibe el componente como parámetro
    para pasarle el valor del input */

    const handleInputChange = (e) => {
        onSearch(e.target.value);
    };

    return (
        <div className="d-flex align-items-center border rounded-pill px-3 py-1">
            <span style={iconStyle}>
                <FaSearch />
            </span>
            <input
                type="search"
                placeholder="Buscar..."
                onChange={handleInputChange}
                style={inputStyle}
            />
        </div>
    );
};

export default Search;