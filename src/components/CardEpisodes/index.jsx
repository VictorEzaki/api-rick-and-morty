import './styles.css'
import capa from './../../assets/capa-episodes.jpg'

export default function CardEpisodes({ data: episode }) {
    return (
        <>
            <div id="card-episode">
                <img src={capa} alt="" />
                <h1 id='name-episode' className='card-infos'>
                    {episode.name}
                </h1>
                <h2 className='card-infos'>Data: <span>{episode.air_date}</span></h2>
                <h2 className='card-infos'>Episódio: <span>{episode.episode}</span></h2>
            </div>
        </>
    )
}