import './styles.css'

export default function CardCharacter({ data: character }) {
    function gender(genero) {
        switch (genero) {
        case 'Male':
            return 'Masculino'
        case 'Female':
            return 'Feminino'
        case 'unknown':
            return 'Desconhecido'
        case 'Genderless':
            return 'Sem Gênero'
        default:
            return genero
        }
    }
    
    function status(status) {
        switch (status) {
        case 'Alive':
            return 'Vivo'
        case 'Dead':
            return 'Morto'
        case 'unknown':
            return 'Desconhecido'
        default:
            return status
        }
    }
    
    function species(especie) {
        switch (especie) {
        case 'Alien':
            return 'Alienígena'
        case 'Human':
            return 'Humano'
        case 'Robot':
            return 'Robo'
        case 'Disease':
            return 'Doença'
        case 'Humanoid':
            return 'Humanoide'
        case 'unknown':
            return 'Desconhecido'
        case 'Mythological Creature':
            return 'Criatura Mitológica'
        default:
            return especie
        }
    }


    return (
        <>
            <div id="character">
                <img src={character.image} alt="" />
                <h1 id='name'>{character.name}</h1>
                <h2 className='infos'>Status: {status(character.status)}</h2>
                <h2 className='infos'>Gênero: {gender(character.gender)}</h2>
                <h2 className='infos'>Espécie: {species(character.species)}</h2>
            </div>
        </>
    )
}