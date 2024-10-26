import './styles.css'

export default function FilterEpisode({ busca, setBusca }) {
    function buildFilterEP(type, value){
        const filters = new URLSearchParams(busca);
        const filter = filters.get(type);

        if (filter === value) {
            filters.delete(type);
        } else {
            filters.set(type, value);
        }

        setBusca(filters.toString())
    }


    return(
        <>
            <div id='filter-episode'>
                <select id="filter-season" name="season" onChange={(event) => buildFilterEP('episode', event.target.value)}>
                    <option disabled>Temporadas</option>
                    <option value="S01">Temporada 1</option>
                    <option value="S02">Temporada 2</option>
                    <option value="S03">Temporada 3</option>
                    <option value="S04">Temporada 4</option>
                    <option value="S05">Temporada 5</option>
                </select>
            </div>
        </>
    )
}