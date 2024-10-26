import './styles.css'

export default function Filter({ busca, setBusca }) {
    function buildFilter(type, value) {
        const filters = new URLSearchParams(busca);
        const filter = filters.get(type);

        if (filter === value) {
            filters.delete(type);
        } else {
            filters.set(type, value);
        }

        setBusca("&" + filters.toString())
    }


    return (
        <>
            <div id="filter-container">
                <div id="title-filter">
                    <h1 id='title-filter'>Filtros</h1>
                </div>
                <div id="filter">
                    <input type="text" placeholder='Filtre por nome' onInput={(event) => buildFilter('name', event.target.value)} />
                    <select id='filter-character' name="status" onChange={(event) => buildFilter('status', event.target.value)}>
                        <option disabled>Status</option>
                        <option value="">Todos</option>
                        <option value="alive">Vivo</option>
                        <option value="dead">Morto</option>
                        <option value="unknown">Desconhecido</option>
                    </select>
                    <select id='filter-character' name="gender" onChange={(event) => buildFilter('gender', event.target.value)}>
                        <option disabled>Gênero</option>
                        <option value="">Todos</option>
                        <option value="female">Feminino</option>
                        <option value="male">Masculino</option>
                        <option value="genderless">Sem gênero</option>
                        <option value="unknown">Desconhecido</option>
                    </select>
                    <select id='filter-character' name="specie" onChange={(event) => buildFilter('species', event.target.value)}>
                        <option disabled>Espécie</option>
                        <option value="">Todos</option>
                        <option value="human">Humano</option>
                        <option value="alien">Alienígena</option>
                        <option value="robot">Robo</option>
                        <option value="Disease">Doença</option>
                        <option value="Humanoid">Humanóide</option>
                        <option value="Mythological Creature">Criatura mitológica</option>
                    </select>
                </div>
            </div>
        </>
    )
}