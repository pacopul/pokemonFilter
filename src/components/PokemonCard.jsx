const PokemonCard = ({ name, url }) => {
    const id = url.split('/')[6].padStart(3, '0');
    return (
        <div className="card bg-light">
            <a href={`https://www.pokemon.com/es/pokedex/${name}`}>
                <img
                    className="card-img-top"
                    src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`}
                    alt={name}
                />
            </a>
            <div className="card-body">
                <h2 className="card-title text-center">{name}</h2>
            </div>
        </div>
    );
};

export default PokemonCard;