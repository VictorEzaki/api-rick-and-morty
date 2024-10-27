import { useEffect, useState } from 'react'
import './styles.css'
import CardEpisodes from '../../components/CardEpisodes'
import FilterEpisode from '../../components/FilterEpisode'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function Episodes() {
    const [conteudo, setConteudo] = useState(<>Carregando...</>)
    const [busca, setBusca] = useState('');

    async function getEpisodes() {
        const reqOptions = {
            method: "GET",
            redirect: "follow"
        }

        const response = await fetch(
            `https://rickandmortyapi.com/api/episode?${busca}`,
            reqOptions
        )

        if (!response.ok) {
            throw new Error("HTTP Error!");
        }

        const data = await response.json();

        return { epi: data.results }
    }

    async function buildEpisode() {
        const { epi: episodes } = await getEpisodes()

        return <Swiper
            slidesPerView={1}
            navigation={true}
            width={350}
        >
            {episodes.map((episode) => (
                <SwiperSlide>
                    <CardEpisodes data={episode} />
                </SwiperSlide>
            ))}
        </Swiper>
    }

    useEffect(() => {
        async function getConteudo() {
            setConteudo(await buildEpisode())
        }

        getConteudo()
    }, [busca])


    return (
        <>
            <main id='main-episodes'>
                <FilterEpisode
                    busca={busca}
                    setBusca={setBusca}
                />
                <div id="episodes">
                    {conteudo}
                </div>
            </main>
        </>
    )
}