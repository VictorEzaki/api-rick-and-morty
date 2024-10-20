import { useEffect, useState } from 'react'
import './styles.css'
import CardCharacter from '../../components/CardCharacters';

export default function Characters() {
    const [conteudo, setConteudo] = useState(<>Carregando...</>);

    async function getCharacter() {
        const reqOptions = {
            method: "GET",
            redirect: "follow"
        }

        const response = await fetch(
            "https://rickandmortyapi.com/api/character",
            reqOptions
        )

        if (!response.ok) {
            throw new Error("HTTP Error!");
        }

        const apiResponse = await response.json();

        return apiResponse;
    }

    async function buildCard() {
        const consult = await getCharacter();
        return consult.results.map(character => <CardCharacter data={character} />);
    }

    useEffect(() => {
        async function getConteudo() {
            setConteudo(await buildCard())
        }

        getConteudo()
    }, [])


    return (
        <>
            <main id="main-characters">
                <div id='api-content'>
                    {conteudo}
                </div>
            </main>
        </>
    )
}