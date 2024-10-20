import './styles.css'

export default function CardCharacter({ data: character }) {
    return (
        <>
            <div id="character">
                <img src={character.image} alt="" />
                <h1 id='name'>{character.name}</h1>
                <h2 className='infos'>Status: {character.status}</h2>
                <h2 className='infos'>Gênero: {character.gender}</h2>
                <h2 className='infos'>Espécie: {character.species}</h2>
            </div>
        </>
    )
}